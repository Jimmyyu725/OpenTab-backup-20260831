var r;
var o;
var i;
var s;
var a = require("./44.js");
var u = require("./65.js");
var c = require("./14.js");
var f = require("./62.js");
var l = require("./200.js");
var h = require("./99.js");
var p = require("./285.js");
var d = require("./143.js");
var y = require("./149.js");
var m = require("./287.js");
var g = require("./45.js");
var v = require("./52.js");
var b = require("./288.js");
var w = require("./201.js");
var _ = require("./98.js");
var E = require("./289.js");
var T = require("./159.js");
var x = require("./202.js").set;
var O = require("./290.js");
var I = require("./204.js");
var S = require("./292.js");
var A = require("./81.js");
var D = require("./100.js");
var N = require("./105.js");
var C = require("./192.js");
var P = require("./17.js");
var j = require("./294.js");
var R = require("./150.js");
var L = require("./199.js");
var k = P("species");
var M = "Promise";
var F = N.get;
var B = N.set;
var U = N.getterFor(M);
var V = l && l.prototype;
var q = l;
var Y = V;
var G = c.TypeError;
var W = c.document;
var z = c.process;
var H = A.f;
var X = H;
var K = !!W && !!W.createEvent && !!c.dispatchEvent;
var $ = typeof PromiseRejectionEvent == "function";
var Q = false;
var J = C(M, function () {
  var t = w(q);
  var e = t !== String(q);
  if (!e && L === 66) {
    return true;
  }
  if (u && !Y.finally) {
    return true;
  }
  if (L >= 51 && /native code/.test(t)) {
    return false;
  }
  var n = new q(function (t) {
    t(1);
  });
  function r(t) {
    t(function () {}, function () {});
  }
  (n.constructor = {})[k] = r;
  return !(Q = n.then(function () {}) instanceof r) || !e && j && !$;
});
var Z = J || !E(function (t) {
  q.all(t).catch(function () {});
});
function tt(t) {
  var e;
  return !!g(t) && typeof (e = t.then) == "function" && e;
}
function et(t, e) {
  if (!t.notified) {
    t.notified = true;
    var n = t.reactions;
    O(function () {
      var r = t.value;
      for (var o = t.state == 1, i = 0; n.length > i;) {
        var s;
        var a;
        var u;
        var c = n[i++];
        var f = o ? c.ok : c.fail;
        var l = c.resolve;
        var h = c.reject;
        var p = c.domain;
        try {
          if (f) {
            if (!o) {
              if (t.rejection === 2) {
                it(t);
              }
              t.rejection = 1;
            }
            if (f === true) {
              s = r;
            } else {
              if (p) {
                p.enter();
              }
              s = f(r);
              if (p) {
                p.exit();
                u = true;
              }
            }
            if (s === c.promise) {
              h(G("Promise-chain cycle"));
            } else if (a = tt(s)) {
              a.call(s, l, h);
            } else {
              l(s);
            }
          } else {
            h(r);
          }
        } catch (t) {
          if (p && !u) {
            p.exit();
          }
          h(t);
        }
      }
      t.reactions = [];
      t.notified = false;
      if (e && !t.rejection) {
        rt(t);
      }
    });
  }
}
function nt(t, e, n) {
  var r;
  var o;
  if (K) {
    (r = W.createEvent("Event")).promise = e;
    r.reason = n;
    r.initEvent(t, false, true);
    c.dispatchEvent(r);
  } else {
    r = {
      promise: e,
      reason: n
    };
  }
  if (!$ && (o = c["on" + t])) {
    o(r);
  } else if (t === "unhandledrejection") {
    S("Unhandled promise rejection", n);
  }
}
function rt(t) {
  x.call(c, function () {
    var e;
    var n = t.facade;
    var r = t.value;
    if (ot(t) && (e = D(function () {
      if (R) {
        z.emit("unhandledRejection", r, n);
      } else {
        nt("unhandledrejection", n, r);
      }
    }), t.rejection = R || ot(t) ? 2 : 1, e.error)) {
      throw e.value;
    }
  });
}
function ot(t) {
  return t.rejection !== 1 && !t.parent;
}
function it(t) {
  x.call(c, function () {
    var e = t.facade;
    if (R) {
      z.emit("rejectionHandled", e);
    } else {
      nt("rejectionhandled", e, t.value);
    }
  });
}
function st(t, e, n) {
  return function (r) {
    t(e, r, n);
  };
}
function at(t, e, n) {
  if (!t.done) {
    t.done = true;
    if (n) {
      t = n;
    }
    t.value = e;
    t.state = 2;
    et(t, true);
  }
}
function ut(t, e, n) {
  if (!t.done) {
    t.done = true;
    if (n) {
      t = n;
    }
    try {
      if (t.facade === e) {
        throw G("Promise can't be resolved itself");
      }
      var r = tt(e);
      if (r) {
        O(function () {
          var n = {
            done: false
          };
          try {
            r.call(e, st(ut, n, t), st(at, n, t));
          } catch (e) {
            at(n, e, t);
          }
        });
      } else {
        t.value = e;
        t.state = 1;
        et(t, false);
      }
    } catch (e) {
      at({
        done: false
      }, e, t);
    }
  }
}
if (J && (Y = (q = function (t) {
  b(this, q, M);
  v(t);
  r.call(this);
  var e = F(this);
  try {
    t(st(ut, e), st(at, e));
  } catch (t) {
    at(e, t);
  }
}).prototype, (r = function (t) {
  B(this, {
    type: M,
    done: false,
    notified: false,
    parent: false,
    reactions: [],
    rejection: false,
    state: 0,
    value: undefined
  });
}).prototype = p(Y, {
  then: function (t, e) {
    var n = U(this);
    var r = H(T(this, q));
    r.ok = typeof t != "function" || t;
    r.fail = typeof e == "function" && e;
    r.domain = R ? z.domain : undefined;
    n.parent = true;
    n.reactions.push(r);
    if (n.state != 0) {
      et(n, false);
    }
    return r.promise;
  },
  catch: function (t) {
    return this.then(undefined, t);
  }
}), o = function () {
  var t = new r();
  var e = F(t);
  this.promise = t;
  this.resolve = st(ut, e);
  this.reject = st(at, e);
}, A.f = H = function (t) {
  if (t === q || t === i) {
    return new o(t);
  } else {
    return X(t);
  }
}, !u && typeof l == "function" && V !== Object.prototype)) {
  s = V.then;
  if (!Q) {
    h(V, "then", function (t, e) {
      var n = this;
      return new q(function (t, e) {
        s.call(n, t, e);
      }).then(t, e);
    }, {
      unsafe: true
    });
    h(V, "catch", Y.catch, {
      unsafe: true
    });
  }
  try {
    delete V.constructor;
  } catch (t) {}
  if (d) {
    d(V, Y);
  }
}
a({
  global: true,
  wrap: true,
  forced: J
}, {
  Promise: q
});
y(q, M, false, true);
m(M);
i = f(M);
a({
  target: M,
  stat: true,
  forced: J
}, {
  reject: function (t) {
    var e = H(this);
    e.reject.call(undefined, t);
    return e.promise;
  }
});
a({
  target: M,
  stat: true,
  forced: u || J
}, {
  resolve: function (t) {
    return I(u && this === i ? q : this, t);
  }
});
a({
  target: M,
  stat: true,
  forced: Z
}, {
  all: function (t) {
    var e = this;
    var n = H(e);
    var r = n.resolve;
    var o = n.reject;
    var i = D(function () {
      var n = v(e.resolve);
      var i = [];
      var s = 0;
      var a = 1;
      _(t, function (t) {
        var u = s++;
        var c = false;
        i.push(undefined);
        a++;
        n.call(e, t).then(function (t) {
          if (!c) {
            c = true;
            i[u] = t;
            if (! --a) {
              r(i);
            }
          }
        }, o);
      });
      if (! --a) {
        r(i);
      }
    });
    if (i.error) {
      o(i.value);
    }
    return n.promise;
  },
  race: function (t) {
    var e = this;
    var n = H(e);
    var r = n.reject;
    var o = D(function () {
      var o = v(e.resolve);
      _(t, function (t) {
        o.call(e, t).then(n.resolve, r);
      });
    });
    if (o.error) {
      r(o.value);
    }
    return n.promise;
  }
});