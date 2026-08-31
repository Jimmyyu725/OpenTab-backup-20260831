var r = require("./5.js");
module.exports = function (t, e) {
  var n = r.console;
  if (n && n.error) {
    if (arguments.length === 1) {
      n.error(t);
    } else {
      n.error(t, e);
    }
  }
};