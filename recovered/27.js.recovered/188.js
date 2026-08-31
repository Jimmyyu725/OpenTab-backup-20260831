var e = require("./61.js");
var o = require("./269.js");
var i = require("./95.js");
var c = require("./96.js");
var u = require("./189.js");
var a = require("./37.js");
var f = require("./191.js");
var s = Object.getOwnPropertyDescriptor;
exports.f = e ? s : function (t, n) {
  t = c(t);
  n = u(n, true);
  if (f) {
    try {
      return s(t, n);
    } catch (t) {}
  }
  if (a(t, n)) {
    return i(!o.f.call(t, n), t[n]);
  }
};