var r;
var i;
var o = require("./216.js");
var a = require("./217.js");
var s = require("./54.js");
var c = require("./259.js");
var u = require("./49.js").get;
var l = require("./218.js");
var f = require("./219.js");
var h = RegExp.prototype.exec;
var p = s("native-string-replace", String.prototype.replace);
var d = h;
r = /a/;
i = /b*/g;
h.call(r, "a");
h.call(i, "a");
var m = r.lastIndex !== 0 || i.lastIndex !== 0;
var g = a.UNSUPPORTED_Y || a.BROKEN_CARET;
var y = /()??/.exec("")[1] !== undefined;
if (m || y || g || l || f) {
  d = function (t) {
    var e;
    var n;
    var r;
    var i;
    var a;
    var s;
    var l;
    var f = this;
    var b = u(f);
    var w = b.raw;
    if (w) {
      w.lastIndex = f.lastIndex;
      e = d.call(w, t);
      f.lastIndex = w.lastIndex;
      return e;
    }
    var v = b.groups;
    var _ = g && f.sticky;
    var E = o.call(f);
    var x = f.source;
    var T = 0;
    var I = t;
    if (_) {
      if ((E = E.replace("y", "")).indexOf("g") === -1) {
        E += "g";
      }
      I = String(t).slice(f.lastIndex);
      if (f.lastIndex > 0 && (!f.multiline || f.multiline && t[f.lastIndex - 1] !== "\n")) {
        x = "(?: " + x + ")";
        I = " " + I;
        T++;
      }
      n = new RegExp("^(?:" + x + ")", E);
    }
    if (y) {
      n = new RegExp("^" + x + "$(?!\\s)", E);
    }
    if (m) {
      r = f.lastIndex;
    }
    i = h.call(_ ? n : f, I);
    if (_) {
      if (i) {
        i.input = i.input.slice(T);
        i[0] = i[0].slice(T);
        i.index = f.lastIndex;
        f.lastIndex += i[0].length;
      } else {
        f.lastIndex = 0;
      }
    } else if (m && i) {
      f.lastIndex = f.global ? i.index + i[0].length : r;
    }
    if (y && i && i.length > 1) {
      p.call(i[0], n, function () {
        for (a = 1; a < arguments.length - 2; a++) {
          if (arguments[a] === undefined) {
            i[a] = undefined;
          }
        }
      });
    }
    if (i && v) {
      i.groups = s = c(null);
      a = 0;
      for (; a < v.length; a++) {
        s[(l = v[a])[0]] = i[l[1]];
      }
    }
    return i;
  };
}
module.exports = d;