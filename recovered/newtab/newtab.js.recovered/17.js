var r = require("./14.js");
var i = require("./193.js");
var o = require("./37.js");
var a = require("./194.js");
var s = require("./198.js");
var c = require("./280.js");
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