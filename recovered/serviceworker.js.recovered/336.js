var r = require("./20.js");
module.exports = function (t) {
  var e = t.return;
  if (e !== undefined) {
    return r(e.call(t)).value;
  }
};