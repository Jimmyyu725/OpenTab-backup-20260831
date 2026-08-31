var r = require("./4.js");
var i = require("./54.js");
var o = require("./11.js");
var s = require("./58.js");
var a = require("./69.js");
var c = require("./122.js");
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