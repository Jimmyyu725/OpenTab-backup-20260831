var r = require("./91.js");
var o = {}.hasOwnProperty;
module.exports = Object.hasOwn || function (t, e) {
  return o.call(r(t), e);
};