var r;
var i;
var o;
var a;
var s = require("./77.js");
var c = require("./56.js");
var u = require("./4.js");
var l = require("./18.js");
var f = require("./88.js");
var h = require("./26.js");
var p = require("./119.js");
var d = require("./83.js");
var m = require("./121.js");
var g = require("./102.js");
var y = require("./12.js");
var b = require("./27.js");
var w = require("./123.js");
var v = require("./41.js");
var _ = require("./124.js");
var E = require("./129.js");
var x = require("./89.js");
var T = require("./72.js").set;
var I = require("./130.js");
var O = require("./90.js");
var S = require("./132.js");
var A = require("./74.js");
var N = require("./133.js");
var j = require("./49.js");
var C = require("./60.js");
var D = require("./8.js");
var k = require("./134.js");
var R = require("./43.js");
var L = require("./59.js");
var P = D("species");
var M = "Promise";
var F = j.get;
var U = j.set;
var B = j.getterFor(M);
var $ = f && f.prototype;
var q = f;
var G = $;
var W = u.TypeError;
var V = u.document;
var z = u.process;
var Y = A.f;
var H = Y;
var X = !!V && !!V.createEvent && !!u.dispatchEvent;
var K = typeof PromiseRejectionEvent == "function";
var J = false;
var Q = C(M, function () {
  var t = v(q);
  var e = t !== String(q);
  if (!e && L === 66) {
    return true;
  }
  if (c && !G.finally) {
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
  (n.constructor = {})[P] = r;
  return !(J = n.then(function () {}) instanceof r) || !e && k && !K;
});
var Z = Q || !E(function (t) {
  q.all(t).catch(function () {});
});
function tt(t) {
  var e;
  return !!y(t) && typeof (e = t.then) == "function" && e;
}
function et(t, e) {
  if (!t.notified) {
    t.notified = true;
    var n = t.reactions;
    I(function () {
      var r = t.value;
      for (var i = t.state == 1, o = 0; n.length > o;) {
        var a;
        var s;
        var c;
        var u = n[o++];
        var l = i ? u.ok : u.fail;
        var f = u.resolve;
        var h = u.reject;
        var p = u.domain;
        try {
          if (l) {
            if (!i) {
              if (t.rejection === 2) {
                ot(t);
              }
              t.rejection = 1;
            }
            if (l === true) {
              a = r;
            } else {
              if (p) {
                p.enter();
              }
              a = l(r);
              if (p) {
                p.exit();
                c = true;
              }
            }
            if (a === u.promise) {
              h(W("Promise-chain cycle"));
            } else if (s = tt(a)) {
              s.call(a, f, h);
            } else {
              f(a);
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
  var i;
  if (X) {
    (r = V.createEvent("Event")).promise = e;
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
    S("Unhandled promise rejection", n);
  }
}
function rt(t) {
  T.call(u, function () {
    var e;
    var n = t.facade;
    var r = t.value;
    if (it(t) && (e = N(function () {
      if (R) {
        z.emit("unhandledRejection", r, n);
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
      z.emit("rejectionHandled", e);
    } else {
      nt("rejectionhandled", e, t.value);
    }
  });
}
function at(t, e, n) {
  return function (r) {
    t(e, r, n);
  };
}
function st(t, e, n) {
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
        throw W("Promise can't be resolved itself");
      }
      var r = tt(e);
      if (r) {
        I(function () {
          var n = {
            done: false
          };
          try {
            r.call(e, at(ct, n, t), at(st, n, t));
          } catch (e) {
            st(n, e, t);
          }
        });
      } else {
        t.value = e;
        t.state = 1;
        et(t, false);
      }
    } catch (e) {
      st({
        done: false
      }, e, t);
    }
  }
}
if (Q && (G = (q = function (t) {
  w(this, q, M);
  b(t);
  r.call(this);
  var e = F(this);
  try {
    t(at(ct, e), at(st, e));
  } catch (t) {
    st(e, t);
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
}).prototype = p(G, {
  then: function (t, e) {
    var n = B(this);
    var r = Y(x(this, q));
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
}), i = function () {
  var t = new r();
  var e = F(t);
  this.promise = t;
  this.resolve = at(ct, e);
  this.reject = at(st, e);
}, A.f = Y = function (t) {
  if (t === q || t === o) {
    return new i(t);
  } else {
    return H(t);
  }
}, !c && typeof f == "function" && $ !== Object.prototype)) {
  a = $.then;
  if (!J) {
    h($, "then", function (t, e) {
      var n = this;
      return new q(function (t, e) {
        a.call(n, t, e);
      }).then(t, e);
    }, {
      unsafe: true
    });
    h($, "catch", G.catch, {
      unsafe: true
    });
  }
  try {
    delete $.constructor;
  } catch (t) {}
  if (d) {
    d($, G);
  }
}
s({
  global: true,
  wrap: true,
  forced: Q
}, {
  Promise: q
});
m(q, M, false, true);
g(M);
o = l(M);
s({
  target: M,
  stat: true,
  forced: Q
}, {
  reject: function (t) {
    var e = Y(this);
    e.reject.call(undefined, t);
    return e.promise;
  }
});
s({
  target: M,
  stat: true,
  forced: c || Q
}, {
  resolve: function (t) {
    return O(c && this === o ? q : this, t);
  }
});
s({
  target: M,
  stat: true,
  forced: Z
}, {
  all: function (t) {
    var e = this;
    var n = Y(e);
    var r = n.resolve;
    var i = n.reject;
    var o = N(function () {
      var n = b(e.resolve);
      var o = [];
      var a = 0;
      var s = 1;
      _(t, function (t) {
        var c = a++;
        var u = false;
        o.push(undefined);
        s++;
        n.call(e, t).then(function (t) {
          if (!u) {
            u = true;
            o[c] = t;
            if (! --s) {
              r(o);
            }
          }
        }, i);
      });
      if (! --s) {
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
    var i = N(function () {
      var i = b(e.resolve);
      _(t, function (t) {
        i.call(e, t).then(n.resolve, r);
      });
    });
    if (i.error) {
      r(i.value);
    }
    return n.promise;
  }
});