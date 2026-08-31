var i = require("./5770.js");
var s = require("./5872.js");
module.exports = !!Object.getOwnPropertySymbols && !s(function () {
  var e = Symbol();
  return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && i && i < 41;
});