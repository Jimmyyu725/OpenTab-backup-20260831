var r = require("./193.js");
var i = require("./194.js");
var o = r("keys");
module.exports = function (t) {
  return o[t] ||= i(t);
};