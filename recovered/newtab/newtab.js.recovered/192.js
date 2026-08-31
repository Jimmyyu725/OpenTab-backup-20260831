var r = require("./29.js");
var i = /#|\.prototype\./;
function o(t, e) {
  var n = s[a(t)];
  return n == u || n != c && (typeof e == "function" ? r(e) : !!e);
}
var a = o.normalize = function (t) {
  return String(t).replace(i, ".").toLowerCase();
};
var s = o.data = {};
var c = o.NATIVE = "N";
var u = o.POLYFILL = "P";
module.exports = o;