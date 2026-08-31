var r = require("./32.js");
var i = require("./52.js");
var o = require("./17.js")("species");
module.exports = function (t, e) {
  var n;
  var s = r(t).constructor;
  if (s === undefined || (n = r(s)[o]) == null) {
    return e;
  } else {
    return i(n);
  }
};