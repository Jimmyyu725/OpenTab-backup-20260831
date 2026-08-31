var r = require(/*webcrack:missing*/"./12.js");
var a = require(/*webcrack:missing*/"./33.js");
var o = require(/*webcrack:missing*/"./8.js")("match");
module.exports = function (e) {
  var t;
  return r(e) && ((t = e[o]) !== undefined ? !!t : a(e) == "RegExp");
};