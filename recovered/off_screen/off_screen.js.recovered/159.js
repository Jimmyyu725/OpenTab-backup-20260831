var r = require("./32.js");
var o = require("./52.js");
var i = require("./17.js")("species");
module.exports = function (t, n) {
  var e;
  var c = r(t).constructor;
  if (c === undefined || (e = r(c)[i]) == null) {
    return n;
  } else {
    return o(e);
  }
};