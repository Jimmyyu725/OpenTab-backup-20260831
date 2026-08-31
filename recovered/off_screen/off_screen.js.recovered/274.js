var r = require("./61.js");
var o = require("./97.js");
var i = require("./32.js");
var c = require("./275.js");
module.exports = r ? Object.defineProperties : function (t, n) {
  i(t);
  var e;
  var r = c(n);
  for (var u = r.length, a = 0; u > a;) {
    o.f(t, e = r[a++], n[e]);
  }
  return t;
};