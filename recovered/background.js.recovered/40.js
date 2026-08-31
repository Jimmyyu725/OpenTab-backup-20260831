var r = require("./4.js");
var o = require("./20.js");
module.exports = function (t, e) {
  try {
    o(r, t, e);
  } catch (n) {
    r[t] = e;
  }
  return e;
};