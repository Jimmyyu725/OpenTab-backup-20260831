var i = require("./1774.js");
var s = Infinity;
const r = function (e) {
  if (e) {
    if ((e = (0, i.Z)(e)) === s || e === -Infinity) {
      return (e < 0 ? -1 : 1) * 1.7976931348623157e+308;
    } else if (e == e) {
      return e;
    } else {
      return 0;
    }
  } else if (e === 0) {
    return e;
  } else {
    return 0;
  }
};
export const Z = function (e) {
  var t = r(e);
  var n = t % 1;
  if (t == t) {
    if (n) {
      return t - n;
    } else {
      return t;
    }
  } else {
    return 0;
  }
};