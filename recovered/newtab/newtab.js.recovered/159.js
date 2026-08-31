var r = require("./32.js");
var i = require("./52.js");
var o = require("./17.js")("species");
module.exports = function (t, e) {
  var n;
  var a = r(t).constructor;
  if (a === undefined || (n = r(a)[o]) == null) {
    return e;
  } else {
    return i(n);
  }
};