var i = require("./2334.js");
var s = Object.defineProperty;
module.exports = function (e, t) {
  try {
    s(i, e, {
      value: t,
      configurable: true,
      writable: true
    });
  } catch (n) {
    i[e] = t;
  }
  return t;
};