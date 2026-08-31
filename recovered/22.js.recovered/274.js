var r = require("./61.js");
var i = require("./97.js");
var o = require("./32.js");
var s = require("./275.js");
module.exports = r ? Object.defineProperties : function (t, e) {
  o(t);
  var n;
  var r = s(e);
  for (var a = r.length, c = 0; a > c;) {
    i.f(t, n = r[c++], e[n]);
  }
  return t;
};