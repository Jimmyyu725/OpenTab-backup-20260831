var r = require("./10.js");
var o = require("./27.js");
var i = require("./8.js")("species");
module.exports = function (t, n) {
  var e;
  var c = r(t).constructor;
  if (c === undefined || (e = r(c)[i]) == null) {
    return n;
  } else {
    return o(e);
  }
};