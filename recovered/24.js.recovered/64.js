var r = require("./262.js");
var o = require(/*webcrack:missing*/"./9.js");
var i = require(/*webcrack:missing*/"./10.js");
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
var y = !!/./[p] && /./[p]("a", "$0") === "";
r("replace", function (t, e, n) {
  var r = y ? "$" : "$0";
  return [function (t, n) {
    var r = c(this);
    var o = t == null ? undefined : t[p];
    if (o !== undefined) {
      return o.call(t, r, n);
    } else {
      return e.call(String(r), t, n);
    }
  }, function (t, o) {
    if (typeof o == "string" && o.indexOf(r) === -1 && o.indexOf("$<") === -1) {
      var c = n(e, this, t, o);
      if (c.done) {
        return c.value;
      }
    }
    var p = i(this);
    var g = String(t);
    var y = typeof o == "function";
    if (!y) {
      o = String(o);
    }
    var m = p.global;
    if (m) {
      var b = p.unicode;
      p.lastIndex = 0;
    }
    var w = [];
    for (;;) {
      var v = h(p, g);
      if (v === null) {
        break;
      }
      w.push(v);
      if (!m) {
        break;
      }
      if (String(v[0]) === "") {
        p.lastIndex = u(g, s(p.lastIndex), b);
      }
    }
    var _;
    var T = "";
    var E = 0;
    for (var x = 0; x < w.length; x++) {
      v = w[x];
      var S = String(v[0]);
      var O = f(d(a(v.index), g.length), 0);
      var I = [];
      for (var A = 1; A < v.length; A++) {
        I.push((_ = v[A]) === undefined ? _ : String(_));
      }
      var k = v.groups;
      if (y) {
        var D = [S].concat(I, O, g);
        if (k !== undefined) {
          D.push(k);
        }
        var N = String(o.apply(undefined, D));
      } else {
        N = l(S, g, O, I, k, o);
      }
      if (O >= E) {
        T += g.slice(E, O) + N;
        E = O + S.length;
      }
    }
    return T + g.slice(E);
  }];
}, !!o(function () {
  var t = /./;
  t.exec = function () {
    var t = [];
    t.groups = {
      a: "7"
    };
    return t;
  };
  return "".replace(t, "$<a>") !== "7";
}) || !g || y);