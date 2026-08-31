const r = require("./391.js");
const {
  MAX_LENGTH: i,
  MAX_SAFE_INTEGER: o
} = require("./390.js");
const {
  safeRe: a,
  t: s
} = require("./381.js");
const c = require("./423.js");
const {
  compareIdentifiers: u
} = require("./461.js");
class l {
  constructor(t, e) {
    e = c(e);
    if (t instanceof l) {
      if (t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease) {
        return t;
      }
      t = t.version;
    } else if (typeof t != "string") {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    }
    if (t.length > i) {
      throw new TypeError(`version is longer than ${i} characters`);
    }
    r("SemVer", t, e);
    this.options = e;
    this.loose = !!e.loose;
    this.includePrerelease = !!e.includePrerelease;
    const n = t.trim().match(e.loose ? a[s.LOOSE] : a[s.FULL]);
    if (!n) {
      throw new TypeError("Invalid Version: " + t);
    }
    this.raw = t;
    this.major = +n[1];
    this.minor = +n[2];
    this.patch = +n[3];
    if (this.major > o || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > o || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > o || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (n[4]) {
      this.prerelease = n[4].split(".").map(t => {
        if (/^[0-9]+$/.test(t)) {
          const e = +t;
          if (e >= 0 && e < o) {
            return e;
          }
        }
        return t;
      });
    } else {
      this.prerelease = [];
    }
    this.build = n[5] ? n[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += "-" + this.prerelease.join(".");
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    r("SemVer.compare", this.version, this.options, t);
    if (!(t instanceof l)) {
      if (typeof t == "string" && t === this.version) {
        return 0;
      }
      t = new l(t, this.options);
    }
    if (t.version === this.version) {
      return 0;
    } else {
      return this.compareMain(t) || this.comparePre(t);
    }
  }
  compareMain(t) {
    if (!(t instanceof l)) {
      t = new l(t, this.options);
    }
    return u(this.major, t.major) || u(this.minor, t.minor) || u(this.patch, t.patch);
  }
  comparePre(t) {
    if (!(t instanceof l)) {
      t = new l(t, this.options);
    }
    if (this.prerelease.length && !t.prerelease.length) {
      return -1;
    }
    if (!this.prerelease.length && t.prerelease.length) {
      return 1;
    }
    if (!this.prerelease.length && !t.prerelease.length) {
      return 0;
    }
    let e = 0;
    do {
      const n = this.prerelease[e];
      const i = t.prerelease[e];
      r("prerelease compare", e, n, i);
      if (n === undefined && i === undefined) {
        return 0;
      }
      if (i === undefined) {
        return 1;
      }
      if (n === undefined) {
        return -1;
      }
      if (n !== i) {
        return u(n, i);
      }
    } while (++e);
  }
  compareBuild(t) {
    if (!(t instanceof l)) {
      t = new l(t, this.options);
    }
    let e = 0;
    do {
      const n = this.build[e];
      const i = t.build[e];
      r("prerelease compare", e, n, i);
      if (n === undefined && i === undefined) {
        return 0;
      }
      if (i === undefined) {
        return 1;
      }
      if (n === undefined) {
        return -1;
      }
      if (n !== i) {
        return u(n, i);
      }
    } while (++e);
  }
  inc(t, e, n) {
    switch (t) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", e, n);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", e, n);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", e, n);
        this.inc("pre", e, n);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", e, n);
        }
        this.inc("pre", e, n);
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre":
        {
          const t = Number(n) ? 1 : 0;
          if (!e && n === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (this.prerelease.length === 0) {
            this.prerelease = [t];
          } else {
            let r = this.prerelease.length;
            while (--r >= 0) {
              if (typeof this.prerelease[r] == "number") {
                this.prerelease[r]++;
                r = -2;
              }
            }
            if (r === -1) {
              if (e === this.prerelease.join(".") && n === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(t);
            }
          }
          if (e) {
            let r = [e, t];
            if (n === false) {
              r = [e];
            }
            if (u(this.prerelease[0], e) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = r;
              }
            } else {
              this.prerelease = r;
            }
          }
          break;
        }
      default:
        throw new Error("invalid increment argument: " + t);
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += "+" + this.build.join(".");
    }
    return this;
  }
}
module.exports = l;