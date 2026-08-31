var r = require("./441.js");
var i = require("./442.js");
module.exports = function (t, e, n, o) {
  var s = !n;
  n ||= {};
  for (var a = -1, c = e.length; ++a < c;) {
    var u = e[a];
    var l = o ? o(n[u], t[u], u, n, t) : undefined;
    if (l === undefined) {
      l = t[u];
    }
    if (s) {
      i(n, u, l);
    } else {
      r(n, u, l);
    }
  }
  return n;
};