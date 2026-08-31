var r = require("./262.js");
var i = require("./9.js");
var o = require("./10.js");
var a = require("./48.js");
var s = require("./47.js");
var c = require("./46.js");
var u = require("./263.js");
var l = require("./265.js");
var f = require("./266.js");
var h = require("./8.js")("replace");
var p = Math.max;
var d = Math.min;
var m = "a".replace(/./, "$0") === "$0";
var g = !!/./[h] && /./[h]("a", "$0") === "";
r("replace", function (t, e, n) {
  var r = g ? "$" : "$0";
  return [function (t, n) {
    var r = c(this);
    var i = t == null ? undefined : t[h];
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
    var h = o(this);
    var m = String(t);
    var g = typeof i == "function";
    if (!g) {
      i = String(i);
    }
    var y = h.global;
    if (y) {
      var b = h.unicode;
      h.lastIndex = 0;
    }
    var w = [];
    while (true) {
      var v = f(h, m);
      if (v === null) {
        break;
      }
      w.push(v);
      if (!y) {
        break;
      }
      if (String(v[0]) === "") {
        h.lastIndex = u(m, a(h.lastIndex), b);
      }
    }
    var _;
    var E = "";
    var x = 0;
    for (var T = 0; T < w.length; T++) {
      v = w[T];
      var I = String(v[0]);
      var O = p(d(s(v.index), m.length), 0);
      var S = [];
      for (var A = 1; A < v.length; A++) {
        S.push((_ = v[A]) === undefined ? _ : String(_));
      }
      var N = v.groups;
      if (g) {
        var j = [I].concat(S, O, m);
        if (N !== undefined) {
          j.push(N);
        }
        var C = String(i.apply(undefined, j));
      } else {
        C = l(I, m, O, S, N, i);
      }
      if (O >= x) {
        E += m.slice(x, O) + C;
        x = O + I.length;
      }
    }
    return E + m.slice(x);
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
}) || !m || g);