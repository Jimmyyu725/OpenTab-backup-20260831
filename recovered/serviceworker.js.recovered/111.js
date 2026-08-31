var r = require("./179.js");
var o = require("./180.js");
var i = r("keys");
module.exports = function (t) {
  return i[t] ||= o(t);
};