var r = require("./262.js");
var o = require(/*webcrack:missing*/"./9.js");
var i = require(/*webcrack:missing*/"./10.js");
var a = require(/*webcrack:missing*/"./48.js");
var u = require(/*webcrack:missing*/"./47.js");
var c = require(/*webcrack:missing*/"./46.js");
var s = require("./263.js");
var f = require("./265.js");
var l = require("./266.js");
var d = require(/*webcrack:missing*/"./8.js")("replace");
var h = Math.max;
var p = Math.min;
var v = "a".replace(/./, "$0") === "$0";
var y = !!/./[d] && /./[d]("a", "$0") === "";
r("replace", function (e, t, n) {
  var r = y ? "$" : "$0";
  return [function (e, n) {
    var r = c(this);
    var o = e == null ? undefined : e[d];
    if (o !== undefined) {
      return o.call(e, r, n);
    } else {
      return t.call(String(r), e, n);
    }
  }, function (e, o) {
    if (typeof o == "string" && o.indexOf(r) === -1 && o.indexOf("$<") === -1) {
      var c = n(t, this, e, o);
      if (c.done) {
        return c.value;
      }
    }
    var d = i(this);
    var v = String(e);
    var y = typeof o == "function";
    if (!y) {
      o = String(o);
    }
    var m = d.global;
    if (m) {
      var g = d.unicode;
      d.lastIndex = 0;
    }
    var b = [];
    for (;;) {
      var w = l(d, v);
      if (w === null) {
        break;
      }
      b.push(w);
      if (!m) {
        break;
      }
      if (String(w[0]) === "") {
        d.lastIndex = s(v, a(d.lastIndex), g);
      }
    }
    var _;
    var x = "";
    var S = 0;
    for (var E = 0; E < b.length; E++) {
      w = b[E];
      var I = String(w[0]);
      var N = h(p(u(w.index), v.length), 0);
      var R = [];
      for (var j = 1; j < w.length; j++) {
        R.push((_ = w[j]) === undefined ? _ : String(_));
      }
      var A = w.groups;
      if (y) {
        var O = [I].concat(R, N, v);
        if (A !== undefined) {
          O.push(A);
        }
        var T = String(o.apply(undefined, O));
      } else {
        T = f(I, v, N, R, A, o);
      }
      if (N >= S) {
        x += v.slice(S, N) + T;
        S = N + I.length;
      }
    }
    return x + v.slice(S);
  }];
}, !!o(function () {
  var e = /./;
  e.exec = function () {
    var e = [];
    e.groups = {
      a: "7"
    };
    return e;
  };
  return "".replace(e, "$<a>") !== "7";
}) || !v || y);