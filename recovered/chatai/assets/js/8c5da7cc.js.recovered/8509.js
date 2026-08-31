const n = require("./6725.js");
const o = require("./1274.js");
const a = ["keyword", "gray", "hex"];
const i = {};
for (const e of Object.keys(o)) {
  i[[...o[e].labels].sort().join("")] = e;
}
const c = {};
function s(e, t) {
  if (!(this instanceof s)) {
    return new s(e, t);
  }
  if (t && t in a) {
    t = null;
  }
  if (t && !(t in o)) {
    throw new Error("Unknown model: " + t);
  }
  let r;
  let l;
  if (e == null) {
    this.model = "rgb";
    this.color = [0, 0, 0];
    this.valpha = 1;
  } else if (e instanceof s) {
    this.model = e.model;
    this.color = [...e.color];
    this.valpha = e.valpha;
  } else if (typeof e == "string") {
    const t = n.get(e);
    if (t === null) {
      throw new Error("Unable to parse color from string: " + e);
    }
    this.model = t.model;
    l = o[this.model].channels;
    this.color = t.value.slice(0, l);
    this.valpha = typeof t.value[l] == "number" ? t.value[l] : 1;
  } else if (e.length > 0) {
    this.model = t || "rgb";
    l = o[this.model].channels;
    const r = Array.prototype.slice.call(e, 0, l);
    this.color = d(r, l);
    this.valpha = typeof e[l] == "number" ? e[l] : 1;
  } else if (typeof e == "number") {
    this.model = "rgb";
    this.color = [e >> 16 & 255, e >> 8 & 255, e & 255];
    this.valpha = 1;
  } else {
    this.valpha = 1;
    const t = Object.keys(e);
    if ("alpha" in e) {
      t.splice(t.indexOf("alpha"), 1);
      this.valpha = typeof e.alpha == "number" ? e.alpha : 0;
    }
    const n = t.sort().join("");
    if (!(n in i)) {
      throw new Error("Unable to parse color from object: " + JSON.stringify(e));
    }
    this.model = i[n];
    const {
      labels: a
    } = o[this.model];
    const c = [];
    for (r = 0; r < a.length; r++) {
      c.push(e[a[r]]);
    }
    this.color = d(c);
  }
  if (c[this.model]) {
    l = o[this.model].channels;
    r = 0;
    for (; r < l; r++) {
      const e = c[this.model][r];
      if (e) {
        this.color[r] = e(this.color[r]);
      }
    }
  }
  this.valpha = Math.max(0, Math.min(1, this.valpha));
  if (Object.freeze) {
    Object.freeze(this);
  }
}
s.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(e) {
    let t = this.model in n.to ? this : this.rgb();
    t = t.round(typeof e == "number" ? e : 1);
    const r = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return n.to[t.model](r);
  },
  percentString(e) {
    const t = this.rgb().round(typeof e == "number" ? e : 1);
    const r = t.valpha === 1 ? t.color : [...t.color, this.valpha];
    return n.to.rgb.percent(r);
  },
  array() {
    if (this.valpha === 1) {
      return [...this.color];
    } else {
      return [...this.color, this.valpha];
    }
  },
  object() {
    const e = {};
    const {
      channels: t
    } = o[this.model];
    const {
      labels: r
    } = o[this.model];
    for (let n = 0; n < t; n++) {
      e[r[n]] = this.color[n];
    }
    if (this.valpha !== 1) {
      e.alpha = this.valpha;
    }
    return e;
  },
  unitArray() {
    const e = this.rgb().color;
    e[0] /= 255;
    e[1] /= 255;
    e[2] /= 255;
    if (this.valpha !== 1) {
      e.push(this.valpha);
    }
    return e;
  },
  unitObject() {
    const e = this.rgb().object();
    e.r /= 255;
    e.g /= 255;
    e.b /= 255;
    if (this.valpha !== 1) {
      e.alpha = this.valpha;
    }
    return e;
  },
  round(e) {
    e = Math.max(e || 0, 0);
    return new s([...this.color.map(l(e)), this.valpha], this.model);
  },
  alpha(e) {
    if (e !== undefined) {
      return new s([...this.color, Math.max(0, Math.min(1, e))], this.model);
    } else {
      return this.valpha;
    }
  },
  red: u("rgb", 0, f(255)),
  green: u("rgb", 1, f(255)),
  blue: u("rgb", 2, f(255)),
  hue: u(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, e => (e % 360 + 360) % 360),
  saturationl: u("hsl", 1, f(100)),
  lightness: u("hsl", 2, f(100)),
  saturationv: u("hsv", 1, f(100)),
  value: u("hsv", 2, f(100)),
  chroma: u("hcg", 1, f(100)),
  gray: u("hcg", 2, f(100)),
  white: u("hwb", 1, f(100)),
  wblack: u("hwb", 2, f(100)),
  cyan: u("cmyk", 0, f(100)),
  magenta: u("cmyk", 1, f(100)),
  yellow: u("cmyk", 2, f(100)),
  black: u("cmyk", 3, f(100)),
  x: u("xyz", 0, f(95.047)),
  y: u("xyz", 1, f(100)),
  z: u("xyz", 2, f(108.833)),
  l: u("lab", 0, f(100)),
  a: u("lab", 1),
  b: u("lab", 2),
  keyword(e) {
    if (e !== undefined) {
      return new s(e);
    } else {
      return o[this.model].keyword(this.color);
    }
  },
  hex(e) {
    if (e !== undefined) {
      return new s(e);
    } else {
      return n.to.hex(this.rgb().round().color);
    }
  },
  hexa(e) {
    if (e !== undefined) {
      return new s(e);
    }
    const t = this.rgb().round().color;
    let r = Math.round(this.valpha * 255).toString(16).toUpperCase();
    if (r.length === 1) {
      r = "0" + r;
    }
    return n.to.hex(t) + r;
  },
  rgbNumber() {
    const e = this.rgb().color;
    return (e[0] & 255) << 16 | (e[1] & 255) << 8 | e[2] & 255;
  },
  luminosity() {
    const e = this.rgb().color;
    const t = [];
    for (const [r, n] of e.entries()) {
      const e = n / 255;
      t[r] = e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
    }
    return t[0] * 0.2126 + t[1] * 0.7152 + t[2] * 0.0722;
  },
  contrast(e) {
    const t = this.luminosity();
    const r = e.luminosity();
    if (t > r) {
      return (t + 0.05) / (r + 0.05);
    } else {
      return (r + 0.05) / (t + 0.05);
    }
  },
  level(e) {
    const t = this.contrast(e);
    if (t >= 7) {
      return "AAA";
    } else if (t >= 4.5) {
      return "AA";
    } else {
      return "";
    }
  },
  isDark() {
    const e = this.rgb().color;
    return (e[0] * 2126 + e[1] * 7152 + e[2] * 722) / 10000 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const e = this.rgb();
    for (let t = 0; t < 3; t++) {
      e.color[t] = 255 - e.color[t];
    }
    return e;
  },
  lighten(e) {
    const t = this.hsl();
    t.color[2] += t.color[2] * e;
    return t;
  },
  darken(e) {
    const t = this.hsl();
    t.color[2] -= t.color[2] * e;
    return t;
  },
  saturate(e) {
    const t = this.hsl();
    t.color[1] += t.color[1] * e;
    return t;
  },
  desaturate(e) {
    const t = this.hsl();
    t.color[1] -= t.color[1] * e;
    return t;
  },
  whiten(e) {
    const t = this.hwb();
    t.color[1] += t.color[1] * e;
    return t;
  },
  blacken(e) {
    const t = this.hwb();
    t.color[2] += t.color[2] * e;
    return t;
  },
  grayscale() {
    const e = this.rgb().color;
    const t = e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11;
    return s.rgb(t, t, t);
  },
  fade(e) {
    return this.alpha(this.valpha - this.valpha * e);
  },
  opaquer(e) {
    return this.alpha(this.valpha + this.valpha * e);
  },
  rotate(e) {
    const t = this.hsl();
    let r = t.color[0];
    r = (r + e) % 360;
    r = r < 0 ? 360 + r : r;
    t.color[0] = r;
    return t;
  },
  mix(e, t) {
    if (!e || !e.rgb) {
      throw new Error("Argument to \"mix\" was not a Color instance, but rather an instance of " + typeof e);
    }
    const r = e.rgb();
    const n = this.rgb();
    const o = t === undefined ? 0.5 : t;
    const a = o * 2 - 1;
    const i = r.alpha() - n.alpha();
    const c = ((a * i == -1 ? a : (a + i) / (1 + a * i)) + 1) / 2;
    const l = 1 - c;
    return s.rgb(c * r.red() + l * n.red(), c * r.green() + l * n.green(), c * r.blue() + l * n.blue(), r.alpha() * o + n.alpha() * (1 - o));
  }
};
for (const e of Object.keys(o)) {
  if (a.includes(e)) {
    continue;
  }
  const {
    channels: t
  } = o[e];
  s.prototype[e] = function (...t) {
    if (this.model === e) {
      return new s(this);
    } else if (t.length > 0) {
      return new s(t, e);
    } else {
      return new s([...(r = o[this.model][e].raw(this.color), Array.isArray(r) ? r : [r]), this.valpha], e);
    }
    var r;
  };
  s[e] = function (...r) {
    let n = r[0];
    if (typeof n == "number") {
      n = d(r, t);
    }
    return new s(n, e);
  };
}
function l(e) {
  return function (t) {
    return function (e, t) {
      return Number(e.toFixed(t));
    }(t, e);
  };
}
function u(e, t, r) {
  e = Array.isArray(e) ? e : [e];
  for (const n of e) {
    (c[n] ||= [])[t] = r;
  }
  e = e[0];
  return function (n) {
    let o;
    if (n !== undefined) {
      if (r) {
        n = r(n);
      }
      o = this[e]();
      o.color[t] = n;
      return o;
    } else {
      o = this[e]().color[t];
      if (r) {
        o = r(o);
      }
      return o;
    }
  };
}
function f(e) {
  return function (t) {
    return Math.max(0, Math.min(e, t));
  };
}
function d(e, t) {
  for (let r = 0; r < t; r++) {
    if (typeof e[r] != "number") {
      e[r] = 0;
    }
  }
  return e;
}
module.exports = s;