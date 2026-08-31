var r = require("./18.js");
module.exports = !r(function () {
  function t() {}
  t.prototype.constructor = null;
  return Object.getPrototypeOf(new t()) !== t.prototype;
});