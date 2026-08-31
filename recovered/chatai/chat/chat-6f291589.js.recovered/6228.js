var i = require("./3179.js");
var s = require("./7877.js");
module.exports = function (e) {
  var t = i(e, "string");
  if (s(t)) {
    return t;
  } else {
    return t + "";
  }
};