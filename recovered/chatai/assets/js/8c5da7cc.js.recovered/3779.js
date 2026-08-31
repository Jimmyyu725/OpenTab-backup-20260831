const n = require("./1510.js");
const o = {};
for (const e of Object.keys(n)) {
  o[n[e]] = e;
}
const a = {
  rgb: {
    channels: 3,
    labels: "rgb"
  },
  hsl: {
    channels: 3,
    labels: "hsl"
  },
  hsv: {
    channels: 3,
    labels: "hsv"
  },
  hwb: {
    channels: 3,
    labels: "hwb"
  },
  cmyk: {
    channels: 4,
    labels: "cmyk"
  },
  xyz: {
    channels: 3,
    labels: "xyz"
  },
  lab: {
    channels: 3,
    labels: "lab"
  },
  lch: {
    channels: 3,
    labels: "lch"
  },
  hex: {
    channels: 1,
    labels: ["hex"]
  },
  keyword: {
    channels: 1,
    labels: ["keyword"]
  },
  ansi16: {
    channels: 1,
    labels: ["ansi16"]
  },
  ansi256: {
    channels: 1,
    labels: ["ansi256"]
  },
  hcg: {
    channels: 3,
    labels: ["h", "c", "g"]
  },
  apple: {
    channels: 3,
    labels: ["r16", "g16", "b16"]
  },
  gray: {
    channels: 1,
    labels: ["gray"]
  }
};
module.exports = a;
for (const e of Object.keys(a)) {
  if (!("channels" in a[e])) {
    throw new Error("missing channels property: " + e);
  }
  if (!("labels" in a[e])) {
    throw new Error("missing channel labels property: " + e);
  }
  if (a[e].labels.length !== a[e].channels) {
    throw new Error("channel and label counts mismatch: " + e);
  }
  const {
    channels: t,
    labels: r
  } = a[e];
  delete a[e].channels;
  delete a[e].labels;
  Object.defineProperty(a[e], "channels", {
    value: t
  });
  Object.defineProperty(a[e], "labels", {
    value: r
  });
}
a.rgb.hsl = function (e) {
  const t = e[0] / 255;
  const r = e[1] / 255;
  const n = e[2] / 255;
  const o = Math.min(t, r, n);
  const a = Math.max(t, r, n);
  const i = a - o;
  let c;
  let s;
  if (a === o) {
    c = 0;
  } else if (t === a) {
    c = (r - n) / i;
  } else if (r === a) {
    c = 2 + (n - t) / i;
  } else if (n === a) {
    c = 4 + (t - r) / i;
  }
  c = Math.min(c * 60, 360);
  if (c < 0) {
    c += 360;
  }
  const l = (o + a) / 2;
  s = a === o ? 0 : l <= 0.5 ? i / (a + o) : i / (2 - a - o);
  return [c, s * 100, l * 100];
};
a.rgb.hsv = function (e) {
  let t;
  let r;
  let n;
  let o;
  let a;
  const i = e[0] / 255;
  const c = e[1] / 255;
  const s = e[2] / 255;
  const l = Math.max(i, c, s);
  const u = l - Math.min(i, c, s);
  const f = function (e) {
    return (l - e) / 6 / u + 0.5;
  };
  if (u === 0) {
    o = 0;
    a = 0;
  } else {
    a = u / l;
    t = f(i);
    r = f(c);
    n = f(s);
    if (i === l) {
      o = n - r;
    } else if (c === l) {
      o = 1 / 3 + t - n;
    } else if (s === l) {
      o = 2 / 3 + r - t;
    }
    if (o < 0) {
      o += 1;
    } else if (o > 1) {
      o -= 1;
    }
  }
  return [o * 360, a * 100, l * 100];
};
a.rgb.hwb = function (e) {
  const t = e[0];
  const r = e[1];
  let n = e[2];
  const o = a.rgb.hsl(e)[0];
  const i = 1 / 255 * Math.min(t, Math.min(r, n));
  n = 1 - 1 / 255 * Math.max(t, Math.max(r, n));
  return [o, i * 100, n * 100];
};
a.rgb.cmyk = function (e) {
  const t = e[0] / 255;
  const r = e[1] / 255;
  const n = e[2] / 255;
  const o = Math.min(1 - t, 1 - r, 1 - n);
  return [((1 - t - o) / (1 - o) || 0) * 100, ((1 - r - o) / (1 - o) || 0) * 100, ((1 - n - o) / (1 - o) || 0) * 100, o * 100];
};
a.rgb.keyword = function (e) {
  const t = o[e];
  if (t) {
    return t;
  }
  let r;
  let a = Infinity;
  for (const t of Object.keys(n)) {
    const o = n[t];
    c = o;
    const s = ((i = e)[0] - c[0]) ** 2 + (i[1] - c[1]) ** 2 + (i[2] - c[2]) ** 2;
    if (s < a) {
      a = s;
      r = t;
    }
  }
  var i;
  var c;
  return r;
};
a.keyword.rgb = function (e) {
  return n[e];
};
a.rgb.xyz = function (e) {
  let t = e[0] / 255;
  let r = e[1] / 255;
  let n = e[2] / 255;
  t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92;
  r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92;
  return [(t * 0.4124 + r * 0.3576 + n * 0.1805) * 100, (t * 0.2126 + r * 0.7152 + n * 0.0722) * 100, (t * 0.0193 + r * 0.1192 + n * 0.9505) * 100];
};
a.rgb.lab = function (e) {
  const t = a.rgb.xyz(e);
  let r = t[0];
  let n = t[1];
  let o = t[2];
  r /= 95.047;
  n /= 100;
  o /= 108.883;
  r = r > 0.008856 ? r ** (1 / 3) : r * 7.787 + 16 / 116;
  n = n > 0.008856 ? n ** (1 / 3) : n * 7.787 + 16 / 116;
  o = o > 0.008856 ? o ** (1 / 3) : o * 7.787 + 16 / 116;
  return [n * 116 - 16, (r - n) * 500, (n - o) * 200];
};
a.hsl.rgb = function (e) {
  const t = e[0] / 360;
  const r = e[1] / 100;
  const n = e[2] / 100;
  let o;
  let a;
  let i;
  if (r === 0) {
    i = n * 255;
    return [i, i, i];
  }
  o = n < 0.5 ? n * (1 + r) : n + r - n * r;
  const c = n * 2 - o;
  const s = [0, 0, 0];
  for (let e = 0; e < 3; e++) {
    a = t + 1 / 3 * -(e - 1);
    if (a < 0) {
      a++;
    }
    if (a > 1) {
      a--;
    }
    i = a * 6 < 1 ? c + (o - c) * 6 * a : a * 2 < 1 ? o : a * 3 < 2 ? c + (o - c) * (2 / 3 - a) * 6 : c;
    s[e] = i * 255;
  }
  return s;
};
a.hsl.hsv = function (e) {
  const t = e[0];
  let r = e[1] / 100;
  let n = e[2] / 100;
  let o = r;
  const a = Math.max(n, 0.01);
  n *= 2;
  r *= n <= 1 ? n : 2 - n;
  o *= a <= 1 ? a : 2 - a;
  return [t, (n === 0 ? o * 2 / (a + o) : r * 2 / (n + r)) * 100, (n + r) / 2 * 100];
};
a.hsv.rgb = function (e) {
  const t = e[0] / 60;
  const r = e[1] / 100;
  let n = e[2] / 100;
  const o = Math.floor(t) % 6;
  const a = t - Math.floor(t);
  const i = n * 255 * (1 - r);
  const c = n * 255 * (1 - r * a);
  const s = n * 255 * (1 - r * (1 - a));
  n *= 255;
  switch (o) {
    case 0:
      return [n, s, i];
    case 1:
      return [c, n, i];
    case 2:
      return [i, n, s];
    case 3:
      return [i, c, n];
    case 4:
      return [s, i, n];
    case 5:
      return [n, i, c];
  }
};
a.hsv.hsl = function (e) {
  const t = e[0];
  const r = e[1] / 100;
  const n = e[2] / 100;
  const o = Math.max(n, 0.01);
  let a;
  let i;
  i = (2 - r) * n;
  const c = (2 - r) * o;
  a = r * o;
  a /= c <= 1 ? c : 2 - c;
  a = a || 0;
  i /= 2;
  return [t, a * 100, i * 100];
};
a.hwb.rgb = function (e) {
  const t = e[0] / 360;
  let r = e[1] / 100;
  let n = e[2] / 100;
  const o = r + n;
  let a;
  if (o > 1) {
    r /= o;
    n /= o;
  }
  const i = Math.floor(t * 6);
  const c = 1 - n;
  a = t * 6 - i;
  if ((i & 1) != 0) {
    a = 1 - a;
  }
  const s = r + a * (c - r);
  let l;
  let u;
  let f;
  switch (i) {
    default:
    case 6:
    case 0:
      l = c;
      u = s;
      f = r;
      break;
    case 1:
      l = s;
      u = c;
      f = r;
      break;
    case 2:
      l = r;
      u = c;
      f = s;
      break;
    case 3:
      l = r;
      u = s;
      f = c;
      break;
    case 4:
      l = s;
      u = r;
      f = c;
      break;
    case 5:
      l = c;
      u = r;
      f = s;
  }
  return [l * 255, u * 255, f * 255];
};
a.cmyk.rgb = function (e) {
  const t = e[0] / 100;
  const r = e[1] / 100;
  const n = e[2] / 100;
  const o = e[3] / 100;
  return [(1 - Math.min(1, t * (1 - o) + o)) * 255, (1 - Math.min(1, r * (1 - o) + o)) * 255, (1 - Math.min(1, n * (1 - o) + o)) * 255];
};
a.xyz.rgb = function (e) {
  const t = e[0] / 100;
  const r = e[1] / 100;
  const n = e[2] / 100;
  let o;
  let a;
  let i;
  o = t * 3.2406 + r * -1.5372 + n * -0.4986;
  a = t * -0.9689 + r * 1.8758 + n * 0.0415;
  i = t * 0.0557 + r * -0.204 + n * 1.057;
  o = o > 0.0031308 ? o ** (1 / 2.4) * 1.055 - 0.055 : o * 12.92;
  a = a > 0.0031308 ? a ** (1 / 2.4) * 1.055 - 0.055 : a * 12.92;
  i = i > 0.0031308 ? i ** (1 / 2.4) * 1.055 - 0.055 : i * 12.92;
  o = Math.min(Math.max(0, o), 1);
  a = Math.min(Math.max(0, a), 1);
  i = Math.min(Math.max(0, i), 1);
  return [o * 255, a * 255, i * 255];
};
a.xyz.lab = function (e) {
  let t = e[0];
  let r = e[1];
  let n = e[2];
  t /= 95.047;
  r /= 100;
  n /= 108.883;
  t = t > 0.008856 ? t ** (1 / 3) : t * 7.787 + 16 / 116;
  r = r > 0.008856 ? r ** (1 / 3) : r * 7.787 + 16 / 116;
  n = n > 0.008856 ? n ** (1 / 3) : n * 7.787 + 16 / 116;
  return [r * 116 - 16, (t - r) * 500, (r - n) * 200];
};
a.lab.xyz = function (e) {
  let t;
  let r;
  let n;
  r = (e[0] + 16) / 116;
  t = e[1] / 500 + r;
  n = r - e[2] / 200;
  const o = r ** 3;
  const a = t ** 3;
  const i = n ** 3;
  r = o > 0.008856 ? o : (r - 16 / 116) / 7.787;
  t = a > 0.008856 ? a : (t - 16 / 116) / 7.787;
  n = i > 0.008856 ? i : (n - 16 / 116) / 7.787;
  t *= 95.047;
  r *= 100;
  n *= 108.883;
  return [t, r, n];
};
a.lab.lch = function (e) {
  const t = e[0];
  const r = e[1];
  const n = e[2];
  let o;
  o = Math.atan2(n, r) * 360 / 2 / Math.PI;
  if (o < 0) {
    o += 360;
  }
  return [t, Math.sqrt(r * r + n * n), o];
};
a.lch.lab = function (e) {
  const t = e[0];
  const r = e[1];
  const n = e[2] / 360 * 2 * Math.PI;
  return [t, r * Math.cos(n), r * Math.sin(n)];
};
a.rgb.ansi16 = function (e, t = null) {
  const [r, n, o] = e;
  let i = t === null ? a.rgb.hsv(e)[2] : t;
  i = Math.round(i / 50);
  if (i === 0) {
    return 30;
  }
  let c = 30 + (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 | Math.round(r / 255));
  if (i === 2) {
    c += 60;
  }
  return c;
};
a.hsv.ansi16 = function (e) {
  return a.rgb.ansi16(a.hsv.rgb(e), e[2]);
};
a.rgb.ansi256 = function (e) {
  const t = e[0];
  const r = e[1];
  const n = e[2];
  if (t === r && r === n) {
    if (t < 8) {
      return 16;
    } else if (t > 248) {
      return 231;
    } else {
      return Math.round((t - 8) / 247 * 24) + 232;
    }
  }
  return 16 + Math.round(t / 255 * 5) * 36 + Math.round(r / 255 * 5) * 6 + Math.round(n / 255 * 5);
};
a.ansi16.rgb = function (e) {
  let t = e % 10;
  if (t === 0 || t === 7) {
    if (e > 50) {
      t += 3.5;
    }
    t = t / 10.5 * 255;
    return [t, t, t];
  }
  const r = (1 + ~~(e > 50)) * 0.5;
  return [(t & 1) * r * 255, (t >> 1 & 1) * r * 255, (t >> 2 & 1) * r * 255];
};
a.ansi256.rgb = function (e) {
  if (e >= 232) {
    const t = (e - 232) * 10 + 8;
    return [t, t, t];
  }
  let t;
  e -= 16;
  return [Math.floor(e / 36) / 5 * 255, Math.floor((t = e % 36) / 6) / 5 * 255, t % 6 / 5 * 255];
};
a.rgb.hex = function (e) {
  const t = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(t.length) + t;
};
a.hex.rgb = function (e) {
  const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t) {
    return [0, 0, 0];
  }
  let r = t[0];
  if (t[0].length === 3) {
    r = r.split("").map(e => e + e).join("");
  }
  const n = parseInt(r, 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
};
a.rgb.hcg = function (e) {
  const t = e[0] / 255;
  const r = e[1] / 255;
  const n = e[2] / 255;
  const o = Math.max(Math.max(t, r), n);
  const a = Math.min(Math.min(t, r), n);
  const i = o - a;
  let c;
  let s;
  c = i < 1 ? a / (1 - i) : 0;
  s = i <= 0 ? 0 : o === t ? (r - n) / i % 6 : o === r ? 2 + (n - t) / i : 4 + (t - r) / i;
  s /= 6;
  s %= 1;
  return [s * 360, i * 100, c * 100];
};
a.hsl.hcg = function (e) {
  const t = e[1] / 100;
  const r = e[2] / 100;
  const n = r < 0.5 ? t * 2 * r : t * 2 * (1 - r);
  let o = 0;
  if (n < 1) {
    o = (r - n * 0.5) / (1 - n);
  }
  return [e[0], n * 100, o * 100];
};
a.hsv.hcg = function (e) {
  const t = e[1] / 100;
  const r = e[2] / 100;
  const n = t * r;
  let o = 0;
  if (n < 1) {
    o = (r - n) / (1 - n);
  }
  return [e[0], n * 100, o * 100];
};
a.hcg.rgb = function (e) {
  const t = e[0] / 360;
  const r = e[1] / 100;
  const n = e[2] / 100;
  if (r === 0) {
    return [n * 255, n * 255, n * 255];
  }
  const o = [0, 0, 0];
  const a = t % 1 * 6;
  const i = a % 1;
  const c = 1 - i;
  let s = 0;
  switch (Math.floor(a)) {
    case 0:
      o[0] = 1;
      o[1] = i;
      o[2] = 0;
      break;
    case 1:
      o[0] = c;
      o[1] = 1;
      o[2] = 0;
      break;
    case 2:
      o[0] = 0;
      o[1] = 1;
      o[2] = i;
      break;
    case 3:
      o[0] = 0;
      o[1] = c;
      o[2] = 1;
      break;
    case 4:
      o[0] = i;
      o[1] = 0;
      o[2] = 1;
      break;
    default:
      o[0] = 1;
      o[1] = 0;
      o[2] = c;
  }
  s = (1 - r) * n;
  return [(r * o[0] + s) * 255, (r * o[1] + s) * 255, (r * o[2] + s) * 255];
};
a.hcg.hsv = function (e) {
  const t = e[1] / 100;
  const r = t + e[2] / 100 * (1 - t);
  let n = 0;
  if (r > 0) {
    n = t / r;
  }
  return [e[0], n * 100, r * 100];
};
a.hcg.hsl = function (e) {
  const t = e[1] / 100;
  const r = e[2] / 100 * (1 - t) + t * 0.5;
  let n = 0;
  if (r > 0 && r < 0.5) {
    n = t / (r * 2);
  } else if (r >= 0.5 && r < 1) {
    n = t / ((1 - r) * 2);
  }
  return [e[0], n * 100, r * 100];
};
a.hcg.hwb = function (e) {
  const t = e[1] / 100;
  const r = t + e[2] / 100 * (1 - t);
  return [e[0], (r - t) * 100, (1 - r) * 100];
};
a.hwb.hcg = function (e) {
  const t = e[1] / 100;
  const r = 1 - e[2] / 100;
  const n = r - t;
  let o = 0;
  if (n < 1) {
    o = (r - n) / (1 - n);
  }
  return [e[0], n * 100, o * 100];
};
a.apple.rgb = function (e) {
  return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
};
a.rgb.apple = function (e) {
  return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
};
a.gray.rgb = function (e) {
  return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
};
a.gray.hsl = function (e) {
  return [0, 0, e[0]];
};
a.gray.hsv = a.gray.hsl;
a.gray.hwb = function (e) {
  return [0, 100, e[0]];
};
a.gray.cmyk = function (e) {
  return [0, 0, 0, e[0]];
};
a.gray.lab = function (e) {
  return [e[0], 0, 0];
};
a.gray.hex = function (e) {
  const t = Math.round(e[0] / 100 * 255) & 255;
  const r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
a.rgb.gray = function (e) {
  return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
};