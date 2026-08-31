var r = require("./485.js");
module.exports = function (t, e) {
  return r(t, 5, e = typeof e == "function" ? e : undefined);
};