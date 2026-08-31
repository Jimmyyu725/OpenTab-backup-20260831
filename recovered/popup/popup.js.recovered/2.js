var t = require("./94.js");
var r = require("./25.js");
var _i = [];
Object.freeze(_i);
var o = {};
function s() {
  return ++It.mobxGuid;
}
function _a(t) {
  _c(false, t);
  throw "X";
}
function _c(t, e) {
  if (!t) {
    throw new Error("[mobx] " + (e || "An invariant failed, however the error is obfuscated because this is a production build."));
  }
}
Object.freeze(o);
function u(t) {
  var e = false;
  return function () {
    if (!e) {
      e = true;
      return t.apply(this, arguments);
    }
  };
}
function l() {}
function _h(t) {
  return t !== null && typeof t == "object";
}
function p(t) {
  if (t === null || typeof t != "object") {
    return false;
  }
  var e = Object.getPrototypeOf(t);
  return e === Object.prototype || e === null;
}
function _d(t, e, n) {
  Object.defineProperty(t, e, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: n
  });
}
function _f(t, e) {
  var n = "isMobX" + t;
  e.prototype[n] = true;
  return function (t) {
    return _h(t) && t[n] === true;
  };
}
function _g(t) {
  return t instanceof Map;
}
function y(t) {
  return t instanceof Set;
}
function m(t) {
  var e = new Set();
  for (var n in t) {
    e.add(n);
  }
  Object.getOwnPropertySymbols(t).forEach(function (n) {
    if (Object.getOwnPropertyDescriptor(t, n).enumerable) {
      e.add(n);
    }
  });
  return Array.from(e);
}
function _b(t) {
  if (t && t.toString) {
    return t.toString();
  } else {
    return new String(t).toString();
  }
}
function v(t) {
  if (t === null) {
    return null;
  } else if (typeof t == "object") {
    return "" + t;
  } else {
    return t;
  }
}
var w = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols ? function (t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Object.getOwnPropertyNames;
var x = Symbol("mobx administration");
var _ = function () {
  function t(t = "Atom@" + s()) {
    this.name = t;
    this.isPendingUnobservation = false;
    this.isBeingObserved = false;
    this.observers = new Set();
    this.diffValue = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = Q.NOT_TRACKING;
  }
  t.prototype.onBecomeObserved = function () {
    if (this.onBecomeObservedListeners) {
      this.onBecomeObservedListeners.forEach(function (t) {
        return t();
      });
    }
  };
  t.prototype.onBecomeUnobserved = function () {
    if (this.onBecomeUnobservedListeners) {
      this.onBecomeUnobservedListeners.forEach(function (t) {
        return t();
      });
    }
  };
  t.prototype.reportObserved = function () {
    return Mt(this);
  };
  t.prototype.reportChanged = function () {
    Nt();
    (function (t) {
      if (t.lowestObserverState === Q.STALE) {
        return;
      }
      t.lowestObserverState = Q.STALE;
      t.observers.forEach(function (e) {
        if (e.dependenciesState === Q.UP_TO_DATE) {
          if (e.isTracing !== Z.NONE) {
            Bt(e, t);
          }
          e.onBecomeStale();
        }
        e.dependenciesState = Q.STALE;
      });
    })(this);
    Lt();
  };
  t.prototype.toString = function () {
    return this.name;
  };
  return t;
}();
var O = _f("Atom", _);
function T(t, e = l, n = l) {
  var r;
  var i = new _(t);
  if (e !== l) {
    ne("onBecomeObserved", i, e, r);
  }
  if (n !== l) {
    ee(i, n);
  }
  return i;
}
export var d = {
  identity: function (t, e) {
    return t === e;
  },
  structural: function (t, e) {
    return Je(t, e);
  },
  default: function (t, e) {
    return Object.is(t, e);
  },
  shallow: function (t, e) {
    return Je(t, e, 1);
  }
};
function E(t, e) {
  return (E = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var n in e) {
      if (e.hasOwnProperty(n)) {
        t[n] = e[n];
      }
    }
  })(t, e);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function _j() {
  return (_j = Object.assign || function (t) {
    var e;
    for (var n = 1, r = arguments.length; n < r; n++) {
      for (var i in e = arguments[n]) {
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          t[i] = e[i];
        }
      }
    }
    return t;
  }).apply(this, arguments);
}
function k(t) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  var n = 0;
  if (e) {
    return e.call(t);
  } else {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[n++],
          done: !t
        };
      }
    };
  }
}
function A(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) {
    return t;
  }
  var r;
  var i;
  var o = n.call(t);
  var s = [];
  try {
    while ((e === undefined || e-- > 0) && !(r = o.next()).done) {
      s.push(r.value);
    }
  } catch (t) {
    i = {
      error: t
    };
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o);
      }
    } finally {
      if (i) {
        throw i.error;
      }
    }
  }
  return s;
}
function C() {
  var t = [];
  for (var e = 0; e < arguments.length; e++) {
    t = t.concat(A(arguments[e]));
  }
  return t;
}
var I = Symbol("mobx did run lazy initializers");
var P = Symbol("mobx pending decorators");
var D = {};
var R = {};
function N(t, e) {
  var n = e ? D : R;
  return n[t] ||= {
    configurable: true,
    enumerable: e,
    get: function () {
      L(this);
      return this[t];
    },
    set: function (e) {
      L(this);
      this[t] = e;
    }
  };
}
function L(t) {
  var e;
  var n;
  if (t[I] !== true) {
    var r = t[P];
    if (r) {
      _d(t, I, true);
      var i = C(Object.getOwnPropertySymbols(r), Object.keys(r));
      try {
        for (var o = k(i), s = o.next(); !s.done; s = o.next()) {
          var a = r[s.value];
          a.propertyCreator(t, a.prop, a.descriptor, a.decoratorTarget, a.decoratorArguments);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (n = o.return)) {
            n.call(o);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    }
  }
}
function M(t, e) {
  return function () {
    var n;
    function r(r, i, o, s) {
      if (s === true) {
        e(r, i, o, r, n);
        return null;
      }
      if (!Object.prototype.hasOwnProperty.call(r, P)) {
        var a = r[P];
        _d(r, P, _j({}, a));
      }
      r[P][i] = {
        prop: i,
        propertyCreator: e,
        descriptor: o,
        decoratorTarget: r,
        decoratorArguments: n
      };
      return N(i, t);
    }
    if (B(arguments)) {
      n = _i;
      return r.apply(null, arguments);
    } else {
      n = Array.prototype.slice.call(arguments);
      return r;
    }
  };
}
function B(t) {
  return (t.length === 2 || t.length === 3) && (typeof t[1] == "string" || typeof t[1] == "symbol") || t.length === 4 && t[3] === true;
}
function U(t, e, n) {
  if (le(t)) {
    return t;
  } else if (Array.isArray(t)) {
    return g.array(t, {
      name: n
    });
  } else if (p(t)) {
    return g.object(t, undefined, {
      name: n
    });
  } else if (_g(t)) {
    return g.map(t, {
      name: n
    });
  } else if (y(t)) {
    return g.set(t, {
      name: n
    });
  } else {
    return t;
  }
}
function F(t) {
  return t;
}
function $(e) {
  _c(e);
  var n = M(true, function (t, n, r, i, o) {
    var s = r ? r.initializer ? r.initializer.call(t) : r.value : undefined;
    Ve(t).addObservableProp(n, s, e);
  });
  if (t !== undefined) {
    t.env;
  }
  var r = n;
  r.enhancer = e;
  return r;
}
var V = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
function z(t) {
  if (t == null) {
    return V;
  } else if (typeof t == "string") {
    return {
      name: t,
      deep: true,
      proxy: true
    };
  } else {
    return t;
  }
}
Object.freeze(V);
var q = $(U);
var W = $(function (t, e, n) {
  if (t == null || Ge(t) || De(t) || Me(t) || Fe(t)) {
    return t;
  } else if (Array.isArray(t)) {
    return g.array(t, {
      name: n,
      deep: false
    });
  } else if (p(t)) {
    return g.object(t, undefined, {
      name: n,
      deep: false
    });
  } else if (_g(t)) {
    return g.map(t, {
      name: n,
      deep: false
    });
  } else if (y(t)) {
    return g.set(t, {
      name: n,
      deep: false
    });
  } else {
    return _a(false);
  }
});
var H = $(F);
var G = $(function (t, e, n) {
  if (Je(t, e)) {
    return e;
  } else {
    return t;
  }
});
function Y(t) {
  if (t.defaultDecorator) {
    return t.defaultDecorator.enhancer;
  } else if (t.deep === false) {
    return F;
  } else {
    return U;
  }
}
var X = {
  box: function (t, e) {
    if (arguments.length > 2) {
      J("box");
    }
    var n = z(e);
    return new _t(t, Y(n), n.name, true, n.equals);
  },
  array: function (t, e) {
    if (arguments.length > 2) {
      J("array");
    }
    var n = z(e);
    return ke(t, Y(n), n.name);
  },
  map: function (t, e) {
    if (arguments.length > 2) {
      J("map");
    }
    var n = z(e);
    return new Le(t, Y(n), n.name);
  },
  set: function (t, e) {
    if (arguments.length > 2) {
      J("set");
    }
    var n = z(e);
    return new Ue(t, Y(n), n.name);
  },
  object: function (t, e, n) {
    if (typeof arguments[1] == "string") {
      J("object");
    }
    var r = z(n);
    if (r.proxy === false) {
      return ie({}, t, e, r);
    }
    var i = oe(r);
    var o = ie({}, undefined, undefined, r);
    var s = we(o);
    se(s, t, e, i);
    return s;
  },
  ref: H,
  shallow: W,
  deep: q,
  struct: G
};
export function g(t, e, n) {
  if (typeof arguments[1] == "string" || typeof arguments[1] == "symbol") {
    return q.apply(null, arguments);
  }
  if (le(t)) {
    return t;
  }
  var r = p(t) ? g.object(t, e, n) : Array.isArray(t) ? g.array(t, e) : _g(t) ? g.map(t, e) : y(t) ? g.set(t, e) : t;
  if (r !== t) {
    return r;
  }
  _a(false);
}
function J(t) {
  _a("Expected one or two arguments to observable." + t + ". Did you accidentally try to use observable." + t + " as decorator?");
}
Object.keys(X).forEach(function (t) {
  return g[t] = X[t];
});
var Q;
var Z;
var tt = M(false, function (t, e, n, r, i) {
  var o = n.get;
  var s = n.set;
  var a = i[0] || {};
  Ve(t).addComputedProp(t, e, _j({
    get: o,
    set: s,
    context: t
  }, a));
});
var et = tt({
  equals: d.structural
});
export function e(t, e, n) {
  if (typeof e == "string") {
    return tt.apply(null, arguments);
  }
  if (t !== null && typeof t == "object" && arguments.length === 1) {
    return tt.apply(null, arguments);
  }
  var r = typeof e == "object" ? e : {};
  r.get = t;
  r.set = typeof e == "function" ? e : r.set;
  r.name = r.name || t.name || "";
  return new Tt(r);
}
e.struct = et;
(function (t) {
  t[t.NOT_TRACKING = -1] = "NOT_TRACKING";
  t[t.UP_TO_DATE = 0] = "UP_TO_DATE";
  t[t.POSSIBLY_STALE = 1] = "POSSIBLY_STALE";
  t[t.STALE = 2] = "STALE";
})(Q ||= {});
(function (t) {
  t[t.NONE = 0] = "NONE";
  t[t.LOG = 1] = "LOG";
  t[t.BREAK = 2] = "BREAK";
})(Z ||= {});
function rt(t) {
  this.cause = t;
}
function it(t) {
  return t instanceof rt;
}
function ot(t) {
  switch (t.dependenciesState) {
    case Q.UP_TO_DATE:
      return false;
    case Q.NOT_TRACKING:
    case Q.STALE:
      return true;
    case Q.POSSIBLY_STALE:
      var e = pt(true);
      var n = lt();
      var r = t.observing;
      for (var i = r.length, o = 0; o < i; o++) {
        var s = r[o];
        if (St(s)) {
          if (It.disableErrorBoundaries) {
            s.get();
          } else {
            try {
              s.get();
            } catch (t) {
              ht(n);
              dt(e);
              return true;
            }
          }
          if (t.dependenciesState === Q.STALE) {
            ht(n);
            dt(e);
            return true;
          }
        }
      }
      ft(t);
      ht(n);
      dt(e);
      return false;
  }
}
function st(t) {
  var e = t.observers.size > 0;
  if (It.computationDepth > 0 && e) {
    _a(false);
  }
  if (!It.allowStateChanges && (!!e || It.enforceActions === "strict")) {
    _a(false);
  }
}
function at(t, e, n) {
  var r = pt(true);
  ft(t);
  t.newObserving = new Array(t.observing.length + 100);
  t.unboundDepsCount = 0;
  t.runId = ++It.runId;
  var i;
  var o = It.trackingDerivation;
  It.trackingDerivation = t;
  if (It.disableErrorBoundaries === true) {
    i = e.call(n);
  } else {
    try {
      i = e.call(n);
    } catch (t) {
      i = new rt(t);
    }
  }
  It.trackingDerivation = o;
  (function (t) {
    var e = t.observing;
    var n = t.observing = t.newObserving;
    var r = Q.UP_TO_DATE;
    var i = 0;
    for (var o = t.unboundDepsCount, s = 0; s < o; s++) {
      if ((a = n[s]).diffValue === 0) {
        a.diffValue = 1;
        if (i !== s) {
          n[i] = a;
        }
        i++;
      }
      if (a.dependenciesState > r) {
        r = a.dependenciesState;
      }
    }
    n.length = i;
    t.newObserving = null;
    o = e.length;
    while (o--) {
      if ((a = e[o]).diffValue === 0) {
        Dt(a, t);
      }
      a.diffValue = 0;
    }
    while (i--) {
      var a;
      if ((a = n[i]).diffValue === 1) {
        a.diffValue = 0;
        Pt(a, t);
      }
    }
    if (r !== Q.UP_TO_DATE) {
      t.dependenciesState = r;
      t.onBecomeStale();
    }
  })(t);
  dt(r);
  return i;
}
function ct(t) {
  var e = t.observing;
  t.observing = [];
  for (var n = e.length; n--;) {
    Dt(e[n], t);
  }
  t.dependenciesState = Q.NOT_TRACKING;
}
function ut(t) {
  var e = lt();
  try {
    return t();
  } finally {
    ht(e);
  }
}
function lt() {
  var t = It.trackingDerivation;
  It.trackingDerivation = null;
  return t;
}
function ht(t) {
  It.trackingDerivation = t;
}
function pt(t) {
  var e = It.allowStateReads;
  It.allowStateReads = t;
  return e;
}
function dt(t) {
  It.allowStateReads = t;
}
function ft(t) {
  if (t.dependenciesState !== Q.UP_TO_DATE) {
    t.dependenciesState = Q.UP_TO_DATE;
    var e = t.observing;
    for (var n = e.length; n--;) {
      e[n].lowestObserverState = Q.UP_TO_DATE;
    }
  }
}
var gt = 0;
var yt = 1;
var mt = Object.getOwnPropertyDescriptor(function () {}, "name");
if (mt) {
  mt.configurable;
}
function bt(t, e, n) {
  function r() {
    return vt(t, e, n || this, arguments);
  }
  r.isMobxAction = true;
  return r;
}
function vt(t, e, n, r) {
  var i = function (t, e, n) {
    var r = 0;
    var i = lt();
    Nt();
    var o = wt(true);
    var s = pt(true);
    var a = {
      prevDerivation: i,
      prevAllowStateChanges: o,
      prevAllowStateReads: s,
      notifySpy: false,
      startTime: r,
      actionId: yt++,
      parentActionId: gt
    };
    gt = a.actionId;
    return a;
  }();
  try {
    return e.apply(n, r);
  } catch (t) {
    i.error = t;
    throw t;
  } finally {
    (function (t) {
      if (gt !== t.actionId) {
        _a("invalid action stack. did you forget to finish an action?");
      }
      gt = t.parentActionId;
      if (t.error !== undefined) {
        It.suppressReactionErrors = true;
      }
      xt(t.prevAllowStateChanges);
      dt(t.prevAllowStateReads);
      Lt();
      ht(t.prevDerivation);
      if (t.notifySpy) {
        false;
      }
      It.suppressReactionErrors = false;
    })(i);
  }
}
function wt(t) {
  var e = It.allowStateChanges;
  It.allowStateChanges = t;
  return e;
}
function xt(t) {
  It.allowStateChanges = t;
}
var _t = function (t) {
  function e(e, n, r = "ObservableValue@" + s(), i = true, o = d.default) {
    var a = t.call(this, r) || this;
    a.enhancer = n;
    a.name = r;
    a.equals = o;
    a.hasUnreportedChange = false;
    a.value = n(e, undefined, r);
    return a;
  }
  (function (t, e) {
    function n() {
      this.constructor = t;
    }
    E(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  })(e, t);
  e.prototype.dehanceValue = function (t) {
    if (this.dehancer !== undefined) {
      return this.dehancer(t);
    } else {
      return t;
    }
  };
  e.prototype.set = function (t) {
    this.value;
    if ((t = this.prepareNewValue(t)) !== It.UNCHANGED) {
      0;
      this.setNewValue(t);
    }
  };
  e.prototype.prepareNewValue = function (t) {
    st(this);
    if (xe(this)) {
      var e = Oe(this, {
        object: this,
        type: "update",
        newValue: t
      });
      if (!e) {
        return It.UNCHANGED;
      }
      t = e.newValue;
    }
    t = this.enhancer(t, this.value, this.name);
    if (this.equals(this.value, t)) {
      return It.UNCHANGED;
    } else {
      return t;
    }
  };
  e.prototype.setNewValue = function (t) {
    var e = this.value;
    this.value = t;
    this.reportChanged();
    if (Te(this)) {
      Ee(this, {
        type: "update",
        object: this,
        newValue: t,
        oldValue: e
      });
    }
  };
  e.prototype.get = function () {
    this.reportObserved();
    return this.dehanceValue(this.value);
  };
  e.prototype.intercept = function (t) {
    return _e(this, t);
  };
  e.prototype.observe = function (t, e) {
    if (e) {
      t({
        object: this,
        type: "update",
        newValue: this.value,
        oldValue: undefined
      });
    }
    return Se(this, t);
  };
  e.prototype.toJSON = function () {
    return this.get();
  };
  e.prototype.toString = function () {
    return this.name + "[" + this.value + "]";
  };
  e.prototype.valueOf = function () {
    return v(this.get());
  };
  e.prototype[Symbol.toPrimitive] = function () {
    return this.valueOf();
  };
  return e;
}(_);
var Ot = _f("ObservableValue", _t);
var Tt = function () {
  function t(t) {
    this.dependenciesState = Q.NOT_TRACKING;
    this.observing = [];
    this.newObserving = null;
    this.isBeingObserved = false;
    this.isPendingUnobservation = false;
    this.observers = new Set();
    this.diffValue = 0;
    this.runId = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = Q.UP_TO_DATE;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + s();
    this.value = new rt(null);
    this.isComputing = false;
    this.isRunningSetter = false;
    this.isTracing = Z.NONE;
    _c(t.get, "missing option for computed: get");
    this.derivation = t.get;
    this.name = t.name || "ComputedValue@" + s();
    if (t.set) {
      this.setter = bt(this.name + "-setter", t.set);
    }
    this.equals = t.equals || (t.compareStructural || t.struct ? d.structural : d.default);
    this.scope = t.context;
    this.requiresReaction = !!t.requiresReaction;
    this.keepAlive = !!t.keepAlive;
  }
  t.prototype.onBecomeStale = function () {
    (function (t) {
      if (t.lowestObserverState !== Q.UP_TO_DATE) {
        return;
      }
      t.lowestObserverState = Q.POSSIBLY_STALE;
      t.observers.forEach(function (e) {
        if (e.dependenciesState === Q.UP_TO_DATE) {
          e.dependenciesState = Q.POSSIBLY_STALE;
          if (e.isTracing !== Z.NONE) {
            Bt(e, t);
          }
          e.onBecomeStale();
        }
      });
    })(this);
  };
  t.prototype.onBecomeObserved = function () {
    if (this.onBecomeObservedListeners) {
      this.onBecomeObservedListeners.forEach(function (t) {
        return t();
      });
    }
  };
  t.prototype.onBecomeUnobserved = function () {
    if (this.onBecomeUnobservedListeners) {
      this.onBecomeUnobservedListeners.forEach(function (t) {
        return t();
      });
    }
  };
  t.prototype.get = function () {
    if (this.isComputing) {
      _a("Cycle detected in computation " + this.name + ": " + this.derivation);
    }
    if (It.inBatch !== 0 || this.observers.size !== 0 || this.keepAlive) {
      Mt(this);
      if (ot(this) && this.trackAndCompute()) {
        (function (t) {
          if (t.lowestObserverState === Q.STALE) {
            return;
          }
          t.lowestObserverState = Q.STALE;
          t.observers.forEach(function (e) {
            if (e.dependenciesState === Q.POSSIBLY_STALE) {
              e.dependenciesState = Q.STALE;
            } else if (e.dependenciesState === Q.UP_TO_DATE) {
              t.lowestObserverState = Q.UP_TO_DATE;
            }
          });
        })(this);
      }
    } else if (ot(this)) {
      this.warnAboutUntrackedRead();
      Nt();
      this.value = this.computeValue(false);
      Lt();
    }
    var t = this.value;
    if (it(t)) {
      throw t.cause;
    }
    return t;
  };
  t.prototype.peek = function () {
    var t = this.computeValue(false);
    if (it(t)) {
      throw t.cause;
    }
    return t;
  };
  t.prototype.set = function (t) {
    if (this.setter) {
      _c(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
      this.isRunningSetter = true;
      try {
        this.setter.call(this.scope, t);
      } finally {
        this.isRunningSetter = false;
      }
    } else {
      _c(false, false);
    }
  };
  t.prototype.trackAndCompute = function () {
    var t = this.value;
    var e = this.dependenciesState === Q.NOT_TRACKING;
    var n = this.computeValue(true);
    var r = e || it(t) || it(n) || !this.equals(t, n);
    if (r) {
      this.value = n;
    }
    return r;
  };
  t.prototype.computeValue = function (t) {
    var e;
    this.isComputing = true;
    It.computationDepth++;
    if (t) {
      e = at(this, this.derivation, this.scope);
    } else if (It.disableErrorBoundaries === true) {
      e = this.derivation.call(this.scope);
    } else {
      try {
        e = this.derivation.call(this.scope);
      } catch (t) {
        e = new rt(t);
      }
    }
    It.computationDepth--;
    this.isComputing = false;
    return e;
  };
  t.prototype.suspend = function () {
    if (!this.keepAlive) {
      ct(this);
      this.value = undefined;
    }
  };
  t.prototype.observe = function (t, e) {
    var n = this;
    var r = true;
    var i = undefined;
    return c(function () {
      var o = n.get();
      if (!r || e) {
        var s = lt();
        t({
          type: "update",
          object: n,
          newValue: o,
          oldValue: i
        });
        ht(s);
      }
      r = false;
      i = o;
    });
  };
  t.prototype.warnAboutUntrackedRead = function () {};
  t.prototype.toJSON = function () {
    return this.get();
  };
  t.prototype.toString = function () {
    return this.name + "[" + this.derivation.toString() + "]";
  };
  t.prototype.valueOf = function () {
    return v(this.get());
  };
  t.prototype[Symbol.toPrimitive] = function () {
    return this.valueOf();
  };
  return t;
}();
var St = _f("ComputedValue", Tt);
function Et() {
  this.version = 5;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.computationDepth = 0;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = true;
  this.allowStateReads = true;
  this.enforceActions = false;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.computedConfigurable = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
}
var jt = {};
function kt() {
  if (typeof window != "undefined") {
    return window;
  } else if (r !== undefined) {
    return r;
  } else if (typeof self != "undefined") {
    return self;
  } else {
    return jt;
  }
}
var At = true;
var Ct = false;
var It = function () {
  var t = kt();
  if (t.__mobxInstanceCount > 0 && !t.__mobxGlobals) {
    At = false;
  }
  if (t.__mobxGlobals && t.__mobxGlobals.version !== new Et().version) {
    At = false;
  }
  if (At) {
    if (t.__mobxGlobals) {
      t.__mobxInstanceCount += 1;
      t.__mobxGlobals.UNCHANGED ||= {};
      return t.__mobxGlobals;
    } else {
      t.__mobxInstanceCount = 1;
      return t.__mobxGlobals = new Et();
    }
  } else {
    setTimeout(function () {
      if (!Ct) {
        _a("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
      }
    }, 1);
    return new Et();
  }
}();
function Pt(t, e) {
  t.observers.add(e);
  if (t.lowestObserverState > e.dependenciesState) {
    t.lowestObserverState = e.dependenciesState;
  }
}
function Dt(t, e) {
  t.observers.delete(e);
  if (t.observers.size === 0) {
    Rt(t);
  }
}
function Rt(t) {
  if (t.isPendingUnobservation === false) {
    t.isPendingUnobservation = true;
    It.pendingUnobservations.push(t);
  }
}
function Nt() {
  It.inBatch++;
}
function Lt() {
  if (--It.inBatch == 0) {
    $t();
    for (var t = It.pendingUnobservations, e = 0; e < t.length; e++) {
      var n = t[e];
      n.isPendingUnobservation = false;
      if (n.observers.size === 0) {
        if (n.isBeingObserved) {
          n.isBeingObserved = false;
          n.onBecomeUnobserved();
        }
        if (n instanceof Tt) {
          n.suspend();
        }
      }
    }
    It.pendingUnobservations = [];
  }
}
function Mt(t) {
  var e = It.trackingDerivation;
  if (e !== null) {
    if (e.runId !== t.lastAccessedBy) {
      t.lastAccessedBy = e.runId;
      e.newObserving[e.unboundDepsCount++] = t;
      if (!t.isBeingObserved) {
        t.isBeingObserved = true;
        t.onBecomeObserved();
      }
    }
    return true;
  } else {
    if (t.observers.size === 0 && It.inBatch > 0) {
      Rt(t);
    }
    return false;
  }
}
function Bt(t, e) {
  console.log("[mobx.trace] '" + t.name + "' is invalidated due to a change in: '" + e.name + "'");
  if (t.isTracing === Z.BREAK) {
    var n = [];
    (function t(e, n, r) {
      if (n.length >= 1000) {
        n.push("(and many more)");
        return;
      }
      n.push("" + new Array(r).join("\t") + e.name);
      if (e.dependencies) {
        e.dependencies.forEach(function (e) {
          return t(e, n, r + 1);
        });
      }
    })((r = t, ae(Ye(r, i))), n, 1);
    new Function("debugger;\n/*\nTracing '" + t.name + "'\n\nYou are entering this break point because derivation '" + t.name + "' is being traced and '" + e.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (t instanceof Tt ? t.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")();
  }
  var r;
  var i;
}
export var a = function () {
  function t(t = "Reaction@" + s(), e, n, r = false) {
    this.name = t;
    this.onInvalidate = e;
    this.errorHandler = n;
    this.requiresObservable = r;
    this.observing = [];
    this.newObserving = [];
    this.dependenciesState = Q.NOT_TRACKING;
    this.diffValue = 0;
    this.runId = 0;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + s();
    this.isDisposed = false;
    this._isScheduled = false;
    this._isTrackPending = false;
    this._isRunning = false;
    this.isTracing = Z.NONE;
  }
  t.prototype.onBecomeStale = function () {
    this.schedule();
  };
  t.prototype.schedule = function () {
    if (!this._isScheduled) {
      this._isScheduled = true;
      It.pendingReactions.push(this);
      $t();
    }
  };
  t.prototype.isScheduled = function () {
    return this._isScheduled;
  };
  t.prototype.runReaction = function () {
    if (!this.isDisposed) {
      Nt();
      this._isScheduled = false;
      if (ot(this)) {
        this._isTrackPending = true;
        try {
          this.onInvalidate();
          this._isTrackPending;
        } catch (t) {
          this.reportExceptionInDerivation(t);
        }
      }
      Lt();
    }
  };
  t.prototype.track = function (t) {
    if (!this.isDisposed) {
      Nt();
      0;
      this._isRunning = true;
      var e = at(this, t, undefined);
      this._isRunning = false;
      this._isTrackPending = false;
      if (this.isDisposed) {
        ct(this);
      }
      if (it(e)) {
        this.reportExceptionInDerivation(e.cause);
      }
      Lt();
    }
  };
  t.prototype.reportExceptionInDerivation = function (t) {
    var e = this;
    if (this.errorHandler) {
      this.errorHandler(t, this);
    } else {
      if (It.disableErrorBoundaries) {
        throw t;
      }
      var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
      if (It.suppressReactionErrors) {
        console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)");
      } else {
        console.error(n, t);
      }
      It.globalReactionErrorHandlers.forEach(function (n) {
        return n(t, e);
      });
    }
  };
  t.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;
      if (!this._isRunning) {
        Nt();
        ct(this);
        Lt();
      }
    }
  };
  t.prototype.getDisposer = function () {
    var t = this.dispose.bind(this);
    t[x] = this;
    return t;
  };
  t.prototype.toString = function () {
    return "Reaction[" + this.name + "]";
  };
  t.prototype.trace = function (t = false) {
    (function () {
      var t = [];
      for (var e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      var n = false;
      if (typeof t[t.length - 1] == "boolean") {
        n = t.pop();
      }
      var r = ge(t);
      if (!r) {
        return _a(false);
      }
      if (r.isTracing === Z.NONE) {
        console.log("[mobx.trace] '" + r.name + "' tracing enabled");
      }
      r.isTracing = n ? Z.BREAK : Z.LOG;
    })(this, t);
  };
  return t;
}();
function Ft(t) {
  return t();
}
function $t() {
  if (!(It.inBatch > 0) && !It.isRunningReactions) {
    Ft(Vt);
  }
}
function Vt() {
  It.isRunningReactions = true;
  for (var t = It.pendingReactions, e = 0; t.length > 0;) {
    if (++e == 100) {
      console.error("Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: " + t[0]);
      t.splice(0);
    }
    var n = t.splice(0);
    for (var r = 0, i = n.length; r < i; r++) {
      n[r].runReaction();
    }
  }
  It.isRunningReactions = false;
}
var zt = _f("Reaction", a);
function qt(t) {
  var e = Ft;
  Ft = function (n) {
    return t(function () {
      return e(n);
    });
  };
}
function Wt() {
  _a(false);
}
function Ht(t) {
  return function (e, n, r) {
    if (r) {
      if (r.value) {
        return {
          value: bt(t, r.value),
          enumerable: false,
          configurable: true,
          writable: true
        };
      }
      var i = r.initializer;
      return {
        enumerable: false,
        configurable: true,
        writable: true,
        initializer: function () {
          return bt(t, i.call(this));
        }
      };
    }
    return Gt(t).apply(this, arguments);
  };
}
function Gt(t) {
  return function (e, n, r) {
    Object.defineProperty(e, n, {
      configurable: true,
      enumerable: false,
      get: function () {},
      set: function (e) {
        _d(this, n, b(t, e));
      }
    });
  };
}
export function b(t, e, n, r) {
  if (arguments.length === 1 && typeof t == "function") {
    return bt(t.name || "<unnamed action>", t);
  } else if (arguments.length === 2 && typeof e == "function") {
    return bt(t, e);
  } else if (arguments.length === 1 && typeof t == "string") {
    return Ht(t);
  } else if (r !== true) {
    return Ht(e).apply(null, arguments);
  } else {
    _d(t, e, bt(t.name || e, n.value, this));
    return;
  }
}
export function i(t, e) {
  if (typeof t != "string") {
    t.name;
  }
  return vt(0, typeof t == "function" ? t : e, this, undefined);
}
function Kt(t, e, n) {
  _d(t, e, bt(e, n.bind(t)));
}
export function c(t, e = o) {
  var n;
  var r = e && e.name || t.name || "Autorun@" + s();
  if (!e.scheduler && !e.delay) {
    n = new a(r, function () {
      this.track(c);
    }, e.onError, e.requiresObservable);
  } else {
    var i = Zt(e);
    var _a2 = false;
    n = new a(r, function () {
      if (!_a2) {
        _a2 = true;
        i(function () {
          _a2 = false;
          if (!n.isDisposed) {
            n.track(c);
          }
        });
      }
    }, e.onError, e.requiresObservable);
  }
  function c() {
    t(n);
  }
  n.schedule();
  return n.getDisposer();
}
b.bound = function (t, e, n, r) {
  if (r === true) {
    Kt(t, e, n.value);
    return null;
  } else if (n) {
    return {
      configurable: true,
      enumerable: false,
      get: function () {
        Kt(this, e, n.value || n.initializer.call(this));
        return this[e];
      },
      set: Wt
    };
  } else {
    return {
      enumerable: false,
      configurable: true,
      set: function (t) {
        Kt(this, e, t);
      },
      get: function () {}
    };
  }
};
function Qt(t) {
  return t();
}
function Zt(t) {
  if (t.scheduler) {
    return t.scheduler;
  } else if (t.delay) {
    return function (e) {
      return setTimeout(e, t.delay);
    };
  } else {
    return Qt;
  }
}
export function h(t, e, n = o) {
  var r;
  var i;
  var _a3;
  var c = n.name || "Reaction@" + s();
  var u = b(c, n.onError ? (r = n.onError, i = e, function () {
    try {
      return i.apply(this, arguments);
    } catch (t) {
      r.call(this, t);
    }
  }) : e);
  var l = !n.scheduler && !n.delay;
  var h = Zt(n);
  var p = true;
  var _d2 = false;
  var f = n.compareStructural ? d.structural : n.equals || d.default;
  var g = new a(c, function () {
    if (p || l) {
      y();
    } else if (!_d2) {
      _d2 = true;
      h(y);
    }
  }, n.onError, n.requiresObservable);
  function y() {
    _d2 = false;
    if (!g.isDisposed) {
      var e = false;
      g.track(function () {
        var n = t(g);
        e = p || !f(_a3, n);
        _a3 = n;
      });
      if (p && n.fireImmediately) {
        u(_a3, g);
      }
      if (!p && e === true) {
        u(_a3, g);
      }
      p &&= false;
    }
  }
  g.schedule();
  return g.getDisposer();
}
function ee(t, e, n) {
  return ne("onBecomeUnobserved", t, e, n);
}
function ne(t, e, n, r) {
  var i = typeof r == "function" ? Ye(e, n) : Ye(e);
  var o = typeof r == "function" ? r : n;
  var s = t + "Listeners";
  if (i[s]) {
    i[s].add(o);
  } else {
    i[s] = new Set([o]);
  }
  if (typeof i[t] != "function") {
    return _a(false);
  } else {
    return function () {
      var t = i[s];
      if (t) {
        t.delete(o);
        if (t.size === 0) {
          delete i[s];
        }
      }
    };
  }
}
export function f(t) {
  var e = t.enforceActions;
  var n = t.computedRequiresReaction;
  var r = t.computedConfigurable;
  var i = t.disableErrorBoundaries;
  var o = t.reactionScheduler;
  var s = t.reactionRequiresObservable;
  var c = t.observableRequiresReaction;
  if (t.isolateGlobalState === true) {
    if (It.pendingReactions.length || It.inBatch || It.isRunningReactions) {
      _a("isolateGlobalState should be called before MobX is running any reactions");
    }
    Ct = true;
    if (At) {
      if (--kt().__mobxInstanceCount == 0) {
        kt().__mobxGlobals = undefined;
      }
      It = new Et();
    }
  }
  if (e !== undefined) {
    var u = undefined;
    switch (e) {
      case true:
      case "observed":
        u = true;
        break;
      case false:
      case "never":
        u = false;
        break;
      case "strict":
      case "always":
        u = "strict";
        break;
      default:
        _a("Invalid value for 'enforceActions': '" + e + "', expected 'never', 'always' or 'observed'");
    }
    It.enforceActions = u;
    It.allowStateChanges = u !== true && u !== "strict";
  }
  if (n !== undefined) {
    It.computedRequiresReaction = !!n;
  }
  if (s !== undefined) {
    It.reactionRequiresObservable = !!s;
  }
  if (c !== undefined) {
    It.observableRequiresReaction = !!c;
    It.allowStateReads = !It.observableRequiresReaction;
  }
  if (r !== undefined) {
    It.computedConfigurable = !!r;
  }
  if (i !== undefined) {
    if (i === true) {
      console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
    }
    It.disableErrorBoundaries = !!i;
  }
  if (o) {
    qt(o);
  }
}
function ie(t, e, n, r) {
  var i = oe(r = z(r));
  L(t);
  Ve(t, r.name, i.enhancer);
  if (e) {
    se(t, e, n, i);
  }
  return t;
}
function oe(t) {
  return t.defaultDecorator || (t.deep === false ? H : q);
}
function se(t, e, n, r) {
  var i;
  var o;
  Nt();
  try {
    var s = w(e);
    try {
      for (var a = k(s), c = a.next(); !c.done; c = a.next()) {
        var u = c.value;
        var l = Object.getOwnPropertyDescriptor(e, u);
        0;
        var h = (n && u in n ? n[u] : l.get ? tt : r)(t, u, l, true);
        if (h) {
          Object.defineProperty(t, u, h);
        }
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (c && !c.done && (o = a.return)) {
          o.call(a);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
  } finally {
    Lt();
  }
}
function ae(t) {
  var e;
  var n;
  var r = {
    name: t.name
  };
  if (t.observing && t.observing.length > 0) {
    r.dependencies = (e = t.observing, n = [], e.forEach(function (t) {
      if (n.indexOf(t) === -1) {
        n.push(t);
      }
    }), n).map(ae);
  }
  return r;
}
function ce() {
  this.message = "FLOW_CANCELLED";
}
function ue(t, e) {
  return t != null && (e !== undefined ? !!Ge(t) && t[x].values.has(e) : Ge(t) || !!t[x] || O(t) || zt(t) || St(t));
}
function le(t) {
  if (arguments.length !== 1) {
    _a(false);
  }
  return ue(t);
}
function he(t) {
  if (Ge(t)) {
    return t[x].getKeys();
  } else if (Me(t) || Fe(t)) {
    return Array.from(t.keys());
  } else if (De(t)) {
    return t.map(function (t, e) {
      return e;
    });
  } else {
    return _a(false);
  }
}
ce.prototype = Object.create(Error.prototype);
var pe = {
  detectCycles: true,
  exportMapsAsObjects: true,
  recurseEverything: false
};
function de(t, e, n, r) {
  if (r.detectCycles) {
    t.set(e, n);
  }
  return n;
}
export function j(t, e) {
  var n;
  if (typeof e == "boolean") {
    e = {
      detectCycles: e
    };
  }
  e ||= pe;
  e.detectCycles = e.detectCycles === undefined ? e.recurseEverything === true : e.detectCycles === true;
  if (e.detectCycles) {
    n = new Map();
  }
  return function t(e, n, r) {
    if (!n.recurseEverything && !le(e)) {
      return e;
    }
    if (typeof e != "object") {
      return e;
    }
    if (e === null) {
      return null;
    }
    if (e instanceof Date) {
      return e;
    }
    if (Ot(e)) {
      return t(e.get(), n, r);
    }
    if (le(e)) {
      he(e);
    }
    if (n.detectCycles === true && e !== null && r.has(e)) {
      return r.get(e);
    }
    if (De(e) || Array.isArray(e)) {
      var i = de(r, e, [], n);
      var o = e.map(function (e) {
        return t(e, n, r);
      });
      i.length = o.length;
      for (var s = 0, a = o.length; s < a; s++) {
        i[s] = o[s];
      }
      return i;
    }
    if (Fe(e) || Object.getPrototypeOf(e) === Set.prototype) {
      if (n.exportMapsAsObjects === false) {
        var c = de(r, e, new Set(), n);
        e.forEach(function (e) {
          c.add(t(e, n, r));
        });
        return c;
      }
      var u = de(r, e, [], n);
      e.forEach(function (e) {
        u.push(t(e, n, r));
      });
      return u;
    }
    if (Me(e) || Object.getPrototypeOf(e) === Map.prototype) {
      if (n.exportMapsAsObjects === false) {
        var l = de(r, e, new Map(), n);
        e.forEach(function (e, i) {
          l.set(i, t(e, n, r));
        });
        return l;
      }
      var h = de(r, e, {}, n);
      e.forEach(function (e, i) {
        h[i] = t(e, n, r);
      });
      return h;
    }
    var p = de(r, e, {}, n);
    m(e).forEach(function (i) {
      p[i] = t(e[i], n, r);
    });
    return p;
  }(t, e, n);
}
function ge(t) {
  switch (t.length) {
    case 0:
      return It.trackingDerivation;
    case 1:
      return Ye(t[0]);
    case 2:
      return Ye(t[0], t[1]);
  }
}
function ye(t, e = undefined) {
  Nt();
  try {
    return t.apply(e);
  } finally {
    Lt();
  }
}
function me(t) {
  return t[x];
}
function be(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "symbol";
}
var ve = {
  has: function (t, e) {
    if (e === x || e === "constructor" || e === I) {
      return true;
    }
    var n = me(t);
    if (be(e)) {
      return n.has(e);
    } else {
      return e in t;
    }
  },
  get: function (t, e) {
    if (e === x || e === "constructor" || e === I) {
      return t[e];
    }
    var n = me(t);
    var r = n.values.get(e);
    if (r instanceof _) {
      var i = r.get();
      if (i === undefined) {
        n.has(e);
      }
      return i;
    }
    if (be(e)) {
      n.has(e);
    }
    return t[e];
  },
  set: function (t, e, n) {
    return !!be(e) && (function t(e, n, r) {
      if (arguments.length !== 2 || Fe(e)) {
        if (Ge(e)) {
          var i = e[x];
          var o = i.values.get(n);
          if (o) {
            i.write(n, r);
          } else {
            i.addObservableProp(n, r, i.defaultEnhancer);
          }
        } else if (Me(e)) {
          e.set(n, r);
        } else if (Fe(e)) {
          e.add(n);
        } else {
          if (!De(e)) {
            return _a(false);
          }
          if (typeof n != "number") {
            n = parseInt(n, 10);
          }
          _c(n >= 0, "Not a valid index: '" + n + "'");
          Nt();
          if (n >= e.length) {
            e.length = n + 1;
          }
          e[n] = r;
          Lt();
        }
      } else {
        Nt();
        var s = n;
        try {
          for (var u in s) {
            t(e, u, s[u]);
          }
        } finally {
          Lt();
        }
      }
    }(t, e, n), true);
  },
  deleteProperty: function (t, e) {
    return !!be(e) && (me(t).remove(e), true);
  },
  ownKeys: function (t) {
    me(t).keysAtom.reportObserved();
    return Reflect.ownKeys(t);
  },
  preventExtensions: function (t) {
    _a("Dynamic observable objects cannot be frozen");
    return false;
  }
};
function we(t) {
  var e = new Proxy(t, ve);
  t[x].proxy = e;
  return e;
}
function xe(t) {
  return t.interceptors !== undefined && t.interceptors.length > 0;
}
function _e(t, e) {
  var n = t.interceptors ||= [];
  n.push(e);
  return u(function () {
    var t = n.indexOf(e);
    if (t !== -1) {
      n.splice(t, 1);
    }
  });
}
function Oe(t, e) {
  var n = lt();
  try {
    for (var r = C(t.interceptors || []), i = 0, o = r.length; i < o && (_c(!(e = r[i](e)) || e.type, "Intercept handlers should return nothing or a change object"), e); i++);
    return e;
  } finally {
    ht(n);
  }
}
function Te(t) {
  return t.changeListeners !== undefined && t.changeListeners.length > 0;
}
function Se(t, e) {
  var n = t.changeListeners ||= [];
  n.push(e);
  return u(function () {
    var t = n.indexOf(e);
    if (t !== -1) {
      n.splice(t, 1);
    }
  });
}
function Ee(t, e) {
  var n = lt();
  var r = t.changeListeners;
  if (r) {
    for (var i = 0, o = (r = r.slice()).length; i < o; i++) {
      r[i](e);
    }
    ht(n);
  }
}
var je = {
  get: function (t, e) {
    if (e === x) {
      return t[x];
    } else if (e === "length") {
      return t[x].getArrayLength();
    } else if (typeof e == "number") {
      return Ce.get.call(t, e);
    } else if (typeof e != "string" || isNaN(e)) {
      if (Ce.hasOwnProperty(e)) {
        return Ce[e];
      } else {
        return t[e];
      }
    } else {
      return Ce.get.call(t, parseInt(e));
    }
  },
  set: function (t, e, n) {
    if (e === "length") {
      t[x].setArrayLength(n);
    }
    if (typeof e == "number") {
      Ce.set.call(t, e, n);
    }
    if (typeof e == "symbol" || isNaN(e)) {
      t[e] = n;
    } else {
      Ce.set.call(t, parseInt(e), n);
    }
    return true;
  },
  preventExtensions: function (t) {
    _a("Observable arrays cannot be frozen");
    return false;
  }
};
function ke(t, e, n = "ObservableArray@" + s(), r = false) {
  var i;
  var o;
  var a;
  var c = new Ae(n, e, r);
  i = c.values;
  o = x;
  a = c;
  Object.defineProperty(i, o, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: a
  });
  var u = new Proxy(c.values, je);
  c.proxy = u;
  if (t && t.length) {
    var l = wt(true);
    c.spliceWithArray(0, 0, t);
    xt(l);
  }
  return u;
}
var Ae = function () {
  function t(t, e, n) {
    this.owned = n;
    this.values = [];
    this.proxy = undefined;
    this.lastKnownLength = 0;
    this.atom = new _(t || "ObservableArray@" + s());
    this.enhancer = function (n, r) {
      return e(n, r, t + "[..]");
    };
  }
  t.prototype.dehanceValue = function (t) {
    if (this.dehancer !== undefined) {
      return this.dehancer(t);
    } else {
      return t;
    }
  };
  t.prototype.dehanceValues = function (t) {
    if (this.dehancer !== undefined && t.length > 0) {
      return t.map(this.dehancer);
    } else {
      return t;
    }
  };
  t.prototype.intercept = function (t) {
    return _e(this, t);
  };
  t.prototype.observe = function (t, e = false) {
    if (e) {
      t({
        object: this.proxy,
        type: "splice",
        index: 0,
        added: this.values.slice(),
        addedCount: this.values.length,
        removed: [],
        removedCount: 0
      });
    }
    return Se(this, t);
  };
  t.prototype.getArrayLength = function () {
    this.atom.reportObserved();
    return this.values.length;
  };
  t.prototype.setArrayLength = function (t) {
    if (typeof t != "number" || t < 0) {
      throw new Error("[mobx.array] Out of range: " + t);
    }
    var e = this.values.length;
    if (t !== e) {
      if (t > e) {
        var n = new Array(t - e);
        for (var r = 0; r < t - e; r++) {
          n[r] = undefined;
        }
        this.spliceWithArray(e, 0, n);
      } else {
        this.spliceWithArray(t, e - t);
      }
    }
  };
  t.prototype.updateArrayLength = function (t, e) {
    if (t !== this.lastKnownLength) {
      throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
    }
    this.lastKnownLength += e;
  };
  t.prototype.spliceWithArray = function (t, e, n) {
    var r = this;
    st(this.atom);
    var o = this.values.length;
    if (t === undefined) {
      t = 0;
    } else if (t > o) {
      t = o;
    } else if (t < 0) {
      t = Math.max(0, o + t);
    }
    e = arguments.length === 1 ? o - t : e == null ? 0 : Math.max(0, Math.min(e, o - t));
    if (n === undefined) {
      n = _i;
    }
    if (xe(this)) {
      var s = Oe(this, {
        object: this.proxy,
        type: "splice",
        index: t,
        removedCount: e,
        added: n
      });
      if (!s) {
        return _i;
      }
      e = s.removedCount;
      n = s.added;
    }
    n = n.length === 0 ? n : n.map(function (t) {
      return r.enhancer(t, undefined);
    });
    var a = this.spliceItemsIntoValues(t, e, n);
    if (e !== 0 || n.length !== 0) {
      this.notifyArraySplice(t, n, a);
    }
    return this.dehanceValues(a);
  };
  t.prototype.spliceItemsIntoValues = function (t, e, n) {
    var r;
    if (n.length < 10000) {
      return (r = this.values).splice.apply(r, C([t, e], n));
    }
    var i = this.values.slice(t, t + e);
    this.values = this.values.slice(0, t).concat(n, this.values.slice(t + e));
    return i;
  };
  t.prototype.notifyArrayChildUpdate = function (t, e, n) {
    var r = !this.owned && false;
    var i = Te(this);
    var o = i || r ? {
      object: this.proxy,
      type: "update",
      index: t,
      newValue: e,
      oldValue: n
    } : null;
    this.atom.reportChanged();
    if (i) {
      Ee(this, o);
    }
  };
  t.prototype.notifyArraySplice = function (t, e, n) {
    var r = !this.owned && false;
    var i = Te(this);
    var o = i || r ? {
      object: this.proxy,
      type: "splice",
      index: t,
      removed: n,
      added: e,
      removedCount: n.length,
      addedCount: e.length
    } : null;
    this.atom.reportChanged();
    if (i) {
      Ee(this, o);
    }
  };
  return t;
}();
var Ce = {
  intercept: function (t) {
    return this[x].intercept(t);
  },
  observe: function (t, e = false) {
    return this[x].observe(t, e);
  },
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var e = this[x];
    return e.spliceWithArray(0, e.values.length, t);
  },
  toJS: function () {
    return this.slice();
  },
  toJSON: function () {
    return this.toJS();
  },
  splice: function (t, e) {
    var n = [];
    for (var r = 2; r < arguments.length; r++) {
      n[r - 2] = arguments[r];
    }
    var i = this[x];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return i.spliceWithArray(t);
      case 2:
        return i.spliceWithArray(t, e);
    }
    return i.spliceWithArray(t, e, n);
  },
  spliceWithArray: function (t, e, n) {
    return this[x].spliceWithArray(t, e, n);
  },
  push: function () {
    var t = [];
    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
    var n = this[x];
    n.spliceWithArray(n.values.length, 0, t);
    return n.values.length;
  },
  pop: function () {
    return this.splice(Math.max(this[x].values.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    var t = [];
    for (var e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
    var n = this[x];
    n.spliceWithArray(0, 0, t);
    return n.values.length;
  },
  reverse: function () {
    var t = this.slice();
    return t.reverse.apply(t, arguments);
  },
  sort: function (t) {
    var e = this.slice();
    return e.sort.apply(e, arguments);
  },
  remove: function (t) {
    var e = this[x];
    var n = e.dehanceValues(e.values).indexOf(t);
    return n > -1 && (this.splice(n, 1), true);
  },
  get: function (t) {
    var e = this[x];
    if (e) {
      if (t < e.values.length) {
        e.atom.reportObserved();
        return e.dehanceValue(e.values[t]);
      }
      console.warn("[mobx.array] Attempt to read an array index (" + t + ") that is out of bounds (" + e.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    }
  },
  set: function (t, e) {
    var n = this[x];
    var r = n.values;
    if (t < r.length) {
      st(n.atom);
      var i = r[t];
      if (xe(n)) {
        var o = Oe(n, {
          type: "update",
          object: n.proxy,
          index: t,
          newValue: e
        });
        if (!o) {
          return;
        }
        e = o.newValue;
      }
      if ((e = n.enhancer(e, i)) !== i) {
        r[t] = e;
        n.notifyArrayChildUpdate(t, e, i);
      }
    } else {
      if (t !== r.length) {
        throw new Error("[mobx.array] Index out of bounds, " + t + " is larger than " + r.length);
      }
      n.spliceWithArray(t, 0, [e]);
    }
  }
};
["concat", "flat", "includes", "indexOf", "join", "lastIndexOf", "slice", "toString", "toLocaleString"].forEach(function (t) {
  if (typeof Array.prototype[t] == "function") {
    Ce[t] = function () {
      var e = this[x];
      e.atom.reportObserved();
      var n = e.dehanceValues(e.values);
      return n[t].apply(n, arguments);
    };
  }
});
["every", "filter", "find", "findIndex", "flatMap", "forEach", "map", "some"].forEach(function (t) {
  if (typeof Array.prototype[t] == "function") {
    Ce[t] = function (e, n) {
      var r = this;
      var i = this[x];
      i.atom.reportObserved();
      return i.dehanceValues(i.values)[t](function (t, i) {
        return e.call(n, t, i, r);
      }, n);
    };
  }
});
["reduce", "reduceRight"].forEach(function (t) {
  Ce[t] = function () {
    var e = this;
    var n = this[x];
    n.atom.reportObserved();
    var r = arguments[0];
    arguments[0] = function (t, i, o) {
      i = n.dehanceValue(i);
      return r(t, i, o, e);
    };
    return n.values[t].apply(n.values, arguments);
  };
});
var Ie;
var Pe = _f("ObservableArrayAdministration", Ae);
function De(t) {
  return _h(t) && Pe(t[x]);
}
var Re;
var Ne = {};
var Le = function () {
  function t(t, e = U, n = "ObservableMap@" + s()) {
    this.enhancer = e;
    this.name = n;
    this[Ie] = Ne;
    this._keysAtom = T(this.name + ".keys()");
    this[Symbol.toStringTag] = "Map";
    if (typeof Map != "function") {
      throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
    }
    this._data = new Map();
    this._hasMap = new Map();
    this.merge(t);
  }
  t.prototype._has = function (t) {
    return this._data.has(t);
  };
  t.prototype.has = function (t) {
    var e = this;
    if (!It.trackingDerivation) {
      return this._has(t);
    }
    var n = this._hasMap.get(t);
    if (!n) {
      var r = n = new _t(this._has(t), F, this.name + "." + _b(t) + "?", false);
      this._hasMap.set(t, r);
      ee(r, function () {
        return e._hasMap.delete(t);
      });
    }
    return n.get();
  };
  t.prototype.set = function (t, e) {
    var n = this._has(t);
    if (xe(this)) {
      var r = Oe(this, {
        type: n ? "update" : "add",
        object: this,
        newValue: e,
        name: t
      });
      if (!r) {
        return this;
      }
      e = r.newValue;
    }
    if (n) {
      this._updateValue(t, e);
    } else {
      this._addValue(t, e);
    }
    return this;
  };
  t.prototype.delete = function (t) {
    var e = this;
    if ((st(this._keysAtom), xe(this)) && !(r = Oe(this, {
      type: "delete",
      object: this,
      name: t
    }))) {
      return false;
    }
    if (this._has(t)) {
      var n = Te(this);
      var r = n ? {
        type: "delete",
        object: this,
        oldValue: this._data.get(t).value,
        name: t
      } : null;
      ye(function () {
        e._keysAtom.reportChanged();
        e._updateHasMapEntry(t, false);
        e._data.get(t).setNewValue(undefined);
        e._data.delete(t);
      });
      if (n) {
        Ee(this, r);
      }
      return true;
    }
    return false;
  };
  t.prototype._updateHasMapEntry = function (t, e) {
    var n = this._hasMap.get(t);
    if (n) {
      n.setNewValue(e);
    }
  };
  t.prototype._updateValue = function (t, e) {
    var n = this._data.get(t);
    if ((e = n.prepareNewValue(e)) !== It.UNCHANGED) {
      var r = Te(this);
      var i = r ? {
        type: "update",
        object: this,
        oldValue: n.value,
        name: t,
        newValue: e
      } : null;
      0;
      n.setNewValue(e);
      if (r) {
        Ee(this, i);
      }
    }
  };
  t.prototype._addValue = function (t, e) {
    var n = this;
    st(this._keysAtom);
    ye(function () {
      var r = new _t(e, n.enhancer, n.name + "." + _b(t), false);
      n._data.set(t, r);
      e = r.value;
      n._updateHasMapEntry(t, true);
      n._keysAtom.reportChanged();
    });
    var r = Te(this);
    var i = r ? {
      type: "add",
      object: this,
      name: t,
      newValue: e
    } : null;
    if (r) {
      Ee(this, i);
    }
  };
  t.prototype.get = function (t) {
    if (this.has(t)) {
      return this.dehanceValue(this._data.get(t).get());
    } else {
      return this.dehanceValue(undefined);
    }
  };
  t.prototype.dehanceValue = function (t) {
    if (this.dehancer !== undefined) {
      return this.dehancer(t);
    } else {
      return t;
    }
  };
  t.prototype.keys = function () {
    this._keysAtom.reportObserved();
    return this._data.keys();
  };
  t.prototype.values = function () {
    var t = this;
    var e = this.keys();
    return tn({
      next: function () {
        var n = e.next();
        var r = n.done;
        var i = n.value;
        return {
          done: r,
          value: r ? undefined : t.get(i)
        };
      }
    });
  };
  t.prototype.entries = function () {
    var t = this;
    var e = this.keys();
    return tn({
      next: function () {
        var n = e.next();
        var r = n.done;
        var i = n.value;
        return {
          done: r,
          value: r ? undefined : [i, t.get(i)]
        };
      }
    });
  };
  t.prototype[Ie = x, Symbol.iterator] = function () {
    return this.entries();
  };
  t.prototype.forEach = function (t, e) {
    var n;
    var r;
    try {
      for (var i = k(this), o = i.next(); !o.done; o = i.next()) {
        var s = A(o.value, 2);
        var a = s[0];
        var c = s[1];
        t.call(e, c, a, this);
      }
    } catch (t) {
      n = {
        error: t
      };
    } finally {
      try {
        if (o && !o.done && (r = i.return)) {
          r.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
  };
  t.prototype.merge = function (t) {
    var e = this;
    if (Me(t)) {
      t = t.toJS();
    }
    ye(function () {
      var n = wt(true);
      try {
        if (p(t)) {
          m(t).forEach(function (n) {
            return e.set(n, t[n]);
          });
        } else if (Array.isArray(t)) {
          t.forEach(function (t) {
            var n = A(t, 2);
            var r = n[0];
            var i = n[1];
            return e.set(r, i);
          });
        } else if (_g(t)) {
          if (t.constructor !== Map) {
            _a("Cannot initialize from classes that inherit from Map: " + t.constructor.name);
          }
          t.forEach(function (t, n) {
            return e.set(n, t);
          });
        } else if (t != null) {
          _a("Cannot initialize map from " + t);
        }
      } finally {
        xt(n);
      }
    });
    return this;
  };
  t.prototype.clear = function () {
    var t = this;
    ye(function () {
      ut(function () {
        var e;
        var n;
        try {
          for (var r = k(t.keys()), i = r.next(); !i.done; i = r.next()) {
            var o = i.value;
            t.delete(o);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (i && !i.done && (n = r.return)) {
              n.call(r);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      });
    });
  };
  t.prototype.replace = function (t) {
    var e = this;
    ye(function () {
      var n;
      var r;
      var i;
      var o;
      var s = function (t) {
        if (_g(t) || Me(t)) {
          return t;
        }
        if (Array.isArray(t)) {
          return new Map(t);
        }
        if (p(t)) {
          var e = new Map();
          for (var n in t) {
            e.set(n, t[n]);
          }
          return e;
        }
        return _a("Cannot convert to map from '" + t + "'");
      }(t);
      var c = new Map();
      var u = false;
      try {
        for (var l = k(e._data.keys()), h = l.next(); !h.done; h = l.next()) {
          var d = h.value;
          if (!s.has(d)) {
            if (e.delete(d)) {
              u = true;
            } else {
              var f = e._data.get(d);
              c.set(d, f);
            }
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (h && !h.done && (r = l.return)) {
            r.call(l);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      try {
        for (var y = k(s.entries()), m = y.next(); !m.done; m = y.next()) {
          var b = A(m.value, 2);
          d = b[0];
          f = b[1];
          var v = e._data.has(d);
          e.set(d, f);
          if (e._data.has(d)) {
            var w = e._data.get(d);
            c.set(d, w);
            if (!v) {
              u = true;
            }
          }
        }
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          if (m && !m.done && (o = y.return)) {
            o.call(y);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      if (!u) {
        if (e._data.size !== c.size) {
          e._keysAtom.reportChanged();
        } else {
          var x = e._data.keys();
          var _ = c.keys();
          for (var O = x.next(), T = _.next(); !O.done;) {
            if (O.value !== T.value) {
              e._keysAtom.reportChanged();
              break;
            }
            O = x.next();
            T = _.next();
          }
        }
      }
      e._data = c;
    });
    return this;
  };
  Object.defineProperty(t.prototype, "size", {
    get: function () {
      this._keysAtom.reportObserved();
      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });
  t.prototype.toPOJO = function () {
    var t;
    var e;
    var n = {};
    try {
      for (var r = k(this), i = r.next(); !i.done; i = r.next()) {
        var o = A(i.value, 2);
        var s = o[0];
        var a = o[1];
        n[typeof s == "symbol" ? s : _b(s)] = a;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        if (i && !i.done && (e = r.return)) {
          e.call(r);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
    return n;
  };
  t.prototype.toJS = function () {
    return new Map(this);
  };
  t.prototype.toJSON = function () {
    return this.toPOJO();
  };
  t.prototype.toString = function () {
    var t = this;
    return this.name + "[{ " + Array.from(this.keys()).map(function (e) {
      return _b(e) + ": " + t.get(e);
    }).join(", ") + " }]";
  };
  t.prototype.observe = function (t, e) {
    return Se(this, t);
  };
  t.prototype.intercept = function (t) {
    return _e(this, t);
  };
  return t;
}();
var Me = _f("ObservableMap", Le);
var Be = {};
var Ue = function () {
  function t(t, e = U, n = "ObservableSet@" + s()) {
    this.name = n;
    this[Re] = Be;
    this._data = new Set();
    this._atom = T(this.name);
    this[Symbol.toStringTag] = "Set";
    if (typeof Set != "function") {
      throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
    }
    this.enhancer = function (t, r) {
      return e(t, r, n);
    };
    if (t) {
      this.replace(t);
    }
  }
  t.prototype.dehanceValue = function (t) {
    if (this.dehancer !== undefined) {
      return this.dehancer(t);
    } else {
      return t;
    }
  };
  t.prototype.clear = function () {
    var t = this;
    ye(function () {
      ut(function () {
        var e;
        var n;
        try {
          for (var r = k(t._data.values()), i = r.next(); !i.done; i = r.next()) {
            var o = i.value;
            t.delete(o);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (i && !i.done && (n = r.return)) {
              n.call(r);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      });
    });
  };
  t.prototype.forEach = function (t, e) {
    var n;
    var r;
    try {
      for (var i = k(this), o = i.next(); !o.done; o = i.next()) {
        var s = o.value;
        t.call(e, s, s, this);
      }
    } catch (t) {
      n = {
        error: t
      };
    } finally {
      try {
        if (o && !o.done && (r = i.return)) {
          r.call(i);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
  };
  Object.defineProperty(t.prototype, "size", {
    get: function () {
      this._atom.reportObserved();
      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });
  t.prototype.add = function (t) {
    var e = this;
    if ((st(this._atom), xe(this)) && !(r = Oe(this, {
      type: "add",
      object: this,
      newValue: t
    }))) {
      return this;
    }
    if (!this.has(t)) {
      ye(function () {
        e._data.add(e.enhancer(t, undefined));
        e._atom.reportChanged();
      });
      var n = Te(this);
      var r = n ? {
        type: "add",
        object: this,
        newValue: t
      } : null;
      0;
      if (n) {
        Ee(this, r);
      }
    }
    return this;
  };
  t.prototype.delete = function (t) {
    var e = this;
    if (xe(this) && !(r = Oe(this, {
      type: "delete",
      object: this,
      oldValue: t
    }))) {
      return false;
    }
    if (this.has(t)) {
      var n = Te(this);
      var r = n ? {
        type: "delete",
        object: this,
        oldValue: t
      } : null;
      ye(function () {
        e._atom.reportChanged();
        e._data.delete(t);
      });
      if (n) {
        Ee(this, r);
      }
      return true;
    }
    return false;
  };
  t.prototype.has = function (t) {
    this._atom.reportObserved();
    return this._data.has(this.dehanceValue(t));
  };
  t.prototype.entries = function () {
    var t = 0;
    var e = Array.from(this.keys());
    var n = Array.from(this.values());
    return tn({
      next: function () {
        var r = t;
        t += 1;
        if (r < n.length) {
          return {
            value: [e[r], n[r]],
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    });
  };
  t.prototype.keys = function () {
    return this.values();
  };
  t.prototype.values = function () {
    this._atom.reportObserved();
    var t = this;
    var e = 0;
    var n = Array.from(this._data.values());
    return tn({
      next: function () {
        if (e < n.length) {
          return {
            value: t.dehanceValue(n[e++]),
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    });
  };
  t.prototype.replace = function (t) {
    var e = this;
    if (Fe(t)) {
      t = t.toJS();
    }
    ye(function () {
      var n = wt(true);
      try {
        if (Array.isArray(t) || y(t)) {
          e.clear();
          t.forEach(function (t) {
            return e.add(t);
          });
        } else if (t != null) {
          _a("Cannot initialize set from " + t);
        }
      } finally {
        xt(n);
      }
    });
    return this;
  };
  t.prototype.observe = function (t, e) {
    return Se(this, t);
  };
  t.prototype.intercept = function (t) {
    return _e(this, t);
  };
  t.prototype.toJS = function () {
    return new Set(this);
  };
  t.prototype.toString = function () {
    return this.name + "[ " + Array.from(this).join(", ") + " ]";
  };
  t.prototype[Re = x, Symbol.iterator] = function () {
    return this.values();
  };
  return t;
}();
var Fe = _f("ObservableSet", Ue);
var $e = function () {
  function t(t, e = new Map(), n, r) {
    this.target = t;
    this.values = e;
    this.name = n;
    this.defaultEnhancer = r;
    this.keysAtom = new _(n + ".keys");
  }
  t.prototype.read = function (t) {
    return this.values.get(t).get();
  };
  t.prototype.write = function (t, e) {
    var n = this.target;
    var r = this.values.get(t);
    if (r instanceof Tt) {
      r.set(e);
    } else {
      if (xe(this)) {
        if (!(o = Oe(this, {
          type: "update",
          object: this.proxy || n,
          name: t,
          newValue: e
        }))) {
          return;
        }
        e = o.newValue;
      }
      if ((e = r.prepareNewValue(e)) !== It.UNCHANGED) {
        var i = Te(this);
        var o = i ? {
          type: "update",
          object: this.proxy || n,
          oldValue: r.value,
          name: t,
          newValue: e
        } : null;
        0;
        r.setNewValue(e);
        if (i) {
          Ee(this, o);
        }
      }
    }
  };
  t.prototype.has = function (t) {
    var e = this.pendingKeys ||= new Map();
    var n = e.get(t);
    if (n) {
      return n.get();
    }
    var r = !!this.values.get(t);
    n = new _t(r, F, this.name + "." + _b(t) + "?", false);
    e.set(t, n);
    return n.get();
  };
  t.prototype.addObservableProp = function (t, e, n = this.defaultEnhancer) {
    var r = this.target;
    if (xe(this)) {
      var i = Oe(this, {
        object: this.proxy || r,
        name: t,
        type: "add",
        newValue: e
      });
      if (!i) {
        return;
      }
      e = i.newValue;
    }
    var o = new _t(e, n, this.name + "." + _b(t), false);
    this.values.set(t, o);
    e = o.value;
    Object.defineProperty(r, t, function (t) {
      return ze[t] ||= {
        configurable: true,
        enumerable: true,
        get: function () {
          return this[x].read(t);
        },
        set: function (e) {
          this[x].write(t, e);
        }
      };
    }(t));
    this.notifyPropertyAddition(t, e);
  };
  t.prototype.addComputedProp = function (t, e, n) {
    var r;
    var i;
    var o;
    var s = this.target;
    n.name = n.name || this.name + "." + _b(e);
    this.values.set(e, new Tt(n));
    if (t === s || (r = t, i = e, !(o = Object.getOwnPropertyDescriptor(r, i)) || o.configurable !== false && o.writable !== false)) {
      Object.defineProperty(t, e, function (t) {
        return qe[t] ||= {
          configurable: It.computedConfigurable,
          enumerable: false,
          get: function () {
            return We(this).read(t);
          },
          set: function (e) {
            We(this).write(t, e);
          }
        };
      }(e));
    }
  };
  t.prototype.remove = function (t) {
    if (this.values.has(t)) {
      var e = this.target;
      if (xe(this)) {
        if (!(s = Oe(this, {
          object: this.proxy || e,
          name: t,
          type: "remove"
        }))) {
          return;
        }
      }
      try {
        Nt();
        var n = Te(this);
        var r = this.values.get(t);
        var i = r && r.get();
        if (r) {
          r.set(undefined);
        }
        this.keysAtom.reportChanged();
        this.values.delete(t);
        if (this.pendingKeys) {
          var o = this.pendingKeys.get(t);
          if (o) {
            o.set(false);
          }
        }
        delete this.target[t];
        var s = n ? {
          type: "remove",
          object: this.proxy || e,
          oldValue: i,
          name: t
        } : null;
        0;
        if (n) {
          Ee(this, s);
        }
      } finally {
        Lt();
      }
    }
  };
  t.prototype.illegalAccess = function (t, e) {
    console.warn("Property '" + e + "' of '" + t + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
  };
  t.prototype.observe = function (t, e) {
    return Se(this, t);
  };
  t.prototype.intercept = function (t) {
    return _e(this, t);
  };
  t.prototype.notifyPropertyAddition = function (t, e) {
    var n = Te(this);
    var r = n ? {
      type: "add",
      object: this.proxy || this.target,
      name: t,
      newValue: e
    } : null;
    if (n) {
      Ee(this, r);
    }
    if (this.pendingKeys) {
      var i = this.pendingKeys.get(t);
      if (i) {
        i.set(true);
      }
    }
    this.keysAtom.reportChanged();
  };
  t.prototype.getKeys = function () {
    var t;
    var e;
    this.keysAtom.reportObserved();
    var n = [];
    try {
      for (var r = k(this.values), i = r.next(); !i.done; i = r.next()) {
        var o = A(i.value, 2);
        var s = o[0];
        if (o[1] instanceof _t) {
          n.push(s);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        if (i && !i.done && (e = r.return)) {
          e.call(r);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
    return n;
  };
  return t;
}();
function Ve(t, e = "", n = U) {
  if (Object.prototype.hasOwnProperty.call(t, x)) {
    return t[x];
  }
  if (!p(t)) {
    e = (t.constructor.name || "ObservableObject") + "@" + s();
  }
  e ||= "ObservableObject@" + s();
  var r = new $e(t, new Map(), _b(e), n);
  _d(t, x, r);
  return r;
}
var ze = Object.create(null);
var qe = Object.create(null);
function We(t) {
  var e = t[x];
  return e || (L(t), t[x]);
}
var He = _f("ObservableObjectAdministration", $e);
function Ge(t) {
  return !!_h(t) && (L(t), He(t[x]));
}
function Ye(t, e) {
  if (typeof t == "object" && t !== null) {
    if (De(t)) {
      if (e !== undefined) {
        _a(false);
      }
      return t[x].atom;
    }
    if (Fe(t)) {
      return t[x];
    }
    if (Me(t)) {
      var n = t;
      if (e === undefined) {
        return n._keysAtom;
      } else {
        if (!(r = n._data.get(e) || n._hasMap.get(e))) {
          _a(false);
        }
        return r;
      }
    }
    var r;
    L(t);
    if (e && !t[x]) {
      t[e];
    }
    if (Ge(t)) {
      if (e) {
        if (!(r = t[x].values.get(e))) {
          _a(false);
        }
        return r;
      } else {
        return _a(false);
      }
    }
    if (O(t) || St(t) || zt(t)) {
      return t;
    }
  } else if (typeof t == "function" && zt(t[x])) {
    return t[x];
  }
  return _a(false);
}
function Xe(t, e) {
  if (!t) {
    _a("Expecting some object");
  }
  if (e !== undefined) {
    return Xe(Ye(t, e));
  } else if (O(t) || St(t) || zt(t) || Me(t) || Fe(t)) {
    return t;
  } else {
    L(t);
    if (t[x]) {
      return t[x];
    } else {
      _a(false);
      return;
    }
  }
}
var Ke = Object.prototype.toString;
function Je(t, e, n = -1) {
  return function t(e, n, r, i, o) {
    if (e === n) {
      return e !== 0 || 1 / e == 1 / n;
    }
    if (e == null || n == null) {
      return false;
    }
    if (e != e) {
      return n != n;
    }
    var s = typeof e;
    if (s !== "function" && s !== "object" && typeof n != "object") {
      return false;
    }
    var a = Ke.call(e);
    if (a !== Ke.call(n)) {
      return false;
    }
    switch (a) {
      case "[object RegExp]":
      case "[object String]":
        return "" + e == "" + n;
      case "[object Number]":
        if (+e != +e) {
          return +n != +n;
        } else if (+e == 0) {
          return 1 / +e == 1 / n;
        } else {
          return +e == +n;
        }
      case "[object Date]":
      case "[object Boolean]":
        return +e == +n;
      case "[object Symbol]":
        return typeof Symbol != "undefined" && Symbol.valueOf.call(e) === Symbol.valueOf.call(n);
      case "[object Map]":
      case "[object Set]":
        if (r >= 0) {
          r++;
        }
    }
    e = Qe(e);
    n = Qe(n);
    var c = a === "[object Array]";
    if (!c) {
      if (typeof e != "object" || typeof n != "object") {
        return false;
      }
      var u = e.constructor;
      var l = n.constructor;
      if (u !== l && (typeof u != "function" || !(u instanceof u) || typeof l != "function" || !(l instanceof l)) && "constructor" in e && "constructor" in n) {
        return false;
      }
    }
    if (r === 0) {
      return false;
    }
    if (r < 0) {
      r = -1;
    }
    o = o || [];
    var h = (i = i || []).length;
    while (h--) {
      if (i[h] === e) {
        return o[h] === n;
      }
    }
    i.push(e);
    o.push(n);
    if (c) {
      if ((h = e.length) !== n.length) {
        return false;
      }
      while (h--) {
        if (!t(e[h], n[h], r - 1, i, o)) {
          return false;
        }
      }
    } else {
      var p = Object.keys(e);
      var d = undefined;
      h = p.length;
      if (Object.keys(n).length !== h) {
        return false;
      }
      while (h--) {
        d = p[h];
        if (!Ze(n, d) || !t(e[d], n[d], r - 1, i, o)) {
          return false;
        }
      }
    }
    i.pop();
    o.pop();
    return true;
  }(t, e, n);
}
function Qe(t) {
  if (De(t)) {
    return t.slice();
  } else if (_g(t) || Me(t) || y(t) || Fe(t)) {
    return Array.from(t.entries());
  } else {
    return t;
  }
}
function Ze(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function tn(t) {
  t[Symbol.iterator] = en;
  return t;
}
function en() {
  return this;
}
if (typeof Proxy == "undefined" || typeof Symbol == "undefined") {
  throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object") {
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: function (t) {
      console.warn("[mobx.spy] Is a no-op in production builds");
      return function () {};
    },
    extras: {
      getDebugName: function (t, e) {
        return (e !== undefined ? Ye(t, e) : Ge(t) || Me(t) || Fe(t) ? Xe(t) : Ye(t)).name;
      }
    },
    $mobx: x
  });
}