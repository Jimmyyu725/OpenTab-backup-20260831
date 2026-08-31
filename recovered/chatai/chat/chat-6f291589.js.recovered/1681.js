var i = require("./5872.js");
module.exports = !i(function () {
  function e() {}
  e.prototype.constructor = null;
  return Object.getPrototypeOf(new e()) !== e.prototype;
});