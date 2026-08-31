var e = require("./61.js");
var o = require("./97.js");
var i = require("./95.js");
module.exports = e ? function (t, n, r) {
  return o.f(t, n, i(1, r));
} : function (t, n, r) {
  t[n] = r;
  return t;
};