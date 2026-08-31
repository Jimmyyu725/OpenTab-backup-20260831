var r = require("./16.js");
var i = require("./21.js");
var o = require("./10.js");
var a = require("./261.js");
module.exports = r ? Object.defineProperties : function (t, e) {
  o(t);
  var n;
  var r = a(e);
  for (var s = r.length, c = 0; s > c;) {
    i.f(t, n = r[c++], e[n]);
  }
  return t;
};