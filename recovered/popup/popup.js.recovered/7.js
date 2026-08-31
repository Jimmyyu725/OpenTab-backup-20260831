var r;
var i;
var o;
var s;
var a = require("./77.js");
var c = require("./56.js");
var u = require("./4.js");
var l = require("./18.js");
var h = require("./88.js");
var p = require("./26.js");
var d = require("./119.js");
var f = require("./83.js");
var g = require("./121.js");
var y = require("./102.js");
var m = require("./12.js");
var b = require("./27.js");
var v = require("./123.js");
var w = require("./41.js");
var x = require("./124.js");
var _ = require("./129.js");
var O = require("./89.js");
var T = require("./72.js").set;
var S = require("./130.js");
var E = require("./90.js");
var j = require("./132.js");
var k = require("./74.js");
var A = require("./133.js");
var C = require("./49.js");
var I = require("./60.js");
var P = require("./8.js");
var D = require("./134.js");
var R = require("./43.js");
var N = require("./59.js");
var L = P("species");
var M = "Promise";
var B = C.get;
var U = C.set;
var F = C.getterFor(M);
var $ = h && h.prototype;
var V = h;
var z = $;
var q = u.TypeError;
var W = u.document;
var H = u.process;
var G = k.f;
var Y = G;
var X = !!W && !!W.createEvent && !!u.dispatchEvent;
var K = typeof PromiseRejectionEvent == "function";
var J = false;
var Q = I(M, function () {
  var t = w(V);
  var e = t !== String(V);
  if (!e && N === 66) {
    return true;
  }
  if (c && !z.finally) {
    return true;
  }
  if (N >= 51 && /native code/.test(t)) {
    return false;
  }
  var n = new V(function (t) {
    t(1);
  });
  function r(t) {
    t(function () {}, function () {});
  }
  (n.constructor = {})[L] = r;
  return !(J = n.then(function () {}) instanceof r) || !e && D && !K;
});
var Z = Q || !_(function (t) {
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
      for (var i = t.state == 1, o = 0; n.length > o;) {
        var s;
        var a;
        var c;
        var u = n[o++];
        var l = i ? u.ok : u.fail;
        var h = u.resolve;
        var p = u.reject;
        var d = u.domain;
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
              if (d) {
                d.enter();
              }
              s = l(r);
              if (d) {
                d.exit();
                c = true;
              }
            }
            if (s === u.promise) {
              p(q("Promise-chain cycle"));
            } else if (a = tt(s)) {
              a.call(s, h, p);
            } else {
              h(s);
            }
          } else {
            p(r);
          }
        } catch (t) {
          if (d && !c) {
            d.exit();
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
    (r = W.createEvent("Event")).promise = e;
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
    j("Unhandled promise rejection", n);
  }
}
function rt(t) {
  T.call(u, function () {
    var e;
    var n = t.facade;
    var r = t.value;
    if (it(t) && (e = A(function () {
      if (R) {
        H.emit("unhandledRejection", r, n);
      } else {
        nt("unhandledrejection", n, r);
      }
    }), t.rejection = R || it(t) ? 2 : 1, e.error)) {
      throw e.value;
    }
  });
}
function it(t) {
  return t.rejection !== 1 && !t.parent;
}
function ot(t) {
  T.call(u, function () {
    var e = t.facade;
    if (R) {
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
        throw q("Promise can't be resolved itself");
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
if (Q && (z = (V = function (t) {
  v(this, V, M);
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
}).prototype = d(z, {
  then: function (t, e) {
    var n = F(this);
    var r = G(O(this, V));
    r.ok = typeof t != "function" || t;
    r.fail = typeof e == "function" && e;
    r.domain = R ? H.domain : undefined;
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
}, k.f = G = function (t) {
  if (t === V || t === o) {
    return new i(t);
  } else {
    return Y(t);
  }
}, !c && typeof h == "function" && $ !== Object.prototype)) {
  s = $.then;
  if (!J) {
    p($, "then", function (t, e) {
      var n = this;
      return new V(function (t, e) {
        s.call(n, t, e);
      }).then(t, e);
    }, {
      unsafe: true
    });
    p($, "catch", z.catch, {
      unsafe: true
    });
  }
  try {
    delete $.constructor;
  } catch (t) {}
  if (f) {
    f($, z);
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
o = l(M);
a({
  target: M,
  stat: true,
  forced: Q
}, {
  reject: function (t) {
    var e = G(this);
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
    return E(c && this === o ? V : this, t);
  }
});
a({
  target: M,
  stat: true,
  forced: Z
}, {
  all: function (t) {
    var e = this;
    var n = G(e);
    var r = n.resolve;
    var i = n.reject;
    var o = A(function () {
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
    var n = G(e);
    var r = n.reject;
    var i = A(function () {
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