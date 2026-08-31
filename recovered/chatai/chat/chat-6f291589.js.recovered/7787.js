var i = require("./7871.js");
var s = require("./3717.js");
var r = require("./8118.js");
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var e;
  var t = false;
  var n = {};
  try {
    (e = i(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []);
    t = n instanceof Array;
  } catch (e) {}
  return function (n, i) {
    s(n);
    r(i);
    if (t) {
      e(n, i);
    } else {
      n.__proto__ = i;
    }
    return n;
  };
}() : undefined);