var r = require("./16.js");
var i = require("./9.js");
var o = require("./53.js");
module.exports = !r && !i(function () {
  return Object.defineProperty(o("div"), "a", {
    get: function () {
      return 7;
    }
  }).a != 7;
});