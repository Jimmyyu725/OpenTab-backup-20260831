var r = require("./186.js").charAt;
module.exports = function (t, e, n) {
  return e + (n ? r(t, e).length : 1);
};