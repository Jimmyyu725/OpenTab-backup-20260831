var i = require("./2334.js");
var s = require("./6716.js");
var r = require("./2469.js");
var a = require("./2995.js");
var o = require("./8093.js");
var u = require("./481.js");
var g = s("wks");
var h = i.Symbol;
var c = h && h.for;
var l = u ? h : h && h.withoutSetter || a;
module.exports = function (e) {
  if (!r(g, e) || !o && typeof g[e] != "string") {
    var t = "Symbol." + e;
    if (o && r(h, e)) {
      g[e] = h[e];
    } else {
      g[e] = u && c ? c(t) : l(t);
    }
  }
  return g[e];
};