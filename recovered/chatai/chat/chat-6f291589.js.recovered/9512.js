var i = require("./2334.js");
var s = require("./8108.js");
var r = require("./8160.js");
var a = require("./8500.js");
var o = require("./3717.js");
var u = require("./6228.js");
var g = i.TypeError;
var h = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var l = "enumerable";
var d = "configurable";
var F = "writable";
exports.f = s ? a ? function (e, t, n) {
  o(e);
  t = u(t);
  o(n);
  if (typeof e == "function" && t === "prototype" && "value" in n && F in n && !n.writable) {
    var i = c(e, t);
    if (i && i.writable) {
      e[t] = n.value;
      n = {
        configurable: d in n ? n.configurable : i.configurable,
        enumerable: l in n ? n.enumerable : i.enumerable,
        writable: false
      };
    }
  }
  return h(e, t, n);
} : h : function (e, t, n) {
  o(e);
  t = u(t);
  o(n);
  if (r) {
    try {
      return h(e, t, n);
    } catch (e) {}
  }
  if ("get" in n || "set" in n) {
    throw g("Accessors not supported");
  }
  if ("value" in n) {
    e[t] = n.value;
  }
  return e;
};