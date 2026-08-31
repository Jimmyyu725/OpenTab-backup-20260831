var r = require("./14.js");
var o = require("./193.js");
var i = require("./37.js");
var c = require("./194.js");
var u = require("./198.js");
var a = require("./280.js");
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