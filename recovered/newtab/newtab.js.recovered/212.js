var r = require("./144.js");
var i = require("./103.js");
function o(t) {
  return function (e, n) {
    var o;
    var a;
    var s = String(i(e));
    var c = r(n);
    var u = s.length;
    if (c < 0 || c >= u) {
      if (t) {
        return "";
      } else {
        return undefined;
      }
    } else if ((o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343) {
      if (t) {
        return s.charAt(c);
      } else {
        return o;
      }
    } else if (t) {
      return s.slice(c, c + 2);
    } else {
      return a - 56320 + (o - 55296 << 10) + 65536;
    }
  };
}
module.exports = {
  codeAt: o(false),
  charAt: o(true)
};