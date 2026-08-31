var r = require("./262.js");
var o = require("./9.js");
var i = require("./10.js");
var c = require("./48.js");
var u = require("./47.js");
var a = require("./46.js");
var s = require("./263.js");
var f = require("./265.js");
var l = require("./266.js");
var p = require("./8.js")("replace");
var v = Math.max;
var d = Math.min;
var h = "a".replace(/./, "$0") === "$0";
var y = !!/./[p] && /./[p]("a", "$0") === "";
r("replace", function (t, n, e) {
  var r = y ? "$" : "$0";
  return [function (t, e) {
    var r = a(this);
    var o = t == null ? undefined : t[p];
    if (o !== undefined) {
      return o.call(t, r, e);
    } else {
      return n.call(String(r), t, e);
    }
  }, function (t, o) {
    if (typeof o == "string" && o.indexOf(r) === -1 && o.indexOf("$<") === -1) {
      var a = e(n, this, t, o);
      if (a.done) {
        return a.value;
      }
    }
    var p = i(this);
    var h = String(t);
    var y = typeof o == "function";
    if (!y) {
      o = String(o);
    }
    var g = p.global;
    if (g) {
      var m = p.unicode;
      p.lastIndex = 0;
    }
    var x = [];
    while (true) {
      var b = l(p, h);
      if (b === null) {
        break;
      }
      x.push(b);
      if (!g) {
        break;
      }
      if (String(b[0]) === "") {
        p.lastIndex = s(h, c(p.lastIndex), m);
      }
    }
    var w;
    var O = "";
    var S = 0;
    for (var j = 0; j < x.length; j++) {
      b = x[j];
      var E = String(b[0]);
      var T = v(d(u(b.index), h.length), 0);
      var _ = [];
      for (var A = 1; A < b.length; A++) {
        _.push((w = b[A]) === undefined ? w : String(w));
      }
      var P = b.groups;
      if (y) {
        var I = [E].concat(_, T, h);
        if (P !== undefined) {
          I.push(P);
        }
        var L = String(o.apply(undefined, I));
      } else {
        L = f(E, h, T, _, P, o);
      }
      if (T >= S) {
        O += h.slice(S, T) + L;
        S = T + E.length;
      }
    }
    return O + h.slice(S);
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
}) || !h || y);