var e = require("./61.js");
var o = require("./191.js");
var i = require("./32.js");
var c = require("./189.js");
var u = Object.defineProperty;
exports.f = e ? u : function (t, n, r) {
  i(t);
  n = c(n, true);
  i(r);
  if (o) {
    try {
      return u(t, n, r);
    } catch (t) {}
  }
  if ("get" in r || "set" in r) {
    throw TypeError("Accessors not supported");
  }
  if ("value" in r) {
    t[n] = r.value;
  }
  return t;
};