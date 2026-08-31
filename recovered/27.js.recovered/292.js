var e = require("./14.js");
module.exports = function (t, n) {
  var r = e.console;
  if (r && r.error) {
    if (arguments.length === 1) {
      r.error(t);
    } else {
      r.error(t, n);
    }
  }
};