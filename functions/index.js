const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const multer = require("multer");

admin.initializeApp();

const imgbbApiKey = defineSecret("IMGBB_API_KEY");
const telegramBotToken = defineSecret("TELEGRAM_BOT_TOKEN");
const telegramChatId = defineSecret("TELEGRAM_CHAT_ID");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (_req, file, callback) => {
    callback(null, ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.mimetype));
  }
});

exports.uploadProfileImage = onRequest(
  { region: "us-central1", secrets: [imgbbApiKey], cors: true },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ error: "method-not-allowed" });
      return;
    }

    const authorization = req.headers.authorization || "";
    const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
    if (!token) {
      res.status(401).json({ error: "auth-required" });
      return;
    }

    let decoded;
    try {
      decoded = await admin.auth().verifyIdToken(token);
    } catch (_error) {
      res.status(401).json({ error: "invalid-token" });
      return;
    }

    upload.single("image")(req, res, async error => {
      if (error || !req.file) {
        res.status(400).json({ error: "invalid-image" });
        return;
      }

      try {
        const body = new FormData();
        body.append("image", new Blob([req.file.buffer], { type: req.file.mimetype }), "profile-image");
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${encodeURIComponent(imgbbApiKey.value())}`,
          { method: "POST", body }
        );

        async function verifyCommunityRequest(req, res) {
          const authorization = req.headers.authorization || "";
          const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
          if (!token) {
            res.status(401).json({ error: "auth-required" });
            return null;
          }
          try {
            return await admin.auth().verifyIdToken(token);
          } catch (_error) {
            res.status(401).json({ error: "invalid-token" });
            return null;
          }
        }

        async function checkRateLimit(uid, action, limit, windowMs) {
          const bucket = `${Date.now() - (Date.now() % windowMs)}`;
          const rateRef = admin.database().ref(`community/rateLimits/${uid}/${action}/${bucket}`);
          const result = await rateRef.transaction(current => (current || 0) + 1);
          if (!result.committed || result.snapshot.val() > limit) return false;
          await rateRef.get().then(() => {}).catch(() => {});
          return true;
        }

        async function getUserPublicProfile(uid) {
          const snapshot = await admin.database().ref(`users/${uid}`).get();
          if (!snapshot.exists()) return { username: "طالب CSS", photoURL: "" };
          const user = snapshot.val();
          return { username: user.username || "طالب CSS", photoURL: user.photoURL || "" };
        }

        exports.createCommunityPost = onRequest(
          { region: "us-central1", cors: true },
          async (req, res) => {
            if (req.method !== "POST") return res.status(405).json({ error: "method-not-allowed" });
            const decoded = await verifyCommunityRequest(req, res);
            if (!decoded) return;
            if (!(await checkRateLimit(decoded.uid, "posts", 6, 10 * 60 * 1000))) {
              return res.status(429).json({ error: "rate-limited" });
            }
            const content = String(req.body?.content || "").trim();
            const category = String(req.body?.category || "عام").slice(0, 40);
            if (content.length < 3 || content.length > 2000) {
              return res.status(400).json({ error: "invalid-content" });
            }
            const profile = await getUserPublicProfile(decoded.uid);
            const postRef = admin.database().ref("community/posts").push();
            await postRef.set({
              id: postRef.key,
              authorUid: decoded.uid,
              authorName: profile.username,
              authorPhotoURL: profile.photoURL,
              content,
              category,
              createdAt: admin.database.ServerValue.TIMESTAMP,
              updatedAt: admin.database.ServerValue.TIMESTAMP
            });
            return res.status(200).json({ id: postRef.key });
          }
        );

        exports.createCommunityComment = onRequest(
          { region: "us-central1", cors: true },
          async (req, res) => {
            if (req.method !== "POST") return res.status(405).json({ error: "method-not-allowed" });
            const decoded = await verifyCommunityRequest(req, res);
            if (!decoded) return;
            if (!(await checkRateLimit(decoded.uid, "comments", 20, 10 * 60 * 1000))) {
              return res.status(429).json({ error: "rate-limited" });
            }
            const postId = String(req.body?.postId || "").slice(0, 100);
            const content = String(req.body?.content || "").trim();
            if (!postId || content.length < 1 || content.length > 1000) {
              return res.status(400).json({ error: "invalid-content" });
            }
            const postSnapshot = await admin.database().ref(`community/posts/${postId}`).get();
            if (!postSnapshot.exists()) return res.status(404).json({ error: "post-not-found" });
            const profile = await getUserPublicProfile(decoded.uid);
            const commentRef = admin.database().ref(`community/comments/${postId}`).push();
            await commentRef.set({
              id: commentRef.key,
              authorUid: decoded.uid,
              authorName: profile.username,
              authorPhotoURL: profile.photoURL,
              content,
              createdAt: admin.database.ServerValue.TIMESTAMP
            });
            return res.status(200).json({ id: commentRef.key });
          }
        );

        exports.blockCommunityUser = onRequest(
          { region: "us-central1", cors: true },
          async (req, res) => {
            if (req.method !== "POST") return res.status(405).json({ error: "method-not-allowed" });
            const decoded = await verifyCommunityRequest(req, res);
            if (!decoded) return;
            const targetUid = String(req.body?.targetUid || "").slice(0, 128);
            if (!targetUid || targetUid === decoded.uid) return res.status(400).json({ error: "invalid-user" });
            await admin.database().ref(`community/blocks/${decoded.uid}/${targetUid}`).set(true);
            await admin.database().ref(`community/blocks/${decoded.uid}/${targetUid}`).get();
            return res.status(200).json({ blocked: true });
          }
        );

        exports.sendCommunityMessage = onRequest(
          { region: "us-central1", cors: true },
          async (req, res) => {
            if (req.method !== "POST") return res.status(405).json({ error: "method-not-allowed" });
            const decoded = await verifyCommunityRequest(req, res);
            if (!decoded) return;
            if (!(await checkRateLimit(decoded.uid, "messages", 12, 10 * 60 * 1000))) {
              return res.status(429).json({ error: "rate-limited" });
            }
            const recipientUid = String(req.body?.recipientUid || "").slice(0, 128);
            const content = String(req.body?.content || "").trim();
            if (!recipientUid || recipientUid === decoded.uid || content.length < 1 || content.length > 1000) {
              return res.status(400).json({ error: "invalid-message" });
            }
            const blocked = await admin.database().ref(`community/blocks/${recipientUid}/${decoded.uid}`).get();
            if (blocked.exists()) return res.status(403).json({ error: "blocked" });
            const members = [decoded.uid, recipientUid].sort();
            const conversationId = `${members[0]}_${members[1]}`;
            const conversationRef = admin.database().ref(`community/conversations/${conversationId}`);
            await conversationRef.child("members").update({
              [decoded.uid]: true,
              [recipientUid]: true
            });
            const profile = await getUserPublicProfile(decoded.uid);
            const messageRef = conversationRef.child("messages").push();
            await messageRef.set({
              id: messageRef.key,
              senderUid: decoded.uid,
              senderName: profile.username,
              content,
              createdAt: admin.database.ServerValue.TIMESTAMP
            });
            await conversationRef.child("updatedAt").set(admin.database.ServerValue.TIMESTAMP);
            return res.status(200).json({ conversationId });
          }
        );

        exports.submitCommunityReport = onRequest(
          { region: "us-central1", secrets: [telegramBotToken, telegramChatId], cors: true },
          async (req, res) => {
            if (req.method !== "POST") return res.status(405).json({ error: "method-not-allowed" });
            const decoded = await verifyCommunityRequest(req, res);
            if (!decoded) return;
            if (!(await checkRateLimit(decoded.uid, "reports", 5, 10 * 60 * 1000))) {
              return res.status(429).json({ error: "rate-limited" });
            }
            const type = ["post", "comment", "message", "user"].includes(req.body?.type) ? req.body.type : "";
            const targetId = String(req.body?.targetId || "").slice(0, 180);
            const reason = String(req.body?.reason || "").trim().slice(0, 300);
            if (!type || !targetId || reason.length < 3) return res.status(400).json({ error: "invalid-report" });
            const reporterProfile = await getUserPublicProfile(decoded.uid);
            let reportedUid = "";
            let reportedName = "غير متاح";
            let targetContent = "محتوى غير متاح.";
            let originalPath = "";
            if (type === "post") {
              originalPath = `community/posts/${targetId}`;
              const target = await admin.database().ref(originalPath).get();
              if (target.exists()) {
                targetContent = target.val().content || targetContent;
                reportedUid = target.val().authorUid || "";
              }
            } else if (type === "comment") {
              const parts = targetId.split("/");
              if (parts.length === 2) originalPath = `community/comments/${parts[0]}/${parts[1]}`;
              if (originalPath) {
                const target = await admin.database().ref(originalPath).get();
                if (target.exists()) {
                  targetContent = target.val().content || targetContent;
                  reportedUid = target.val().authorUid || "";
                }
              }
            } else if (type === "message") {
              const parts = targetId.split("/");
              if (parts.length === 2) originalPath = `community/conversations/${parts[0]}/messages/${parts[1]}`;
              if (originalPath) {
                const target = await admin.database().ref(originalPath).get();
                if (target.exists()) {
                  targetContent = target.val().content || targetContent;
                  reportedUid = target.val().senderUid || "";
                }
              }
            }
            if (reportedUid) {
              const reportedProfile = await getUserPublicProfile(reportedUid);
              reportedName = reportedProfile.username;
            }
            const reporterSnapshot = await admin.database().ref(`users/${decoded.uid}/email`).get();
            const reporterEmail = reporterSnapshot.exists() ? reporterSnapshot.val() : "";
            const reportRef = admin.database().ref("reports").push();
            const report = {
              id: reportRef.key,
              reporterUid: decoded.uid,
              reporterName: reporterProfile.username,
              reporterEmail,
              reportedUid,
              reportedName,
              type,
              targetId,
              originalPath,
              targetContent,
              reason,
              status: "Pending",
              createdAt: admin.database.ServerValue.TIMESTAMP,
              reviewedBy: "",
              reviewedAt: null,
              reviewReason: "",
              actionTaken: "",
              auditLog: []
            };
            await reportRef.set(report);
            await admin.database().ref(`community/reports/${reportRef.key}`).set(report);

            if (telegramBotToken.value() && telegramChatId.value()) {
              const text = [
                "🚨 بلاغ جديد في CSS Master",
                `النوع: ${type}`,
                `المعرف المستهدف: ${targetId}`,
                `السبب: ${reason}`,
                `رقم البلاغ: ${reportRef.key}`
              ].join("\n");
              await fetch(`https://api.telegram.org/bot${encodeURIComponent(telegramBotToken.value())}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: telegramChatId.value(), text })
              }).catch(() => {});
            }
            return res.status(200).json({ id: reportRef.key });
          }
        );

        exports.reviewCommunityReport = onRequest(
          { region: "us-central1", secrets: [telegramBotToken, telegramChatId], cors: true },
          async (req, res) => {
            if (req.method !== "POST") return res.status(405).json({ error: "method-not-allowed" });
            const decoded = await verifyCommunityRequest(req, res);
            if (!decoded) return;
            if (!decoded.admin) return res.status(403).json({ error: "admin-required" });
            const reportId = String(req.body?.reportId || "").slice(0, 180);
            const status = String(req.body?.status || "");
            const reason = String(req.body?.reason || "").trim().slice(0, 500);
            const actionTaken = String(req.body?.actionTaken || "").trim().slice(0, 500);
            if (!["Pending","Under Review","Accepted","Rejected","Resolved"].includes(status) || !reportId) {
              return res.status(400).json({ error: "invalid-review" });
            }
            if (status !== "Under Review" && reason.length < 3) {
              return res.status(400).json({ error: "invalid-reason" });
            }
            const reportRef = admin.database().ref(`reports/${reportId}`);
            const snapshot = await reportRef.get();
            if (!snapshot.exists()) return res.status(404).json({ error: "report-not-found" });
            const report = snapshot.val();
            if (["Accepted","Rejected","Resolved"].includes(report.status) && status !== "Under Review") {
              return res.status(409).json({ error: "duplicate-action" });
            }
            if (status === "Accepted" && report.originalPath && actionTaken.includes("حذف")) {
              await admin.database().ref(report.originalPath).remove().catch(() => {});
            }
            const now = admin.database.ServerValue.TIMESTAMP;
            const auditEntry = {
              adminUid: decoded.uid,
              adminName: decoded.name || decoded.email || "مدير",
              decision: status,
              reason: status === "Under Review" ? reason : reason,
              actionTaken: actionTaken || "لا إجراء إضافي",
              reviewedAt: now
            };
            const auditLog = Array.isArray(report.auditLog) ? report.auditLog : [];
            auditLog.push(auditEntry);
            const update = {
              status,
              reviewedBy: decoded.uid,
              reviewedAt: now,
              reviewReason: reason,
              actionTaken: actionTaken || "لا إجراء إضافي",
              auditLog
            };
            await reportRef.update(update);
            await admin.database().ref(`community/reports/${reportId}`).update(update);
            if (telegramBotToken.value() && telegramChatId.value() && status !== "Under Review") {
              const text = [
                "⚖️ تحديث بلاغ في CSS Master",
                `الحالة: ${status}`,
                `رقم البلاغ: ${reportId}`,
                `الإجراء: ${actionTaken || "لا إجراء إضافي"}`
              ].join("\n");
              await fetch(`https://api.telegram.org/bot${encodeURIComponent(telegramBotToken.value())}/sendMessage`,{
                method:"POST",headers:{ "Content-Type":"application/json" },
                body:JSON.stringify({chat_id:telegramChatId.value(),text})
              }).catch(()=>{});
            }
            return res.status(200).json({ reviewed: true, status });
          }
        );

        exports.moderateCommunityContent = onRequest(
          { region: "us-central1", cors: true },
          async (req, res) => {
            if (req.method !== "POST") return res.status(405).json({ error: "method-not-allowed" });
            const decoded = await verifyCommunityRequest(req, res);
            if (!decoded) return;
            const type = req.body?.type;
            const path = req.body?.path;
            if (!["post", "comment", "message"].includes(type) || typeof path !== "string") {
              return res.status(400).json({ error: "invalid-request" });
            }
            if (!path.startsWith("community/posts/") && !path.startsWith("community/comments/") && !path.startsWith("community/conversations/")) {
              return res.status(400).json({ error: "invalid-path" });
            }
            const snapshot = await admin.database().ref(path).get();
            if (!snapshot.exists()) return res.status(404).json({ error: "content-not-found" });
            const content = snapshot.val();
            const isOwner = content.authorUid === decoded.uid || content.senderUid === decoded.uid;
            if (!decoded.admin && !isOwner) return res.status(403).json({ error: "not-authorized" });
            await admin.database().ref(path).remove();
            return res.status(200).json({ deleted: true });
          }
        );
        const result = await response.json();
        if (!response.ok || !result.success || !result.data?.url) {
          res.status(502).json({ error: "upload-failed" });
          return;
        }
        res.status(200).json({
          url: result.data.url,
          uid: decoded.uid
        });
      } catch (_error) {
        res.status(502).json({ error: "upload-failed" });
      }
    });
  }
);
