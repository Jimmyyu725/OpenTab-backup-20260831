var r = require("./592.js");
module.exports = function (t) {
  var e = r(t);
  var n = e % 1;
  if (e == e) {
    if (n) {
      return e - n;
    } else {
      return e;
    }
  } else {
    return 0;
  }
};