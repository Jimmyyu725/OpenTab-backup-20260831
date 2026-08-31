var r = require("./9.js");
var o = /#|\.prototype\./;
function i(t, n) {
  var e = u[c(t)];
  return e == f || e != a && (typeof n == "function" ? r(n) : !!n);
}
var c = i.normalize = function (t) {
  return String(t).replace(o, ".").toLowerCase();
};
var u = i.data = {};
var a = i.NATIVE = "N";
var f = i.POLYFILL = "P";
module.exports = i;