var r = require("./144.js");
var i = require("./103.js");
function o(t) {
  return function (e, n) {
    var o;
    var s;
    var a = String(i(e));
    var c = r(n);
    var u = a.length;
    if (c < 0 || c >= u) {
      if (t) {
        return "";
      } else {
        return undefined;
      }
    } else if ((o = a.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343) {
      if (t) {
        return a.charAt(c);
      } else {
        return o;
      }
    } else if (t) {
      return a.slice(c, c + 2);
    } else {
      return s - 56320 + (o - 55296 << 10) + 65536;
    }
  };
}
module.exports = {
  codeAt: o(false),
  charAt: o(true)
};