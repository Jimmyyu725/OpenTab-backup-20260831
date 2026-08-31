var r = require("./220.js");
var i = require("./377.js");
var o = require("./378.js");
var a = r ? r.toStringTag : undefined;
module.exports = function (t) {
  if (t == null) {
    if (t === undefined) {
      return "[object Undefined]";
    } else {
      return "[object Null]";
    }
  } else if (a && a in Object(t)) {
    return i(t);
  } else {
    return o(t);
  }
};