var t = require("./6146.js");
var u = require(/*webcrack:missing*/"./4275.js");
var o = require(/*webcrack:missing*/"./9857.js");
var i = Math.max;
var c = Math.min;
export const Z = function (n, r, e) {
  var f = n == null ? 0 : n.length;
  if (!f) {
    return -1;
  }
  var a = f - 1;
  if (e !== undefined) {
    a = (0, o.Z)(e);
    a = e < 0 ? i(f + a, 0) : c(a, f - 1);
  }
  return (0, t.Z)(n, (0, u.Z)(r, 3), a, true);
};