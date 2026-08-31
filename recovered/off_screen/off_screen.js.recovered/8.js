var r = require("./4.js");
var o = require("./54.js");
var i = require("./11.js");
var c = require("./58.js");
var u = require("./69.js");
var a = require("./122.js");
var s = o("wks");
var f = r.Symbol;
var l = a ? f : f && f.withoutSetter || c;
module.exports = function (t) {
  if (!i(s, t) || !u && typeof s[t] != "string") {
    if (u && i(f, t)) {
      s[t] = f[t];
    } else {
      s[t] = l("Symbol." + t);
    }
  }
  return s[t];
};