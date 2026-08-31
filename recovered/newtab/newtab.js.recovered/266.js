var r = require("./33.js");
var i = require("./137.js");
module.exports = function (t, e) {
  var n = t.exec;
  if (typeof n == "function") {
    var o = n.call(t, e);
    if (typeof o != "object") {
      throw TypeError("RegExp exec method returned something other than an Object or null");
    }
    return o;
  }
  if (r(t) !== "RegExp") {
    throw TypeError("RegExp#exec called on incompatible receiver");
  }
  return i.call(t, e);
};