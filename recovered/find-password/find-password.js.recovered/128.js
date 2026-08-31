var r = require("./10.js");
module.exports = function (t) {
  var n = t.return;
  if (n !== undefined) {
    return r(n.call(t)).value;
  }
};