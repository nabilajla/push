let push = require("web-push");

let vapidkeys = {
  publicKey:
    "BM9y17OCP60SzYF6XvJyuLcY_ZGoaZzEzKA7zmm893IuHavD2fSeuWEusAvS6pnOGVd1IMGt0bKqaghent85I9g",
  privateKey: "gW2qwbSo7JFxFp0h2O_TBSA7RxJwKBBrslPCCcAeZw4",
};
push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cyw9b8olLXU:APA91bE6WxUlxAVl-9wwiRBSjIQgF5zqI0SJ0SPqO4KIWFMhfzIOmMxFCAXSW8PLxrbAvOnqumfQz6dvyqyE7e-5JSAVgHZfzoBPu2odkWX1yyDkP816ymPkZZ4qGUgLpfVkRMPQwJVq",
  expirationTime: null,
  keys: {
    p256dh:
      "BCRXDr1gn-9rJtpqUi5WrsLJTUAWNVXEgUgCszQIcQTR8noRvxT6CBAzNSuRnL3C7h_MSt5MnWxY-OheMMPpxxI",
    auth: "vKaPWo7uP0VIuHriBVWczw",
  },
};
push.sendNotification(sub , "test message")