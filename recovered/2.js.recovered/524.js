var n = require("./411.js");
var o = require("./525.js");
var c = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  if (!n(t)) {
    return o(t);
  }
  var e = [];
  for (var r in Object(t)) {
    if (c.call(t, r) && r != "constructor") {
      e.push(r);
    }
  }
  return e;
};