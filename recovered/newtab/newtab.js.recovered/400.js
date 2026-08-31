var r = require("./12.js");
var i = require("./33.js");
var o = require("./8.js")("match");
module.exports = function (t) {
  var e;
  return r(t) && ((e = t[o]) !== undefined ? !!e : i(t) == "RegExp");
};