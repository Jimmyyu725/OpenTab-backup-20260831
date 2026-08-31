var r = require("./31.js");
var i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
module.exports = function (t) {
  var e;
  var n;
  var o;
  var s = {};
  if (t) {
    r.forEach(t.split("\n"), function (t) {
      o = t.indexOf(":");
      e = r.trim(t.substr(0, o)).toLowerCase();
      n = r.trim(t.substr(o + 1));
      if (e) {
        if (s[e] && i.indexOf(e) >= 0) {
          return;
        }
        s[e] = e === "set-cookie" ? (s[e] ? s[e] : []).concat([n]) : s[e] ? s[e] + ", " + n : n;
      }
    });
    return s;
  } else {
    return s;
  }
};