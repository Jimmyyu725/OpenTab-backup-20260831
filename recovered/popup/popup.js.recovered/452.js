var r = require("./450.js");
var i = require("./407.js");
module.exports = function (t, e, n) {
  var o = e(t);
  if (i(t)) {
    return o;
  } else {
    return r(o, n(t));
  }
};