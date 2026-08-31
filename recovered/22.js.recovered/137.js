var r;
var i;
var o = require("./216.js");
var s = require("./217.js");
var a = require(/*webcrack:missing*/"./54.js");
var c = require("./259.js");
var u = require(/*webcrack:missing*/"./49.js").get;
var l = require("./218.js");
var h = require("./219.js");
var p = RegExp.prototype.exec;
var f = a("native-string-replace", String.prototype.replace);
var d = p;
r = /a/;
i = /b*/g;
p.call(r, "a");
p.call(i, "a");
var g = r.lastIndex !== 0 || i.lastIndex !== 0;
var m = s.UNSUPPORTED_Y || s.BROKEN_CARET;
var y = /()??/.exec("")[1] !== undefined;
if (g || y || m || l || h) {
  d = function (t) {
    var e;
    var n;
    var r;
    var i;
    var s;
    var a;
    var l;
    var h = this;
    var b = u(h);
    var v = b.raw;
    if (v) {
      v.lastIndex = h.lastIndex;
      e = d.call(v, t);
      h.lastIndex = v.lastIndex;
      return e;
    }
    var w = b.groups;
    var x = m && h.sticky;
    var _ = o.call(h);
    var T = h.source;
    var E = 0;
    var O = t;
    if (x) {
      if ((_ = _.replace("y", "")).indexOf("g") === -1) {
        _ += "g";
      }
      O = String(t).slice(h.lastIndex);
      if (h.lastIndex > 0 && (!h.multiline || h.multiline && t[h.lastIndex - 1] !== "\n")) {
        T = "(?: " + T + ")";
        O = " " + O;
        E++;
      }
      n = new RegExp("^(?:" + T + ")", _);
    }
    if (y) {
      n = new RegExp("^" + T + "$(?!\\s)", _);
    }
    if (g) {
      r = h.lastIndex;
    }
    i = p.call(x ? n : h, O);
    if (x) {
      if (i) {
        i.input = i.input.slice(E);
        i[0] = i[0].slice(E);
        i.index = h.lastIndex;
        h.lastIndex += i[0].length;
      } else {
        h.lastIndex = 0;
      }
    } else if (g && i) {
      h.lastIndex = h.global ? i.index + i[0].length : r;
    }
    if (y && i && i.length > 1) {
      f.call(i[0], n, function () {
        for (s = 1; s < arguments.length - 2; s++) {
          if (arguments[s] === undefined) {
            i[s] = undefined;
          }
        }
      });
    }
    if (i && w) {
      i.groups = a = c(null);
      s = 0;
      for (; s < w.length; s++) {
        a[(l = w[s])[0]] = i[l[1]];
      }
    }
    return i;
  };
}
module.exports = d;