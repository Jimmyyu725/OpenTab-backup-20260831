var r = require("./9.js");
function i(t, e) {
  return RegExp(t, e);
}
exports.UNSUPPORTED_Y = r(function () {
  var t = i("a", "y");
  t.lastIndex = 2;
  return t.exec("abcd") != null;
});
exports.BROKEN_CARET = r(function () {
  var t = i("^r", "gy");
  t.lastIndex = 2;
  return t.exec("str") != null;
});