var r = require("./10.js");
module.exports = function (t, e, n) {
  r.forEach(n, function (n) {
    t = n(t, e);
  });
  return t;
};