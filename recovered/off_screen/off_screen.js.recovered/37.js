var r = require("./190.js");
var o = {}.hasOwnProperty;
module.exports = Object.hasOwn || function (t, n) {
  return o.call(r(t), n);
};