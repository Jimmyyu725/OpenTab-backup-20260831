var r = require("./16.js");
var o = require("./9.js");
var i = require("./53.js");
module.exports = !r && !o(function () {
  return Object.defineProperty(i("div"), "a", {
    get: function () {
      return 7;
    }
  }).a != 7;
});