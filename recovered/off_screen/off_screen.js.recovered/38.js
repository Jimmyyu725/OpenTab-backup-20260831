var r = require("./16.js");
var o = require("./110.js");
var i = require("./66.js");
var c = require("./39.js");
var u = require("./67.js");
var a = require("./11.js");
var s = require("./68.js");
var f = Object.getOwnPropertyDescriptor;
exports.f = r ? f : function (t, n) {
  t = c(t);
  n = u(n, true);
  if (s) {
    try {
      return f(t, n);
    } catch (t) {}
  }
  if (a(t, n)) {
    return i(!o.f.call(t, n), t[n]);
  }
};