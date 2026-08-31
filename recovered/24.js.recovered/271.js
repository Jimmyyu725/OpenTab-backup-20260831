var r = require("./14.js");
var o = require("./30.js");
module.exports = function (t, e) {
  try {
    o(r, t, e);
  } catch (n) {
    r[t] = e;
  }
  return e;
};