var e = require("./32.js");
module.exports = function (t) {
  var n = t.return;
  if (n !== undefined) {
    return e(n.call(t)).value;
  }
};