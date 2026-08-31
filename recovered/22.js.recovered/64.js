var r = require("./262.js");
var i = require(/*webcrack:missing*/"./9.js");
var o = require(/*webcrack:missing*/"./10.js");
var s = require(/*webcrack:missing*/"./48.js");
var a = require(/*webcrack:missing*/"./47.js");
var c = require(/*webcrack:missing*/"./46.js");
var u = require("./263.js");
var l = require("./265.js");
var h = require("./266.js");
var p = require(/*webcrack:missing*/"./8.js")("replace");
var f = Math.max;
var d = Math.min;
var g = "a".replace(/./, "$0") === "$0";
var m = !!/./[p] && /./[p]("a", "$0") === "";
r("replace", function (t, e, n) {
  var r = m ? "$" : "$0";
  return [function (t, n) {
    var r = c(this);
    var i = t == null ? undefined : t[p];
    if (i !== undefined) {
      return i.call(t, r, n);
    } else {
      return e.call(String(r), t, n);
    }
  }, function (t, i) {
    if (typeof i == "string" && i.indexOf(r) === -1 && i.indexOf("$<") === -1) {
      var c = n(e, this, t, i);
      if (c.done) {
        return c.value;
      }
    }
    var p = o(this);
    var g = String(t);
    var m = typeof i == "function";
    if (!m) {
      i = String(i);
    }
    var y = p.global;
    if (y) {
      var b = p.unicode;
      p.lastIndex = 0;
    }
    var v = [];
    for (;;) {
      var w = h(p, g);
      if (w === null) {
        break;
      }
      v.push(w);
      if (!y) {
        break;
      }
      if (String(w[0]) === "") {
        p.lastIndex = u(g, s(p.lastIndex), b);
      }
    }
    var x;
    var _ = "";
    var T = 0;
    for (var E = 0; E < v.length; E++) {
      w = v[E];
      var O = String(w[0]);
      var S = f(d(a(w.index), g.length), 0);
      var I = [];
      for (var A = 1; A < w.length; A++) {
        I.push((x = w[A]) === undefined ? x : String(x));
      }
      var k = w.groups;
      if (m) {
        var C = [O].concat(I, S, g);
        if (k !== undefined) {
          C.push(k);
        }
        var D = String(i.apply(undefined, C));
      } else {
        D = l(O, g, S, I, k, i);
      }
      if (S >= T) {
        _ += g.slice(T, S) + D;
        T = S + O.length;
      }
    }
    return _ + g.slice(T);
  }];
}, !!i(function () {
  var t = /./;
  t.exec = function () {
    var t = [];
    t.groups = {
      a: "7"
    };
    return t;
  };
  return "".replace(t, "$<a>") !== "7";
}) || !g || m);