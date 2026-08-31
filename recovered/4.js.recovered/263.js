var r = require("./264.js").charAt;
module.exports = function (e, t, n) {
  return t + (n ? r(e, t).length : 1);
};