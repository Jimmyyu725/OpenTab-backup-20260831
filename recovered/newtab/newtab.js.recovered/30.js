var r = require("./61.js");
var i = require("./97.js");
var o = require("./95.js");
module.exports = r ? function (t, e, n) {
  return i.f(t, e, o(1, n));
} : function (t, e, n) {
  t[e] = n;
  return t;
};