var r = require("./42.js");
var o = require("./175.js");
var i = require("./20.js");
var s = require("./173.js");
var a = Object.defineProperty;
exports.f = r ? a : function (t, e, n) {
  i(t);
  e = s(e, true);
  i(n);
  if (o) {
    try {
      return a(t, e, n);
    } catch (t) {}
  }
  if ("get" in n || "set" in n) {
    throw TypeError("Accessors not supported");
  }
  if ("value" in n) {
    t[e] = n.value;
  }
  return t;
};