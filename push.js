let push = require("web-push");

let vapidkeys = {
  publicKey:
    "BM9y17OCP60SzYF6XvJyuLcY_ZGoaZzEzKA7zmm893IuHavD2fSeuWEusAvS6pnOGVd1IMGt0bKqaghent85I9g",
  privateKey: "gW2qwbSo7JFxFp0h2O_TBSA7RxJwKBBrslPCCcAeZw4",
};
push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d_6RT2Rm66M:APA91bFnnOsT9LeL--VHurknVCA6Moi4Q7LXENrff_VlK75bcJWRm3sBXhMWBsfzYsuO7Mxska5UrQS7KnVS2ZgP7guDcR5SMlIc4uFBHlzOu8hZA8zbCe1IzIwaU486YCjYWjdCT1JD",
  expirationTime: null,
  keys: {
    p256dh:
      "BLFFZlJypZ7YyqMR63LjqR69PkpNlDOZ6TBq1i0xUF2YfS0dHFuhY3W9EgzQragOe74pa4TcAtVfA-lyVZoBZC4",
    auth: "7IP3VgttxfklObj9Fk09HA",
  },
};
push.sendNotification(sub , "test message")