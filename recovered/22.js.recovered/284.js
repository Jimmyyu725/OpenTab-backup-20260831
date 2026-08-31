var r;
var i;
var o;
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
var m = require("./287.js");
var y = require("./45.js");
var b = require("./52.js");
var v = require("./288.js");
var w = require("./201.js");
var x = require("./98.js");
var _ = require("./289.js");
var T = require("./159.js");
var E = require("./202.js").set;
var O = require("./290.js");
var S = require("./204.js");
var I = require("./292.js");
var A = require("./81.js");
var k = require("./100.js");
var C = require("./105.js");
var D = require("./192.js");
var j = require("./17.js");
var N = require("./294.js");
var P = require("./150.js");
var L = require("./199.js");
var R = j("species");
var M = "Promise";
var B = C.get;
var U = C.set;
var F = C.getterFor(M);
var W = h && h.prototype;
var z = h;
var q = W;
var V = u.TypeError;
var $ = u.document;
var H = u.process;
var Y = A.f;
var G = Y;
var X = !!$ && !!$.createEvent && !!u.dispatchEvent;
var K = typeof PromiseRejectionEvent == "function";
var Q = false;
var J = D(M, function () {
  var t = w(z);
  var e = t !== String(z);
  if (!e && L === 66) {
    return true;
  }
  if (c && !q.finally) {
    return true;
  }
  if (L >= 51 && /native code/.test(t)) {
    return false;
  }
  var n = new z(function (t) {
    t(1);
  });
  function r(t) {
    t(function () {}, function () {});
  }
  (n.constructor = {})[R] = r;
  return !(Q = n.then(function () {}) instanceof r) || !e && N && !K;
});
var Z = J || !_(function (t) {
  z.all(t).catch(function () {});
});
function tt(t) {
  var e;
  return !!y(t) && typeof (e = t.then) == "function" && e;
}
function et(t, e) {
  if (!t.notified) {
    t.notified = true;
    var n = t.reactions;
    O(function () {
      var r = t.value;
      for (var i = t.state == 1, o = 0; n.length > o;) {
        var s;
        var a;
        var c;
        var u = n[o++];
        var l = i ? u.ok : u.fail;
        var h = u.resolve;
        var p = u.reject;
        var f = u.domain;
        try {
          if (l) {
            if (!i) {
              if (t.rejection === 2) {
                ot(t);
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
              p(V("Promise-chain cycle"));
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
  var i;
  if (X) {
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
  if (!K && (i = u["on" + t])) {
    i(r);
  } else if (t === "unhandledrejection") {
    I("Unhandled promise rejection", n);
  }
}
function rt(t) {
  E.call(u, function () {
    var e;
    var n = t.facade;
    var r = t.value;
    if (it(t) && (e = k(function () {
      if (P) {
        H.emit("unhandledRejection", r, n);
      } else {
        nt("unhandledrejection", n, r);
      }
    }), t.rejection = P || it(t) ? 2 : 1, e.error)) {
      throw e.value;
    }
  });
}
function it(t) {
  return t.rejection !== 1 && !t.parent;
}
function ot(t) {
  E.call(u, function () {
    var e = t.facade;
    if (P) {
      H.emit("rejectionHandled", e);
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
        throw V("Promise can't be resolved itself");
      }
      var r = tt(e);
      if (r) {
        O(function () {
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
if (J && (q = (z = function (t) {
  v(this, z, M);
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
}).prototype = f(q, {
  then: function (t, e) {
    var n = F(this);
    var r = Y(T(this, z));
    r.ok = typeof t != "function" || t;
    r.fail = typeof e == "function" && e;
    r.domain = P ? H.domain : undefined;
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
}), i = function () {
  var t = new r();
  var e = B(t);
  this.promise = t;
  this.resolve = st(ct, e);
  this.reject = st(at, e);
}, A.f = Y = function (t) {
  if (t === z || t === o) {
    return new i(t);
  } else {
    return G(t);
  }
}, !c && typeof h == "function" && W !== Object.prototype)) {
  s = W.then;
  if (!Q) {
    p(W, "then", function (t, e) {
      var n = this;
      return new z(function (t, e) {
        s.call(n, t, e);
      }).then(t, e);
    }, {
      unsafe: true
    });
    p(W, "catch", q.catch, {
      unsafe: true
    });
  }
  try {
    delete W.constructor;
  } catch (t) {}
  if (d) {
    d(W, q);
  }
}
a({
  global: true,
  wrap: true,
  forced: J
}, {
  Promise: z
});
g(z, M, false, true);
m(M);
o = l(M);
a({
  target: M,
  stat: true,
  forced: J
}, {
  reject: function (t) {
    var e = Y(this);
    e.reject.call(undefined, t);
    return e.promise;
  }
});
a({
  target: M,
  stat: true,
  forced: c || J
}, {
  resolve: function (t) {
    return S(c && this === o ? z : this, t);
  }
});
a({
  target: M,
  stat: true,
  forced: Z
}, {
  all: function (t) {
    var e = this;
    var n = Y(e);
    var r = n.resolve;
    var i = n.reject;
    var o = k(function () {
      var n = b(e.resolve);
      var o = [];
      var s = 0;
      var a = 1;
      x(t, function (t) {
        var c = s++;
        var u = false;
        o.push(undefined);
        a++;
        n.call(e, t).then(function (t) {
          if (!u) {
            u = true;
            o[c] = t;
            if (! --a) {
              r(o);
            }
          }
        }, i);
      });
      if (! --a) {
        r(o);
      }
    });
    if (o.error) {
      i(o.value);
    }
    return n.promise;
  },
  race: function (t) {
    var e = this;
    var n = Y(e);
    var r = n.reject;
    var i = k(function () {
      var i = b(e.resolve);
      x(t, function (t) {
        i.call(e, t).then(n.resolve, r);
      });
    });
    if (i.error) {
      r(i.value);
    }
    return n.promise;
  }
});