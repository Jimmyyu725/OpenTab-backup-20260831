var r = require("./303.js");
var o = String.prototype;
module.exports = function (t) {
  var e = t.matchAll;
  if (typeof t == "string" || t === o || t instanceof String && e === o.matchAll) {
    return r;
  } else {
    return e;
  }
};