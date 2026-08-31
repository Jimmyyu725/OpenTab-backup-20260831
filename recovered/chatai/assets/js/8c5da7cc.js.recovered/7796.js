var n = require(/*webcrack:missing*/"./3829.js");
var o = require(/*webcrack:missing*/"./4282.js");
var a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var i = /^\w*$/;
export const Z = function (e, t) {
  if ((0, n.Z)(e)) {
    return false;
  }
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || !!(0, o.Z)(e) || i.test(e) || !a.test(e) || t != null && e in Object(t);
};