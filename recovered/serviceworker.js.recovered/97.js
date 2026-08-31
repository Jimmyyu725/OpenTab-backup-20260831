var r = require("./98.js");
var o = require("./100.js");
var i = r("keys");
module.exports = function (t) {
  return i[t] ||= o(t);
};