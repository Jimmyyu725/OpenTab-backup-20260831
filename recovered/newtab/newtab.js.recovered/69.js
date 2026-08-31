var r = require("./59.js");
var i = require("./9.js");
module.exports = !!Object.getOwnPropertySymbols && !i(function () {
  var t = Symbol();
  return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
});