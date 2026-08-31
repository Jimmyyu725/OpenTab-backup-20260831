var r = require("./32.js");
var o = require("./273.js");
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var t;
  var e = false;
  var n = {};
  try {
    (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []);
    e = n instanceof Array;
  } catch (t) {}
  return function (n, i) {
    r(n);
    o(i);
    if (e) {
      t.call(n, i);
    } else {
      n.__proto__ = i;
    }
    return n;
  };
}() : undefined);