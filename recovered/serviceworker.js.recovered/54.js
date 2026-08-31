var r = require("./74.js");
var o = require("./373.js");
var i = require("./374.js");
var s = r ? r.toStringTag : undefined;
module.exports = function (t) {
  if (t == null) {
    if (t === undefined) {
      return "[object Undefined]";
    } else {
      return "[object Null]";
    }
  } else if (s && s in Object(t)) {
    return o(t);
  } else {
    return i(t);
  }
};