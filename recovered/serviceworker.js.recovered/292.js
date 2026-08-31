var r = require("./42.js");
var o = require("./64.js");
var i = require("./20.js");
var s = require("./293.js");
module.exports = r ? Object.defineProperties : function (t, e) {
  i(t);
  var n;
  var r = s(e);
  for (var a = r.length, c = 0; a > c;) {
    o.f(t, n = r[c++], e[n]);
  }
  return t;
};