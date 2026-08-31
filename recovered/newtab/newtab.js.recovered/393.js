const r = Symbol("SemVer ANY");
class i {
  static get ANY() {
    return r;
  }
  constructor(t, e) {
    e = o(e);
    if (t instanceof i) {
      if (t.loose === !!e.loose) {
        return t;
      }
      t = t.value;
    }
    t = t.trim().split(/\s+/).join(" ");
    u("comparator", t, e);
    this.options = e;
    this.loose = !!e.loose;
    this.parse(t);
    if (this.semver === r) {
      this.value = "";
    } else {
      this.value = this.operator + this.semver.version;
    }
    u("comp", this);
  }
  parse(t) {
    const e = this.options.loose ? a[s.COMPARATORLOOSE] : a[s.COMPARATOR];
    const n = t.match(e);
    if (!n) {
      throw new TypeError("Invalid comparator: " + t);
    }
    this.operator = n[1] !== undefined ? n[1] : "";
    if (this.operator === "=") {
      this.operator = "";
    }
    if (n[2]) {
      this.semver = new l(n[2], this.options.loose);
    } else {
      this.semver = r;
    }
  }
  toString() {
    return this.value;
  }
  test(t) {
    u("Comparator.test", t, this.options.loose);
    if (this.semver === r || t === r) {
      return true;
    }
    if (typeof t == "string") {
      try {
        t = new l(t, this.options);
      } catch (t) {
        return false;
      }
    }
    return c(t, this.operator, this.semver, this.options);
  }
  intersects(t, e) {
    if (!(t instanceof i)) {
      throw new TypeError("a Comparator is required");
    }
    if (this.operator === "") {
      return this.value === "" || new f(t.value, e).test(this.value);
    } else if (t.operator === "") {
      return t.value === "" || new f(this.value, e).test(t.semver);
    } else {
      return (!(e = o(e)).includePrerelease || this.value !== "<0.0.0-0" && t.value !== "<0.0.0-0") && (!!e.includePrerelease || !this.value.startsWith("<0.0.0") && !t.value.startsWith("<0.0.0")) && (!!this.operator.startsWith(">") && !!t.operator.startsWith(">") || !!this.operator.startsWith("<") && !!t.operator.startsWith("<") || this.semver.version === t.semver.version && !!this.operator.includes("=") && !!t.operator.includes("=") || !!c(this.semver, "<", t.semver, e) && !!this.operator.startsWith(">") && !!t.operator.startsWith("<") || !!c(this.semver, ">", t.semver, e) && !!this.operator.startsWith("<") && !!t.operator.startsWith(">"));
    }
  }
}
module.exports = i;
const o = require("./423.js");
const {
  safeRe: a,
  t: s
} = require("./381.js");
const c = require("./464.js");
const u = require("./391.js");
const l = require("./152.js");
const f = require("./211.js");