var i = require("./4209.js");
let s;
export class Bj {
  constructor(e = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!e && s) {
      this.parent = s;
      this.index = (s.scopes ||= []).push(this) - 1;
    }
  }
  run(e) {
    if (this.active) {
      try {
        s = this;
        return e();
      } finally {
        s = this.parent;
      }
    } else {
      0;
    }
  }
  on() {
    s = this;
  }
  off() {
    s = this.parent;
  }
  stop(e) {
    if (this.active) {
      let t;
      let n;
      t = 0;
      n = this.effects.length;
      for (; t < n; t++) {
        this.effects[t].stop();
      }
      t = 0;
      n = this.cleanups.length;
      for (; t < n; t++) {
        this.cleanups[t]();
      }
      if (this.scopes) {
        t = 0;
        n = this.scopes.length;
        for (; t < n; t++) {
          this.scopes[t].stop(true);
        }
      }
      if (this.parent && !e) {
        const e = this.parent.scopes.pop();
        if (e && e !== this) {
          this.parent.scopes[this.index] = e;
          e.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
export function B(e) {
  return new Bj(e);
}
function o(e, t = s) {
  if (t && t.active) {
    t.effects.push(e);
  }
}
export function nZ() {
  return s;
}
export function EB(e) {
  if (s) {
    s.cleanups.push(e);
  }
}
const h = e => {
  const t = new Set(e);
  t.w = 0;
  t.n = 0;
  return t;
};
const c = e => (e.w & f) > 0;
const l = e => (e.n & f) > 0;
const d = new WeakMap();
let F = 0;
let f = 1;
let C;
const p = Symbol("");
const y = Symbol("");
export class qq {
  constructor(e, t = null, n) {
    this.fn = e;
    this.scheduler = t;
    this.active = true;
    this.deps = [];
    this.parent = undefined;
    o(this, n);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let e = C;
    let t = x;
    while (e) {
      if (e === this) {
        return;
      }
      e = e.parent;
    }
    try {
      this.parent = C;
      C = this;
      x = true;
      f = 1 << ++F;
      if (F <= 30) {
        (({
          deps: e
        }) => {
          if (e.length) {
            for (let t = 0; t < e.length; t++) {
              e[t].w |= f;
            }
          }
        })(this);
      } else {
        E(this);
      }
      return this.fn();
    } finally {
      if (F <= 30) {
        (e => {
          const {
            deps: t
          } = e;
          if (t.length) {
            let n = 0;
            for (let i = 0; i < t.length; i++) {
              const s = t[i];
              if (c(s) && !l(s)) {
                s.delete(e);
              } else {
                t[n++] = s;
              }
              s.w &= ~f;
              s.n &= ~f;
            }
            t.length = n;
          }
        })(this);
      }
      f = 1 << --F;
      C = this.parent;
      x = t;
      this.parent = undefined;
    }
  }
  stop() {
    if (this.active) {
      E(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function E(e) {
  const {
    deps: t
  } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) {
      t[n].delete(e);
    }
    t.length = 0;
  }
}
export function cE(e, t) {
  if (e.effect) {
    e = e.effect.fn;
  }
  const n = new qq(e);
  if (t) {
    (0, i.extend)(n, t);
    if (t.scope) {
      o(n, t.scope);
    }
  }
  if (!t || !t.lazy) {
    n.run();
  }
  const s = n.run.bind(n);
  s.effect = n;
  return s;
}
export function sT(e) {
  e.effect.stop();
}
let x = true;
const m = [];
export function Jd() {
  m.push(x);
  x = false;
}
export function lk() {
  const e = m.pop();
  x = e === undefined || e;
}
export function j(e, t, n) {
  if (x && C) {
    let t = d.get(e);
    if (!t) {
      d.set(e, t = new Map());
    }
    let i = t.get(n);
    if (!i) {
      t.set(n, i = h());
    }
    _j(i, undefined);
  }
}
function _j(e, t) {
  let n = false;
  if (F <= 30) {
    if (!l(e)) {
      e.n |= f;
      n = !c(e);
    }
  } else {
    n = !e.has(C);
  }
  if (n) {
    e.add(C);
    C.deps.push(e);
  }
}
export function X$(e, t, n, s, r, a) {
  const o = d.get(e);
  if (!o) {
    return;
  }
  let u = [];
  if (t === "clear") {
    u = [...o.values()];
  } else if (n === "length" && (0, i.isArray)(e)) {
    o.forEach((e, t) => {
      if (t === "length" || t >= s) {
        u.push(e);
      }
    });
  } else {
    if (n !== undefined) {
      u.push(o.get(n));
    }
    switch (t) {
      case "add":
        if ((0, i.isArray)(e)) {
          if ((0, i.isIntegerKey)(n)) {
            u.push(o.get("length"));
          }
        } else {
          u.push(o.get(p));
          if ((0, i.isMap)(e)) {
            u.push(o.get(y));
          }
        }
        break;
      case "delete":
        if (!(0, i.isArray)(e)) {
          u.push(o.get(p));
          if ((0, i.isMap)(e)) {
            u.push(o.get(y));
          }
        }
        break;
      case "set":
        if ((0, i.isMap)(e)) {
          u.push(o.get(p));
        }
    }
  }
  if (u.length === 1) {
    if (u[0]) {
      I(u[0]);
    }
  } else {
    const e = [];
    for (const t of u) {
      if (t) {
        e.push(...t);
      }
    }
    I(h(e));
  }
}
function I(e, t) {
  for (const t of (0, i.isArray)(e) ? e : [...e]) {
    if (t !== C || t.allowRecurse) {
      if (t.scheduler) {
        t.scheduler();
      } else {
        t.run();
      }
    }
  }
}
const v = (0, i.makeMap)("__proto__,__v_isRef,__isVue");
const z = new Set(Object.getOwnPropertyNames(Symbol).map(e => Symbol[e]).filter(i.isSymbol));
const k = Z();
const M = Z(false, true);
const T = Z(true);
const N = Z(true, true);
const Y = O();
function O() {
  const e = {};
  ["includes", "indexOf", "lastIndexOf"].forEach(t => {
    e[t] = function (...e) {
      const n = IU(this);
      for (let e = 0, t = this.length; e < t; e++) {
        j(n, 0, e + "");
      }
      const i = n[t](...e);
      if (i === -1 || i === false) {
        return n[t](...e.map(IU));
      } else {
        return i;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
    e[t] = function (...e) {
      Jd();
      const n = IU(this)[t].apply(this, e);
      lk();
      return n;
    };
  });
  return e;
}
function Z(e = false, t = false) {
  return function (n, s, r) {
    if (s === "__v_isReactive") {
      return !e;
    }
    if (s === "__v_isReadonly") {
      return e;
    }
    if (s === "__v_isShallow") {
      return t;
    }
    if (s === "__v_raw" && r === (e ? t ? ye : pe : t ? Ce : fe).get(n)) {
      return n;
    }
    const a = (0, i.isArray)(n);
    if (!e && a && (0, i.hasOwn)(Y, s)) {
      return Reflect.get(Y, s, r);
    }
    const o = Reflect.get(n, s, r);
    if ((0, i.isSymbol)(s) ? z.has(s) : v(s)) {
      return o;
    }
    if (!e) {
      j(n, 0, s);
    }
    if (t) {
      return o;
    }
    if (dq(o)) {
      if (!a || !(0, i.isIntegerKey)(s)) {
        return o.value;
      } else {
        return o;
      }
    }
    if ((0, i.isObject)(o)) {
      if (e) {
        return OT(o);
      } else {
        return qj(o);
      }
    } else {
      return o;
    }
  };
}
const G = P();
const H = P(true);
function P(e = false) {
  return function (t, n, s, r) {
    let a = t[n];
    if ($y(a) && dq(a) && !dq(s)) {
      return false;
    }
    if (!e && !$y(s) && (yT(s) || (s = IU(s), a = IU(a)), !(0, i.isArray)(t) && dq(a) && !dq(s))) {
      a.value = s;
      return true;
    }
    const o = (0, i.isArray)(t) && (0, i.isIntegerKey)(n) ? Number(n) < t.length : (0, i.hasOwn)(t, n);
    const u = Reflect.set(t, n, s, r);
    if (t === IU(r)) {
      if (o) {
        if ((0, i.hasChanged)(s, a)) {
          X$(t, "set", n, s);
        }
      } else {
        X$(t, "add", n, s);
      }
    }
    return u;
  };
}
const L = {
  get: k,
  set: G,
  deleteProperty: function (e, t) {
    const n = (0, i.hasOwn)(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    if (s && n) {
      X$(e, "delete", t, undefined);
    }
    return s;
  },
  has: function (e, t) {
    const n = Reflect.has(e, t);
    if (!(0, i.isSymbol)(t) || !z.has(t)) {
      j(e, 0, t);
    }
    return n;
  },
  ownKeys: function (e) {
    j(e, 0, (0, i.isArray)(e) ? "length" : p);
    return Reflect.ownKeys(e);
  }
};
const X = {
  get: T,
  set: (e, t) => true,
  deleteProperty: (e, t) => true
};
const J = (0, i.extend)({}, L, {
  get: M,
  set: H
});
const q = (0, i.extend)({}, X, {
  get: N
});
const R = e => e;
const U = e => Reflect.getPrototypeOf(e);
function W(e, t, n = false, i = false) {
  const s = IU(e = e.__v_raw);
  const r = IU(t);
  if (t !== r && !n) {
    j(s, 0, t);
  }
  if (!n) {
    j(s, 0, r);
  }
  const {
    has: a
  } = U(s);
  const o = i ? R : n ? ve : Ie;
  if (a.call(s, t)) {
    return o(e.get(t));
  } else if (a.call(s, r)) {
    return o(e.get(r));
  } else {
    if (e !== s) {
      e.get(t);
    }
    return;
  }
}
function $(e, t = false) {
  const n = this.__v_raw;
  const i = IU(n);
  const s = IU(e);
  if (e !== s && !t) {
    j(i, 0, e);
  }
  if (!t) {
    j(i, 0, s);
  }
  if (e === s) {
    return n.has(e);
  } else {
    return n.has(e) || n.has(s);
  }
}
function Q(e, t = false) {
  e = e.__v_raw;
  if (!t) {
    j(IU(e), 0, p);
  }
  return Reflect.get(e, "size", e);
}
function K(e) {
  e = IU(e);
  const t = IU(this);
  if (!U(t).has.call(t, e)) {
    t.add(e);
    X$(t, "add", e, e);
  }
  return this;
}
function V(e, t) {
  t = IU(t);
  const n = IU(this);
  const {
    has: s,
    get: r
  } = U(n);
  let a = s.call(n, e);
  if (!a) {
    e = IU(e);
    a = s.call(n, e);
  }
  const o = r.call(n, e);
  n.set(e, t);
  if (a) {
    if ((0, i.hasChanged)(t, o)) {
      X$(n, "set", e, t);
    }
  } else {
    X$(n, "add", e, t);
  }
  return this;
}
function ee(e) {
  const t = IU(this);
  const {
    has: n,
    get: i
  } = U(t);
  let s = n.call(t, e);
  if (!s) {
    e = IU(e);
    s = n.call(t, e);
  }
  if (i) {
    i.call(t, e);
  }
  const r = t.delete(e);
  if (s) {
    X$(t, "delete", e, undefined);
  }
  return r;
}
function te() {
  const e = IU(this);
  const t = e.size !== 0;
  const n = e.clear();
  if (t) {
    X$(e, "clear", undefined, undefined);
  }
  return n;
}
function ne(e, t) {
  return function (n, i) {
    const s = this;
    const r = s.__v_raw;
    const a = IU(r);
    const o = t ? R : e ? ve : Ie;
    if (!e) {
      j(a, 0, p);
    }
    return r.forEach((e, t) => n.call(i, o(e), o(t), s));
  };
}
function ie(e, t, n) {
  return function (...s) {
    const r = this.__v_raw;
    const a = IU(r);
    const o = (0, i.isMap)(a);
    const u = e === "entries" || e === Symbol.iterator && o;
    const g = e === "keys" && o;
    const h = r[e](...s);
    const c = n ? R : t ? ve : Ie;
    if (!t) {
      j(a, 0, g ? y : p);
    }
    return {
      next() {
        const {
          value: e,
          done: t
        } = h.next();
        if (t) {
          return {
            value: e,
            done: t
          };
        } else {
          return {
            value: u ? [c(e[0]), c(e[1])] : c(e),
            done: t
          };
        }
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function se(e) {
  return function (...t) {
    return e !== "delete" && this;
  };
}
function re() {
  const e = {
    get(e) {
      return W(this, e);
    },
    get size() {
      return Q(this);
    },
    has: $,
    add: K,
    set: V,
    delete: ee,
    clear: te,
    forEach: ne(false, false)
  };
  const t = {
    get(e) {
      return W(this, e, false, true);
    },
    get size() {
      return Q(this);
    },
    has: $,
    add: K,
    set: V,
    delete: ee,
    clear: te,
    forEach: ne(false, true)
  };
  const n = {
    get(e) {
      return W(this, e, true);
    },
    get size() {
      return Q(this, true);
    },
    has(e) {
      return $.call(this, e, true);
    },
    add: se("add"),
    set: se("set"),
    delete: se("delete"),
    clear: se("clear"),
    forEach: ne(true, false)
  };
  const i = {
    get(e) {
      return W(this, e, true, true);
    },
    get size() {
      return Q(this, true);
    },
    has(e) {
      return $.call(this, e, true);
    },
    add: se("add"),
    set: se("set"),
    delete: se("delete"),
    clear: se("clear"),
    forEach: ne(true, true)
  };
  ["keys", "values", "entries", Symbol.iterator].forEach(s => {
    e[s] = ie(s, false, false);
    n[s] = ie(s, true, false);
    t[s] = ie(s, false, true);
    i[s] = ie(s, true, true);
  });
  return [e, n, t, i];
}
const [ae, oe, ue, ge] = re();
function he(e, t) {
  const n = t ? e ? ge : ue : e ? oe : ae;
  return (t, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? t : Reflect.get((0, i.hasOwn)(n, s) && s in t ? n : t, s, r);
}
const ce = {
  get: he(false, false)
};
const le = {
  get: he(false, true)
};
const de = {
  get: he(true, false)
};
const Fe = {
  get: he(true, true)
};
const fe = new WeakMap();
const Ce = new WeakMap();
const pe = new WeakMap();
const ye = new WeakMap();
export function qj(e) {
  if ($y(e)) {
    return e;
  } else {
    return xe(e, false, L, ce, fe);
  }
}
export function Um(e) {
  return xe(e, false, J, le, Ce);
}
export function OT(e) {
  return xe(e, true, X, de, pe);
}
export function YS(e) {
  return xe(e, true, q, Fe, ye);
}
function xe(e, t, n, s, r) {
  if (!(0, i.isObject)(e)) {
    return e;
  }
  if (e.__v_raw && (!t || !e.__v_isReactive)) {
    return e;
  }
  const a = r.get(e);
  if (a) {
    return a;
  }
  const o = (u = e).__v_skip || !Object.isExtensible(u) ? 0 : function (e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }((0, i.toRawType)(u));
  var u;
  if (o === 0) {
    return e;
  }
  const g = new Proxy(e, o === 2 ? s : n);
  r.set(e, g);
  return g;
}
export function PG(e) {
  if ($y(e)) {
    return PG(e.__v_raw);
  } else {
    return !!e && !!e.__v_isReactive;
  }
}
export function $y(e) {
  return !!e && !!e.__v_isReadonly;
}
export function yT(e) {
  return !!e && !!e.__v_isShallow;
}
export function X3(e) {
  return PG(e) || $y(e);
}
export function IU(e) {
  const t = e && e.__v_raw;
  if (t) {
    return IU(t);
  } else {
    return e;
  }
}
export function Xl(e) {
  (0, i.def)(e, "__v_skip", true);
  return e;
}
const Ie = e => (0, i.isObject)(e) ? qj(e) : e;
const ve = e => (0, i.isObject)(e) ? OT(e) : e;
function ze(e) {
  if (x && C) {
    _j((e = IU(e)).dep || (e.dep = h()));
  }
}
function ke(e, t) {
  if ((e = IU(e)).dep) {
    I(e.dep);
  }
}
export function dq(e) {
  return !!e && e.__v_isRef === true;
}
export function iH(e) {
  return Ye(e, false);
}
export function XI(e) {
  return Ye(e, true);
}
function Ye(e, t) {
  if (dq(e)) {
    return e;
  } else {
    return new Oe(e, t);
  }
}
class Oe {
  constructor(e, t) {
    this.__v_isShallow = t;
    this.dep = undefined;
    this.__v_isRef = true;
    this._rawValue = t ? e : IU(e);
    this._value = t ? e : Ie(e);
  }
  get value() {
    ze(this);
    return this._value;
  }
  set value(e) {
    e = this.__v_isShallow ? e : IU(e);
    if ((0, i.hasChanged)(e, this._rawValue)) {
      this._rawValue = e;
      this._value = this.__v_isShallow ? e : Ie(e);
      ke(this);
    }
  }
}
export function oR(e) {
  ke(e);
}
export function SU(e) {
  if (dq(e)) {
    return e.value;
  } else {
    return e;
  }
}
const He = {
  get: (e, t, n) => SU(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    if (dq(s) && !dq(n)) {
      s.value = n;
      return true;
    } else {
      return Reflect.set(e, t, n, i);
    }
  }
};
export function WL(e) {
  if (PG(e)) {
    return e;
  } else {
    return new Proxy(e, He);
  }
}
class Le {
  constructor(e) {
    this.dep = undefined;
    this.__v_isRef = true;
    const {
      get: t,
      set: n
    } = e(() => ze(this), () => ke(this));
    this._get = t;
    this._set = n;
  }
  get value() {
    return this._get();
  }
  set value(e) {
    this._set(e);
  }
}
export function ZM(e) {
  return new Le(e);
}
export function BK(e) {
  const t = (0, i.isArray)(e) ? new Array(e.length) : {};
  for (const n in e) {
    t[n] = Vh(e, n);
  }
  return t;
}
class qe {
  constructor(e, t, n) {
    this._object = e;
    this._key = t;
    this._defaultValue = n;
    this.__v_isRef = true;
  }
  get value() {
    const e = this._object[this._key];
    if (e === undefined) {
      return this._defaultValue;
    } else {
      return e;
    }
  }
  set value(e) {
    this._object[this._key] = e;
  }
}
export function Vh(e, t, n) {
  const i = e[t];
  if (dq(i)) {
    return i;
  } else {
    return new qe(e, t, n);
  }
}
class Ue {
  constructor(e, t, n, i) {
    this._setter = t;
    this.dep = undefined;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new qq(e, () => {
      if (!this._dirty) {
        this._dirty = true;
        ke(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !i;
    this.__v_isReadonly = n;
  }
  get value() {
    const e = IU(this);
    ze(e);
    if (!!e._dirty || !e._cacheable) {
      e._dirty = false;
      e._value = e.effect.run();
    }
    return e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
export function Fl(e, t, n = false) {
  let s;
  let r;
  const a = (0, i.isFunction)(e);
  if (a) {
    s = e;
    r = i.NOOP;
  } else {
    s = e.get;
    r = e.set;
  }
  return new Ue(s, r, a || !r, n);
}
Promise.resolve();