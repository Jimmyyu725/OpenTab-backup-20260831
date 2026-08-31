var r = require("./16.js");
var i = require("./4.js");
var o = require("./60.js");
var a = require("./399.js");
var s = require("./20.js");
var c = require("./21.js").f;
var u = require("./101.js").f;
var l = require("./400.js");
var f = require("./216.js");
var h = require("./217.js");
var p = require("./26.js");
var d = require("./9.js");
var m = require("./11.js");
var g = require("./49.js").enforce;
var y = require("./102.js");
var b = require("./8.js");
var w = require("./218.js");
var v = require("./219.js");
var _ = b("match");
var E = i.RegExp;
var x = E.prototype;
var T = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var I = /a/g;
var O = /a/g;
var S = new E(I) !== I;
var A = h.UNSUPPORTED_Y;
var N = r && (!S || A || w || v || d(function () {
  O[_] = false;
  return E(I) != I || E(O) == O || E(I, "i") != "/a/i";
}));
if (o("RegExp", N)) {
  var j = function (t, e) {
    var n;
    var r;
    var i;
    var o;
    var c;
    var u;
    var h = this instanceof j;
    var p = l(t);
    var d = e === undefined;
    var y = [];
    var b = t;
    if (!h && p && d && t.constructor === j) {
      return t;
    }
    if (p || t instanceof j) {
      t = t.source;
      if (d) {
        e = "flags" in b ? b.flags : f.call(b);
      }
    }
    t = t === undefined ? "" : String(t);
    e = e === undefined ? "" : String(e);
    b = t;
    if (w && "dotAll" in I && (r = !!e && e.indexOf("s") > -1)) {
      e = e.replace(/s/g, "");
    }
    n = e;
    if (A && "sticky" in I && (i = !!e && e.indexOf("y") > -1)) {
      e = e.replace(/y/g, "");
    }
    if (v) {
      t = (o = function (t) {
        var e;
        for (var n = t.length, r = 0, i = "", o = [], a = {}, s = false, c = false, u = 0, l = ""; r <= n; r++) {
          if ((e = t.charAt(r)) === "\\") {
            e += t.charAt(++r);
          } else if (e === "]") {
            s = false;
          } else if (!s) {
            switch (true) {
              case e === "[":
                s = true;
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
                if (l === "" || m(a, l)) {
                  throw new SyntaxError("Invalid capture group name");
                }
                a[l] = true;
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
    c = a(E(t, e), h ? this : x, j);
    if (r || i || y.length) {
      u = g(c);
      if (r) {
        u.dotAll = true;
        u.raw = j(function (t) {
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
        s(c, "source", b === "" ? "(?:)" : b);
      } catch (t) {}
    }
    return c;
  };
  var C = function (t) {
    if (!(t in j)) {
      c(j, t, {
        configurable: true,
        get: function () {
          return E[t];
        },
        set: function (e) {
          E[t] = e;
        }
      });
    }
  };
  for (var D = u(E), k = 0; D.length > k;) {
    C(D[k++]);
  }
  x.constructor = j;
  j.prototype = x;
  p(i, "RegExp", j);
}
y("RegExp");