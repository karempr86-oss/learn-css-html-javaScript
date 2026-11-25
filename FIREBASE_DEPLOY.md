# Firebase deployment

1. Install Firebase tools and deploy the database rules:

```bash
npm install -g firebase-tools
firebase login
firebase use hack1-cb0f2
firebase deploy --only database
```

2. Set the ImgBB API key as a Firebase Function secret. The key is not stored in frontend code:

```bash
cd functions
npm install
firebase functions:secrets:set IMGBB_API_KEY
firebase deploy --only functions
```

The frontend upload endpoint is:

`https://us-central1-hack1-cb0f2.cloudfunctions.net/uploadProfileImage`

Enable Google sign-in in Firebase Authentication, and add the site origin to Authorized domains.

## Community reports and Telegram

Set the Telegram secrets; never put them in frontend files:

```bash
firebase functions:secrets:set TELEGRAM_BOT_TOKEN
firebase functions:secrets:set TELEGRAM_CHAT_ID
firebase deploy --only functions,database
```

Telegram reports contain only report type, target identifier, reason, and report ID. They do not contain email addresses or message text.

## Admin custom claim

Admin access must be assigned only by an authenticated server/console process:

```js
await admin.auth().setCustomUserClaims(uid, { admin: true });
```

Students must never be allowed to set `role`, `admin`, or `isAdmin` in Realtime Database.
