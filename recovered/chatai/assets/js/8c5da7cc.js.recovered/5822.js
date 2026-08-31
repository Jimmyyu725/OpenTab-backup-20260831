var n = require("./4547.js");
const o = require(/*webcrack:missing*/"./6247.js").Z["__core-js_shared__"];
var a;
var i = (a = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + a : "";
const c = function (e) {
  return !!i && i in e;
};
var s = require(/*webcrack:missing*/"./9860.js");
var l = require("./1509.js");
var u = /^\[object .+?Constructor\]$/;
var f = Function.prototype;
var d = Object.prototype;
var h = f.toString;
var p = d.hasOwnProperty;
var g = RegExp("^" + h.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
const y = function (e) {
  return !!(0, s.Z)(e) && !c(e) && ((0, n.Z)(e) ? g : u).test((0, l.Z)(e));
};
const v = function (e, t) {
  if (e == null) {
    return undefined;
  } else {
    return e[t];
  }
};
export const Z = function (e, t) {
  var r = v(e, t);
  if (y(r)) {
    return r;
  } else {
    return undefined;
  }
};