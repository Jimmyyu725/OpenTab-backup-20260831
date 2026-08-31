var r = require("./103.js");
var o = require("./8.js");
module.exports = !!Object.getOwnPropertySymbols && !o(function () {
  var t = Symbol();
  return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
});