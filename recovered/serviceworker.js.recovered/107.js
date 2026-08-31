var r = require("./280.js");
var o = require("./8.js");
var i = require("./15.js");
var s = require("./57.js");
var a = require("./58.js");
var c = require("./56.js");
var u = require("./281.js");
var f = require("./283.js");
var l = require("./284.js");
var h = require("./11.js")("replace");
var p = Math.max;
var d = Math.min;
var y = "a".replace(/./, "$0") === "$0";
var m = !!/./[h] && /./[h]("a", "$0") === "";
r("replace", function (t, e, n) {
  var r = m ? "$" : "$0";
  return [function (t, n) {
    var r = c(this);
    var o = t == null ? undefined : t[h];
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
    var h = i(this);
    var y = String(t);
    var m = typeof o == "function";
    if (!m) {
      o = String(o);
    }
    var g = h.global;
    if (g) {
      var v = h.unicode;
      h.lastIndex = 0;
    }
    var b = [];
    while (true) {
      var w = l(h, y);
      if (w === null) {
        break;
      }
      b.push(w);
      if (!g) {
        break;
      }
      if (String(w[0]) === "") {
        h.lastIndex = u(y, s(h.lastIndex), v);
      }
    }
    var _;
    var x = "";
    var T = 0;
    for (var E = 0; E < b.length; E++) {
      w = b[E];
      var O = String(w[0]);
      var S = p(d(a(w.index), y.length), 0);
      var I = [];
      for (var A = 1; A < w.length; A++) {
        I.push((_ = w[A]) === undefined ? _ : String(_));
      }
      var N = w.groups;
      if (m) {
        var j = [O].concat(I, S, y);
        if (N !== undefined) {
          j.push(N);
        }
        var D = String(o.apply(undefined, j));
      } else {
        D = f(O, y, S, I, N, o);
      }
      if (S >= T) {
        x += y.slice(T, S) + D;
        T = S + O.length;
      }
    }
    return x + y.slice(T);
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
}) || !y || m);