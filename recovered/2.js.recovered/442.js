var n = require("./515.js");
module.exports = function (t, e, r) {
  if (e == "__proto__" && n) {
    n(t, e, {
      configurable: true,
      enumerable: true,
      value: r,
      writable: true
    });
  } else {
    t[e] = r;
  }
};