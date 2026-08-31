var r = require("./39.js");
var o = require("./48.js");
var i = require("./117.js");
function c(t) {
  return function (n, e, c) {
    var u;
    var a = r(n);
    var s = o(a.length);
    var f = i(c, s);
    if (t && e != e) {
      while (s > f) {
        if ((u = a[f++]) != u) {
          return true;
        }
      }
    } else {
      for (; s > f; f++) {
        if ((t || f in a) && a[f] === e) {
          return t || f || 0;
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