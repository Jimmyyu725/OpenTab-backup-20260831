var r = require("./4.js");
var o = require("./54.js");
var i = require("./11.js");
var c = require("./58.js");
var u = require("./69.js");
var a = require("./122.js");
var f = o("wks");
var s = r.Symbol;
var p = a ? s : s && s.withoutSetter || c;
module.exports = function (t) {
  if (!i(f, t) || !u && typeof f[t] != "string") {
    if (u && i(s, t)) {
      f[t] = s[t];
    } else {
      f[t] = p("Symbol." + t);
    }
  }
  return f[t];
};