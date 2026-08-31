var r = require("./16.js");
var o = require("./68.js");
var i = require("./10.js");
var c = require("./67.js");
var u = Object.defineProperty;
exports.f = r ? u : function (t, n, e) {
  i(t);
  n = c(n, true);
  i(e);
  if (o) {
    try {
      return u(t, n, e);
    } catch (t) {}
  }
  if ("get" in e || "set" in e) {
    throw TypeError("Accessors not supported");
  }
  if ("value" in e) {
    t[n] = e.value;
  }
  return t;
};