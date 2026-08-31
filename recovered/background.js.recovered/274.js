var r = require("./61.js");
var o = require("./97.js");
var i = require("./32.js");
var s = require("./275.js");
module.exports = r ? Object.defineProperties : function (t, e) {
  i(t);
  var n;
  var r = s(e);
  for (var a = r.length, u = 0; a > u;) {
    o.f(t, n = r[u++], e[n]);
  }
  return t;
};