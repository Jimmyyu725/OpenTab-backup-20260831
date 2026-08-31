var r = require("./14.js");
var i = require("./30.js");
module.exports = function (t, e) {
  try {
    i(r, t, e);
  } catch (n) {
    r[t] = e;
  }
  return e;
};