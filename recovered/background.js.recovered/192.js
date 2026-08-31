var r = require("./29.js");
var o = /#|\.prototype\./;
function i(t, e) {
  var n = a[s(t)];
  return n == c || n != u && (typeof e == "function" ? r(e) : !!e);
}
var s = i.normalize = function (t) {
  return String(t).replace(o, ".").toLowerCase();
};
var a = i.data = {};
var u = i.NATIVE = "N";
var c = i.POLYFILL = "P";
module.exports = i;