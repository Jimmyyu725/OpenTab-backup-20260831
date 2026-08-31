var r = require("./411.js");
var i = require("./525.js");
var o = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  if (!r(t)) {
    return i(t);
  }
  var e = [];
  for (var n in Object(t)) {
    if (o.call(t, n) && n != "constructor") {
      e.push(n);
    }
  }
  return e;
};