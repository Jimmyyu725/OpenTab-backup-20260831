class r {
  constructor(t, e) {
    e = o(e);
    if (t instanceof r) {
      if (t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease) {
        return t;
      } else {
        return new r(t.raw, e);
      }
    }
    if (t instanceof a) {
      this.raw = t.value;
      this.set = [[t]];
      this.format();
      return this;
    }
    this.options = e;
    this.loose = !!e.loose;
    this.includePrerelease = !!e.includePrerelease;
    this.raw = t.trim().split(/\s+/).join(" ");
    this.set = this.raw.split("||").map(t => this.parseRange(t.trim())).filter(t => t.length);
    if (!this.set.length) {
      throw new TypeError("Invalid SemVer Range: " + this.raw);
    }
    if (this.set.length > 1) {
      const t = this.set[0];
      this.set = this.set.filter(t => !g(t[0]));
      if (this.set.length === 0) {
        this.set = [t];
      } else if (this.set.length > 1) {
        for (const t of this.set) {
          if (t.length === 1 && y(t[0])) {
            this.set = [t];
            break;
          }
        }
      }
    }
    this.format();
  }
  format() {
    this.range = this.set.map(t => t.join(" ").trim()).join("||").trim();
    return this.range;
  }
  toString() {
    return this.range;
  }
  parseRange(t) {
    const e = ((this.options.includePrerelease && d) | (this.options.loose && m)) + ":" + t;
    const n = i.get(e);
    if (n) {
      return n;
    }
    const r = this.options.loose;
    const o = r ? u[l.HYPHENRANGELOOSE] : u[l.HYPHENRANGE];
    t = t.replace(o, N(this.options.includePrerelease));
    s("hyphen replace", t);
    t = t.replace(u[l.COMPARATORTRIM], f);
    s("comparator trim", t);
    t = t.replace(u[l.TILDETRIM], h);
    s("tilde trim", t);
    t = t.replace(u[l.CARETTRIM], p);
    s("caret trim", t);
    let c = t.split(" ").map(t => w(t, this.options)).join(" ").split(/\s+/).map(t => A(t, this.options));
    if (r) {
      c = c.filter(t => {
        s("loose invalid filter", t, this.options);
        return !!t.match(u[l.COMPARATORLOOSE]);
      });
    }
    s("range list", c);
    const y = new Map();
    const b = c.map(t => new a(t, this.options));
    for (const t of b) {
      if (g(t)) {
        return [t];
      }
      y.set(t.value, t);
    }
    if (y.size > 1 && y.has("")) {
      y.delete("");
    }
    const v = [...y.values()];
    i.set(e, v);
    return v;
  }
  intersects(t, e) {
    if (!(t instanceof r)) {
      throw new TypeError("a Range is required");
    }
    return this.set.some(n => b(n, e) && t.set.some(t => b(t, e) && n.every(n => t.every(t => n.intersects(t, e)))));
  }
  test(t) {
    if (!t) {
      return false;
    }
    if (typeof t == "string") {
      try {
        t = new c(t, this.options);
      } catch (t) {
        return false;
      }
    }
    for (let e = 0; e < this.set.length; e++) {
      if (j(this.set[e], t, this.options)) {
        return true;
      }
    }
    return false;
  }
}
module.exports = r;
const i = new (require("./577.js"))({
  max: 1000
});
const o = require("./423.js");
const a = require("./393.js");
const s = require("./391.js");
const c = require("./152.js");
const {
  safeRe: u,
  t: l,
  comparatorTrimReplace: f,
  tildeTrimReplace: h,
  caretTrimReplace: p
} = require("./381.js");
const {
  FLAG_INCLUDE_PRERELEASE: d,
  FLAG_LOOSE: m
} = require("./390.js");
const g = t => t.value === "<0.0.0-0";
const y = t => t.value === "";
const b = (t, e) => {
  let n = true;
  const r = t.slice();
  let i = r.pop();
  while (n && r.length) {
    n = r.every(t => i.intersects(t, e));
    i = r.pop();
  }
  return n;
};
const w = (t, e) => {
  s("comp", t, e);
  t = x(t, e);
  s("caret", t);
  t = _(t, e);
  s("tildes", t);
  t = I(t, e);
  s("xrange", t);
  t = S(t, e);
  s("stars", t);
  return t;
};
const v = t => !t || t.toLowerCase() === "x" || t === "*";
const _ = (t, e) => t.trim().split(/\s+/).map(t => E(t, e)).join(" ");
const E = (t, e) => {
  const n = e.loose ? u[l.TILDELOOSE] : u[l.TILDE];
  return t.replace(n, (e, n, r, i, o) => {
    let a;
    s("tilde", t, e, n, r, i, o);
    if (v(n)) {
      a = "";
    } else if (v(r)) {
      a = `>=${n}.0.0 <${+n + 1}.0.0-0`;
    } else if (v(i)) {
      a = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0`;
    } else if (o) {
      s("replaceTilde pr", o);
      a = `>=${n}.${r}.${i}-${o} <${n}.${+r + 1}.0-0`;
    } else {
      a = `>=${n}.${r}.${i} <${n}.${+r + 1}.0-0`;
    }
    s("tilde return", a);
    return a;
  });
};
const x = (t, e) => t.trim().split(/\s+/).map(t => T(t, e)).join(" ");
const T = (t, e) => {
  s("caret", t, e);
  const n = e.loose ? u[l.CARETLOOSE] : u[l.CARET];
  const r = e.includePrerelease ? "-0" : "";
  return t.replace(n, (e, n, i, o, a) => {
    let c;
    s("caret", t, e, n, i, o, a);
    if (v(n)) {
      c = "";
    } else if (v(i)) {
      c = `>=${n}.0.0${r} <${+n + 1}.0.0-0`;
    } else if (v(o)) {
      c = n === "0" ? `>=${n}.${i}.0${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.0${r} <${+n + 1}.0.0-0`;
    } else if (a) {
      s("replaceCaret pr", a);
      c = n === "0" ? i === "0" ? `>=${n}.${i}.${o}-${a} <${n}.${i}.${+o + 1}-0` : `>=${n}.${i}.${o}-${a} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${o}-${a} <${+n + 1}.0.0-0`;
    } else {
      s("no pr");
      c = n === "0" ? i === "0" ? `>=${n}.${i}.${o}${r} <${n}.${i}.${+o + 1}-0` : `>=${n}.${i}.${o}${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${o} <${+n + 1}.0.0-0`;
    }
    s("caret return", c);
    return c;
  });
};
const I = (t, e) => {
  s("replaceXRanges", t, e);
  return t.split(/\s+/).map(t => O(t, e)).join(" ");
};
const O = (t, e) => {
  t = t.trim();
  const n = e.loose ? u[l.XRANGELOOSE] : u[l.XRANGE];
  return t.replace(n, (n, r, i, o, a, c) => {
    s("xRange", t, n, r, i, o, a, c);
    const u = v(i);
    const l = u || v(o);
    const f = l || v(a);
    const h = f;
    if (r === "=" && h) {
      r = "";
    }
    c = e.includePrerelease ? "-0" : "";
    if (u) {
      n = r === ">" || r === "<" ? "<0.0.0-0" : "*";
    } else if (r && h) {
      if (l) {
        o = 0;
      }
      a = 0;
      if (r === ">") {
        r = ">=";
        if (l) {
          i = +i + 1;
          o = 0;
          a = 0;
        } else {
          o = +o + 1;
          a = 0;
        }
      } else if (r === "<=") {
        r = "<";
        if (l) {
          i = +i + 1;
        } else {
          o = +o + 1;
        }
      }
      if (r === "<") {
        c = "-0";
      }
      n = `${r + i}.${o}.${a}${c}`;
    } else if (l) {
      n = `>=${i}.0.0${c} <${+i + 1}.0.0-0`;
    } else if (f) {
      n = `>=${i}.${o}.0${c} <${i}.${+o + 1}.0-0`;
    }
    s("xRange return", n);
    return n;
  });
};
const S = (t, e) => {
  s("replaceStars", t, e);
  return t.trim().replace(u[l.STAR], "");
};
const A = (t, e) => {
  s("replaceGTE0", t, e);
  return t.trim().replace(u[e.includePrerelease ? l.GTE0PRE : l.GTE0], "");
};
const N = t => (e, n, r, i, o, a, s, c, u, l, f, h, p) => `${n = v(r) ? "" : v(i) ? `>=${r}.0.0${t ? "-0" : ""}` : v(o) ? `>=${r}.${i}.0${t ? "-0" : ""}` : a ? ">=" + n : `>=${n}${t ? "-0" : ""}`} ${c = v(u) ? "" : v(l) ? `<${+u + 1}.0.0-0` : v(f) ? `<${u}.${+l + 1}.0-0` : h ? `<=${u}.${l}.${f}-${h}` : t ? `<${u}.${l}.${+f + 1}-0` : "<=" + c}`.trim();
const j = (t, e, n) => {
  for (let n = 0; n < t.length; n++) {
    if (!t[n].test(e)) {
      return false;
    }
  }
  if (e.prerelease.length && !n.includePrerelease) {
    for (let n = 0; n < t.length; n++) {
      s(t[n].semver);
      if (t[n].semver !== a.ANY && t[n].semver.prerelease.length > 0) {
        const r = t[n].semver;
        if (r.major === e.major && r.minor === e.minor && r.patch === e.patch) {
          return true;
        }
      }
    }
    return false;
  }
  return true;
};