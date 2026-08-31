var r = require("./4.js");
var o = require("./54.js");
var i = require("./11.js");
var s = require("./58.js");
var a = require("./69.js");
var u = require("./122.js");
var c = o("wks");
var f = r.Symbol;
var l = u ? f : f && f.withoutSetter || s;
module.exports = function (t) {
  if (!i(c, t) || !a && typeof c[t] != "string") {
    if (a && i(f, t)) {
      c[t] = f[t];
    } else {
      c[t] = l("Symbol." + t);
    }
  }
  return c[t];
};