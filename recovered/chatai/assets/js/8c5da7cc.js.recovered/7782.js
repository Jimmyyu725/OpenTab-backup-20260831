var n = require("./3682.js");
var o = require("./1074.js");
var a = require("./9174.js");
var i = require("./684.js");
var c = require(/*webcrack:missing*/"./9860.js");
var s = require("./6147.js");
const l = function (e, t, r, n) {
  if (!(0, c.Z)(e)) {
    return e;
  }
  for (var l = -1, u = (t = (0, a.Z)(t, e)).length, f = u - 1, d = e; d != null && ++l < u;) {
    var h = (0, s.Z)(t[l]);
    var p = r;
    if (h === "__proto__" || h === "constructor" || h === "prototype") {
      return e;
    }
    if (l != f) {
      var g = d[h];
      if ((p = n ? n(g, h, d) : undefined) === undefined) {
        p = (0, c.Z)(g) ? g : (0, i.Z)(t[l + 1]) ? [] : {};
      }
    }
    (0, o.Z)(d, h, p);
    d = d[h];
  }
  return e;
};
export const Z = function (e, t, r) {
  for (var o = -1, i = t.length, c = {}; ++o < i;) {
    var s = t[o];
    var u = (0, n.Z)(e, s);
    if (r(u, s)) {
      l(c, (0, a.Z)(s, e), u);
    }
  }
  return c;
};