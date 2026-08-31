var r = require("./32.js");
var o = require("./246.js");
var i = require("./154.js");
var s = require("./90.js");
var a = require("./155.js");
var c = require("./23.js");
var u = require("./156.js");
var f = Object.getOwnPropertyDescriptor;
exports.f = r ? f : function (t, e) {
  t = s(t);
  e = a(e, true);
  if (u) {
    try {
      return f(t, e);
    } catch (t) {}
  }
  if (c(t, e)) {
    return i(!o.f.call(t, e), t[e]);
  }
};