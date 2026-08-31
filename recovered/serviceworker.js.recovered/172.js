var r = require("./42.js");
var o = require("./287.js");
var i = require("./60.js");
var s = require("./61.js");
var a = require("./173.js");
var c = require("./30.js");
var u = require("./175.js");
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