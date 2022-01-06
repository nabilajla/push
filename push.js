let push = require("web-push");

let vapidkeys = {
  publicKey:
    "BM9y17OCP60SzYF6XvJyuLcY_ZGoaZzEzKA7zmm893IuHavD2fSeuWEusAvS6pnOGVd1IMGt0bKqaghent85I9g",
  privateKey: "gW2qwbSo7JFxFp0h2O_TBSA7RxJwKBBrslPCCcAeZw4",
};
push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dO2LELVypAA:APA91bFBrQrBiDWzxiWgo3zG_HcpSSgL6xPDysgq1agbhmxbzAPoljnZclKdauxACtp5wXlBSBxaE3_S5172qa9d7f-q9gfROQx5TTPQw2IQjT_SKhiM8x8xdvKLVNBv2nCu0Gv0jCOB",
  expirationTime: null,
  keys: {
    p256dh:
      "BDsTtRdZCJ9s-Xzi2s7dGjjnbF86GCvCR61udCEcZKCn4Xb6eKSYBYI3jwDU4GDNLd6HfITaN0XPmBJyGXWVlvk",
    auth: "wKtqTktjEQXUt2fCVGUdcw",
  },
};
push.sendNotification(sub , "test message")