const n = function (e) {
  return function () {
    return e;
  };
};
var o = require("./1142.js");
var a = require("./4084.js");
const i = o.Z ? function (e, t) {
  return (0, o.Z)(e, "toString", {
    configurable: true,
    enumerable: false,
    value: n(t),
    writable: true
  });
} : a.Z;
var c = Date.now;
export const Z = function (e) {
  var t = 0;
  var r = 0;
  return function () {
    var n = c();
    var o = 16 - (n - r);
    r = n;
    if (o > 0) {
      if (++t >= 800) {
        return arguments[0];
      }
    } else {
      t = 0;
    }
    return e.apply(undefined, arguments);
  };
}(i);