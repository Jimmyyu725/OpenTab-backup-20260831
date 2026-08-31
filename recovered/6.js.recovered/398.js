var o = require(/*webcrack:missing*/"./5.js");
var s = o;
require(/*webcrack:missing*/"./7.js");
var n = require(/*webcrack:missing*/"./0.js");
var r = require(/*webcrack:missing*/"./85.js");
export async function a() {
  if (n.s || n.r) {
    if ((await new s(e => {
      if (!function () {
        try {
          Notification.requestPermission().then();
        } catch (e) {
          return false;
        }
        return true;
      }()) {
        Notification.requestPermission(e);
      } else {
        Notification.requestPermission().then(e);
      }
    })) !== "granted") {
      throw new Error();
    }
  } else {
    await r.a.request(["notifications"]);
  }
}