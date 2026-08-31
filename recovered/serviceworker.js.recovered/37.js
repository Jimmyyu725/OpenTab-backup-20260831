var r = require("./32.js");
var o = require("./38.js");
var i = require("./154.js");
module.exports = r ? function (t, e, n) {
  return o.f(t, e, i(1, n));
} : function (t, e, n) {
  t[e] = n;
  return t;
};