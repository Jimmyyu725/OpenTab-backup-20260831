var n;
var o = require("./499.js");
var c = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
module.exports = function (t) {
  return !!c && c in t;
};