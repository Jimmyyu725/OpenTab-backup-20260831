var r = require("./4.js");
var i = require("./20.js");
module.exports = function (t, e) {
  try {
    i(r, t, e);
  } catch (n) {
    r[t] = e;
  }
  return e;
};