var t = require("./6626.js");
var u = require("./1058.js");
var o = require(/*webcrack:missing*/"./3234.js");
var i = require(/*webcrack:missing*/"./6918.js");
function c(n, r = 0) {
  return (0, o.e)(function (e, t) {
    e.subscribe((0, i.x)(t, function (e) {
      return (0, u.f)(t, n, function () {
        return t.next(e);
      }, r);
    }, function () {
      return (0, u.f)(t, n, function () {
        return t.complete();
      }, r);
    }, function (e) {
      return (0, u.f)(t, n, function () {
        return t.error(e);
      }, r);
    }));
  });
}
function f(n, r = 0) {
  return (0, o.e)(function (e, t) {
    t.add(n.schedule(function () {
      return e.subscribe(t);
    }, r));
  });
}
var a = require(/*webcrack:missing*/"./4040.js");
var l = require("./7521.js");
var s = require(/*webcrack:missing*/"./6559.js");
function v(n, r) {
  if (!n) {
    throw new Error("Iterable cannot be null");
  }
  return new a.y(function (e) {
    (0, u.f)(e, r, function () {
      var t = n[Symbol.asyncIterator]();
      (0, u.f)(e, r, function () {
        t.next().then(function (n) {
          if (n.done) {
            e.complete();
          } else {
            e.next(n.value);
          }
        });
      }, 0, true);
    });
  });
}
var d = require("./6427.js");
var b = require("./2576.js");
var h = require("./2862.js");
var p = require("./7357.js");
var m = require("./982.js");
var y = require("./5373.js");
var x = require("./2103.js");
function w(n, r) {
  if (n != null) {
    if ((0, d.c)(n)) {
      return function (n, r) {
        return (0, t.Xf)(n).pipe(f(r), c(r));
      }(n, r);
    }
    if ((0, h.z)(n)) {
      return function (n, r) {
        return new a.y(function (e) {
          var t = 0;
          return r.schedule(function () {
            if (t === n.length) {
              e.complete();
            } else {
              e.next(n[t++]);
              if (!e.closed) {
                this.schedule();
              }
            }
          });
        });
      }(n, r);
    }
    if ((0, b.t)(n)) {
      return function (n, r) {
        return (0, t.Xf)(n).pipe(f(r), c(r));
      }(n, r);
    }
    if ((0, m.D)(n)) {
      return v(n, r);
    }
    if ((0, p.T)(n)) {
      return function (n, r) {
        return new a.y(function (e) {
          var t;
          (0, u.f)(e, r, function () {
            t = n[l.h]();
            (0, u.f)(e, r, function () {
              var n;
              var r;
              var u;
              try {
                r = (n = t.next()).value;
                u = n.done;
              } catch (n) {
                e.error(n);
                return;
              }
              if (u) {
                e.complete();
              } else {
                e.next(r);
              }
            }, 0, true);
          });
          return function () {
            return (0, s.m)(t == null ? undefined : t.return) && t.return();
          };
        });
      }(n, r);
    }
    if ((0, x.L)(n)) {
      return function (n, r) {
        return v((0, x.Q)(n), r);
      }(n, r);
    }
  }
  throw (0, y.z)(n);
}
export function D(n, r) {
  if (r) {
    return w(n, r);
  } else {
    return (0, t.Xf)(n);
  }
}