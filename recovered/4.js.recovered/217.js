var r = require(/*webcrack:missing*/"./9.js");
function o(e, t) {
  return RegExp(e, t);
}
exports.UNSUPPORTED_Y = r(function () {
  var e = o("a", "y");
  e.lastIndex = 2;
  return e.exec("abcd") != null;
});
exports.BROKEN_CARET = r(function () {
  var e = o("^r", "gy");
  e.lastIndex = 2;
  return e.exec("str") != null;
});