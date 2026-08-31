var r = require("./16.js");
var o = require("./21.js");
var i = require("./66.js");
module.exports = r ? function (t, n, e) {
  return o.f(t, n, i(1, e));
} : function (t, n, e) {
  t[n] = e;
  return t;
};