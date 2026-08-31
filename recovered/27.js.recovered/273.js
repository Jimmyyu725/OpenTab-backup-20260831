var e = require("./45.js");
module.exports = function (t) {
  if (!e(t) && t !== null) {
    throw TypeError("Can't set " + String(t) + " as a prototype");
  }
  return t;
};