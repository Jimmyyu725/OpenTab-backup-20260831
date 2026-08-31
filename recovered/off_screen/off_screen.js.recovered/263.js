var r = require("./264.js").charAt;
module.exports = function (t, n, e) {
  return n + (e ? r(t, n).length : 1);
};