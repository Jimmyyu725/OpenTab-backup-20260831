var r = require("./78.js");
var o = {}.hasOwnProperty;
module.exports = Object.hasOwn || function (t, n) {
  return o.call(r(t), n);
};