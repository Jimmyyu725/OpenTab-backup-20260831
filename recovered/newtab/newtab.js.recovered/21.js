var r = require("./16.js");
var i = require("./68.js");
var o = require("./10.js");
var a = require("./67.js");
var s = Object.defineProperty;
exports.f = r ? s : function (t, e, n) {
  o(t);
  e = a(e, true);
  o(n);
  if (i) {
    try {
      return s(t, e, n);
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