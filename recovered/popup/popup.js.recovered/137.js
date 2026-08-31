var r;
var i;
var o = require("./216.js");
var s = require("./217.js");
var a = require("./54.js");
var c = require("./259.js");
var u = require("./49.js").get;
var l = require("./218.js");
var h = require("./219.js");
var p = RegExp.prototype.exec;
var d = a("native-string-replace", String.prototype.replace);
var f = p;
r = /a/;
i = /b*/g;
p.call(r, "a");
p.call(i, "a");
var g = r.lastIndex !== 0 || i.lastIndex !== 0;
var y = s.UNSUPPORTED_Y || s.BROKEN_CARET;
var m = /()??/.exec("")[1] !== undefined;
if (g || m || y || l || h) {
  f = function (t) {
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
      e = f.call(v, t);
      h.lastIndex = v.lastIndex;
      return e;
    }
    var w = b.groups;
    var x = y && h.sticky;
    var _ = o.call(h);
    var O = h.source;
    var T = 0;
    var S = t;
    if (x) {
      if ((_ = _.replace("y", "")).indexOf("g") === -1) {
        _ += "g";
      }
      S = String(t).slice(h.lastIndex);
      if (h.lastIndex > 0 && (!h.multiline || h.multiline && t[h.lastIndex - 1] !== "\n")) {
        O = "(?: " + O + ")";
        S = " " + S;
        T++;
      }
      n = new RegExp("^(?:" + O + ")", _);
    }
    if (m) {
      n = new RegExp("^" + O + "$(?!\\s)", _);
    }
    if (g) {
      r = h.lastIndex;
    }
    i = p.call(x ? n : h, S);
    if (x) {
      if (i) {
        i.input = i.input.slice(T);
        i[0] = i[0].slice(T);
        i.index = h.lastIndex;
        h.lastIndex += i[0].length;
      } else {
        h.lastIndex = 0;
      }
    } else if (g && i) {
      h.lastIndex = h.global ? i.index + i[0].length : r;
    }
    if (m && i && i.length > 1) {
      d.call(i[0], n, function () {
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
module.exports = f;