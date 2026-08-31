var r = require("./54.js");
var o = require("./35.js");
module.exports = function (t) {
  return o(t) && r(t) == "[object Arguments]";
};