var r = require("./32.js");
module.exports = function (t) {
  var n = t.return;
  if (n !== undefined) {
    return r(n.call(t)).value;
  }
};