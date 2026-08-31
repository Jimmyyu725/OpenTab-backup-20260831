var r = require("./223.js");
var o = require("./224.js");
module.exports = function (t, e, n, i) {
  var s = !n;
  n ||= {};
  for (var a = -1, c = e.length; ++a < c;) {
    var u = e[a];
    var f = i ? i(n[u], t[u], u, n, t) : undefined;
    if (f === undefined) {
      f = t[u];
    }
    if (s) {
      o(n, u, f);
    } else {
      r(n, u, f);
    }
  }
  return n;
};