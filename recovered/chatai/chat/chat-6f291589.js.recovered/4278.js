var i = require("./2896.js");
var s = Math.min;
module.exports = function (e) {
  if (e > 0) {
    return s(i(e), 9007199254740991);
  } else {
    return 0;
  }
};