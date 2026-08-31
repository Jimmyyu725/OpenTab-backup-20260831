var r = require("./5.js");
var o = require("./98.js");
var i = require("./23.js");
var s = require("./100.js");
var a = require("./161.js");
var c = require("./259.js");
var u = o("wks");
var f = r.Symbol;
var l = c ? f : f && f.withoutSetter || s;
module.exports = function (t) {
  if (!i(u, t) || !a && typeof u[t] != "string") {
    if (a && i(f, t)) {
      u[t] = f[t];
    } else {
      u[t] = l("Symbol." + t);
    }
  }
  return u[t];
};