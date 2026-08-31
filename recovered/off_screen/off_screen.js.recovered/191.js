var r = require("./61.js");
var o = require("./29.js");
var i = require("./138.js");
module.exports = !r && !o(function () {
  return Object.defineProperty(i("div"), "a", {
    get: function () {
      return 7;
    }
  }).a != 7;
});