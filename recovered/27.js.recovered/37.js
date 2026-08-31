var e = require("./190.js");
var o = {}.hasOwnProperty;
module.exports = Object.hasOwn || function (t, n) {
  return o.call(e(t), n);
};