var r = require("./39.js");
var o = require("./48.js");
var i = require("./117.js");
function c(t) {
  return function (n, e, c) {
    var u;
    var a = r(n);
    var f = o(a.length);
    var s = i(c, f);
    if (t && e != e) {
      while (f > s) {
        if ((u = a[s++]) != u) {
          return true;
        }
      }
    } else {
      for (; f > s; s++) {
        if ((t || s in a) && a[s] === e) {
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