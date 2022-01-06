let push = require("web-push");

let vapidkeys = {
  publicKey:
    "BM9y17OCP60SzYF6XvJyuLcY_ZGoaZzEzKA7zmm893IuHavD2fSeuWEusAvS6pnOGVd1IMGt0bKqaghent85I9g",
  privateKey: "gW2qwbSo7JFxFp0h2O_TBSA7RxJwKBBrslPCCcAeZw4",
};
push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/epOllXW-cEI:APA91bHHRsgdUbLDgZxXwgmPnVBhPMjPwSKGJ2YOYhMhWEDfNRPOauoo0ZkGQ4w8_tpV5uaEcv42GznekENyYFgsbRgBpRB-AEaTgYdjjQnURpSI2e5hJu4Be4LFpFGz6XUEyklcxIF6",
  expirationTime: null,
  keys: {
    p256dh:
      "BEFcFTCvHx8C8yxx6UHOR6m-_8gxDXVN3MYt3YzEBH8KrHzRYU1HOr7TiL-eAYLEAC616SQOtwbqCHj-hXbW_5U",
    auth: "niDwYxPffL8XhzTf8BwqBw",
  },
};
push.sendNotification(sub , "test message")