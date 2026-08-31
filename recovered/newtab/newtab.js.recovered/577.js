const r = require("./578.js");
const i = Symbol("max");
const o = Symbol("length");
const a = Symbol("lengthCalculator");
const s = Symbol("allowStale");
const c = Symbol("maxAge");
const u = Symbol("dispose");
const l = Symbol("noDisposeOnSet");
const f = Symbol("lruList");
const h = Symbol("cache");
const p = Symbol("updateAgeOnGet");
const d = () => 1;
const m = (t, e, n) => {
  const r = t[h].get(e);
  if (r) {
    const e = r.value;
    if (g(t, e)) {
      b(t, r);
      if (!t[s]) {
        return;
      }
    } else if (n) {
      if (t[p]) {
        r.value.now = Date.now();
      }
      t[f].unshiftNode(r);
    }
    return e.value;
  }
};
const g = (t, e) => {
  if (!e || !e.maxAge && !t[c]) {
    return false;
  }
  const n = Date.now() - e.now;
  if (e.maxAge) {
    return n > e.maxAge;
  } else {
    return t[c] && n > t[c];
  }
};
const y = t => {
  if (t[o] > t[i]) {
    for (let e = t[f].tail; t[o] > t[i] && e !== null;) {
      const n = e.prev;
      b(t, e);
      e = n;
    }
  }
};
const b = (t, e) => {
  if (e) {
    const n = e.value;
    if (t[u]) {
      t[u](n.key, n.value);
    }
    t[o] -= n.length;
    t[h].delete(n.key);
    t[f].removeNode(e);
  }
};
class w {
  constructor(t, e, n, r, i) {
    this.key = t;
    this.value = e;
    this.length = n;
    this.now = r;
    this.maxAge = i || 0;
  }
}
const v = (t, e, n, r) => {
  let i = n.value;
  if (g(t, i)) {
    b(t, n);
    if (!t[s]) {
      i = undefined;
    }
  }
  if (i) {
    e.call(r, i.value, i.key, t);
  }
};
module.exports = class {
  constructor(t) {
    if (typeof t == "number") {
      t = {
        max: t
      };
    }
    t ||= {};
    if (t.max && (typeof t.max != "number" || t.max < 0)) {
      throw new TypeError("max must be a non-negative number");
    }
    this[i] = t.max || Infinity;
    const e = t.length || d;
    this[a] = typeof e != "function" ? d : e;
    this[s] = t.stale || false;
    if (t.maxAge && typeof t.maxAge != "number") {
      throw new TypeError("maxAge must be a number");
    }
    this[c] = t.maxAge || 0;
    this[u] = t.dispose;
    this[l] = t.noDisposeOnSet || false;
    this[p] = t.updateAgeOnGet || false;
    this.reset();
  }
  set max(t) {
    if (typeof t != "number" || t < 0) {
      throw new TypeError("max must be a non-negative number");
    }
    this[i] = t || Infinity;
    y(this);
  }
  get max() {
    return this[i];
  }
  set allowStale(t) {
    this[s] = !!t;
  }
  get allowStale() {
    return this[s];
  }
  set maxAge(t) {
    if (typeof t != "number") {
      throw new TypeError("maxAge must be a non-negative number");
    }
    this[c] = t;
    y(this);
  }
  get maxAge() {
    return this[c];
  }
  set lengthCalculator(t) {
    if (typeof t != "function") {
      t = d;
    }
    if (t !== this[a]) {
      this[a] = t;
      this[o] = 0;
      this[f].forEach(t => {
        t.length = this[a](t.value, t.key);
        this[o] += t.length;
      });
    }
    y(this);
  }
  get lengthCalculator() {
    return this[a];
  }
  get length() {
    return this[o];
  }
  get itemCount() {
    return this[f].length;
  }
  rforEach(t, e) {
    e = e || this;
    for (let n = this[f].tail; n !== null;) {
      const r = n.prev;
      v(this, t, n, e);
      n = r;
    }
  }
  forEach(t, e) {
    e = e || this;
    for (let n = this[f].head; n !== null;) {
      const r = n.next;
      v(this, t, n, e);
      n = r;
    }
  }
  keys() {
    return this[f].toArray().map(t => t.key);
  }
  values() {
    return this[f].toArray().map(t => t.value);
  }
  reset() {
    if (this[u] && this[f] && this[f].length) {
      this[f].forEach(t => this[u](t.key, t.value));
    }
    this[h] = new Map();
    this[f] = new r();
    this[o] = 0;
  }
  dump() {
    return this[f].map(t => !g(this, t) && {
      k: t.key,
      v: t.value,
      e: t.now + (t.maxAge || 0)
    }).toArray().filter(t => t);
  }
  dumpLru() {
    return this[f];
  }
  set(t, e, n) {
    if ((n = n || this[c]) && typeof n != "number") {
      throw new TypeError("maxAge must be a number");
    }
    const r = n ? Date.now() : 0;
    const s = this[a](e, t);
    if (this[h].has(t)) {
      if (s > this[i]) {
        b(this, this[h].get(t));
        return false;
      }
      const a = this[h].get(t).value;
      if (this[u]) {
        if (!this[l]) {
          this[u](t, a.value);
        }
      }
      a.now = r;
      a.maxAge = n;
      a.value = e;
      this[o] += s - a.length;
      a.length = s;
      this.get(t);
      y(this);
      return true;
    }
    const p = new w(t, e, s, r, n);
    if (p.length > this[i]) {
      if (this[u]) {
        this[u](t, e);
      }
      return false;
    } else {
      this[o] += p.length;
      this[f].unshift(p);
      this[h].set(t, this[f].head);
      y(this);
      return true;
    }
  }
  has(t) {
    if (!this[h].has(t)) {
      return false;
    }
    const e = this[h].get(t).value;
    return !g(this, e);
  }
  get(t) {
    return m(this, t, true);
  }
  peek(t) {
    return m(this, t, false);
  }
  pop() {
    const t = this[f].tail;
    if (t) {
      b(this, t);
      return t.value;
    } else {
      return null;
    }
  }
  del(t) {
    b(this, this[h].get(t));
  }
  load(t) {
    this.reset();
    const e = Date.now();
    for (let n = t.length - 1; n >= 0; n--) {
      const r = t[n];
      const i = r.e || 0;
      if (i === 0) {
        this.set(r.k, r.v);
      } else {
        const t = i - e;
        if (t > 0) {
          this.set(r.k, r.v, t);
        }
      }
    }
  }
  prune() {
    this[h].forEach((t, e) => m(this, e, false));
  }
};