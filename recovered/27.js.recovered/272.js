var e = require("./29.js");
module.exports = !e(function () {
  function t() {}
  t.prototype.constructor = null;
  return Object.getPrototypeOf(new t()) !== t.prototype;
});