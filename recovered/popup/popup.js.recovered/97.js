var r = require("./61.js");
var i = require("./191.js");
var o = require("./32.js");
var s = require("./189.js");
var a = Object.defineProperty;
exports.f = r ? a : function (t, e, n) {
  o(t);
  e = s(e, true);
  o(n);
  if (i) {
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