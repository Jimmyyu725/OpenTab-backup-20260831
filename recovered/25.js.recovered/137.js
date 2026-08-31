var r;
var o;
var i = require("./216.js");
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
o = /b*/g;
p.call(r, "a");
p.call(o, "a");
var g = r.lastIndex !== 0 || o.lastIndex !== 0;
var y = s.UNSUPPORTED_Y || s.BROKEN_CARET;
var m = /()??/.exec("")[1] !== undefined;
if (g || m || y || l || h) {
  d = function (t) {
    var e;
    var n;
    var r;
    var o;
    var s;
    var a;
    var l;
    var h = this;
    var b = u(h);
    var w = b.raw;
    if (w) {
      w.lastIndex = h.lastIndex;
      e = d.call(w, t);
      h.lastIndex = w.lastIndex;
      return e;
    }
    var v = b.groups;
    var _ = y && h.sticky;
    var T = i.call(h);
    var E = h.source;
    var x = 0;
    var S = t;
    if (_) {
      if ((T = T.replace("y", "")).indexOf("g") === -1) {
        T += "g";
      }
      S = String(t).slice(h.lastIndex);
      if (h.lastIndex > 0 && (!h.multiline || h.multiline && t[h.lastIndex - 1] !== "\n")) {
        E = "(?: " + E + ")";
        S = " " + S;
        x++;
      }
      n = new RegExp("^(?:" + E + ")", T);
    }
    if (m) {
      n = new RegExp("^" + E + "$(?!\\s)", T);
    }
    if (g) {
      r = h.lastIndex;
    }
    o = p.call(_ ? n : h, S);
    if (_) {
      if (o) {
        o.input = o.input.slice(x);
        o[0] = o[0].slice(x);
        o.index = h.lastIndex;
        h.lastIndex += o[0].length;
      } else {
        h.lastIndex = 0;
      }
    } else if (g && o) {
      h.lastIndex = h.global ? o.index + o[0].length : r;
    }
    if (m && o && o.length > 1) {
      f.call(o[0], n, function () {
        for (s = 1; s < arguments.length - 2; s++) {
          if (arguments[s] === undefined) {
            o[s] = undefined;
          }
        }
      });
    }
    if (o && v) {
      o.groups = a = c(null);
      s = 0;
      for (; s < v.length; s++) {
        a[(l = v[s])[0]] = o[l[1]];
      }
    }
    return o;
  };
}
module.exports = d;