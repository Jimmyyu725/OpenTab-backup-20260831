var n = require("./532.js");
var o = require("./448.js");
var c = Object.prototype.propertyIsEnumerable;
var i = Object.getOwnPropertySymbols;
var a = i ? function (t) {
  if (t == null) {
    return [];
  } else {
    t = Object(t);
    return n(i(t), function (e) {
      return c.call(t, e);
    });
  }
} : o;
module.exports = a;