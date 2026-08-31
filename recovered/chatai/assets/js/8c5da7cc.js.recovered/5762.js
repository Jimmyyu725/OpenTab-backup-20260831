var n;
var o = require("./6121.js");
var a = require(/*webcrack:missing*/"./9445.js");
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
const i = typeof window != "undefined";
Object.prototype.toString;
const c = () => {};
if (i && ((n = window == null ? undefined : window.navigator) == null ? undefined : n.userAgent)) {
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function s(e) {
  if (typeof e == "function") {
    return e();
  } else {
    return (0, a.SU)(e);
  }
}
o.$B;
o.$B;
o.$B;
function l(e) {
  return !!(0, a.nZ)() && ((0, a.EB)(e), true);
}
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
var u = require(/*webcrack:missing*/"./7268.js");
function f(e) {
  const r = s(e);
  return (r == null ? undefined : r.$el) ?? r;
}
const d = i ? window : undefined;
if (i) {
  window.document;
}
if (i) {
  window.navigator;
}
if (i) {
  window.location;
}
function h(...e) {
  let t;
  let r;
  let n;
  let o;
  if (typeof e[0] == "string" || Array.isArray(e[0])) {
    [r, n, o] = e;
    t = d;
  } else {
    [t, r, n, o] = e;
  }
  if (!t) {
    return c;
  }
  if (!Array.isArray(r)) {
    r = [r];
  }
  if (!Array.isArray(n)) {
    n = [n];
  }
  const a = [];
  const i = () => {
    a.forEach(e => e());
    a.length = 0;
  };
  const s = (0, u.YP)(() => f(t), e => {
    i();
    if (e) {
      a.push(...r.flatMap(t => n.map(r => ((e, t, r) => {
        e.addEventListener(t, r, o);
        return () => e.removeEventListener(t, r, o);
      })(e, t, r))));
    }
  }, {
    immediate: true,
    flush: "post"
  });
  const h = () => {
    s();
    i();
  };
  l(h);
  return h;
}
export function i9H(e, t, r = {}) {
  const {
    window: n = d,
    ignore: o,
    capture: a = true,
    detectIframe: i = false
  } = r;
  if (!n) {
    return;
  }
  let c;
  let s = true;
  const l = r => {
    n.clearTimeout(c);
    const o = f(e);
    if (o && o !== r.target && !r.composedPath().includes(o)) {
      if (s) {
        t(r);
      } else {
        s = true;
      }
    }
  };
  const u = [h(n, "click", l, {
    passive: true,
    capture: a
  }), h(n, "pointerdown", t => {
    const r = f(e);
    var n;
    if (r) {
      s = !t.composedPath().includes(r) && !(n = t, o && o.some(e => {
        const t = f(e);
        return t && (n.target === t || n.composedPath().includes(t));
      }));
    }
  }, {
    passive: true
  }), h(n, "pointerup", e => {
    if (e.button === 0) {
      const t = e.composedPath();
      e.composedPath = () => t;
      c = n.setTimeout(() => l(e), 50);
    }
  }, {
    passive: true
  }), i && h(n, "blur", r => {
    var o;
    const a = f(e);
    if (((o = n.document.activeElement) == null ? undefined : o.tagName) === "IFRAME" && !(a == null ? undefined : a.contains(n.document.activeElement))) {
      t(r);
    }
  })].filter(Boolean);
  return () => u.forEach(e => e());
}
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
const g = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
const y = "__vueuse_ssr_handlers__";
g[y] = g[y] || {};
g[y];
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
new Map();
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
var v;
var b;
(b = v ||= {}).UP = "UP";
b.RIGHT = "RIGHT";
b.DOWN = "DOWN";
b.LEFT = "LEFT";
b.NONE = "NONE";
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.defineProperties;
Object.getOwnPropertyDescriptors;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
var m = Object.defineProperty;
var w = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty;
var k = Object.prototype.propertyIsEnumerable;
var A = (e, t, r) => t in e ? m(e, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: r
}) : e[t] = r;
((e, t) => {
  for (var r in t ||= {}) {
    if (_.call(t, r)) {
      A(e, r, t[r]);
    }
  }
  if (w) {
    for (var r of w(t)) {
      if (k.call(t, r)) {
        A(e, r, t[r]);
      }
    }
  }
})({
  linear: function (e) {
    return e;
  }
}, {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
});