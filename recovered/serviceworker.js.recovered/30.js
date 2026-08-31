var r = require("./174.js");
var o = {}.hasOwnProperty;
module.exports = Object.hasOwn || function (t, e) {
  return o.call(r(t), e);
};