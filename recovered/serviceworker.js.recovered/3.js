var r;
var o;
var i;
var s;
var a = require("./88.js");
var c = require("./99.js");
var u = require("./5.js");
var f = require("./40.js");
var l = require("./159.js");
var h = require("./39.js");
var p = require("./256.js");
var d = require("./160.js");
var y = require("./258.js");
var m = require("./260.js");
var g = require("./25.js");
var v = require("./49.js");
var b = require("./261.js");
var w = require("./94.js");
var _ = require("./262.js");
var x = require("./267.js");
var T = require("./165.js");
var E = require("./166.js").set;
var O = require("./268.js");
var S = require("./169.js");
var I = require("./270.js");
var A = require("./170.js");
var N = require("./271.js");
var j = require("./96.js");
var D = require("./158.js");
var C = require("./11.js");
var P = require("./272.js");
var k = require("./104.js");
var R = require("./103.js");
var L = C("species");
var M = "Promise";
var F = j.get;
var B = j.set;
var U = j.getterFor(M);
var q = l && l.prototype;
var W = l;
var V = q;
var z = u.TypeError;
var Y = u.document;
var G = u.process;
var H = A.f;
var K = H;
var $ = !!Y && !!Y.createEvent && !!u.dispatchEvent;
var X = typeof PromiseRejectionEvent == "function";
var Q = false;
var J = D(M, function () {
  var t = w(W);
  var e = t !== String(W);
  if (!e && R === 66) {
    return true;
  }
  if (c && !V.finally) {
    return true;
  }
  if (R >= 51 && /native code/.test(t)) {
    return false;
  }
  var n = new W(function (t) {
    t(1);
  });
  function r(t) {
    t(function () {}, function () {});
  }
  (n.constructor = {})[L] = r;
  return !(Q = n.then(function () {}) instanceof r) || !e && P && !X;
});
var Z = J || !x(function (t) {
  W.all(t).catch(function () {});
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
        var c;
        var u = n[i++];
        var f = o ? u.ok : u.fail;
        var l = u.resolve;
        var h = u.reject;
        var p = u.domain;
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
                c = true;
              }
            }
            if (s === u.promise) {
              h(z("Promise-chain cycle"));
            } else if (a = tt(s)) {
              a.call(s, l, h);
            } else {
              l(s);
            }
          } else {
            h(r);
          }
        } catch (t) {
          if (p && !c) {
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
  if ($) {
    (r = Y.createEvent("Event")).promise = e;
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
  E.call(u, function () {
    var e;
    var n = t.facade;
    var r = t.value;
    if (ot(t) && (e = N(function () {
      if (k) {
        G.emit("unhandledRejection", r, n);
      } else {
        nt("unhandledrejection", n, r);
      }
    }), t.rejection = k || ot(t) ? 2 : 1, e.error)) {
      throw e.value;
    }
  });
}
function ot(t) {
  return t.rejection !== 1 && !t.parent;
}
function it(t) {
  E.call(u, function () {
    var e = t.facade;
    if (k) {
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
if (J && (V = (W = function (t) {
  b(this, W, M);
  v(t);
  r.call(this);
  var e = F(this);
  try {
    t(st(ct, e), st(at, e));
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
}).prototype = p(V, {
  then: function (t, e) {
    var n = U(this);
    var r = H(T(this, W));
    r.ok = typeof t != "function" || t;
    r.fail = typeof e == "function" && e;
    r.domain = k ? G.domain : undefined;
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
  this.resolve = st(ct, e);
  this.reject = st(at, e);
}, A.f = H = function (t) {
  if (t === W || t === i) {
    return new o(t);
  } else {
    return K(t);
  }
}, !c && typeof l == "function" && q !== Object.prototype)) {
  s = q.then;
  if (!Q) {
    h(q, "then", function (t, e) {
      var n = this;
      return new W(function (t, e) {
        s.call(n, t, e);
      }).then(t, e);
    }, {
      unsafe: true
    });
    h(q, "catch", V.catch, {
      unsafe: true
    });
  }
  try {
    delete q.constructor;
  } catch (t) {}
  if (d) {
    d(q, V);
  }
}
a({
  global: true,
  wrap: true,
  forced: J
}, {
  Promise: W
});
y(W, M, false, true);
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
  forced: c || J
}, {
  resolve: function (t) {
    return S(c && this === i ? W : this, t);
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
    var i = N(function () {
      var n = v(e.resolve);
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
    var o = N(function () {
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