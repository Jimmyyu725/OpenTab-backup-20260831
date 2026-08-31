var n = require("./441.js");
var o = require("./442.js");
module.exports = function (t, e, r, c) {
  var i = !r;
  r ||= {};
  for (var a = -1, u = e.length; ++a < u;) {
    var s = e[a];
    var f = c ? c(r[s], t[s], s, r, t) : undefined;
    if (f === undefined) {
      f = t[s];
    }
    if (i) {
      o(r, s, f);
    } else {
      n(r, s, f);
    }
  }
  return r;
};