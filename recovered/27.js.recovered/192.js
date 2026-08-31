var e = require("./29.js");
var o = /#|\.prototype\./;
function i(t, n) {
  var r = u[c(t)];
  return r == f || r != a && (typeof n == "function" ? e(n) : !!n);
}
var c = i.normalize = function (t) {
  return String(t).replace(o, ".").toLowerCase();
};
var u = i.data = {};
var a = i.NATIVE = "N";
var f = i.POLYFILL = "P";
module.exports = i;