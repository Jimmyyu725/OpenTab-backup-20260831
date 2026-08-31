var i = require("./2334.js");
var s = require("./1010.js");
var r = require("./8064.js");
var a = require("./7877.js");
var o = require("./2815.js");
var u = require("./8818.js");
var g = require("./2226.js");
var h = i.TypeError;
var c = g("toPrimitive");
module.exports = function (e, t) {
  if (!r(e) || a(e)) {
    return e;
  }
  var n;
  var i = o(e, c);
  if (i) {
    if (t === undefined) {
      t = "default";
    }
    n = s(i, e, t);
    if (!r(n) || a(n)) {
      return n;
    }
    throw h("Can't convert object to primitive value");
  }
  if (t === undefined) {
    t = "number";
  }
  return u(e, t);
};