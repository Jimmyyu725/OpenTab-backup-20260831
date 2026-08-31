var r = require("./455.js");
var o = require("./35.js");
module.exports = function t(e, n, i, s, a) {
  return e === n || (e == null || n == null || !o(e) && !o(n) ? e != e && n != n : r(e, n, i, s, t, a));
};