var r = require(/*webcrack:missing*/"./16.js");
var o = require(/*webcrack:missing*/"./21.js");
var i = require(/*webcrack:missing*/"./10.js");
var a = require("./261.js");
module.exports = r ? Object.defineProperties : function (e, t) {
  i(e);
  var n;
  var r = a(t);
  for (var u = r.length, c = 0; u > c;) {
    o.f(e, n = r[c++], t[n]);
  }
  return e;
};