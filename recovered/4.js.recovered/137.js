var r;
var o;
var i = require("./216.js");
var a = require("./217.js");
var u = require(/*webcrack:missing*/"./54.js");
var c = require("./259.js");
var s = require(/*webcrack:missing*/"./49.js").get;
var f = require("./218.js");
var l = require("./219.js");
var d = RegExp.prototype.exec;
var h = u("native-string-replace", String.prototype.replace);
var p = d;
r = /a/;
o = /b*/g;
d.call(r, "a");
d.call(o, "a");
var v = r.lastIndex !== 0 || o.lastIndex !== 0;
var y = a.UNSUPPORTED_Y || a.BROKEN_CARET;
var m = /()??/.exec("")[1] !== undefined;
if (v || m || y || f || l) {
  p = function (e) {
    var t;
    var n;
    var r;
    var o;
    var a;
    var u;
    var f;
    var l = this;
    var g = s(l);
    var b = g.raw;
    if (b) {
      b.lastIndex = l.lastIndex;
      t = p.call(b, e);
      l.lastIndex = b.lastIndex;
      return t;
    }
    var w = g.groups;
    var _ = y && l.sticky;
    var x = i.call(l);
    var S = l.source;
    var E = 0;
    var I = e;
    if (_) {
      if ((x = x.replace("y", "")).indexOf("g") === -1) {
        x += "g";
      }
      I = String(e).slice(l.lastIndex);
      if (l.lastIndex > 0 && (!l.multiline || l.multiline && e[l.lastIndex - 1] !== "\n")) {
        S = "(?: " + S + ")";
        I = " " + I;
        E++;
      }
      n = new RegExp("^(?:" + S + ")", x);
    }
    if (m) {
      n = new RegExp("^" + S + "$(?!\\s)", x);
    }
    if (v) {
      r = l.lastIndex;
    }
    o = d.call(_ ? n : l, I);
    if (_) {
      if (o) {
        o.input = o.input.slice(E);
        o[0] = o[0].slice(E);
        o.index = l.lastIndex;
        l.lastIndex += o[0].length;
      } else {
        l.lastIndex = 0;
      }
    } else if (v && o) {
      l.lastIndex = l.global ? o.index + o[0].length : r;
    }
    if (m && o && o.length > 1) {
      h.call(o[0], n, function () {
        for (a = 1; a < arguments.length - 2; a++) {
          if (arguments[a] === undefined) {
            o[a] = undefined;
          }
        }
      });
    }
    if (o && w) {
      o.groups = u = c(null);
      a = 0;
      for (; a < w.length; a++) {
        u[(f = w[a])[0]] = o[f[1]];
      }
    }
    return o;
  };
}
module.exports = p;