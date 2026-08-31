var r = require("./39.js");
var i = require("./48.js");
var o = require("./117.js");
function s(t) {
  return function (e, n, s) {
    var a;
    var c = r(e);
    var u = i(c.length);
    var l = o(s, u);
    if (t && n != n) {
      while (u > l) {
        if ((a = c[l++]) != a) {
          return true;
        }
      }
    } else {
      for (; u > l; l++) {
        if ((t || l in c) && c[l] === n) {
          return t || l || 0;
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