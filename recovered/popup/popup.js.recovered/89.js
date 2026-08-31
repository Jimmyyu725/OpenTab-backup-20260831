var r = require("./10.js");
var i = require("./27.js");
var o = require("./8.js")("species");
module.exports = function (t, e) {
  var n;
  var s = r(t).constructor;
  if (s === undefined || (n = r(s)[o]) == null) {
    return e;
  } else {
    return i(n);
  }
};