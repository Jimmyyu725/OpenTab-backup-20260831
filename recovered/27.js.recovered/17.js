var e = require("./14.js");
var o = require("./193.js");
var i = require("./37.js");
var c = require("./194.js");
var u = require("./198.js");
var a = require("./280.js");
var f = o("wks");
var s = e.Symbol;
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