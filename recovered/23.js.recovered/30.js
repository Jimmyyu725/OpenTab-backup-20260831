var r = require("./61.js");
var o = require("./97.js");
var i = require("./95.js");
module.exports = r ? function (t, e, n) {
  return o.f(t, e, i(1, n));
} : function (t, e, n) {
  t[e] = n;
  return t;
};