var r = require("./16.js");
var o = require("./110.js");
var i = require("./66.js");
var c = require("./39.js");
var u = require("./67.js");
var a = require("./11.js");
var f = require("./68.js");
var s = Object.getOwnPropertyDescriptor;
exports.f = r ? s : function (t, n) {
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