var r = require("./29.js");
var o = require("./50.js");
var i = require("./9.js")("match");
module.exports = function (t) {
  var e;
  return r(t) && ((e = t[i]) !== undefined ? !!e : o(t) == "RegExp");
};