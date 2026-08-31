var n = require("./1142.js");
export const Z = function (e, t, r) {
  if (t == "__proto__" && n.Z) {
    (0, n.Z)(e, t, {
      configurable: true,
      enumerable: true,
      value: r,
      writable: true
    });
  } else {
    e[t] = r;
  }
};