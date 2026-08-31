var r = require("./232.js");
var o = require("./80.js");
module.exports = function (t, e, n) {
  var i = e(t);
  if (o(t)) {
    return i;
  } else {
    return r(i, n(t));
  }
};