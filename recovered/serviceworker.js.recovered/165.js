var r = require("./15.js");
var o = require("./49.js");
var i = require("./11.js")("species");
module.exports = function (t, e) {
  var n;
  var s = r(t).constructor;
  if (s === undefined || (n = r(s)[i]) == null) {
    return e;
  } else {
    return o(n);
  }
};