var r = require("./42.js");
var o = require("./64.js");
var i = require("./60.js");
module.exports = r ? function (t, e, n) {
  return o.f(t, e, i(1, n));
} : function (t, e, n) {
  t[e] = n;
  return t;
};