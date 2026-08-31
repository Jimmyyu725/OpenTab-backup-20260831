var r = require("./199.js");
var o = require("./29.js");
module.exports = !!Object.getOwnPropertySymbols && !o(function () {
  var t = Symbol();
  return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41;
});