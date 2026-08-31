var r = require("./55.js");
var o = require("./106.js");
module.exports = function (t, e) {
  var n = t.exec;
  if (typeof n == "function") {
    var i = n.call(t, e);
    if (typeof i != "object") {
      throw TypeError("RegExp exec method returned something other than an Object or null");
    }
    return i;
  }
  if (r(t) !== "RegExp") {
    throw TypeError("RegExp#exec called on incompatible receiver");
  }
  return o.call(t, e);
};