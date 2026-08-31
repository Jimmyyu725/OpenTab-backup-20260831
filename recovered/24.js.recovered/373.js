var r = require("./212.js").charAt;
module.exports = function (t, e, n) {
  return e + (n ? r(t, e).length : 1);
};