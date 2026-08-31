var r = require("./54.js");
var o = require("./58.js");
var i = r("keys");
module.exports = function (t) {
  return i[t] ||= o(t);
};