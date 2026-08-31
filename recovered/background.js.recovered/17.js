var r = require("./14.js");
var o = require("./193.js");
var i = require("./37.js");
var s = require("./194.js");
var a = require("./198.js");
var u = require("./280.js");
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