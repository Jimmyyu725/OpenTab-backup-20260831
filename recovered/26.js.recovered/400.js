var r = require(/*webcrack:missing*/"./12.js");
var o = require(/*webcrack:missing*/"./33.js");
var i = require(/*webcrack:missing*/"./8.js")("match");
module.exports = function (t) {
  var e;
  return r(t) && ((e = t[i]) !== undefined ? !!e : o(t) == "RegExp");
};