var r = require("./5.js");
var i = r;
require(/*webcrack:missing*/"./7.js");
var o = require("./0.js");
var s = require("./85.js");
export async function a() {
  if (o.s || o.r) {
    if ((await new i(t => {
      if (!function () {
        try {
          Notification.requestPermission().then();
        } catch (t) {
          return false;
        }
        return true;
      }()) {
        Notification.requestPermission(t);
      } else {
        Notification.requestPermission().then(t);
      }
    })) !== "granted") {
      throw new Error();
    }
  } else {
    await s.a.request(["notifications"]);
  }
}