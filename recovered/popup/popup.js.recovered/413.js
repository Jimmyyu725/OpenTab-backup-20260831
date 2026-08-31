var r = require("./532.js");
var i = require("./448.js");
var o = Object.prototype.propertyIsEnumerable;
var s = Object.getOwnPropertySymbols;
var a = s ? function (t) {
  if (t == null) {
    return [];
  } else {
    t = Object(t);
    return r(s(t), function (e) {
      return o.call(t, e);
    });
  }
} : i;
module.exports = a;