var r = require("./9.js");
var i = /#|\.prototype\./;
function o(t, e) {
  var n = a[s(t)];
  return n == u || n != c && (typeof e == "function" ? r(e) : !!e);
}
var s = o.normalize = function (t) {
  return String(t).replace(i, ".").toLowerCase();
};
var a = o.data = {};
var c = o.NATIVE = "N";
var u = o.POLYFILL = "P";
module.exports = o;