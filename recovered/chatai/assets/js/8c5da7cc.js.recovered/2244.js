var n = require(/*webcrack:missing*/"./9445.js");
var o = require(/*webcrack:missing*/"./7268.js");
export var _f = typeof window != "undefined";
var i = (e, t) => ({
  top: 0,
  left: 0,
  right: e,
  bottom: t,
  width: e,
  height: t
});
export var EL = e => {
  const t = (0, n.SU)(e);
  if (t === window) {
    const e = t.innerWidth;
    const r = t.innerHeight;
    return i(e, r);
  }
  if (t == null ? undefined : t.getBoundingClientRect) {
    return t.getBoundingClientRect();
  } else {
    return i(0, 0);
  }
};
var s;
var l;
export function Ib(e) {
  let t;
  (0, o.bv)(() => {
    e();
    (0, o.Y3)(() => {
      t = true;
    });
  });
  (0, o.dl)(() => {
    if (t) {
      e();
    }
  });
}
export function OR(e, t, r = {}) {
  if (!_f) {
    return;
  }
  const {
    target: i = window,
    passive: c = false,
    capture: s = false
  } = r;
  let l;
  const f = r => {
    const o = (0, n.SU)(r);
    if (o && !l) {
      o.addEventListener(e, t, {
        capture: s,
        passive: c
      });
      l = true;
    }
  };
  const d = r => {
    const o = (0, n.SU)(r);
    if (o && l) {
      o.removeEventListener(e, t, s);
      l = false;
    }
  };
  (0, o.Ah)(() => d(i));
  (0, o.se)(() => d(i));
  Ib(() => f(i));
  if ((0, n.dq)(i)) {
    (0, o.YP)(i, (e, t) => {
      d(t);
      f(e);
    });
  }
}
export function Vd(e, t, r = {}) {
  if (!_f) {
    return;
  }
  const {
    eventName: o = "click"
  } = r;
  OR(o, r => {
    const o = (0, n.SU)(e);
    if (o && !o.contains(r.target)) {
      t(r);
    }
  }, {
    target: document
  });
}
export function iP() {
  if (!s && (s = (0, n.iH)(0), l = (0, n.iH)(0), _f)) {
    const e = () => {
      s.value = window.innerWidth;
      l.value = window.innerHeight;
    };
    e();
    window.addEventListener("resize", e, {
      passive: true
    });
    window.addEventListener("orientationchange", e, {
      passive: true
    });
  }
  return {
    width: s,
    height: l
  };
}
var p = /scroll|auto/i;
var g = _f ? window : undefined;
function y(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
export function rP(e, t = g) {
  let r = e;
  while (r && r !== t && y(r)) {
    const {
      overflowY: e
    } = window.getComputedStyle(r);
    if (p.test(e)) {
      return r;
    }
    r = r.parentNode;
  }
  return t;
}
export function eo(e, t = g) {
  const r = (0, n.iH)();
  (0, o.bv)(() => {
    if (e.value) {
      r.value = rP(e.value, t);
    }
  });
  return r;
}
var m = Symbol("van-field");
export function aM(e) {
  const t = (0, o.f3)(m, null);
  if (t && !t.customValue.value) {
    t.customValue.value = e;
    (0, o.YP)(e, () => {
      t.resetValidation();
      t.validateWithTrigger("onChange");
    });
  }
}