var t = require("./6146.js");
var u = require(/*webcrack:missing*/"./4275.js");
var o = require(/*webcrack:missing*/"./9857.js");
var i = Math.max;
export const Z = function (n, r, e) {
  var c = n == null ? 0 : n.length;
  if (!c) {
    return -1;
  }
  var f = e == null ? 0 : (0, o.Z)(e);
  if (f < 0) {
    f = i(c + f, 0);
  }
  return (0, t.Z)(n, (0, u.Z)(r, 3), f);
};