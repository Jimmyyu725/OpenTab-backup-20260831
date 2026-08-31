var r = require("./16.js");
var o = require("./21.js");
var i = require("./10.js");
var s = require("./261.js");
module.exports = r ? Object.defineProperties : function (t, e) {
  i(t);
  var n;
  var r = s(e);
  for (var a = r.length, u = 0; a > u;) {
    o.f(t, n = r[u++], e[n]);
  }
  return t;
};