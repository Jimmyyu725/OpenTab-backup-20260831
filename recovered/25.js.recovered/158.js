var r = require("./144.js");
var o = Math.min;
module.exports = function (t) {
  if (t > 0) {
    return o(r(t), 9007199254740991);
  } else {
    return 0;
  }
};