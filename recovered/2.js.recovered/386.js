var n = require("./438.js");
module.exports = function (t, e) {
  for (var r = t.length; r--;) {
    if (n(t[r][0], e)) {
      return r;
    }
  }
  return -1;
};