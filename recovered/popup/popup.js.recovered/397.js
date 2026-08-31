var r = require("./16.js");
var i = require("./4.js");
var o = require("./60.js");
var s = require("./399.js");
var a = require("./20.js");
var c = require("./21.js").f;
var u = require("./101.js").f;
var l = require("./400.js");
var h = require("./216.js");
var p = require("./217.js");
var d = require("./26.js");
var f = require("./9.js");
var g = require("./11.js");
var y = require("./49.js").enforce;
var m = require("./102.js");
var b = require("./8.js");
var v = require("./218.js");
var w = require("./219.js");
var x = b("match");
var _ = i.RegExp;
var O = _.prototype;
var T = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var S = /a/g;
var E = /a/g;
var j = new _(S) !== S;
var k = p.UNSUPPORTED_Y;
var A = r && (!j || k || v || w || f(function () {
  E[x] = false;
  return _(S) != S || _(E) == E || _(S, "i") != "/a/i";
}));
if (o("RegExp", A)) {
  var C = function (t, e) {
    var n;
    var r;
    var i;
    var o;
    var c;
    var u;
    var p = this instanceof C;
    var d = l(t);
    var f = e === undefined;
    var m = [];
    var b = t;
    if (!p && d && f && t.constructor === C) {
      return t;
    }
    if (d || t instanceof C) {
      t = t.source;
      if (f) {
        e = "flags" in b ? b.flags : h.call(b);
      }
    }
    t = t === undefined ? "" : String(t);
    e = e === undefined ? "" : String(e);
    b = t;
    if (v && "dotAll" in S && (r = !!e && e.indexOf("s") > -1)) {
      e = e.replace(/s/g, "");
    }
    n = e;
    if (k && "sticky" in S && (i = !!e && e.indexOf("y") > -1)) {
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
                if (T.test(t.slice(r + 1))) {
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
      m = o[1];
    }
    c = s(_(t, e), p ? this : O, C);
    if (r || i || m.length) {
      u = y(c);
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
  var I = function (t) {
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
  for (var P = u(_), D = 0; P.length > D;) {
    I(P[D++]);
  }
  O.constructor = C;
  C.prototype = O;
  d(i, "RegExp", C);
}
m("RegExp");