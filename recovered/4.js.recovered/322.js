var r = require("./31.js");
module.exports = function (e, t, n) {
  r.forEach(n, function (n) {
    e = n(e, t);
  });
  return e;
};