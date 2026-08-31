var r = require(/*webcrack:missing*/"./9.js");
module.exports = r(function () {
  var t = RegExp(".", "string".charAt(0));
  return !t.dotAll || !t.exec("\n") || t.flags !== "s";
});