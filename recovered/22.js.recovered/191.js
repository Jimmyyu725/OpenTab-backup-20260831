var r = require("./61.js");
var i = require("./29.js");
var o = require("./138.js");
module.exports = !r && !i(function () {
  return Object.defineProperty(o("div"), "a", {
    get: function () {
      return 7;
    }
  }).a != 7;
});