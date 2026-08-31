var r = require("./262.js");
var o = require("./9.js");
var i = require("./10.js");
var s = require("./48.js");
var a = require("./47.js");
var u = require("./46.js");
var c = require("./263.js");
var f = require("./265.js");
var l = require("./266.js");
var h = require("./8.js")("replace");
var p = Math.max;
var d = Math.min;
var y = "a".replace(/./, "$0") === "$0";
var m = !!/./[h] && /./[h]("a", "$0") === "";
r("replace", function (t, e, n) {
  var r = m ? "$" : "$0";
  return [function (t, n) {
    var r = u(this);
    var o = t == null ? undefined : t[h];
    if (o !== undefined) {
      return o.call(t, r, n);
    } else {
      return e.call(String(r), t, n);
    }
  }, function (t, o) {
    if (typeof o == "string" && o.indexOf(r) === -1 && o.indexOf("$<") === -1) {
      var u = n(e, this, t, o);
      if (u.done) {
        return u.value;
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
        h.lastIndex = c(y, s(h.lastIndex), v);
      }
    }
    var _;
    var E = "";
    var T = 0;
    for (var x = 0; x < b.length; x++) {
      w = b[x];
      var O = String(w[0]);
      var I = p(d(a(w.index), y.length), 0);
      var S = [];
      for (var A = 1; A < w.length; A++) {
        S.push((_ = w[A]) === undefined ? _ : String(_));
      }
      var D = w.groups;
      if (m) {
        var N = [O].concat(S, I, y);
        if (D !== undefined) {
          N.push(D);
        }
        var C = String(o.apply(undefined, N));
      } else {
        C = f(O, y, I, S, D, o);
      }
      if (I >= T) {
        E += y.slice(T, I) + C;
        T = I + O.length;
      }
    }
    return E + y.slice(T);
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