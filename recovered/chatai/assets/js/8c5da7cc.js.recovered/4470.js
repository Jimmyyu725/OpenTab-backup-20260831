var n = require("./7782.js");
var o = require("./5031.js");
const a = function (e, t) {
  return (0, n.Z)(e, t, function (t, r) {
    return (0, o.Z)(e, r);
  });
};
var i = require("./2939.js");
var c = require(/*webcrack:missing*/"./6604.js");
var s = require("./9091.js");
var l = require(/*webcrack:missing*/"./3829.js");
var u = c.Z ? c.Z.isConcatSpreadable : undefined;
const f = function (e) {
  return (0, l.Z)(e) || (0, s.Z)(e) || !!u && !!e && !!e[u];
};
const d = function e(t, r, n, o, a) {
  var c = -1;
  var s = t.length;
  n ||= f;
  a ||= [];
  while (++c < s) {
    var l = t[c];
    if (r > 0 && n(l)) {
      if (r > 1) {
        e(l, r - 1, n, o, a);
      } else {
        (0, i.Z)(a, l);
      }
    } else if (!o) {
      a[a.length] = l;
    }
  }
  return a;
};
const h = function (e) {
  if (e == null ? 0 : e.length) {
    return d(e, 1);
  } else {
    return [];
  }
};
var p = require("./2707.js");
var g = require("./2253.js");
export const Z = function (e) {
  return (0, g.Z)((0, p.Z)(e, undefined, h), e + "");
}(function (e, t) {
  if (e == null) {
    return {};
  } else {
    return a(e, t);
  }
});