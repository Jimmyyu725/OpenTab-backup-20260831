var r = require("./20.js");
var o = require("./33.js");
var i = require("./9.js")("species");
module.exports = function (t, e) {
  var n;
  var s = r(t).constructor;
  if (s === undefined || (n = r(s)[i]) == null) {
    return e;
  } else {
    return o(n);
  }
};