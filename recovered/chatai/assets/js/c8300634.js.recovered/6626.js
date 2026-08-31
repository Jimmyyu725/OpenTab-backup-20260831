var t = require(/*webcrack:missing*/"./3056.js");
var u = require("./2862.js");
var o = require("./2576.js");
var i = require(/*webcrack:missing*/"./4040.js");
var c = require("./6427.js");
var f = require("./982.js");
var a = require("./5373.js");
var l = require("./7357.js");
var s = require("./2103.js");
var v = require(/*webcrack:missing*/"./6559.js");
var d = require(/*webcrack:missing*/"./1377.js");
var b = require(/*webcrack:missing*/"./1641.js");
export function Xf(n) {
  if (n instanceof i.y) {
    return n;
  }
  if (n != null) {
    if ((0, c.c)(n)) {
      y = n;
      return new i.y(function (n) {
        var r = y[b.L]();
        if ((0, v.m)(r.subscribe)) {
          return r.subscribe(n);
        }
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
      });
    }
    if ((0, u.z)(n)) {
      m = n;
      return new i.y(function (n) {
        for (var r = 0; r < m.length && !n.closed; r++) {
          n.next(m[r]);
        }
        n.complete();
      });
    }
    if ((0, o.t)(n)) {
      h = n;
      return new i.y(function (n) {
        h.then(function (r) {
          if (!n.closed) {
            n.next(r);
            n.complete();
          }
        }, function (r) {
          return n.error(r);
        }).then(null, d.h);
      });
    }
    if ((0, f.D)(n)) {
      return p(n);
    }
    if ((0, l.T)(n)) {
      e = n;
      return new i.y(function (n) {
        var r;
        var u;
        try {
          for (var o = (0, t.XA)(e), i = o.next(); !i.done; i = o.next()) {
            var c = i.value;
            n.next(c);
            if (n.closed) {
              return;
            }
          }
        } catch (n) {
          r = {
            error: n
          };
        } finally {
          try {
            if (i && !i.done && (u = o.return)) {
              u.call(o);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
        n.complete();
      });
    }
    if ((0, s.L)(n)) {
      r = n;
      return p((0, s.Q)(r));
    }
  }
  var r;
  var e;
  var h;
  var m;
  var y;
  throw (0, a.z)(n);
}
function p(n) {
  return new i.y(function (r) {
    (function (n, r) {
      var e;
      var u;
      var o;
      var i;
      return (0, t.mG)(this, undefined, undefined, function () {
        var c;
        var f;
        return (0, t.Jh)(this, function (a) {
          switch (a.label) {
            case 0:
              a.trys.push([0, 5, 6, 11]);
              e = (0, t.KL)(n);
              a.label = 1;
            case 1:
              return [4, e.next()];
            case 2:
              if ((u = a.sent()).done) {
                return [3, 4];
              }
              c = u.value;
              r.next(c);
              if (r.closed) {
                return [2];
              }
              a.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              f = a.sent();
              o = {
                error: f
              };
              return [3, 11];
            case 6:
              a.trys.push([6,, 9, 10]);
              if (u && !u.done && (i = e.return)) {
                return [4, i.call(e)];
              } else {
                return [3, 8];
              }
            case 7:
              a.sent();
              a.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (o) {
                throw o.error;
              }
              return [7];
            case 10:
              return [7];
            case 11:
              r.complete();
              return [2];
          }
        });
      });
    })(n, r).catch(function (n) {
      return r.error(n);
    });
  });
}