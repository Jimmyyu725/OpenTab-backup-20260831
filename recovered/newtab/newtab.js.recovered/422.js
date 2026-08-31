var r = require("./249.js");
var i = require("./221.js");
module.exports = function (t) {
  return typeof t == "symbol" || i(t) && r(t) == "[object Symbol]";
};