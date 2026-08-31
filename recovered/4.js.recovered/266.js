var r = require(/*webcrack:missing*/"./33.js");
var o = require("./137.js");
module.exports = function (e, t) {
  var n = e.exec;
  if (typeof n == "function") {
    var i = n.call(e, t);
    if (typeof i != "object") {
      throw TypeError("RegExp exec method returned something other than an Object or null");
    }
    return i;
  }
  if (r(e) !== "RegExp") {
    throw TypeError("RegExp#exec called on incompatible receiver");
  }
  return o.call(e, t);
};