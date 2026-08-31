var r = require(/*webcrack:missing*/"./16.js");
var i = require(/*webcrack:missing*/"./21.js");
var o = require(/*webcrack:missing*/"./10.js");
var s = require("./261.js");
module.exports = r ? Object.defineProperties : function (t, e) {
  o(t);
  var n;
  var r = s(e);
  for (var a = r.length, c = 0; a > c;) {
    i.f(t, n = r[c++], e[n]);
  }
  return t;
};