var r = require("./10.js");
module.exports = function (t) {
  var e = t.return;
  if (e !== undefined) {
    return r(e.call(t)).value;
  }
};