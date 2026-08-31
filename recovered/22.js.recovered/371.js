var r = require("./45.js");
var i = require("./84.js");
var o = require("./17.js")("match");
module.exports = function (t) {
  var e;
  return r(t) && ((e = t[o]) !== undefined ? !!e : i(t) == "RegExp");
};