var r;
var i = require("./499.js");
var o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
module.exports = function (t) {
  return !!o && o in t;
};