var r = require("./31.js");
var i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
module.exports = function (t) {
  var e;
  var n;
  var o;
  var a = {};
  if (t) {
    r.forEach(t.split("\n"), function (t) {
      o = t.indexOf(":");
      e = r.trim(t.substr(0, o)).toLowerCase();
      n = r.trim(t.substr(o + 1));
      if (e) {
        if (a[e] && i.indexOf(e) >= 0) {
          return;
        }
        a[e] = e === "set-cookie" ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ", " + n : n;
      }
    });
    return a;
  } else {
    return a;
  }
};