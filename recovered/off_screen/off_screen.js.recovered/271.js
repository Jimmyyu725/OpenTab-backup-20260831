var r = require("./14.js");
var o = require("./30.js");
module.exports = function (t, n) {
  try {
    o(r, t, n);
  } catch (e) {
    r[t] = n;
  }
  return n;
};