var r = require(/*webcrack:missing*/"./9.js");
module.exports = r(function () {
  var e = RegExp(".", "string".charAt(0));
  return !e.dotAll || !e.exec("\n") || e.flags !== "s";
});