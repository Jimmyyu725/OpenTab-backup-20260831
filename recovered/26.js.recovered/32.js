var r = require("./45.js");
module.exports = function (t) {
  if (!r(t)) {
    throw TypeError(String(t) + " is not an object");
  }
  return t;
};