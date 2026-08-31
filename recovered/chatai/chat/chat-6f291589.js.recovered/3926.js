var i = require("./5872.js");
module.exports = !i(function () {
  var e = function () {}.bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
});