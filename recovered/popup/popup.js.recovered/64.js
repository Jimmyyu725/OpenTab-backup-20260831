var r = require("./262.js");
var i = require("./9.js");
var o = require("./10.js");
var s = require("./48.js");
var a = require("./47.js");
var c = require("./46.js");
var u = require("./263.js");
var l = require("./265.js");
var h = require("./266.js");
var p = require("./8.js")("replace");
var d = Math.max;
var f = Math.min;
var g = "a".replace(/./, "$0") === "$0";
var y = !!/./[p] && /./[p]("a", "$0") === "";
r("replace", function (t, e, n) {
  var r = y ? "$" : "$0";
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
    var y = typeof i == "function";
    if (!y) {
      i = String(i);
    }
    var m = p.global;
    if (m) {
      var b = p.unicode;
      p.lastIndex = 0;
    }
    var v = [];
    while (true) {
      var w = h(p, g);
      if (w === null) {
        break;
      }
      v.push(w);
      if (!m) {
        break;
      }
      if (String(w[0]) === "") {
        p.lastIndex = u(g, s(p.lastIndex), b);
      }
    }
    var x;
    var _ = "";
    var O = 0;
    for (var T = 0; T < v.length; T++) {
      w = v[T];
      var S = String(w[0]);
      var E = d(f(a(w.index), g.length), 0);
      var j = [];
      for (var k = 1; k < w.length; k++) {
        j.push((x = w[k]) === undefined ? x : String(x));
      }
      var A = w.groups;
      if (y) {
        var C = [S].concat(j, E, g);
        if (A !== undefined) {
          C.push(A);
        }
        var I = String(i.apply(undefined, C));
      } else {
        I = l(S, g, E, j, A, i);
      }
      if (E >= O) {
        _ += g.slice(O, E) + I;
        O = E + S.length;
      }
    }
    return _ + g.slice(O);
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
}) || !g || y);