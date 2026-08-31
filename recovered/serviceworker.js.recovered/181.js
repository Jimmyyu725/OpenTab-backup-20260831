var r = require("./182.js");
var o = require("./18.js");
module.exports = !!Object.getOwnPropertySymbols && !o(function () {
  var t = Symbol();
  return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
});