var r = require("./10.js");
var o = require("./120.js");
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
  var t;
  var n = false;
  var e = {};
  try {
    (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []);
    n = e instanceof Array;
  } catch (t) {}
  return function (e, i) {
    r(e);
    o(i);
    if (n) {
      t.call(e, i);
    } else {
      e.__proto__ = i;
    }
    return e;
  };
}() : undefined);