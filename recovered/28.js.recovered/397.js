var r = require(/*webcrack:missing*/"./16.js");
var a = require(/*webcrack:missing*/"./4.js");
var o = require(/*webcrack:missing*/"./60.js");
var i = require("./399.js");
var s = require(/*webcrack:missing*/"./20.js");
var c = require(/*webcrack:missing*/"./21.js").f;
var u = require(/*webcrack:missing*/"./101.js").f;
var l = require("./400.js");
var d = require(/*webcrack:missing*/"./216.js");
var g = require(/*webcrack:missing*/"./217.js");
var f = require(/*webcrack:missing*/"./26.js");
var p = require(/*webcrack:missing*/"./9.js");
var m = require(/*webcrack:missing*/"./11.js");
var h = require(/*webcrack:missing*/"./49.js").enforce;
var w = require(/*webcrack:missing*/"./102.js");
var y = require(/*webcrack:missing*/"./8.js");
var b = require(/*webcrack:missing*/"./218.js");
var v = require(/*webcrack:missing*/"./219.js");
var E = y("match");
var k = a.RegExp;
var S = k.prototype;
var x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var O = /a/g;
var C = /a/g;
var j = new k(O) !== O;
var _ = g.UNSUPPORTED_Y;
var A = r && (!j || _ || b || v || p(function () {
  C[E] = false;
  return k(O) != O || k(C) == C || k(O, "i") != "/a/i";
}));
if (o("RegExp", A)) {
  var q = function (e, t) {
    var n;
    var r;
    var a;
    var o;
    var c;
    var u;
    var g = this instanceof q;
    var f = l(e);
    var p = t === undefined;
    var w = [];
    var y = e;
    if (!g && f && p && e.constructor === q) {
      return e;
    }
    if (f || e instanceof q) {
      e = e.source;
      if (p) {
        t = "flags" in y ? y.flags : d.call(y);
      }
    }
    e = e === undefined ? "" : String(e);
    t = t === undefined ? "" : String(t);
    y = e;
    if (b && "dotAll" in O && (r = !!t && t.indexOf("s") > -1)) {
      t = t.replace(/s/g, "");
    }
    n = t;
    if (_ && "sticky" in O && (a = !!t && t.indexOf("y") > -1)) {
      t = t.replace(/y/g, "");
    }
    if (v) {
      e = (o = function (e) {
        var t;
        for (var n = e.length, r = 0, a = "", o = [], i = {}, s = false, c = false, u = 0, l = ""; r <= n; r++) {
          if ((t = e.charAt(r)) === "\\") {
            t += e.charAt(++r);
          } else if (t === "]") {
            s = false;
          } else if (!s) {
            switch (true) {
              case t === "[":
                s = true;
                break;
              case t === "(":
                if (x.test(e.slice(r + 1))) {
                  r += 2;
                  c = true;
                }
                a += t;
                u++;
                continue;
              case t === ">" && c:
                if (l === "" || m(i, l)) {
                  throw new SyntaxError("Invalid capture group name");
                }
                i[l] = true;
                o.push([l, u]);
                c = false;
                l = "";
                continue;
            }
          }
          if (c) {
            l += t;
          } else {
            a += t;
          }
        }
        return [a, o];
      }(e))[0];
      w = o[1];
    }
    c = i(k(e, t), g ? this : S, q);
    if (r || a || w.length) {
      u = h(c);
      if (r) {
        u.dotAll = true;
        u.raw = q(function (e) {
          var t;
          for (var n = e.length, r = 0, a = "", o = false; r <= n; r++) {
            if ((t = e.charAt(r)) !== "\\") {
              if (o || t !== ".") {
                if (t === "[") {
                  o = true;
                } else if (t === "]") {
                  o = false;
                }
                a += t;
              } else {
                a += "[\\s\\S]";
              }
            } else {
              a += t + e.charAt(++r);
            }
          }
          return a;
        }(e), n);
      }
      if (a) {
        u.sticky = true;
      }
      if (w.length) {
        u.groups = w;
      }
    }
    if (e !== y) {
      try {
        s(c, "source", y === "" ? "(?:)" : y);
      } catch (e) {}
    }
    return c;
  };
  var L = function (e) {
    if (!(e in q)) {
      c(q, e, {
        configurable: true,
        get: function () {
          return k[e];
        },
        set: function (t) {
          k[e] = t;
        }
      });
    }
  };
  for (var I = u(k), R = 0; I.length > R;) {
    L(I[R++]);
  }
  S.constructor = q;
  q.prototype = S;
  f(a, "RegExp", q);
}
w("RegExp");