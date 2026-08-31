var r = require("./4.js");
var i = require("./54.js");
var o = require("./11.js");
var a = require("./58.js");
var s = require("./69.js");
var c = require("./122.js");
var u = i("wks");
var l = r.Symbol;
var f = c ? l : l && l.withoutSetter || a;
module.exports = function (t) {
  if (!o(u, t) || !s && typeof u[t] != "string") {
    if (s && o(l, t)) {
      u[t] = l[t];
    } else {
      u[t] = f("Symbol." + t);
    }
  }
  return u[t];
};