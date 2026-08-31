var r = require("./219.js");
var o = require("./237.js");
var i = require("./461.js");
var s = require("./464.js");
var a = require("./81.js");
var c = require("./80.js");
var u = require("./145.js");
var f = require("./226.js");
var l = "[object Object]";
var h = Object.prototype.hasOwnProperty;
module.exports = function (t, e, n, p, d, y) {
  var m = c(t);
  var g = c(e);
  var v = m ? "[object Array]" : a(t);
  var b = g ? "[object Array]" : a(e);
  var w = (v = v == "[object Arguments]" ? l : v) == l;
  var _ = (b = b == "[object Arguments]" ? l : b) == l;
  var x = v == b;
  if (x && u(t)) {
    if (!u(e)) {
      return false;
    }
    m = true;
    w = false;
  }
  if (x && !w) {
    y ||= new r();
    if (m || f(t)) {
      return o(t, e, n, p, d, y);
    } else {
      return i(t, e, v, n, p, d, y);
    }
  }
  if (!(n & 1)) {
    var T = w && h.call(t, "__wrapped__");
    var E = _ && h.call(e, "__wrapped__");
    if (T || E) {
      var O = T ? t.value() : t;
      var S = E ? e.value() : e;
      y ||= new r();
      return d(O, S, n, p, y);
    }
  }
  return !!x && (y ||= new r(), s(t, e, n, p, d, y));
};