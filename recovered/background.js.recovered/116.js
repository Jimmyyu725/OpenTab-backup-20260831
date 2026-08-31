var r = require("./39.js");
var o = require("./48.js");
var i = require("./117.js");
function s(t) {
  return function (e, n, s) {
    var a;
    var u = r(e);
    var c = o(u.length);
    var f = i(s, c);
    if (t && n != n) {
      while (c > f) {
        if ((a = u[f++]) != a) {
          return true;
        }
      }
    } else {
      for (; c > f; f++) {
        if ((t || f in u) && u[f] === n) {
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