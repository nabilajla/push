let push = require("web-push");

let vapidkeys = {
  publicKey:
    "BM9y17OCP60SzYF6XvJyuLcY_ZGoaZzEzKA7zmm893IuHavD2fSeuWEusAvS6pnOGVd1IMGt0bKqaghent85I9g",
  privateKey: "gW2qwbSo7JFxFp0h2O_TBSA7RxJwKBBrslPCCcAeZw4",
};
push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cg0B4yUQmsg:APA91bG50jwWy2Cq-o80-3J209cKN_KAg26fUUztYsoNwbzcbTWyXRqLfloO8QmNihmfBv_EKo0PP6UQiBU88RGA7w8TrI9gMQjZszcknw0ViCqEG1Klzi2uUrryJz1Dz2fDb4cMUjq3",
  expirationTime: null,
  keys: {
    p256dh:
      "BD8j5j9QQMN_-10fd6YrXCTExmttLjeyF_8pR7RxD-hHibj71HYHbvpGZdTxV60eIUeY9wOyarifbihGYbHz3JM",
    auth: "8W1FxNcha0LHpO5ihiKFLA",
  },
};
push.sendNotification(sub , "test message")