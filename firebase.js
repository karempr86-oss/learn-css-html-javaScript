import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  get,
  set,
  update,
  serverTimestamp,
  onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDy6eUDmAAdSN9aYq6kbcBPVvIRqhPmz50",
  authDomain: "hack1-cb0f2.firebaseapp.com",
  databaseURL: "https://hack1-cb0f2-default-rtdb.firebaseio.com",
  projectId: "hack1-cb0f2",
  storageBucket: "hack1-cb0f2.firebasestorage.app",
  messagingSenderId: "926645598259",
  appId: "1:926645598259:web:c7f673cee6b96b236f0b46",
  measurementId: "G-1J66V2EPET"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

isSupported().then(supported => {
  if (supported) getAnalytics(app);
}).catch(() => {});

function arabicAuthError(error) {
  const code = error?.code || "";
  const messages = {
    "auth/email-already-in-use": "البريد الإلكتروني مستخدم بالفعل.",
    "auth/invalid-email": "البريد الإلكتروني غير صالح.",
    "auth/weak-password": "كلمة المرور ضعيفة. استخدم 6 أحرف على الأقل.",
    "auth/invalid-credential": "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    "auth/user-not-found": "لا يوجد حساب مسجل بهذا البريد.",
    "auth/wrong-password": "كلمة المرور غير صحيحة.",
    "auth/too-many-requests": "محاولات كثيرة جداً. حاول مرة أخرى بعد قليل.",
    "auth/popup-blocked": "تم حظر نافذة Google المنبثقة. اسمح بالنوافذ المنبثقة وحاول مجدداً.",
    "auth/popup-closed-by-user": "تم إغلاق نافذة Google قبل اكتمال تسجيل الدخول.",
    "auth/cancelled-popup-request": "تم إلغاء تسجيل الدخول بواسطة Google.",
    "auth/network-request-failed": "تعذر الاتصال بالخدمة. تحقق من اتصال الإنترنت.",
    "permission-denied": "يجب نشر قواعد قاعدة البيانات وتسجيل الدخول للمستخدم المطلوب.",
    "permission_denied": "يجب نشر قواعد قاعدة البيانات وتسجيل الدخول للمستخدم المطلوب."
  };
  return messages[code] || "تعذر إكمال العملية. حاول مرة أخرى.";
}

async function register(username, email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await updateProfile(user, { displayName: username });
  const profile = {
    uid: user.uid,
    username,
    email,
    photoURL: "",
    bio: "",
    provider: "email",
    createdAt: serverTimestamp(),
    level: 1,
    xp: 0,
    completedLessons: 0,
    completedProjects: 0,
    completedChallenges: 0,
    progress: 0,
    completedLessonIds: [],
    completedProjectIds: [],
    completedChallengeIds: [],
    lastLanguage: "css",
    progressByLanguage: {
      css: { level: 1, xp: 0, completedLessons: [], completedProjects: [], completedChallenges: [], progress: 0 },
      javascript: { level: 1, xp: 0, completedLessons: [], completedProjects: [], completedChallenges: [], progress: 0 },
      html: { level: 1, xp: 0, completedLessons: [], completedProjects: [], completedChallenges: [], progress: 0 }
    }
  };
  await set(ref(database, `users/${user.uid}`), profile);
  return user;
}

async function login(email, password, remember = true) {
  await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

async function loginWithGoogle() {
  await setPersistence(auth, browserLocalPersistence);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    return (await signInWithPopup(auth, provider)).user;
  } catch (error) {
    if (error?.code === "auth/popup-blocked" ||
        error?.code === "auth/popup-closed-by-user" ||
        error?.code === "auth/cancelled-popup-request") {
      throw error;
    }
    throw error;
  }
}

async function logout() {
  await signOut(auth);
}

async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}

async function loadProfile(uid) {
  const snapshot = await get(ref(database, `users/${uid}`));
  return snapshot.exists() ? snapshot.val() : null;
}

async function saveProfile(uid, profile) {
  await update(ref(database, `users/${uid}`), profile);
}

async function updateUsername(uid, username) {
  if (auth.currentUser) await updateProfile(auth.currentUser, { displayName: username });
  await update(ref(database, `users/${uid}`), { username });
}

async function ensureGoogleProfile(user) {
  const userRef = ref(database, `users/${user.uid}`);
  const snapshot = await get(userRef);
  if (snapshot.exists()) {
    await update(userRef, {
      username: snapshot.val().username || user.displayName || "طالب CSS",
      email: user.email,
      provider: snapshot.val().provider || "google"
    });
    return snapshot.val();
  }
  const profile = {
    uid: user.uid,
    username: user.displayName || "طالب CSS",
    email: user.email,
    photoURL: user.photoURL || "",
    bio: "",
    provider: "google",
    createdAt: serverTimestamp(),
    level: 1,
    xp: 0,
    completedLessons: 0,
    completedProjects: 0,
    completedChallenges: 0,
    progress: 0,
    completedLessonIds: [],
    completedProjectIds: [],
    completedChallengeIds: [],
    lastLanguage: "css",
    progressByLanguage: {
      css: { level: 1, xp: 0, completedLessons: [], completedProjects: [], completedChallenges: [], progress: 0 },
      javascript: { level: 1, xp: 0, completedLessons: [], completedProjects: [], completedChallenges: [], progress: 0 },
      html: { level: 1, xp: 0, completedLessons: [], completedProjects: [], completedChallenges: [], progress: 0 }
    }
  };
  await set(userRef, profile);
  return profile;
}

function observeProfile(uid, callback) {
  return onValue(ref(database, `users/${uid}`), snapshot => {
    callback(snapshot.exists() ? snapshot.val() : null);
  });
}

window.CSSMasterFirebase = {
  auth,
  database,
  register,
  login,
  loginWithGoogle,
  logout,
  resetPassword,
  loadProfile,
  saveProfile,
  updateUsername,
  ensureGoogleProfile,
  observeProfile,
  dbRef: path => ref(database, path),
  dbGet: async path => {
    const snapshot = await get(ref(database, path));
    return snapshot.exists() ? snapshot.val() : null;
  },
  dbUpdate: (path, value) => update(ref(database, path), value),
  dbSet: (path, value) => set(ref(database, path), value),
  observePath: (path, callback) => onValue(ref(database, path), snapshot => callback(snapshot.exists() ? snapshot.val() : null)),
  arabicAuthError,
  getCurrentUser: () => auth.currentUser,
  uploadProfileImage: async file => {
    if (!auth.currentUser) throw new Error("auth-required");
    const endpoint = window.CSS_MASTER_UPLOAD_ENDPOINT;
    if (!endpoint) throw new Error("upload-endpoint-missing");
    if (!["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.type)) {
      throw new Error("invalid-image");
    }
    if (file.size > 5 * 1024 * 1024) throw new Error("image-too-large");
    const token = await auth.currentUser.getIdToken();
    const form = new FormData();
    form.append("image", file);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: form
    });
    if (!response.ok) throw new Error("upload-failed");
    const result = await response.json();
    if (!result.url) throw new Error("upload-failed");
    await update(ref(database, `users/${auth.currentUser.uid}`), { photoURL: result.url });
    return result.url;
  }
};

onAuthStateChanged(auth, async user => {
  if (user) {
    const providerIds = (user.providerData || []).map(provider => provider.providerId);
    if (providerIds.includes("google.com")) {
      await ensureGoogleProfile(user).catch(() => {});
    }
  }
  window.cssMasterUser = user;
  window.dispatchEvent(new CustomEvent("cssmaster-auth-changed", { detail: { user } }));
});
