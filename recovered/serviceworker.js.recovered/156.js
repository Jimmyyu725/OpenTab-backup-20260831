var r = require("./32.js");
var o = require("./8.js");
var i = require("./92.js");
module.exports = !r && !o(function () {
  return Object.defineProperty(i("div"), "a", {
    get: function () {
      return 7;
    }
  }).a != 7;
});