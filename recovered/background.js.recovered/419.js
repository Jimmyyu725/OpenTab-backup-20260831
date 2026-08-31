var r = require("./420.js");
var o = require("./209.js");
var i = require("./422.js");
var s = /^[-+]0x[0-9a-f]+$/i;
var a = /^0b[01]+$/i;
var u = /^0o[0-7]+$/i;
var c = parseInt;
module.exports = function (t) {
  if (typeof t == "number") {
    return t;
  }
  if (i(t)) {
    return NaN;
  }
  if (o(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = o(e) ? e + "" : e;
  }
  if (typeof t != "string") {
    if (t === 0) {
      return t;
    } else {
      return +t;
    }
  }
  t = r(t);
  var n = a.test(t);
  if (n || u.test(t)) {
    return c(t.slice(2), n ? 2 : 8);
  } else if (s.test(t)) {
    return NaN;
  } else {
    return +t;
  }
};