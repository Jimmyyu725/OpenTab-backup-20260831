var t = require(/*webcrack:missing*/"./4275.js");
var u = require(/*webcrack:missing*/"./385.js");
var o = require(/*webcrack:missing*/"./4348.js");
export const Z = function (n) {
  return function (r, e, i) {
    var c = Object(r);
    if (!(0, u.Z)(r)) {
      var f = (0, t.Z)(e, 3);
      r = (0, o.Z)(r);
      e = function (n) {
        return f(c[n], n, c);
      };
    }
    var a = n(r, e, i);
    if (a > -1) {
      return c[f ? r[a] : a];
    } else {
      return undefined;
    }
  };
}(require("./967.js").Z);