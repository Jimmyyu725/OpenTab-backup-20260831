var r = require("./90.js");
var o = require("./57.js");
var i = require("./254.js");
function s(t) {
  return function (e, n, s) {
    var a;
    var c = r(e);
    var u = o(c.length);
    var f = i(s, u);
    if (t && n != n) {
      while (u > f) {
        if ((a = c[f++]) != a) {
          return true;
        }
      }
    } else {
      for (; u > f; f++) {
        if ((t || f in c) && c[f] === n) {
          return t || f || 0;
        }
      }
    }
    return !t && -1;
  };
}
module.exports = {
  includes: s(true),
  indexOf: s(false)
};