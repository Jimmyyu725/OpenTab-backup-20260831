var e = require("./32.js");
var o = require("./52.js");
var i = require("./17.js")("species");
module.exports = function (t, n) {
  var r;
  var c = e(t).constructor;
  if (c === undefined || (r = e(c)[i]) == null) {
    return n;
  } else {
    return o(r);
  }
};