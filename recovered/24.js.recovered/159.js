var r = require("./32.js");
var o = require("./52.js");
var i = require("./17.js")("species");
module.exports = function (t, e) {
  var n;
  var s = r(t).constructor;
  if (s === undefined || (n = r(s)[i]) == null) {
    return e;
  } else {
    return o(n);
  }
};