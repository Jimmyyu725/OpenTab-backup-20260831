var r = require(/*webcrack:missing*/"./9.js");
module.exports = r(function () {
  var e = RegExp("(?<a>b)", "string".charAt(5));
  return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
});