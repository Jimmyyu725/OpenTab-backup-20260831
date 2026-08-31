var r = require("./61.js");
var o = require("./191.js");
var i = require("./32.js");
var c = require("./189.js");
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