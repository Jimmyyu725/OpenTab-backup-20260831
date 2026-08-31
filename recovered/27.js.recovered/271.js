var e = require("./14.js");
var o = require("./30.js");
module.exports = function (t, n) {
  try {
    o(e, t, n);
  } catch (r) {
    e[t] = n;
  }
  return n;
};