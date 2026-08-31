var r;
var o;
var i;
var s;
var a = require("./44.js");
var c = require("./65.js");
var u = require("./14.js");
var l = require("./62.js");
var h = require("./200.js");
var p = require("./99.js");
var f = require("./285.js");
var d = require("./143.js");
var g = require("./149.js");
var y = require("./287.js");
var m = require("./45.js");
var b = require("./52.js");
var w = require("./288.js");
var v = require("./201.js");
var _ = require("./98.js");
var T = require("./289.js");
var E = require("./159.js");
var x = require("./202.js").set;
var S = require("./290.js");
var O = require("./204.js");
var I = require("./292.js");
var A = require("./81.js");
var k = require("./100.js");
var C = require("./105.js");
var D = require("./192.js");
var N = require("./17.js");
var j = require("./294.js");
var P = require("./150.js");
var L = require("./199.js");
var R = N("species");
var M = "Promise";
var B = C.get;
var U = C.set;
var F = C.getterFor(M);
var q = h && h.prototype;
var V = h;
var W = q;
var z = u.TypeError;
var $ = u.document;
var G = u.process;
var H = A.f;
var Y = H;
var K = !!$ && !!$.createEvent && !!u.dispatchEvent;
var X = typeof PromiseRejectionEvent == "function";
var J = false;
var Q = D(M, function () {
  var t = v(V);
  var e = t !== String(V);
  if (!e && L === 66) {
    return true;
  }
  if (c && !W.finally) {
    return true;
  }
  if (L >= 51 && /native code/.test(t)) {
    return false;
  }
  var n = new V(function (t) {
    t(1);
  });
  function r(t) {
    t(function () {}, function () {});
  }
  (n.constructor = {})[R] = r;
  return !(J = n.then(function () {}) instanceof r) || !e && j && !X;
});
var Z = Q || !T(function (t) {
  V.all(t).catch(function () {});
});
function tt(t) {
  var e;
  return !!m(t) && typeof (e = t.then) == "function" && e;
}
function et(t, e) {
  if (!t.notified) {
    t.notified = true;
    var n = t.reactions;
    S(function () {
      var r = t.value;
      for (var o = t.state == 1, i = 0; n.length > i;) {
        var s;
        var a;
        var c;
        var u = n[i++];
        var l = o ? u.ok : u.fail;
        var h = u.resolve;
        var p = u.reject;
        var f = u.domain;
        try {
          if (l) {
            if (!o) {
              if (t.rejection === 2) {
                it(t);
              }
              t.rejection = 1;
            }
            if (l === true) {
              s = r;
            } else {
              if (f) {
                f.enter();
              }
              s = l(r);
              if (f) {
                f.exit();
                c = true;
              }
            }
            if (s === u.promise) {
              p(z("Promise-chain cycle"));
            } else if (a = tt(s)) {
              a.call(s, h, p);
            } else {
              h(s);
            }
          } else {
            p(r);
          }
        } catch (t) {
          if (f && !c) {
            f.exit();
          }
          p(t);
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
    (r = $.createEvent("Event")).promise = e;
    r.reason = n;
    r.initEvent(t, false, true);
    u.dispatchEvent(r);
  } else {
    r = {
      promise: e,
      reason: n
    };
  }
  if (!X && (o = u["on" + t])) {
    o(r);
  } else if (t === "unhandledrejection") {
    I("Unhandled promise rejection", n);
  }
}
function rt(t) {
  x.call(u, function () {
    var e;
    var n = t.facade;
    var r = t.value;
    if (ot(t) && (e = k(function () {
      if (P) {
        G.emit("unhandledRejection", r, n);
      } else {
        nt("unhandledrejection", n, r);
      }
    }), t.rejection = P || ot(t) ? 2 : 1, e.error)) {
      throw e.value;
    }
  });
}
function ot(t) {
  return t.rejection !== 1 && !t.parent;
}
function it(t) {
  x.call(u, function () {
    var e = t.facade;
    if (P) {
      G.emit("rejectionHandled", e);
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
function ct(t, e, n) {
  if (!t.done) {
    t.done = true;
    if (n) {
      t = n;
    }
    try {
      if (t.facade === e) {
        throw z("Promise can't be resolved itself");
      }
      var r = tt(e);
      if (r) {
        S(function () {
          var n = {
            done: false
          };
          try {
            r.call(e, st(ct, n, t), st(at, n, t));
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
if (Q && (W = (V = function (t) {
  w(this, V, M);
  b(t);
  r.call(this);
  var e = B(this);
  try {
    t(st(ct, e), st(at, e));
  } catch (t) {
    at(e, t);
  }
}).prototype, (r = function (t) {
  U(this, {
    type: M,
    done: false,
    notified: false,
    parent: false,
    reactions: [],
    rejection: false,
    state: 0,
    value: undefined
  });
}).prototype = f(W, {
  then: function (t, e) {
    var n = F(this);
    var r = H(E(this, V));
    r.ok = typeof t != "function" || t;
    r.fail = typeof e == "function" && e;
    r.domain = P ? G.domain : undefined;
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
  var e = B(t);
  this.promise = t;
  this.resolve = st(ct, e);
  this.reject = st(at, e);
}, A.f = H = function (t) {
  if (t === V || t === i) {
    return new o(t);
  } else {
    return Y(t);
  }
}, !c && typeof h == "function" && q !== Object.prototype)) {
  s = q.then;
  if (!J) {
    p(q, "then", function (t, e) {
      var n = this;
      return new V(function (t, e) {
        s.call(n, t, e);
      }).then(t, e);
    }, {
      unsafe: true
    });
    p(q, "catch", W.catch, {
      unsafe: true
    });
  }
  try {
    delete q.constructor;
  } catch (t) {}
  if (d) {
    d(q, W);
  }
}
a({
  global: true,
  wrap: true,
  forced: Q
}, {
  Promise: V
});
g(V, M, false, true);
y(M);
i = l(M);
a({
  target: M,
  stat: true,
  forced: Q
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
  forced: c || Q
}, {
  resolve: function (t) {
    return O(c && this === i ? V : this, t);
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
    var i = k(function () {
      var n = b(e.resolve);
      var i = [];
      var s = 0;
      var a = 1;
      _(t, function (t) {
        var c = s++;
        var u = false;
        i.push(undefined);
        a++;
        n.call(e, t).then(function (t) {
          if (!u) {
            u = true;
            i[c] = t;
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
    var o = k(function () {
      var o = b(e.resolve);
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