var e = require("./32.js");
var o = require("./273.js");
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var t;
  var n = false;
  var r = {};
  try {
    (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []);
    n = r instanceof Array;
  } catch (t) {}
  return function (r, i) {
    e(r);
    o(i);
    if (n) {
      t.call(r, i);
    } else {
      r.__proto__ = i;
    }
    return r;
  };
}() : undefined);