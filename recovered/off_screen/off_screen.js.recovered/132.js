var r = require("./4.js");
module.exports = function (t, n) {
  var e = r.console;
  if (e && e.error) {
    if (arguments.length === 1) {
      e.error(t);
    } else {
      e.error(t, n);
    }
  }
};