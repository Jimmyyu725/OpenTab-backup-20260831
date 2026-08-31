var n = require("./485.js");
module.exports = function (t, e) {
  return n(t, 5, e = typeof e == "function" ? e : undefined);
};