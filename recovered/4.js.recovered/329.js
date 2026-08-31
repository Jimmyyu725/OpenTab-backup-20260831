var r = require("./31.js");
var o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
module.exports = function (e) {
  var t;
  var n;
  var i;
  var a = {};
  if (e) {
    r.forEach(e.split("\n"), function (e) {
      i = e.indexOf(":");
      t = r.trim(e.substr(0, i)).toLowerCase();
      n = r.trim(e.substr(i + 1));
      if (t) {
        if (a[t] && o.indexOf(t) >= 0) {
          return;
        }
        a[t] = t === "set-cookie" ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n;
      }
    });
    return a;
  } else {
    return a;
  }
};