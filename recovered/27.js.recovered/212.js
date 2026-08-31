var e = require("./144.js");
var o = require("./103.js");
function i(t) {
  return function (n, r) {
    var i;
    var c;
    var u = String(o(n));
    var a = e(r);
    var f = u.length;
    if (a < 0 || a >= f) {
      if (t) {
        return "";
      } else {
        return undefined;
      }
    } else if ((i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === f || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343) {
      if (t) {
        return u.charAt(a);
      } else {
        return i;
      }
    } else if (t) {
      return u.slice(a, a + 2);
    } else {
      return c - 56320 + (i - 55296 << 10) + 65536;
    }
  };
}
module.exports = {
  codeAt: i(false),
  charAt: i(true)
};