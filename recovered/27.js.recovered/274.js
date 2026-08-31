var e = require("./61.js");
var o = require("./97.js");
var i = require("./32.js");
var c = require("./275.js");
module.exports = e ? Object.defineProperties : function (t, n) {
  i(t);
  var r;
  var e = c(n);
  for (var u = e.length, a = 0; u > a;) {
    o.f(t, r = e[a++], n[r]);
  }
  return t;
};