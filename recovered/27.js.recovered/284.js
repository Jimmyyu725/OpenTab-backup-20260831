var e;
var o;
var i;
var c;
var u = require("./44.js");
var a = require("./65.js");
var f = require("./14.js");
var s = require("./62.js");
var p = require("./200.js");
var l = require("./99.js");
var v = require("./285.js");
var h = require("./143.js");
var y = require("./149.js");
var d = require("./287.js");
var g = require("./45.js");
var x = require("./52.js");
var m = require("./288.js");
var w = require("./201.js");
var b = require("./98.js");
var S = require("./289.js");
var j = require("./159.js");
var O = require("./202.js").set;
var T = require("./290.js");
var E = require("./204.js");
var P = require("./292.js");
var A = require("./81.js");
var L = require("./100.js");
var _ = require("./105.js");
var I = require("./192.js");
var k = require("./17.js");
var M = require("./294.js");
var R = require("./150.js");
var C = require("./199.js");
var F = k("species");
var N = "Promise";
var D = _.get;
var G = _.set;
var V = _.getterFor(N);
var z = p && p.prototype;
var H = p;
var U = z;
var W = f.TypeError;
var B = f.document;
var q = f.process;
var Y = A.f;
var J = Y;
var K = !!B && !!B.createEvent && !!f.dispatchEvent;
var X = typeof PromiseRejectionEvent == "function";
var Q = false;
var Z = I(N, function () {
  var t = w(H);
  var n = t !== String(H);
  if (!n && C === 66) {
    return true;
  }
  if (a && !U.finally) {
    return true;
  }
  if (C >= 51 && /native code/.test(t)) {
    return false;
  }
  var r = new H(function (t) {
    t(1);
  });
  function e(t) {
    t(function () {}, function () {});
  }
  (r.constructor = {})[F] = e;
  return !(Q = r.then(function () {}) instanceof e) || !n && M && !X;
});
var $ = Z || !S(function (t) {
  H.all(t).catch(function () {});
});
function tt(t) {
  var n;
  return !!g(t) && typeof (n = t.then) == "function" && n;
}
function nt(t, n) {
  if (!t.notified) {
    t.notified = true;
    var r = t.reactions;
    T(function () {
      var e = t.value;
      for (var o = t.state == 1, i = 0; r.length > i;) {
        var c;
        var u;
        var a;
        var f = r[i++];
        var s = o ? f.ok : f.fail;
        var p = f.resolve;
        var l = f.reject;
        var v = f.domain;
        try {
          if (s) {
            if (!o) {
              if (t.rejection === 2) {
                it(t);
              }
              t.rejection = 1;
            }
            if (s === true) {
              c = e;
            } else {
              if (v) {
                v.enter();
              }
              c = s(e);
              if (v) {
                v.exit();
                a = true;
              }
            }
            if (c === f.promise) {
              l(W("Promise-chain cycle"));
            } else if (u = tt(c)) {
              u.call(c, p, l);
            } else {
              p(c);
            }
          } else {
            l(e);
          }
        } catch (t) {
          if (v && !a) {
            v.exit();
          }
          l(t);
        }
      }
      t.reactions = [];
      t.notified = false;
      if (n && !t.rejection) {
        et(t);
      }
    });
  }
}
function rt(t, n, r) {
  var e;
  var o;
  if (K) {
    (e = B.createEvent("Event")).promise = n;
    e.reason = r;
    e.initEvent(t, false, true);
    f.dispatchEvent(e);
  } else {
    e = {
      promise: n,
      reason: r
    };
  }
  if (!X && (o = f["on" + t])) {
    o(e);
  } else if (t === "unhandledrejection") {
    P("Unhandled promise rejection", r);
  }
}
function et(t) {
  O.call(f, function () {
    var n;
    var r = t.facade;
    var e = t.value;
    if (ot(t) && (n = L(function () {
      if (R) {
        q.emit("unhandledRejection", e, r);
      } else {
        rt("unhandledrejection", r, e);
      }
    }), t.rejection = R || ot(t) ? 2 : 1, n.error)) {
      throw n.value;
    }
  });
}
function ot(t) {
  return t.rejection !== 1 && !t.parent;
}
function it(t) {
  O.call(f, function () {
    var n = t.facade;
    if (R) {
      q.emit("rejectionHandled", n);
    } else {
      rt("rejectionhandled", n, t.value);
    }
  });
}
function ct(t, n, r) {
  return function (e) {
    t(n, e, r);
  };
}
function ut(t, n, r) {
  if (!t.done) {
    t.done = true;
    if (r) {
      t = r;
    }
    t.value = n;
    t.state = 2;
    nt(t, true);
  }
}
function at(t, n, r) {
  if (!t.done) {
    t.done = true;
    if (r) {
      t = r;
    }
    try {
      if (t.facade === n) {
        throw W("Promise can't be resolved itself");
      }
      var e = tt(n);
      if (e) {
        T(function () {
          var r = {
            done: false
          };
          try {
            e.call(n, ct(at, r, t), ct(ut, r, t));
          } catch (n) {
            ut(r, n, t);
          }
        });
      } else {
        t.value = n;
        t.state = 1;
        nt(t, false);
      }
    } catch (n) {
      ut({
        done: false
      }, n, t);
    }
  }
}
if (Z && (U = (H = function (t) {
  m(this, H, N);
  x(t);
  e.call(this);
  var n = D(this);
  try {
    t(ct(at, n), ct(ut, n));
  } catch (t) {
    ut(n, t);
  }
}).prototype, (e = function (t) {
  G(this, {
    type: N,
    done: false,
    notified: false,
    parent: false,
    reactions: [],
    rejection: false,
    state: 0,
    value: undefined
  });
}).prototype = v(U, {
  then: function (t, n) {
    var r = V(this);
    var e = Y(j(this, H));
    e.ok = typeof t != "function" || t;
    e.fail = typeof n == "function" && n;
    e.domain = R ? q.domain : undefined;
    r.parent = true;
    r.reactions.push(e);
    if (r.state != 0) {
      nt(r, false);
    }
    return e.promise;
  },
  catch: function (t) {
    return this.then(undefined, t);
  }
}), o = function () {
  var t = new e();
  var n = D(t);
  this.promise = t;
  this.resolve = ct(at, n);
  this.reject = ct(ut, n);
}, A.f = Y = function (t) {
  if (t === H || t === i) {
    return new o(t);
  } else {
    return J(t);
  }
}, !a && typeof p == "function" && z !== Object.prototype)) {
  c = z.then;
  if (!Q) {
    l(z, "then", function (t, n) {
      var r = this;
      return new H(function (t, n) {
        c.call(r, t, n);
      }).then(t, n);
    }, {
      unsafe: true
    });
    l(z, "catch", U.catch, {
      unsafe: true
    });
  }
  try {
    delete z.constructor;
  } catch (t) {}
  if (h) {
    h(z, U);
  }
}
u({
  global: true,
  wrap: true,
  forced: Z
}, {
  Promise: H
});
y(H, N, false, true);
d(N);
i = s(N);
u({
  target: N,
  stat: true,
  forced: Z
}, {
  reject: function (t) {
    var n = Y(this);
    n.reject.call(undefined, t);
    return n.promise;
  }
});
u({
  target: N,
  stat: true,
  forced: a || Z
}, {
  resolve: function (t) {
    return E(a && this === i ? H : this, t);
  }
});
u({
  target: N,
  stat: true,
  forced: $
}, {
  all: function (t) {
    var n = this;
    var r = Y(n);
    var e = r.resolve;
    var o = r.reject;
    var i = L(function () {
      var r = x(n.resolve);
      var i = [];
      var c = 0;
      var u = 1;
      b(t, function (t) {
        var a = c++;
        var f = false;
        i.push(undefined);
        u++;
        r.call(n, t).then(function (t) {
          if (!f) {
            f = true;
            i[a] = t;
            if (! --u) {
              e(i);
            }
          }
        }, o);
      });
      if (! --u) {
        e(i);
      }
    });
    if (i.error) {
      o(i.value);
    }
    return r.promise;
  },
  race: function (t) {
    var n = this;
    var r = Y(n);
    var e = r.reject;
    var o = L(function () {
      var o = x(n.resolve);
      b(t, function (t) {
        o.call(n, t).then(r.resolve, e);
      });
    });
    if (o.error) {
      e(o.value);
    }
    return r.promise;
  }
});