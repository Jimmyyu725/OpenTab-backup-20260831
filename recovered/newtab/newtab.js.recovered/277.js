var r = require("./96.js");
var i = require("./158.js");
var o = require("./278.js");
function a(t) {
  return function (e, n, a) {
    var s;
    var c = r(e);
    var u = i(c.length);
    var l = o(a, u);
    if (t && n != n) {
      while (u > l) {
        if ((s = c[l++]) != s) {
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
  includes: a(true),
  indexOf: a(false)
};