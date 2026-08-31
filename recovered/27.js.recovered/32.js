var e = require("./45.js");
module.exports = function (t) {
  if (!e(t)) {
    throw TypeError(String(t) + " is not an object");
  }
  return t;
};