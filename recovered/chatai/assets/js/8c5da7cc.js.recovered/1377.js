var n = require("./4772.js");
var o = require("./3986.js");
export function h(e) {
  o.z.setTimeout(function () {
    var t = n.v.onUnhandledError;
    if (!t) {
      throw e;
    }
    t(e);
  });
}