var r = require(/*webcrack:missing*/"./47.js");
var o = require(/*webcrack:missing*/"./46.js");
function i(e) {
  return function (t, n) {
    var i;
    var a;
    var u = String(o(t));
    var c = r(n);
    var s = u.length;
    if (c < 0 || c >= s) {
      if (e) {
        return "";
      } else {
        return undefined;
      }
    } else if ((i = u.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === s || (a = u.charCodeAt(c + 1)) < 56320 || a > 57343) {
      if (e) {
        return u.charAt(c);
      } else {
        return i;
      }
    } else if (e) {
      return u.slice(c, c + 2);
    } else {
      return a - 56320 + (i - 55296 << 10) + 65536;
    }
  };
}
module.exports = {
  codeAt: i(false),
  charAt: i(true)
};