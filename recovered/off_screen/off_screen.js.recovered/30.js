var r = require("./61.js");
var o = require("./97.js");
var i = require("./95.js");
module.exports = r ? function (t, n, e) {
  return o.f(t, n, i(1, e));
} : function (t, n, e) {
  t[n] = e;
  return t;
};