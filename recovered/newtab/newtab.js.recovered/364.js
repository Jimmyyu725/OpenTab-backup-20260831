var r = require("./9.js");
module.exports = !r(function () {
  function t() {}
  t.prototype.constructor = null;
  return Object.getPrototypeOf(new t()) !== t.prototype;
});