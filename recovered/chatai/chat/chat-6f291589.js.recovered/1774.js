var i = /\s/;
const s = function (e) {
  for (var t = e.length; t-- && i.test(e.charAt(t)););
  return t;
};
var r = /^\s+/;
const a = function (e) {
  if (e) {
    return e.slice(0, s(e) + 1).replace(r, "");
  } else {
    return e;
  }
};
var o = require("./9860.js");
var u = require("./4282.js");
var g = /^[-+]0x[0-9a-f]+$/i;
var h = /^0b[01]+$/i;
var c = /^0o[0-7]+$/i;
var l = parseInt;
export const Z = function (e) {
  if (typeof e == "number") {
    return e;
  }
  if ((0, u.Z)(e)) {
    return NaN;
  }
  if ((0, o.Z)(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = (0, o.Z)(t) ? t + "" : t;
  }
  if (typeof e != "string") {
    if (e === 0) {
      return e;
    } else {
      return +e;
    }
  }
  e = a(e);
  var n = h.test(e);
  if (n || c.test(e)) {
    return l(e.slice(2), n ? 2 : 8);
  } else if (g.test(e)) {
    return NaN;
  } else {
    return +e;
  }
};