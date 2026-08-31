var r = require("./7.js");
var o = require("./19.js");
module.exports = function (t, e) {
  try {
    o(r, t, e);
  } catch (n) {
    r[t] = e;
  }
  return e;
};