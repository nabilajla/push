let push = require("web-push");

let vapidkeys = {
  publicKey:
    "BM9y17OCP60SzYF6XvJyuLcY_ZGoaZzEzKA7zmm893IuHavD2fSeuWEusAvS6pnOGVd1IMGt0bKqaghent85I9g",
  privateKey: "gW2qwbSo7JFxFp0h2O_TBSA7RxJwKBBrslPCCcAeZw4",
};
push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/c0p6_IJrjCU:APA91bEhHQaNk6JCJk4HDdS4iZtpKW5IPohc4Efa5qqop3aJzSbFdExZbbaHb8bq0M9s_x1ZXIfqimV4X9ItfR6cw9IYy2myAEgqO3ObPs1r1JzLRggwSwtivzG0hDYlYBiKj-gpPfIy",
  expirationTime: null,
  keys: {
    p256dh:
      "BGamxikSNer2UMjoCRhau5PPpI2jlIkWrUNCGEXjZIGvMcLReh8G3BAS1nVGZvlJZM1mxx73eMIA3SnL9vMUA4Q",
    auth: "wM8jXifA0EIrLIDedVWcqw",
  },
};
push.sendNotification(sub , "test message")