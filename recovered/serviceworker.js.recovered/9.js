var r = require("./7.js");
var o = require("./179.js");
var i = require("./30.js");
var s = require("./180.js");
var a = require("./181.js");
var c = require("./291.js");
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