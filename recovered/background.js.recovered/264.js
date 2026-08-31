var r = require("./47.js");
var o = require("./46.js");
function i(t) {
  return function (e, n) {
    var i;
    var s;
    var a = String(o(e));
    var u = r(n);
    var c = a.length;
    if (u < 0 || u >= c) {
      if (t) {
        return "";
      } else {
        return undefined;
      }
    } else if ((i = a.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343) {
      if (t) {
        return a.charAt(u);
      } else {
        return i;
      }
    } else if (t) {
      return a.slice(u, u + 2);
    } else {
      return s - 56320 + (i - 55296 << 10) + 65536;
    }
  };
}
module.exports = {
  codeAt: i(false),
  charAt: i(true)
};