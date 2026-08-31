const n = function (e, t) {
  return e != null && t in Object(e);
};
var o = require("./9174.js");
var a = require("./9091.js");
var i = require(/*webcrack:missing*/"./3829.js");
var c = require("./684.js");
var s = require("./1962.js");
var l = require("./6147.js");
const u = function (e, t, r) {
  for (var n = -1, u = (t = (0, o.Z)(t, e)).length, f = false; ++n < u;) {
    var d = (0, l.Z)(t[n]);
    if (!(f = e != null && r(e, d))) {
      break;
    }
    e = e[d];
  }
  if (f || ++n != u) {
    return f;
  } else {
    return !!(u = e == null ? 0 : e.length) && (0, s.Z)(u) && (0, c.Z)(d, u) && ((0, i.Z)(e) || (0, a.Z)(e));
  }
};
export const Z = function (e, t) {
  return e != null && u(e, t, n);
};