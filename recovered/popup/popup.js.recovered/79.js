var r = require("./54.js");
var i = require("./58.js");
var o = r("keys");
module.exports = function (t) {
  return o[t] ||= i(t);
};