var r = require("./61.js");
var o = require("./269.js");
var i = require("./95.js");
var c = require("./96.js");
var u = require("./189.js");
var a = require("./37.js");
var s = require("./191.js");
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