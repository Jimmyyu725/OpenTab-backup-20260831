var r;
var o;
var i = require("./216.js");
var s = require("./217.js");
var a = require("./54.js");
var u = require("./259.js");
var c = require("./49.js").get;
var f = require("./218.js");
var l = require("./219.js");
var h = RegExp.prototype.exec;
var p = a("native-string-replace", String.prototype.replace);
var d = h;
r = /a/;
o = /b*/g;
h.call(r, "a");
h.call(o, "a");
var y = r.lastIndex !== 0 || o.lastIndex !== 0;
var m = s.UNSUPPORTED_Y || s.BROKEN_CARET;
var g = /()??/.exec("")[1] !== undefined;
if (y || g || m || f || l) {
  d = function (t) {
    var e;
    var n;
    var r;
    var o;
    var s;
    var a;
    var f;
    var l = this;
    var v = c(l);
    var b = v.raw;
    if (b) {
      b.lastIndex = l.lastIndex;
      e = d.call(b, t);
      l.lastIndex = b.lastIndex;
      return e;
    }
    var w = v.groups;
    var _ = m && l.sticky;
    var E = i.call(l);
    var T = l.source;
    var x = 0;
    var O = t;
    if (_) {
      if ((E = E.replace("y", "")).indexOf("g") === -1) {
        E += "g";
      }
      O = String(t).slice(l.lastIndex);
      if (l.lastIndex > 0 && (!l.multiline || l.multiline && t[l.lastIndex - 1] !== "\n")) {
        T = "(?: " + T + ")";
        O = " " + O;
        x++;
      }
      n = new RegExp("^(?:" + T + ")", E);
    }
    if (g) {
      n = new RegExp("^" + T + "$(?!\\s)", E);
    }
    if (y) {
      r = l.lastIndex;
    }
    o = h.call(_ ? n : l, O);
    if (_) {
      if (o) {
        o.input = o.input.slice(x);
        o[0] = o[0].slice(x);
        o.index = l.lastIndex;
        l.lastIndex += o[0].length;
      } else {
        l.lastIndex = 0;
      }
    } else if (y && o) {
      l.lastIndex = l.global ? o.index + o[0].length : r;
    }
    if (g && o && o.length > 1) {
      p.call(o[0], n, function () {
        for (s = 1; s < arguments.length - 2; s++) {
          if (arguments[s] === undefined) {
            o[s] = undefined;
          }
        }
      });
    }
    if (o && w) {
      o.groups = a = u(null);
      s = 0;
      for (; s < w.length; s++) {
        a[(f = w[s])[0]] = o[f[1]];
      }
    }
    return o;
  };
}
module.exports = d;