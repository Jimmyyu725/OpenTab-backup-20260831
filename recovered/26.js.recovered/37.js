var r = require("./190.js");
var o = {}.hasOwnProperty;
module.exports = Object.hasOwn || function (t, e) {
  return o.call(r(t), e);
};