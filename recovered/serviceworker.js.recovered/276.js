var r = require("./32.js");
var o = require("./38.js");
var i = require("./15.js");
var s = require("./277.js");
module.exports = r ? Object.defineProperties : function (t, e) {
  i(t);
  var n;
  var r = s(e);
  for (var a = r.length, c = 0; a > c;) {
    o.f(t, n = r[c++], e[n]);
  }
  return t;
};