var r = require("./14.js");
var i = require("./193.js");
var o = require("./37.js");
var s = require("./194.js");
var a = require("./198.js");
var c = require("./280.js");
var u = i("wks");
var l = r.Symbol;
var h = c ? l : l && l.withoutSetter || s;
module.exports = function (t) {
  if (!o(u, t) || !a && typeof u[t] != "string") {
    if (a && o(l, t)) {
      u[t] = l[t];
    } else {
      u[t] = h("Symbol." + t);
    }
  }
  return u[t];
};