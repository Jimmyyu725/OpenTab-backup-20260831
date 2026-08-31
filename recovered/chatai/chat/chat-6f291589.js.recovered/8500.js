var i = require("./8108.js");
var s = require("./5872.js");
module.exports = i && s(function () {
  return Object.defineProperty(function () {}, "prototype", {
    value: 42,
    writable: false
  }).prototype != 42;
});