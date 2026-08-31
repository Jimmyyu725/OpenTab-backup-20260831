var r = require("./249.js");
var o = require("./221.js");
module.exports = function (t) {
  return typeof t == "symbol" || o(t) && r(t) == "[object Symbol]";
};