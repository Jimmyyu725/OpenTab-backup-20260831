var r = require("./590.js");
var i = require("./591.js");
module.exports = function (t, e, n) {
  var o = t == null ? 0 : t.length;
  if (o) {
    e = n || e === undefined ? 1 : i(e);
    return r(t, (e = o - e) < 0 ? 0 : e, o);
  } else {
    return [];
  }
};