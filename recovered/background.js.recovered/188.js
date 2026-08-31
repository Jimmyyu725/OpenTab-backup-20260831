var r = require("./61.js");
var o = require("./269.js");
var i = require("./95.js");
var s = require("./96.js");
var a = require("./189.js");
var u = require("./37.js");
var c = require("./191.js");
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