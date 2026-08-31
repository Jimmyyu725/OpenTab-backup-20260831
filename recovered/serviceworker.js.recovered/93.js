var r = require("./5.js");
var o = require("./37.js");
module.exports = function (t, e) {
  try {
    o(r, t, e);
  } catch (n) {
    r[t] = e;
  }
  return e;
};