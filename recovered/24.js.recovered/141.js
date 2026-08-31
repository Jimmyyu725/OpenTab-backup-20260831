var r = require("./193.js");
var o = require("./194.js");
var i = r("keys");
module.exports = function (t) {
  return i[t] ||= o(t);
};