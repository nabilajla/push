let push = require("web-push");

let vapidkeys = {
  publicKey:
    "BM9y17OCP60SzYF6XvJyuLcY_ZGoaZzEzKA7zmm893IuHavD2fSeuWEusAvS6pnOGVd1IMGt0bKqaghent85I9g",
  privateKey: "gW2qwbSo7JFxFp0h2O_TBSA7RxJwKBBrslPCCcAeZw4",
};
push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/djWaPVemGUg:APA91bHqv5RzT929fbNK0xw-_jEr_6rT1Fmdh0tnuj8Ft2LRT6aCUnNU0mlX9m9yW7skE_0zyviXoGv_lhF49pYriK8jgFZf-ZXDJbF4mZjb2BzH-7eF8NkMZSXxsZw2FdfjTCt5bZce",
  expirationTime: null,
  keys: {
    p256dh:
      "BNw7UJsw62mNxIxRvDGqBSQesCbo3skUpBhXtdCZ2c0RB2TIwVgYqTbKkuPJR57CCWWJzHK34JicHxRo27StiG0",
    auth: "XHwydY1TpFou6_tTgK-Cow",
  },
};
push.sendNotification(sub , "test message")