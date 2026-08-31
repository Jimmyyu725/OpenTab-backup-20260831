var r = require("./10.js");
var o = require("./27.js");
var i = require("./8.js")("species");
module.exports = function (t, e) {
  var n;
  var s = r(t).constructor;
  if (s === undefined || (n = r(s)[i]) == null) {
    return e;
  } else {
    return o(n);
  }
};