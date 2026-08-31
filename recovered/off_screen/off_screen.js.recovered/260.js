var r = require("./16.js");
var o = require("./21.js");
var i = require("./10.js");
var c = require("./261.js");
module.exports = r ? Object.defineProperties : function (t, n) {
  i(t);
  var e;
  var r = c(n);
  for (var u = r.length, a = 0; u > a;) {
    o.f(t, e = r[a++], n[e]);
  }
  return t;
};