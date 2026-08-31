var r;
var o;
var i;
var c;
var u = require("./77.js");
var a = require("./56.js");
var f = require("./4.js");
var s = require("./18.js");
var p = require("./88.js");
var l = require("./26.js");
var v = require("./119.js");
var h = require("./83.js");
var d = require("./121.js");
var y = require("./102.js");
var m = require("./12.js");
var g = require("./27.js");
var x = require("./123.js");
var b = require("./41.js");
var w = require("./124.js");
var j = require("./129.js");
var O = require("./89.js");
var S = require("./72.js").set;
var E = require("./130.js");
var P = require("./90.js");
var T = require("./132.js");
var _ = require("./74.js");
var M = require("./133.js");
var k = require("./49.js");
var I = require("./60.js");
var A = require("./8.js");
var C = require("./134.js");
var L = require("./43.js");
var N = require("./59.js");
var F = A("species");
var R = "Promise";
var z = k.get;
var D = k.set;
var q = k.getterFor(R);
var U = p && p.prototype;
var W = p;
var G = U;
var J = f.TypeError;
var K = f.document;
var B = f.process;
var H = _.f;
var V = H;
var Y = !!K && !!K.createEvent && !!f.dispatchEvent;
var Q = typeof PromiseRejectionEvent == "function";
var X = false;
var Z = I(R, function () {
  var t = b(W);
  var n = t !== String(W);
  if (!n && N === 66) {
    return true;
  }
  if (a && !G.finally) {
    return true;
  }
  if (N >= 51 && /native code/.test(t)) {
    return false;
  }
  var e = new W(function (t) {
    t(1);
  });
  function r(t) {
    t(function () {}, function () {});
  }
  (e.constructor = {})[F] = r;
  return !(X = e.then(function () {}) instanceof r) || !n && C && !Q;
});
var $ = Z || !j(function (t) {
  W.all(t).catch(function () {});
});
function tt(t) {
  var n;
  return !!m(t) && typeof (n = t.then) == "function" && n;
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
        var f = e[i++];
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
              c = r;
            } else {
              if (v) {
                v.enter();
              }
              c = s(r);
              if (v) {
                v.exit();
                a = true;
              }
            }
            if (c === f.promise) {
              l(J("Promise-chain cycle"));
            } else if (u = tt(c)) {
              u.call(c, p, l);
            } else {
              p(c);
            }
          } else {
            l(r);
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
        rt(t);
      }
    });
  }
}
function et(t, n, e) {
  var r;
  var o;
  if (Y) {
    (r = K.createEvent("Event")).promise = n;
    r.reason = e;
    r.initEvent(t, false, true);
    f.dispatchEvent(r);
  } else {
    r = {
      promise: n,
      reason: e
    };
  }
  if (!Q && (o = f["on" + t])) {
    o(r);
  } else if (t === "unhandledrejection") {
    T("Unhandled promise rejection", e);
  }
}
function rt(t) {
  S.call(f, function () {
    var n;
    var e = t.facade;
    var r = t.value;
    if (ot(t) && (n = M(function () {
      if (L) {
        B.emit("unhandledRejection", r, e);
      } else {
        et("unhandledrejection", e, r);
      }
    }), t.rejection = L || ot(t) ? 2 : 1, n.error)) {
      throw n.value;
    }
  });
}
function ot(t) {
  return t.rejection !== 1 && !t.parent;
}
function it(t) {
  S.call(f, function () {
    var n = t.facade;
    if (L) {
      B.emit("rejectionHandled", n);
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
        throw J("Promise can't be resolved itself");
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
if (Z && (G = (W = function (t) {
  x(this, W, R);
  g(t);
  r.call(this);
  var n = z(this);
  try {
    t(ct(at, n), ct(ut, n));
  } catch (t) {
    ut(n, t);
  }
}).prototype, (r = function (t) {
  D(this, {
    type: R,
    done: false,
    notified: false,
    parent: false,
    reactions: [],
    rejection: false,
    state: 0,
    value: undefined
  });
}).prototype = v(G, {
  then: function (t, n) {
    var e = q(this);
    var r = H(O(this, W));
    r.ok = typeof t != "function" || t;
    r.fail = typeof n == "function" && n;
    r.domain = L ? B.domain : undefined;
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
  var n = z(t);
  this.promise = t;
  this.resolve = ct(at, n);
  this.reject = ct(ut, n);
}, _.f = H = function (t) {
  if (t === W || t === i) {
    return new o(t);
  } else {
    return V(t);
  }
}, !a && typeof p == "function" && U !== Object.prototype)) {
  c = U.then;
  if (!X) {
    l(U, "then", function (t, n) {
      var e = this;
      return new W(function (t, n) {
        c.call(e, t, n);
      }).then(t, n);
    }, {
      unsafe: true
    });
    l(U, "catch", G.catch, {
      unsafe: true
    });
  }
  try {
    delete U.constructor;
  } catch (t) {}
  if (h) {
    h(U, G);
  }
}
u({
  global: true,
  wrap: true,
  forced: Z
}, {
  Promise: W
});
d(W, R, false, true);
y(R);
i = s(R);
u({
  target: R,
  stat: true,
  forced: Z
}, {
  reject: function (t) {
    var n = H(this);
    n.reject.call(undefined, t);
    return n.promise;
  }
});
u({
  target: R,
  stat: true,
  forced: a || Z
}, {
  resolve: function (t) {
    return P(a && this === i ? W : this, t);
  }
});
u({
  target: R,
  stat: true,
  forced: $
}, {
  all: function (t) {
    var n = this;
    var e = H(n);
    var r = e.resolve;
    var o = e.reject;
    var i = M(function () {
      var e = g(n.resolve);
      var i = [];
      var c = 0;
      var u = 1;
      w(t, function (t) {
        var a = c++;
        var f = false;
        i.push(undefined);
        u++;
        e.call(n, t).then(function (t) {
          if (!f) {
            f = true;
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
    var e = H(n);
    var r = e.reject;
    var o = M(function () {
      var o = g(n.resolve);
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