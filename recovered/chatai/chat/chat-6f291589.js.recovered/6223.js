var i = require("./6604.js");
var s = require("./2743.js");
var r = require("./3829.js");
var a = require("./4282.js");
var o = i.Z ? i.Z.prototype : undefined;
var u = o ? o.toString : undefined;
const g = function e(t) {
  if (typeof t == "string") {
    return t;
  }
  if ((0, r.Z)(t)) {
    return (0, s.Z)(t, e) + "";
  }
  if ((0, a.Z)(t)) {
    if (u) {
      return u.call(t);
    } else {
      return "";
    }
  }
  var n = t + "";
  if (n == "0" && 1 / t == -Infinity) {
    return "-0";
  } else {
    return n;
  }
};
export const Z = function (e) {
  if (e == null) {
    return "";
  } else {
    return g(e);
  }
};