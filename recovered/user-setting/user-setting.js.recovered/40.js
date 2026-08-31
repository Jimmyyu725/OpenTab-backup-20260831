var r = require("./4.js");
var o = require("./20.js");
module.exports = function (t, n) {
  try {
    o(r, t, n);
  } catch (e) {
    r[t] = n;
  }
  return n;
};