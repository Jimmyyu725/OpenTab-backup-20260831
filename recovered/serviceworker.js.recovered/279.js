var r = require("./8.js");
module.exports = r(function () {
  var t = RegExp("(?<a>b)", "string".charAt(5));
  return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc";
});