var r = require("./32.js");
module.exports = function (t) {
  var e = t.return;
  if (e !== undefined) {
    return r(e.call(t)).value;
  }
};