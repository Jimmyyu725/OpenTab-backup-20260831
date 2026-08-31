var r = require(/*webcrack:missing*/"./16.js");
var i = require(/*webcrack:missing*/"./4.js");
var o = require(/*webcrack:missing*/"./60.js");
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
var m = require(/*webcrack:missing*/"./49.js").enforce;
var y = require(/*webcrack:missing*/"./102.js");
var b = require(/*webcrack:missing*/"./8.js");
var v = require("./218.js");
var w = require("./219.js");
var x = b("match");
var _ = i.RegExp;
var T = _.prototype;
var E = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var O = /a/g;
var S = /a/g;
var I = new _(O) !== O;
var A = p.UNSUPPORTED_Y;
var k = r && (!I || A || v || w || d(function () {
  S[x] = false;
  return _(O) != O || _(S) == S || _(O, "i") != "/a/i";
}));
if (o("RegExp", k)) {
  var C = function (t, e) {
    var n;
    var r;
    var i;
    var o;
    var c;
    var u;
    var p = this instanceof C;
    var f = l(t);
    var d = e === undefined;
    var y = [];
    var b = t;
    if (!p && f && d && t.constructor === C) {
      return t;
    }
    if (f || t instanceof C) {
      t = t.source;
      if (d) {
        e = "flags" in b ? b.flags : h.call(b);
      }
    }
    t = t === undefined ? "" : String(t);
    e = e === undefined ? "" : String(e);
    b = t;
    if (v && "dotAll" in O && (r = !!e && e.indexOf("s") > -1)) {
      e = e.replace(/s/g, "");
    }
    n = e;
    if (A && "sticky" in O && (i = !!e && e.indexOf("y") > -1)) {
      e = e.replace(/y/g, "");
    }
    if (w) {
      t = (o = function (t) {
        var e;
        for (var n = t.length, r = 0, i = "", o = [], s = {}, a = false, c = false, u = 0, l = ""; r <= n; r++) {
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
                if (E.test(t.slice(r + 1))) {
                  r += 2;
                  c = true;
                }
                i += e;
                u++;
                continue;
              case e === ">" && c:
                if (l === "" || g(s, l)) {
                  throw new SyntaxError("Invalid capture group name");
                }
                s[l] = true;
                o.push([l, u]);
                c = false;
                l = "";
                continue;
            }
          }
          if (c) {
            l += e;
          } else {
            i += e;
          }
        }
        return [i, o];
      }(t))[0];
      y = o[1];
    }
    c = s(_(t, e), p ? this : T, C);
    if (r || i || y.length) {
      u = m(c);
      if (r) {
        u.dotAll = true;
        u.raw = C(function (t) {
          var e;
          for (var n = t.length, r = 0, i = "", o = false; r <= n; r++) {
            if ((e = t.charAt(r)) !== "\\") {
              if (o || e !== ".") {
                if (e === "[") {
                  o = true;
                } else if (e === "]") {
                  o = false;
                }
                i += e;
              } else {
                i += "[\\s\\S]";
              }
            } else {
              i += e + t.charAt(++r);
            }
          }
          return i;
        }(t), n);
      }
      if (i) {
        u.sticky = true;
      }
      if (y.length) {
        u.groups = y;
      }
    }
    if (t !== b) {
      try {
        a(c, "source", b === "" ? "(?:)" : b);
      } catch (t) {}
    }
    return c;
  };
  var D = function (t) {
    if (!(t in C)) {
      c(C, t, {
        configurable: true,
        get: function () {
          return _[t];
        },
        set: function (e) {
          _[t] = e;
        }
      });
    }
  };
  for (var j = u(_), N = 0; j.length > N;) {
    D(j[N++]);
  }
  T.constructor = C;
  C.prototype = T;
  f(i, "RegExp", C);
}
y("RegExp");