var i = require("./8108.js");
var s = require("./5872.js");
var r = require("./3162.js");
module.exports = !i && !s(function () {
  return Object.defineProperty(r("div"), "a", {
    get: function () {
      return 7;
    }
  }).a != 7;
});