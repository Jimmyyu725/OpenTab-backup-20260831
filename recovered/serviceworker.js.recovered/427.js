var r = require("./149.js");
var o = require("./428.js");
var i = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  if (!r(t)) {
    return o(t);
  }
  var e = [];
  for (var n in Object(t)) {
    if (i.call(t, n) && n != "constructor") {
      e.push(n);
    }
  }
  return e;
};