var r = require("./42.js");
var o = require("./18.js");
var i = require("./108.js");
module.exports = !r && !o(function () {
  return Object.defineProperty(i("div"), "a", {
    get: function () {
      return 7;
    }
  }).a != 7;
});