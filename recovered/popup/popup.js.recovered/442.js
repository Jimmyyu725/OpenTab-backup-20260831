var r = require("./515.js");
module.exports = function (t, e, n) {
  if (e == "__proto__" && r) {
    r(t, e, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    });
  } else {
    t[e] = n;
  }
};