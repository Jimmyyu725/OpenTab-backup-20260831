var r = require("./29.js");
module.exports = function (t) {
  if (!r(t) && t !== null) {
    throw TypeError("Can't set " + String(t) + " as a prototype");
  }
  return t;
};