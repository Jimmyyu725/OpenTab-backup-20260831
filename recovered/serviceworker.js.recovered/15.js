var r = require("./25.js");
module.exports = function (t) {
  if (!r(t)) {
    throw TypeError(String(t) + " is not an object");
  }
  return t;
};