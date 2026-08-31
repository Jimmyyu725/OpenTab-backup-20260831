var r = require("./8.js");
var o = /#|\.prototype\./;
function i(t, e) {
  var n = a[s(t)];
  return n == u || n != c && (typeof e == "function" ? r(e) : !!e);
}
var s = i.normalize = function (t) {
  return String(t).replace(o, ".").toLowerCase();
};
var a = i.data = {};
var c = i.NATIVE = "N";
var u = i.POLYFILL = "P";
module.exports = i;