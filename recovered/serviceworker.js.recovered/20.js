var r = require("./29.js");
module.exports = function (t) {
  if (!r(t)) {
    throw TypeError(String(t) + " is not an object");
  }
  return t;
};