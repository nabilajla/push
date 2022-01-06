let push = require("web-push");

let vapidkeys = {
  publicKey:
    "BM9y17OCP60SzYF6XvJyuLcY_ZGoaZzEzKA7zmm893IuHavD2fSeuWEusAvS6pnOGVd1IMGt0bKqaghent85I9g",
  privateKey: "gW2qwbSo7JFxFp0h2O_TBSA7RxJwKBBrslPCCcAeZw4",
};
push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eq9v9Gkm41s:APA91bHZh-QThBrKGFWVV-3IsYeyA4fdfEkV9tx7Vm80diZ2t582eXQS2umCL76-FJvTQFiCgjTbP6dfbmOxu3glb9TMavqvNg_DU2oEakHwiAZfZn5eI_E4Qmo3W6wcUz7vNhmgbiiJ",
  expirationTime: null,
  keys: {
    p256dh:
      "BPAneCsp39xuG04cbNclD66HIIXJ95c85NTvH8A6X6KRsLup5Xj4Zu5YRq1-caZTX2nljZdsxcrdfA7u2yMcRo0",
    auth: "pGc9sCrKhPyvnDXEKEZgIg",
  },
};
push.sendNotification(sub , "test message")