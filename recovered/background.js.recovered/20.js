var r = require("./16.js");
var o = require("./21.js");
var i = require("./66.js");
module.exports = r ? function (t, e, n) {
  return o.f(t, e, i(1, n));
} : function (t, e, n) {
  t[e] = n;
  return t;
};