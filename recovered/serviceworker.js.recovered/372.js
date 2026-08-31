var r = require("./54.js");
var o = require("./35.js");
module.exports = function (t) {
  return typeof t == "symbol" || o(t) && r(t) == "[object Symbol]";
};