var r = require("./47.js");
var i = Math.min;
module.exports = function (t) {
  if (t > 0) {
    return i(r(t), 9007199254740991);
  } else {
    return 0;
  }
};