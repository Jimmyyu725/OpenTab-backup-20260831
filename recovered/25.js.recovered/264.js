var r = require(/*webcrack:missing*/"./47.js");
var o = require(/*webcrack:missing*/"./46.js");
function i(t) {
  return function (e, n) {
    var i;
    var s;
    var a = String(o(e));
    var c = r(n);
    var u = a.length;
    if (c < 0 || c >= u) {
      if (t) {
        return "";
      } else {
        return undefined;
      }
    } else if ((i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343) {
      if (t) {
        return a.charAt(c);
      } else {
        return i;
      }
    } else if (t) {
      return a.slice(c, c + 2);
    } else {
      return s - 56320 + (i - 55296 << 10) + 65536;
    }
  };
}
module.exports = {
  codeAt: i(false),
  charAt: i(true)
};