var r = require("./438.js");
module.exports = function (t, e) {
  for (var n = t.length; n--;) {
    if (r(t[n][0], e)) {
      return n;
    }
  }
  return -1;
};