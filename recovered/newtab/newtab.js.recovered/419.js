var r = require("./420.js");
var i = require("./209.js");
var o = require("./422.js");
var a = /^[-+]0x[0-9a-f]+$/i;
var s = /^0b[01]+$/i;
var c = /^0o[0-7]+$/i;
var u = parseInt;
module.exports = function (t) {
  if (typeof t == "number") {
    return t;
  }
  if (o(t)) {
    return NaN;
  }
  if (i(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = i(e) ? e + "" : e;
  }
  if (typeof t != "string") {
    if (t === 0) {
      return t;
    } else {
      return +t;
    }
  }
  t = r(t);
  var n = s.test(t);
  if (n || c.test(t)) {
    return u(t.slice(2), n ? 2 : 8);
  } else if (a.test(t)) {
    return NaN;
  } else {
    return +t;
  }
};