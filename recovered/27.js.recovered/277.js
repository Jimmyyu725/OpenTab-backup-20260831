var e = require("./96.js");
var o = require("./158.js");
var i = require("./278.js");
function c(t) {
  return function (n, r, c) {
    var u;
    var a = e(n);
    var f = o(a.length);
    var s = i(c, f);
    if (t && r != r) {
      while (f > s) {
        if ((u = a[s++]) != u) {
          return true;
        }
      }
    } else {
      for (; f > s; s++) {
        if ((t || s in a) && a[s] === r) {
          return t || s || 0;
        }
      }
    }
    return !t && -1;
  };
}
module.exports = {
  includes: c(true),
  indexOf: c(false)
};