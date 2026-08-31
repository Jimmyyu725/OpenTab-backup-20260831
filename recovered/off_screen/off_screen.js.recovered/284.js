var r;
var o;
var i;
var c;
var u = require("./44.js");
var a = require("./65.js");
var s = require("./14.js");
var f = require("./62.js");
var l = require("./200.js");
var p = require("./99.js");
var v = require("./285.js");
var d = require("./143.js");
var h = require("./149.js");
var y = require("./287.js");
var g = require("./45.js");
var m = require("./52.js");
var x = require("./288.js");
var b = require("./201.js");
var w = require("./98.js");
var O = require("./289.js");
var S = require("./159.js");
var j = require("./202.js").set;
var E = require("./290.js");
var T = require("./204.js");
var _ = require("./292.js");
var A = require("./81.js");
var P = require("./100.js");
var I = require("./105.js");
var L = require("./192.js");
var M = require("./17.js");
var R = require("./294.js");
var C = require("./150.js");
var k = require("./199.js");
var G = M("species");
var D = "Promise";
var U = I.get;
var N = I.set;
var F = I.getterFor(D);
var B = l && l.prototype;
var z = l;
var V = B;
var $ = s.TypeError;
var W = s.document;
var q = s.process;
var Y = A.f;
var H = Y;
var K = !!W && !!W.createEvent && !!s.dispatchEvent;
var X = typeof PromiseRejectionEvent == "function";
var Z = false;
var J = L(D, function () {
  var t = b(z);
  var n = t !== String(z);
  if (!n && k === 66) {
    return true;
  }
  if (a && !V.finally) {
    return true;
  }
  if (k >= 51 && /native code/.test(t)) {
    return false;
  }
  var e = new z(function (t) {
    t(1);
  });
  function r(t) {
    t(function () {}, function () {});
  }
  (e.constructor = {})[G] = r;
  return !(Z = e.then(function () {}) instanceof r) || !n && R && !X;
});
var Q = J || !O(function (t) {
  z.all(t).catch(function () {});
});
function tt(t) {
  var n;
  return !!g(t) && typeof (n = t.then) == "function" && n;
}
function nt(t, n) {
  if (!t.notified) {
    t.notified = true;
    var e = t.reactions;
    E(function () {
      var r = t.value;
      for (var o = t.state == 1, i = 0; e.length > i;) {
        var c;
        var u;
        var a;
        var s = e[i++];
        var f = o ? s.ok : s.fail;
        var l = s.resolve;
        var p = s.reject;
        var v = s.domain;
        try {
          if (f) {
            if (!o) {
              if (t.rejection === 2) {
                it(t);
              }
              t.rejection = 1;
            }
            if (f === true) {
              c = r;
            } else {
              if (v) {
                v.enter();
              }
              c = f(r);
              if (v) {
                v.exit();
                a = true;
              }
            }
            if (c === s.promise) {
              p($("Promise-chain cycle"));
            } else if (u = tt(c)) {
              u.call(c, l, p);
            } else {
              l(c);
            }
          } else {
            p(r);
          }
        } catch (t) {
          if (v && !a) {
            v.exit();
          }
          p(t);
        }
      }
      t.reactions = [];
      t.notified = false;
      if (n && !t.rejection) {
        rt(t);
      }
    });
  }
}
function et(t, n, e) {
  var r;
  var o;
  if (K) {
    (r = W.createEvent("Event")).promise = n;
    r.reason = e;
    r.initEvent(t, false, true);
    s.dispatchEvent(r);
  } else {
    r = {
      promise: n,
      reason: e
    };
  }
  if (!X && (o = s["on" + t])) {
    o(r);
  } else if (t === "unhandledrejection") {
    _("Unhandled promise rejection", e);
  }
}
function rt(t) {
  j.call(s, function () {
    var n;
    var e = t.facade;
    var r = t.value;
    if (ot(t) && (n = P(function () {
      if (C) {
        q.emit("unhandledRejection", r, e);
      } else {
        et("unhandledrejection", e, r);
      }
    }), t.rejection = C || ot(t) ? 2 : 1, n.error)) {
      throw n.value;
    }
  });
}
function ot(t) {
  return t.rejection !== 1 && !t.parent;
}
function it(t) {
  j.call(s, function () {
    var n = t.facade;
    if (C) {
      q.emit("rejectionHandled", n);
    } else {
      et("rejectionhandled", n, t.value);
    }
  });
}
function ct(t, n, e) {
  return function (r) {
    t(n, r, e);
  };
}
function ut(t, n, e) {
  if (!t.done) {
    t.done = true;
    if (e) {
      t = e;
    }
    t.value = n;
    t.state = 2;
    nt(t, true);
  }
}
function at(t, n, e) {
  if (!t.done) {
    t.done = true;
    if (e) {
      t = e;
    }
    try {
      if (t.facade === n) {
        throw $("Promise can't be resolved itself");
      }
      var r = tt(n);
      if (r) {
        E(function () {
          var e = {
            done: false
          };
          try {
            r.call(n, ct(at, e, t), ct(ut, e, t));
          } catch (n) {
            ut(e, n, t);
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
if (J && (V = (z = function (t) {
  x(this, z, D);
  m(t);
  r.call(this);
  var n = U(this);
  try {
    t(ct(at, n), ct(ut, n));
  } catch (t) {
    ut(n, t);
  }
}).prototype, (r = function (t) {
  N(this, {
    type: D,
    done: false,
    notified: false,
    parent: false,
    reactions: [],
    rejection: false,
    state: 0,
    value: undefined
  });
}).prototype = v(V, {
  then: function (t, n) {
    var e = F(this);
    var r = Y(S(this, z));
    r.ok = typeof t != "function" || t;
    r.fail = typeof n == "function" && n;
    r.domain = C ? q.domain : undefined;
    e.parent = true;
    e.reactions.push(r);
    if (e.state != 0) {
      nt(e, false);
    }
    return r.promise;
  },
  catch: function (t) {
    return this.then(undefined, t);
  }
}), o = function () {
  var t = new r();
  var n = U(t);
  this.promise = t;
  this.resolve = ct(at, n);
  this.reject = ct(ut, n);
}, A.f = Y = function (t) {
  if (t === z || t === i) {
    return new o(t);
  } else {
    return H(t);
  }
}, !a && typeof l == "function" && B !== Object.prototype)) {
  c = B.then;
  if (!Z) {
    p(B, "then", function (t, n) {
      var e = this;
      return new z(function (t, n) {
        c.call(e, t, n);
      }).then(t, n);
    }, {
      unsafe: true
    });
    p(B, "catch", V.catch, {
      unsafe: true
    });
  }
  try {
    delete B.constructor;
  } catch (t) {}
  if (d) {
    d(B, V);
  }
}
u({
  global: true,
  wrap: true,
  forced: J
}, {
  Promise: z
});
h(z, D, false, true);
y(D);
i = f(D);
u({
  target: D,
  stat: true,
  forced: J
}, {
  reject: function (t) {
    var n = Y(this);
    n.reject.call(undefined, t);
    return n.promise;
  }
});
u({
  target: D,
  stat: true,
  forced: a || J
}, {
  resolve: function (t) {
    return T(a && this === i ? z : this, t);
  }
});
u({
  target: D,
  stat: true,
  forced: Q
}, {
  all: function (t) {
    var n = this;
    var e = Y(n);
    var r = e.resolve;
    var o = e.reject;
    var i = P(function () {
      var e = m(n.resolve);
      var i = [];
      var c = 0;
      var u = 1;
      w(t, function (t) {
        var a = c++;
        var s = false;
        i.push(undefined);
        u++;
        e.call(n, t).then(function (t) {
          if (!s) {
            s = true;
            i[a] = t;
            if (! --u) {
              r(i);
            }
          }
        }, o);
      });
      if (! --u) {
        r(i);
      }
    });
    if (i.error) {
      o(i.value);
    }
    return e.promise;
  },
  race: function (t) {
    var n = this;
    var e = Y(n);
    var r = e.reject;
    var o = P(function () {
      var o = m(n.resolve);
      w(t, function (t) {
        o.call(n, t).then(e.resolve, r);
      });
    });
    if (o.error) {
      r(o.value);
    }
    return e.promise;
  }
});