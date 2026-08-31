var i = require("./8108.js");
var s = require("./9512.js");
var r = require("./1966.js");
module.exports = i ? function (e, t, n) {
  return s.f(e, t, r(1, n));
} : function (e, t, n) {
  e[t] = n;
  return e;
};