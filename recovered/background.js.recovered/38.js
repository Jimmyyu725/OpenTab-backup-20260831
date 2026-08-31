var r = require("./16.js");
var o = require("./110.js");
var i = require("./66.js");
var s = require("./39.js");
var a = require("./67.js");
var u = require("./11.js");
var c = require("./68.js");
var f = Object.getOwnPropertyDescriptor;
exports.f = r ? f : function (t, e) {
  t = s(t);
  e = a(e, true);
  if (c) {
    try {
      return f(t, e);
    } catch (t) {}
  }
  if (u(t, e)) {
    return i(!o.f.call(t, e), t[e]);
  }
};