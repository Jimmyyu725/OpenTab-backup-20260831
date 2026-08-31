var r = require("./10.js");
var i = require("./120.js");
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var t;
  var e = false;
  var n = {};
  try {
    (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []);
    e = n instanceof Array;
  } catch (t) {}
  return function (n, o) {
    r(n);
    i(o);
    if (e) {
      t.call(n, o);
    } else {
      n.__proto__ = o;
    }
    return n;
  };
}() : undefined);