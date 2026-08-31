var r = require("./264.js").charAt;
module.exports = function (t, e, n) {
  return e + (n ? r(t, e).length : 1);
};