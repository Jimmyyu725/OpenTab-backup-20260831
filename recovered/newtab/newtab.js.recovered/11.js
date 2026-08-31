var r = require("./78.js");
var i = {}.hasOwnProperty;
module.exports = Object.hasOwn || function (t, e) {
  return i.call(r(t), e);
};