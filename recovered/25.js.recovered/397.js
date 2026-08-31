var r = require(/*webcrack:missing*/"./16.js");
var o = require(/*webcrack:missing*/"./4.js");
var i = require(/*webcrack:missing*/"./60.js");
var s = require("./399.js");
var a = require(/*webcrack:missing*/"./20.js");
var c = require(/*webcrack:missing*/"./21.js").f;
var u = require(/*webcrack:missing*/"./101.js").f;
var l = require("./400.js");
var h = require("./216.js");
var p = require("./217.js");
var f = require(/*webcrack:missing*/"./26.js");
var d = require(/*webcrack:missing*/"./9.js");
var g = require(/*webcrack:missing*/"./11.js");
var y = require(/*webcrack:missing*/"./49.js").enforce;
var m = require(/*webcrack:missing*/"./102.js");
var b = require(/*webcrack:missing*/"./8.js");
var w = require("./218.js");
var v = require("./219.js");
var _ = b("match");
var T = o.RegExp;
var E = T.prototype;
var x = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var S = /a/g;
var O = /a/g;
var I = new T(S) !== S;
var A = p.UNSUPPORTED_Y;
var k = r && (!I || A || w || v || d(function () {
  O[_] = false;
  return T(S) != S || T(O) == O || T(S, "i") != "/a/i";
}));
if (i("RegExp", k)) {
  var D = function (t, e) {
    var n;
    var r;
    var o;
    var i;
    var c;
    var u;
    var p = this instanceof D;
    var f = l(t);
    var d = e === undefined;
    var m = [];
    var b = t;
    if (!p && f && d && t.constructor === D) {
      return t;
    }
    if (f || t instanceof D) {
      t = t.source;
      if (d) {
        e = "flags" in b ? b.flags : h.call(b);
      }
    }
    t = t === undefined ? "" : String(t);
    e = e === undefined ? "" : String(e);
    b = t;
    if (w && "dotAll" in S && (r = !!e && e.indexOf("s") > -1)) {
      e = e.replace(/s/g, "");
    }
    n = e;
    if (A && "sticky" in S && (o = !!e && e.indexOf("y") > -1)) {
      e = e.replace(/y/g, "");
    }
    if (v) {
      t = (i = function (t) {
        var e;
        for (var n = t.length, r = 0, o = "", i = [], s = {}, a = false, c = false, u = 0, l = ""; r <= n; r++) {
          if ((e = t.charAt(r)) === "\\") {
            e += t.charAt(++r);
          } else if (e === "]") {
            a = false;
          } else if (!a) {
            switch (true) {
              case e === "[":
                a = true;
                break;
              case e === "(":
                if (x.test(t.slice(r + 1))) {
                  r += 2;
                  c = true;
                }
                o += e;
                u++;
                continue;
              case e === ">" && c:
                if (l === "" || g(s, l)) {
                  throw new SyntaxError("Invalid capture group name");
                }
                s[l] = true;
                i.push([l, u]);
                c = false;
                l = "";
                continue;
            }
          }
          if (c) {
            l += e;
          } else {
            o += e;
          }
        }
        return [o, i];
      }(t))[0];
      m = i[1];
    }
    c = s(T(t, e), p ? this : E, D);
    if (r || o || m.length) {
      u = y(c);
      if (r) {
        u.dotAll = true;
        u.raw = D(function (t) {
          var e;
          for (var n = t.length, r = 0, o = "", i = false; r <= n; r++) {
            if ((e = t.charAt(r)) !== "\\") {
              if (i || e !== ".") {
                if (e === "[") {
                  i = true;
                } else if (e === "]") {
                  i = false;
                }
                o += e;
              } else {
                o += "[\\s\\S]";
              }
            } else {
              o += e + t.charAt(++r);
            }
          }
          return o;
        }(t), n);
      }
      if (o) {
        u.sticky = true;
      }
      if (m.length) {
        u.groups = m;
      }
    }
    if (t !== b) {
      try {
        a(c, "source", b === "" ? "(?:)" : b);
      } catch (t) {}
    }
    return c;
  };
  var N = function (t) {
    if (!(t in D)) {
      c(D, t, {
        configurable: true,
        get: function () {
          return T[t];
        },
        set: function (e) {
          T[t] = e;
        }
      });
    }
  };
  for (var C = u(T), P = 0; C.length > P;) {
    N(C[P++]);
  }
  E.constructor = D;
  D.prototype = E;
  f(o, "RegExp", D);
}
m("RegExp");