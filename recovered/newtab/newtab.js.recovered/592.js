var r = require("./419.js");
module.exports = function (t) {
  if (t) {
    if ((t = r(t)) === Infinity || t === -Infinity) {
      return (t < 0 ? -1 : 1) * 1.7976931348623157e+308;
    } else if (t == t) {
      return t;
    } else {
      return 0;
    }
  } else if (t === 0) {
    return t;
  } else {
    return 0;
  }
};