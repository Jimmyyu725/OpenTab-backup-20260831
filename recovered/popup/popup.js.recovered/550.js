var r = require("./414.js");
var i = require("./221.js");
module.exports = function (t) {
  return i(t) && r(t) == "[object Map]";
};