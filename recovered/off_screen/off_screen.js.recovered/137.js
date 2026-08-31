var r;
var o;
var i = require("./216.js");
var c = require("./217.js");
var u = require("./54.js");
var a = require("./259.js");
var s = require("./49.js").get;
var f = require("./218.js");
var l = require("./219.js");
var p = RegExp.prototype.exec;
var v = u("native-string-replace", String.prototype.replace);
var d = p;
r = /a/;
o = /b*/g;
p.call(r, "a");
p.call(o, "a");
var h = r.lastIndex !== 0 || o.lastIndex !== 0;
var y = c.UNSUPPORTED_Y || c.BROKEN_CARET;
var g = /()??/.exec("")[1] !== undefined;
if (h || g || y || f || l) {
  d = function (t) {
    var n;
    var e;
    var r;
    var o;
    var c;
    var u;
    var f;
    var l = this;
    var m = s(l);
    var x = m.raw;
    if (x) {
      x.lastIndex = l.lastIndex;
      n = d.call(x, t);
      l.lastIndex = x.lastIndex;
      return n;
    }
    var b = m.groups;
    var w = y && l.sticky;
    var O = i.call(l);
    var S = l.source;
    var j = 0;
    var E = t;
    if (w) {
      if ((O = O.replace("y", "")).indexOf("g") === -1) {
        O += "g";
      }
      E = String(t).slice(l.lastIndex);
      if (l.lastIndex > 0 && (!l.multiline || l.multiline && t[l.lastIndex - 1] !== "\n")) {
        S = "(?: " + S + ")";
        E = " " + E;
        j++;
      }
      e = new RegExp("^(?:" + S + ")", O);
    }
    if (g) {
      e = new RegExp("^" + S + "$(?!\\s)", O);
    }
    if (h) {
      r = l.lastIndex;
    }
    o = p.call(w ? e : l, E);
    if (w) {
      if (o) {
        o.input = o.input.slice(j);
        o[0] = o[0].slice(j);
        o.index = l.lastIndex;
        l.lastIndex += o[0].length;
      } else {
        l.lastIndex = 0;
      }
    } else if (h && o) {
      l.lastIndex = l.global ? o.index + o[0].length : r;
    }
    if (g && o && o.length > 1) {
      v.call(o[0], e, function () {
        for (c = 1; c < arguments.length - 2; c++) {
          if (arguments[c] === undefined) {
            o[c] = undefined;
          }
        }
      });
    }
    if (o && b) {
      o.groups = u = a(null);
      c = 0;
      for (; c < b.length; c++) {
        u[(f = b[c])[0]] = o[f[1]];
      }
    }
    return o;
  };
}
module.exports = d;