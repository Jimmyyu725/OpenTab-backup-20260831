var n = require("./450.js");
var o = require("./407.js");
module.exports = function (t, e, r) {
  var c = e(t);
  if (o(t)) {
    return c;
  } else {
    return n(c, r(t));
  }
};