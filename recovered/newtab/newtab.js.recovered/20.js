var r = require("./16.js");
var i = require("./21.js");
var o = require("./66.js");
module.exports = r ? function (t, e, n) {
  return i.f(t, e, o(1, n));
} : function (t, e, n) {
  t[e] = n;
  return t;
};