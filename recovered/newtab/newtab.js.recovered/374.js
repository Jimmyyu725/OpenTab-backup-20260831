var r = require("./375.js");
var i = String.prototype;
module.exports = function (t) {
  var e = t.matchAll;
  if (typeof t == "string" || t === i || t instanceof String && e === i.matchAll) {
    return r;
  } else {
    return e;
  }
};