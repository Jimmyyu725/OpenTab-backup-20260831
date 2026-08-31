var r;
var o = require("./404.js");
var i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
module.exports = function (t) {
  return !!i && i in t;
};