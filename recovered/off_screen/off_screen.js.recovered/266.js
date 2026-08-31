var r = require("./33.js");
var o = require("./137.js");
module.exports = function (t, n) {
  var e = t.exec;
  if (typeof e == "function") {
    var i = e.call(t, n);
    if (typeof i != "object") {
      throw TypeError("RegExp exec method returned something other than an Object or null");
    }
    return i;
  }
  if (r(t) !== "RegExp") {
    throw TypeError("RegExp#exec called on incompatible receiver");
  }
  return o.call(t, n);
};