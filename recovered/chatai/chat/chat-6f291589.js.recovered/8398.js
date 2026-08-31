export let withScopeId = s.HX;
export let withMemo = s.MX;
export let withDirectives = s.wy;
export let withDefaults = s.b9;
export let withCtx = s.w5;
export let withAsyncContext = s.mv;
export let watchSyncEffect = s.yX;
export let watchPostEffect = s.Rh;
export let watchEffect = s.m0;
export let watch = s.YP;
export let warn = s.ZK;
export let version = s.i8;
export let useTransitionState = s.Y8;
export let useSlots = s.Rr;
export let useSSRContext = s.Zq;
export let useAttrs = s.l1;
export let unref = s.SU;
export let triggerRef = s.oR;
export let transformVNodeArgs = s.C3;
export let toRefs = s.BK;
export let toRef = s.Vh;
export let toRaw = s.IU;
export let toHandlers = s.mx;
export let toHandlerKey = s.hR;
export let toDisplayString = s.zw;
export let stop = s.sT;
export let ssrUtils = s.G;
export let ssrContextKey = s.Uc;
export let shallowRef = s.XI;
export let shallowReadonly = s.YS;
export let shallowReactive = s.Um;
export let setTransitionHooks = s.nK;
export let setDevtoolsHook = s.ec;
export let setBlockTracking = s.qZ;
export let resolveTransitionHooks = s.U2;
export let resolveFilter = s.eq;
export let resolveDynamicComponent = s.LL;
export let resolveDirective = s.Q2;
export let resolveComponent = s.up;
export let renderSlot = s.WI;
export let renderList = s.Ko;
export let registerRuntimeCompiler = s.Y1;
export let ref = s.iH;
export let readonly = s.OT;
export let reactive = s.qj;
export let queuePostFlushCb = s.qb;
export let pushScopeId = s.dD;
export let proxyRefs = s.WL;
export let provide = s.JJ;
export let popScopeId = s.Cn;
export let openBlock = s.wg;
export let onUpdated = s.ic;
export let onUnmounted = s.Ah;
export let onServerPrefetch = s.vl;
export let onScopeDispose = s.EB;
export let onRenderTriggered = s.Yq;
export let onRenderTracked = s.bT;
export let onMounted = s.bv;
export let onErrorCaptured = s.d1;
export let onDeactivated = s.se;
export let onBeforeUpdate = s.Xn;
export let onBeforeUnmount = s.Jd;
export let onBeforeMount = s.wF;
export let onActivated = s.dl;
export let normalizeStyle = s.j5;
export let normalizeProps = s.vs;
export let normalizeClass = s.C_;
export let nextTick = s.Y3;
export let mergeProps = s.dG;
export let mergeDefaults = s.u_;
export let markRaw = s.Xl;
export let isVNode = s.lA;
export let isShallow = s.yT;
export let isRuntimeOnly = s.of;
export let isRef = s.dq;
export let isReadonly = s.$y;
export let isReactive = s.PG;
export let isProxy = s.X3;
export let isMemoSame = s.nQ;
export let inject = s.f3;
export let initCustomFormatter = s.Mr;
export let handleError = s.S3;
export let h = s.h;
export let guardReactiveProps = s.F4;
export let getTransitionRawChildren = s.Q6;
export let getCurrentScope = s.nZ;
export let getCurrentInstance = s.FN;
export let effectScope = s.B;
export let effect = s.cE;
export let devtools = s.mW;
export let defineProps = s.MW;
export let defineExpose = s.WY;
export let defineEmits = s.Bz;
export let defineComponent = s.aZ;
export let defineAsyncComponent = s.RC;
export let customRef = s.ZM;
export let createVNode = s.Wm;
export let createTextVNode = s.Uk;
export let createStaticVNode = s.uE;
export let createSlots = s.Nv;
export let createRenderer = s.Us;
export let createPropsRestProxy = s.p1;
export let createHydrationRenderer = s.Eo;
export let createElementVNode = s._;
export let createElementBlock = s.iD;
export let createCommentVNode = s.kq;
export let createBlock = s.j4;
export let computed = s.Fl;
export let compatUtils = s.ry;
export let cloneVNode = s.Ho;
export let capitalize = s.kC;
export let camelize = s._A;
export let callWithErrorHandling = s.KU;
export let callWithAsyncErrorHandling = s.$d;
export let Text = s.xv;
export let Teleport = s.lR;
export let Suspense = s.n4;
export let Static = s.qG;
export let ReactiveEffect = s.qq;
export let KeepAlive = s.Ob;
export let Fragment = s.HY;
export let EffectScope = s.Bj;
export let Comment = s.sv;
export let BaseTransition = s.P$;
import * as i from "./4209.js";
import * as s from "./7268.js";
import * as r from "./9445.js";
const a = typeof document != "undefined" ? document : null;
const o = a && a.createElement("template");
const u = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: e => {
    const t = e.parentNode;
    if (t) {
      t.removeChild(e);
    }
  },
  createElement: (e, t, n, i) => {
    const s = t ? a.createElementNS("http://www.w3.org/2000/svg", e) : a.createElement(e, n ? {
      is: n
    } : undefined);
    if (e === "select" && i && i.multiple != null) {
      s.setAttribute("multiple", i.multiple);
    }
    return s;
  },
  createText: e => a.createTextNode(e),
  createComment: e => a.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: e => e.parentNode,
  nextSibling: e => e.nextSibling,
  querySelector: e => a.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, i, s, r) {
    const a = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling)) {
      while (t.insertBefore(s.cloneNode(true), n), s !== r && (s = s.nextSibling));
    } else {
      o.innerHTML = i ? `<svg>${e}</svg>` : e;
      const s = o.content;
      if (i) {
        const e = s.firstChild;
        while (e.firstChild) {
          s.appendChild(e.firstChild);
        }
        s.removeChild(e);
      }
      t.insertBefore(s, n);
    }
    return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
  }
};
const g = /\s*!important$/;
function h(e, t, n) {
  if ((0, i.isArray)(n)) {
    n.forEach(n => h(e, t, n));
  } else {
    if (n == null) {
      n = "";
    }
    if (t.startsWith("--")) {
      e.setProperty(t, n);
    } else {
      const s = function (e, t) {
        const n = l[t];
        if (n) {
          return n;
        }
        let s = (0, i.camelize)(t);
        if (s !== "filter" && s in e) {
          return l[t] = s;
        }
        s = (0, i.capitalize)(s);
        for (let n = 0; n < c.length; n++) {
          const i = c[n] + s;
          if (i in e) {
            return l[t] = i;
          }
        }
        return t;
      }(e, t);
      if (g.test(n)) {
        e.setProperty((0, i.hyphenate)(s), n.replace(g, ""), "important");
      } else {
        e[s] = n;
      }
    }
  }
}
const c = ["Webkit", "Moz", "ms"];
const l = {};
const d = "http://www.w3.org/1999/xlink";
function F(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function f(e, t, n, r, a = null) {
  const o = e._vei ||= {};
  const u = o[t];
  if (r && u) {
    u.value = r;
  } else {
    const [n, g] = function (e) {
      let t;
      if (C.test(e)) {
        let n;
        for (t = {}; n = e.match(C);) {
          e = e.slice(0, e.length - n[0].length);
          t[n[0].toLowerCase()] = true;
        }
      }
      return [e[2] === ":" ? e.slice(3) : (0, i.hyphenate)(e.slice(2)), t];
    }(t);
    if (r) {
      const u = o[t] = function (e, t) {
        const n = e => {
          if (e._vts) {
            if (e._vts <= n.attached) {
              return;
            }
          } else {
            e._vts = Date.now();
          }
          (0, s.$d)(function (e, t) {
            if ((0, i.isArray)(t)) {
              const n = e.stopImmediatePropagation;
              e.stopImmediatePropagation = () => {
                n.call(e);
                e._stopped = true;
              };
              return t.map(e => t => !t._stopped && e && e(t));
            }
            return t;
          }(e, n.value), t, 5, [e]);
        };
        n.value = e;
        n.attached = (() => p || (y.then(() => p = 0), p = Date.now()))();
        return n;
      }(r, a);
      F(e, n, u, g);
    } else if (u) {
      (function (e, t, n, i) {
        e.removeEventListener(t, n, i);
      })(e, n, u, g);
      o[t] = undefined;
    }
  }
}
const C = /(?:Once|Passive|Capture)$/;
let p = 0;
const y = Promise.resolve();
const A = /^on[a-z]/;
export function defineCustomElement(e, t) {
  const n = (0, s.aZ)(e);
  class i extends VueElement {
    constructor(e) {
      super(n, e, t);
    }
  }
  i.def = n;
  return i;
}
export const defineSSRCustomElement = e => defineCustomElement(e, hydrate);
const D = typeof HTMLElement != "undefined" ? HTMLElement : class {};
export class VueElement extends D {
  constructor(e, t = {}, n) {
    super();
    this._def = e;
    this._props = t;
    this._instance = null;
    this._connected = false;
    this._resolved = false;
    this._numberProps = null;
    if (this.shadowRoot && n) {
      n(this._createVNode(), this.shadowRoot);
    } else {
      this.attachShadow({
        mode: "open"
      });
    }
  }
  connectedCallback() {
    this._connected = true;
    if (!this._instance) {
      this._resolveDef();
    }
  }
  disconnectedCallback() {
    this._connected = false;
    (0, s.Y3)(() => {
      if (!this._connected) {
        render(null, this.shadowRoot);
        this._instance = null;
      }
    });
  }
  _resolveDef() {
    if (this._resolved) {
      return;
    }
    this._resolved = true;
    for (let e = 0; e < this.attributes.length; e++) {
      this._setAttr(this.attributes[e].name);
    }
    new MutationObserver(e => {
      for (const t of e) {
        this._setAttr(t.attributeName);
      }
    }).observe(this, {
      attributes: true
    });
    const e = e => {
      const {
        props: t,
        styles: n
      } = e;
      const s = !(0, i.isArray)(t);
      const r = t ? s ? Object.keys(t) : t : [];
      let a;
      if (s) {
        for (const e in this._props) {
          const n = t[e];
          if (n === Number || n && n.type === Number) {
            this._props[e] = (0, i.toNumber)(this._props[e]);
            (a ||= Object.create(null))[e] = true;
          }
        }
      }
      this._numberProps = a;
      for (const e of Object.keys(this)) {
        if (e[0] !== "_") {
          this._setProp(e, this[e], true, false);
        }
      }
      for (const e of r.map(i.camelize)) {
        Object.defineProperty(this, e, {
          get() {
            return this._getProp(e);
          },
          set(t) {
            this._setProp(e, t);
          }
        });
      }
      this._applyStyles(n);
      this._update();
    };
    const t = this._def.__asyncLoader;
    if (t) {
      t().then(e);
    } else {
      e(this._def);
    }
  }
  _setAttr(e) {
    let t = this.getAttribute(e);
    if (this._numberProps && this._numberProps[e]) {
      t = (0, i.toNumber)(t);
    }
    this._setProp((0, i.camelize)(e), t, false);
  }
  _getProp(e) {
    return this._props[e];
  }
  _setProp(e, t, n = true, s = true) {
    if (t !== this._props[e]) {
      this._props[e] = t;
      if (s && this._instance) {
        this._update();
      }
      if (n) {
        if (t === true) {
          this.setAttribute((0, i.hyphenate)(e), "");
        } else if (typeof t == "string" || typeof t == "number") {
          this.setAttribute((0, i.hyphenate)(e), t + "");
        } else if (!t) {
          this.removeAttribute((0, i.hyphenate)(e));
        }
      }
    }
  }
  _update() {
    render(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const e = (0, s.Wm)(this._def, (0, i.extend)({}, this._props));
    if (!this._instance) {
      e.ce = e => {
        this._instance = e;
        e.isCE = true;
        e.emit = (e, ...t) => {
          this.dispatchEvent(new CustomEvent(e, {
            detail: t
          }));
        };
        let t = this;
        while (t = t && (t.parentNode || t.host)) {
          if (t instanceof VueElement) {
            e.parent = t._instance;
            break;
          }
        }
      };
    }
    return e;
  }
  _applyStyles(e) {
    if (e) {
      e.forEach(e => {
        const t = document.createElement("style");
        t.textContent = e;
        this.shadowRoot.appendChild(t);
      });
    }
  }
}
export function useCssModule(e = "$style") {
  {
    const t = (0, s.FN)();
    if (!t) {
      return i.EMPTY_OBJ;
    }
    const n = t.type.__cssModules;
    if (!n) {
      return i.EMPTY_OBJ;
    }
    const r = n[e];
    return r || i.EMPTY_OBJ;
  }
}
export function useCssVars(e) {
  const t = (0, s.FN)();
  if (!t) {
    return;
  }
  const n = () => B(t.subTree, e(t.proxy));
  (0, s.Rh)(n);
  (0, s.bv)(() => {
    const e = new MutationObserver(n);
    e.observe(t.subTree.el.parentNode, {
      childList: true
    });
    (0, s.Ah)(() => e.disconnect());
  });
}
function B(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch;
    if (n.pendingBranch && !n.isHydrating) {
      n.effects.push(() => {
        B(n.activeBranch, t);
      });
    }
  }
  while (e.component) {
    e = e.component.subTree;
  }
  if (e.shapeFlag & 1 && e.el) {
    b(e.el, t);
  } else if (e.type === s.HY) {
    e.children.forEach(e => B(e, t));
  } else if (e.type === s.qG) {
    let {
      el: n,
      anchor: i
    } = e;
    while (n && (b(n, t), n !== i)) {
      n = n.nextSibling;
    }
  }
}
function b(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const e in t) {
      n.setProperty(`--${e}`, t[e]);
    }
  }
}
const j = "transition";
const S = "animation";
export const Transition = (e, {
  slots: t
}) => (0, s.h)(s.P$, T(e), t);
Transition.displayName = "Transition";
const v = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const z = Transition.props = (0, i.extend)({}, s.P$.props, v);
const k = (e, t = []) => {
  if ((0, i.isArray)(e)) {
    e.forEach(e => e(...t));
  } else if (e) {
    e(...t);
  }
};
const M = e => !!e && ((0, i.isArray)(e) ? e.some(e => e.length > 1) : e.length > 1);
function T(e) {
  const t = {};
  for (const n in e) {
    if (!(n in v)) {
      t[n] = e[n];
    }
  }
  if (e.css === false) {
    return t;
  }
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: a = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: u = `${n}-enter-to`,
    appearFromClass: g = a,
    appearActiveClass: h = o,
    appearToClass: c = u,
    leaveFromClass: l = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: F = `${n}-leave-to`
  } = e;
  const f = function (e) {
    if (e == null) {
      return null;
    }
    if ((0, i.isObject)(e)) {
      return [N(e.enter), N(e.leave)];
    }
    {
      const t = N(e);
      return [t, t];
    }
  }(r);
  const C = f && f[0];
  const p = f && f[1];
  const {
    onBeforeEnter: y,
    onEnter: A,
    onEnterCancelled: E,
    onLeave: _,
    onLeaveCancelled: D,
    onBeforeAppear: x = y,
    onAppear: m = A,
    onAppearCancelled: w = E
  } = t;
  const B = (e, t, n) => {
    O(e, t ? c : u);
    O(e, t ? h : o);
    if (n) {
      n();
    }
  };
  const b = (e, t) => {
    e._isLeaving = false;
    O(e, l);
    O(e, F);
    O(e, d);
    if (t) {
      t();
    }
  };
  const j = e => (t, n) => {
    const i = e ? m : A;
    const r = () => B(t, e, n);
    k(i, [t, r]);
    Z(() => {
      O(t, e ? g : a);
      Y(t, e ? c : u);
      if (!M(i)) {
        H(t, s, C, r);
      }
    });
  };
  return (0, i.extend)(t, {
    onBeforeEnter(e) {
      k(y, [e]);
      Y(e, a);
      Y(e, o);
    },
    onBeforeAppear(e) {
      k(x, [e]);
      Y(e, g);
      Y(e, h);
    },
    onEnter: j(false),
    onAppear: j(true),
    onLeave(e, t) {
      e._isLeaving = true;
      const n = () => b(e, t);
      Y(e, l);
      J();
      Y(e, d);
      Z(() => {
        if (e._isLeaving) {
          O(e, l);
          Y(e, F);
          if (!M(_)) {
            H(e, s, p, n);
          }
        }
      });
      k(_, [e, n]);
    },
    onEnterCancelled(e) {
      B(e, false);
      k(E, [e]);
    },
    onAppearCancelled(e) {
      B(e, true);
      k(w, [e]);
    },
    onLeaveCancelled(e) {
      b(e);
      k(D, [e]);
    }
  });
}
function N(e) {
  return (0, i.toNumber)(e);
}
function Y(e, t) {
  t.split(/\s+/).forEach(t => t && e.classList.add(t));
  (e._vtc ||= new Set()).add(t);
}
function O(e, t) {
  t.split(/\s+/).forEach(t => t && e.classList.remove(t));
  const {
    _vtc: n
  } = e;
  if (n) {
    n.delete(t);
    if (!n.size) {
      e._vtc = undefined;
    }
  }
}
function Z(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let G = 0;
function H(e, t, n, i) {
  const s = e._endId = ++G;
  const r = () => {
    if (s === e._endId) {
      i();
    }
  };
  if (n) {
    return setTimeout(r, n);
  }
  const {
    type: a,
    timeout: o,
    propCount: u
  } = P(e, t);
  if (!a) {
    return i();
  }
  const g = a + "end";
  let h = 0;
  const c = () => {
    e.removeEventListener(g, l);
    r();
  };
  const l = t => {
    if (t.target === e && ++h >= u) {
      c();
    }
  };
  setTimeout(() => {
    if (h < u) {
      c();
    }
  }, o + 1);
  e.addEventListener(g, l);
}
function P(e, t) {
  const n = window.getComputedStyle(e);
  const i = e => (n[e] || "").split(", ");
  const s = i("transitionDelay");
  const r = i("transitionDuration");
  const a = L(s, r);
  const o = i("animationDelay");
  const u = i("animationDuration");
  const g = L(o, u);
  let h = null;
  let c = 0;
  let l = 0;
  if (t === j) {
    if (a > 0) {
      h = j;
      c = a;
      l = r.length;
    }
  } else if (t === S) {
    if (g > 0) {
      h = S;
      c = g;
      l = u.length;
    }
  } else {
    c = Math.max(a, g);
    h = c > 0 ? a > g ? j : S : null;
    l = h ? h === j ? r.length : u.length : 0;
  }
  return {
    type: h,
    timeout: c,
    propCount: l,
    hasTransform: h === j && /\b(transform|all)(,|$)/.test(n.transitionProperty)
  };
}
function L(e, t) {
  while (e.length < t.length) {
    e = e.concat(e);
  }
  return Math.max(...t.map((t, n) => X(t) + X(e[n])));
}
function X(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1000;
}
function J() {
  return document.body.offsetHeight;
}
const q = new WeakMap();
const R = new WeakMap();
export const TransitionGroup = {
  name: "TransitionGroup",
  props: (0, i.extend)({}, z, {
    tag: String,
    moveClass: String
  }),
  setup(e, {
    slots: t
  }) {
    const n = (0, s.FN)();
    const i = (0, s.Y8)();
    let a;
    let o;
    (0, s.ic)(() => {
      if (!a.length) {
        return;
      }
      const t = e.moveClass || `${e.name || "v"}-move`;
      if (!function (e, t, n) {
        const i = e.cloneNode();
        if (e._vtc) {
          e._vtc.forEach(e => {
            e.split(/\s+/).forEach(e => e && i.classList.remove(e));
          });
        }
        n.split(/\s+/).forEach(e => e && i.classList.add(e));
        i.style.display = "none";
        const s = t.nodeType === 1 ? t : t.parentNode;
        s.appendChild(i);
        const {
          hasTransform: r
        } = P(i);
        s.removeChild(i);
        return r;
      }(a[0].el, n.vnode.el, t)) {
        return;
      }
      a.forEach(W);
      a.forEach($);
      const i = a.filter(Q);
      J();
      i.forEach(e => {
        const n = e.el;
        const i = n.style;
        Y(n, t);
        i.transform = i.webkitTransform = i.transitionDuration = "";
        const s = n._moveCb = e => {
          if ((!e || e.target === n) && (!e || !!/transform$/.test(e.propertyName))) {
            n.removeEventListener("transitionend", s);
            n._moveCb = null;
            O(n, t);
          }
        };
        n.addEventListener("transitionend", s);
      });
    });
    return () => {
      const u = (0, r.IU)(e);
      const g = T(u);
      let h = u.tag || s.HY;
      a = o;
      o = t.default ? (0, s.Q6)(t.default()) : [];
      for (let e = 0; e < o.length; e++) {
        const t = o[e];
        if (t.key != null) {
          (0, s.nK)(t, (0, s.U2)(t, g, i, n));
        }
      }
      if (a) {
        for (let e = 0; e < a.length; e++) {
          const t = a[e];
          (0, s.nK)(t, (0, s.U2)(t, g, i, n));
          q.set(t, t.el.getBoundingClientRect());
        }
      }
      return (0, s.Wm)(h, null, o);
    };
  }
};
function W(e) {
  const t = e.el;
  if (t._moveCb) {
    t._moveCb();
  }
  if (t._enterCb) {
    t._enterCb();
  }
}
function $(e) {
  R.set(e, e.el.getBoundingClientRect());
}
function Q(e) {
  const t = q.get(e);
  const n = R.get(e);
  const i = t.left - n.left;
  const s = t.top - n.top;
  if (i || s) {
    const t = e.el.style;
    t.transform = t.webkitTransform = `translate(${i}px,${s}px)`;
    t.transitionDuration = "0s";
    return e;
  }
}
const K = e => {
  const t = e.props["onUpdate:modelValue"] || false;
  if ((0, i.isArray)(t)) {
    return e => (0, i.invokeArrayFns)(t, e);
  } else {
    return t;
  }
};
function V(e) {
  e.target.composing = true;
}
function ee(e) {
  const t = e.target;
  if (t.composing) {
    t.composing = false;
    t.dispatchEvent(new Event("input"));
  }
}
export const vModelText = {
  created(e, {
    modifiers: {
      lazy: t,
      trim: n,
      number: s
    }
  }, r) {
    e._assign = K(r);
    const a = s || r.props && r.props.type === "number";
    F(e, t ? "change" : "input", t => {
      if (t.target.composing) {
        return;
      }
      let s = e.value;
      if (n) {
        s = s.trim();
      }
      if (a) {
        s = (0, i.toNumber)(s);
      }
      e._assign(s);
    });
    if (n) {
      F(e, "change", () => {
        e.value = e.value.trim();
      });
    }
    if (!t) {
      F(e, "compositionstart", V);
      F(e, "compositionend", ee);
      F(e, "change", ee);
    }
  },
  mounted(e, {
    value: t
  }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, {
    value: t,
    modifiers: {
      lazy: n,
      trim: s,
      number: r
    }
  }, a) {
    e._assign = K(a);
    if (e.composing) {
      return;
    }
    if (document.activeElement === e && e.type !== "range") {
      if (n) {
        return;
      }
      if (s && e.value.trim() === t) {
        return;
      }
      if ((r || e.type === "number") && (0, i.toNumber)(e.value) === t) {
        return;
      }
    }
    const o = t == null ? "" : t;
    if (e.value !== o) {
      e.value = o;
    }
  }
};
export const vModelCheckbox = {
  deep: true,
  created(e, t, n) {
    e._assign = K(n);
    F(e, "change", () => {
      const t = e._modelValue;
      const n = oe(e);
      const s = e.checked;
      const r = e._assign;
      if ((0, i.isArray)(t)) {
        const e = (0, i.looseIndexOf)(t, n);
        const a = e !== -1;
        if (s && !a) {
          r(t.concat(n));
        } else if (!s && a) {
          const n = [...t];
          n.splice(e, 1);
          r(n);
        }
      } else if ((0, i.isSet)(t)) {
        const e = new Set(t);
        if (s) {
          e.add(n);
        } else {
          e.delete(n);
        }
        r(e);
      } else {
        r(ue(e, s));
      }
    });
  },
  mounted: ie,
  beforeUpdate(e, t, n) {
    e._assign = K(n);
    ie(e, t, n);
  }
};
function ie(e, {
  value: t,
  oldValue: n
}, s) {
  e._modelValue = t;
  if ((0, i.isArray)(t)) {
    e.checked = (0, i.looseIndexOf)(t, s.props.value) > -1;
  } else if ((0, i.isSet)(t)) {
    e.checked = t.has(s.props.value);
  } else if (t !== n) {
    e.checked = (0, i.looseEqual)(t, ue(e, true));
  }
}
export const vModelRadio = {
  created(e, {
    value: t
  }, n) {
    e.checked = (0, i.looseEqual)(t, n.props.value);
    e._assign = K(n);
    F(e, "change", () => {
      e._assign(oe(e));
    });
  },
  beforeUpdate(e, {
    value: t,
    oldValue: n
  }, s) {
    e._assign = K(s);
    if (t !== n) {
      e.checked = (0, i.looseEqual)(t, s.props.value);
    }
  }
};
export const vModelSelect = {
  deep: true,
  created(e, {
    value: t,
    modifiers: {
      number: n
    }
  }, s) {
    const r = (0, i.isSet)(t);
    F(e, "change", () => {
      const t = Array.prototype.filter.call(e.options, e => e.selected).map(e => n ? (0, i.toNumber)(oe(e)) : oe(e));
      e._assign(e.multiple ? r ? new Set(t) : t : t[0]);
    });
    e._assign = K(s);
  },
  mounted(e, {
    value: t
  }) {
    ae(e, t);
  },
  beforeUpdate(e, t, n) {
    e._assign = K(n);
  },
  updated(e, {
    value: t
  }) {
    ae(e, t);
  }
};
function ae(e, t) {
  const n = e.multiple;
  if (!n || (0, i.isArray)(t) || (0, i.isSet)(t)) {
    for (let s = 0, r = e.options.length; s < r; s++) {
      const r = e.options[s];
      const a = oe(r);
      if (n) {
        if ((0, i.isArray)(t)) {
          r.selected = (0, i.looseIndexOf)(t, a) > -1;
        } else {
          r.selected = t.has(a);
        }
      } else if ((0, i.looseEqual)(oe(r), t)) {
        if (e.selectedIndex !== s) {
          e.selectedIndex = s;
        }
        return;
      }
    }
    if (!n && e.selectedIndex !== -1) {
      e.selectedIndex = -1;
    }
  }
}
function oe(e) {
  if ("_value" in e) {
    return e._value;
  } else {
    return e.value;
  }
}
function ue(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  if (n in e) {
    return e[n];
  } else {
    return t;
  }
}
export const vModelDynamic = {
  created(e, t, n) {
    ce(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    ce(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, i) {
    ce(e, t, n, i, "beforeUpdate");
  },
  updated(e, t, n, i) {
    ce(e, t, n, i, "updated");
  }
};
function he(e, t) {
  switch (e) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (t) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function ce(e, t, n, i, s) {
  const r = he(e.tagName, n.props && n.props.type)[s];
  if (r) {
    r(e, t, n, i);
  }
}
const le = ["ctrl", "shift", "alt", "meta"];
const de = {
  stop: e => e.stopPropagation(),
  prevent: e => e.preventDefault(),
  self: e => e.target !== e.currentTarget,
  ctrl: e => !e.ctrlKey,
  shift: e => !e.shiftKey,
  alt: e => !e.altKey,
  meta: e => !e.metaKey,
  left: e => "button" in e && e.button !== 0,
  middle: e => "button" in e && e.button !== 1,
  right: e => "button" in e && e.button !== 2,
  exact: (e, t) => le.some(n => e[`${n}Key`] && !t.includes(n))
};
export const withModifiers = (e, t) => (n, ...i) => {
  for (let e = 0; e < t.length; e++) {
    const i = de[t[e]];
    if (i && i(n, t)) {
      return;
    }
  }
  return e(n, ...i);
};
const fe = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
export const withKeys = (e, t) => n => {
  if (!("key" in n)) {
    return;
  }
  const s = (0, i.hyphenate)(n.key);
  if (t.some(e => e === s || fe[e] === s)) {
    return e(n);
  } else {
    return undefined;
  }
};
export const vShow = {
  beforeMount(e, {
    value: t
  }, {
    transition: n
  }) {
    e._vod = e.style.display === "none" ? "" : e.style.display;
    if (n && t) {
      n.beforeEnter(e);
    } else {
      ye(e, t);
    }
  },
  mounted(e, {
    value: t
  }, {
    transition: n
  }) {
    if (n && t) {
      n.enter(e);
    }
  },
  updated(e, {
    value: t,
    oldValue: n
  }, {
    transition: i
  }) {
    if (!t != !n) {
      if (i) {
        if (t) {
          i.beforeEnter(e);
          ye(e, true);
          i.enter(e);
        } else {
          i.leave(e, () => {
            ye(e, false);
          });
        }
      } else {
        ye(e, t);
      }
    }
  },
  beforeUnmount(e, {
    value: t
  }) {
    ye(e, t);
  }
};
function ye(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Ae = (0, i.extend)({
  patchProp: (e, t, n, s, r = false, a, o, u, g) => {
    if (t === "class") {
      (function (e, t, n) {
        const i = e._vtc;
        if (i) {
          t = (t ? [t, ...i] : [...i]).join(" ");
        }
        if (t == null) {
          e.removeAttribute("class");
        } else if (n) {
          e.setAttribute("class", t);
        } else {
          e.className = t;
        }
      })(e, s, r);
    } else if (t === "style") {
      (function (e, t, n) {
        const s = e.style;
        const r = (0, i.isString)(n);
        if (n && !r) {
          for (const e in n) {
            h(s, e, n[e]);
          }
          if (t && !(0, i.isString)(t)) {
            for (const e in t) {
              if (n[e] == null) {
                h(s, e, "");
              }
            }
          }
        } else {
          const i = s.display;
          if (r) {
            if (t !== n) {
              s.cssText = n;
            }
          } else if (t) {
            e.removeAttribute("style");
          }
          if ("_vod" in e) {
            s.display = i;
          }
        }
      })(e, n, s);
    } else if ((0, i.isOn)(t)) {
      if (!(0, i.isModelListener)(t)) {
        f(e, t, 0, s, o);
      }
    } else if (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : function (e, t, n, s) {
      if (s) {
        return t === "innerHTML" || t === "textContent" || !!(t in e) && !!A.test(t) && !!(0, i.isFunction)(n);
      }
      if (t === "spellcheck" || t === "draggable" || t === "translate") {
        return false;
      }
      if (t === "form") {
        return false;
      }
      if (t === "list" && e.tagName === "INPUT") {
        return false;
      }
      if (t === "type" && e.tagName === "TEXTAREA") {
        return false;
      }
      if (A.test(t) && (0, i.isString)(n)) {
        return false;
      }
      return t in e;
    }(e, t, s, r)) {
      (function (e, t, n, s, r, a, o) {
        if (t === "innerHTML" || t === "textContent") {
          if (s) {
            o(s, r, a);
          }
          e[t] = n == null ? "" : n;
          return;
        }
        if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
          e._value = n;
          const i = n == null ? "" : n;
          if (e.value !== i || e.tagName === "OPTION") {
            e.value = i;
          }
          if (n == null) {
            e.removeAttribute(t);
          }
          return;
        }
        let u = false;
        if (n === "" || n == null) {
          const s = typeof e[t];
          if (s === "boolean") {
            n = (0, i.includeBooleanAttr)(n);
          } else if (n == null && s === "string") {
            n = "";
            u = true;
          } else if (s === "number") {
            n = 0;
            u = true;
          }
        }
        try {
          e[t] = n;
        } catch (e) {}
        if (u) {
          e.removeAttribute(t);
        }
      })(e, t, s, a, o, u, g);
    } else {
      if (t === "true-value") {
        e._trueValue = s;
      } else if (t === "false-value") {
        e._falseValue = s;
      }
      (function (e, t, n, s, r) {
        if (s && t.startsWith("xlink:")) {
          if (n == null) {
            e.removeAttributeNS(d, t.slice(6, t.length));
          } else {
            e.setAttributeNS(d, t, n);
          }
        } else {
          const s = (0, i.isSpecialBooleanAttr)(t);
          if (n == null || s && !(0, i.includeBooleanAttr)(n)) {
            e.removeAttribute(t);
          } else {
            e.setAttribute(t, s ? "" : n);
          }
        }
      })(e, t, s, r);
    }
  }
}, u);
let Ee;
let _e = false;
function De() {
  return Ee ||= (0, s.Us)(Ae);
}
function xe() {
  Ee = _e ? Ee : (0, s.Eo)(Ae);
  _e = true;
  return Ee;
}
export const render = (...e) => {
  De().render(...e);
};
export const hydrate = (...e) => {
  xe().hydrate(...e);
};
export const createApp = (...e) => {
  const t = De().createApp(...e);
  const {
    mount: n
  } = t;
  t.mount = e => {
    const s = je(e);
    if (!s) {
      return;
    }
    const r = t._component;
    if (!(0, i.isFunction)(r) && !r.render && !r.template) {
      r.template = s.innerHTML;
    }
    s.innerHTML = "";
    const a = n(s, false, s instanceof SVGElement);
    if (s instanceof Element) {
      s.removeAttribute("v-cloak");
      s.setAttribute("data-v-app", "");
    }
    return a;
  };
  return t;
};
export const createSSRApp = (...e) => {
  const t = xe().createApp(...e);
  const {
    mount: n
  } = t;
  t.mount = e => {
    const t = je(e);
    if (t) {
      return n(t, true, t instanceof SVGElement);
    }
  };
  return t;
};
function je(e) {
  if ((0, i.isString)(e)) {
    return document.querySelector(e);
  }
  return e;
}
let Se = false;
export const initDirectivesForSSR = () => {
  if (!Se) {
    Se = true;
    vModelText.getSSRProps = ({
      value: e
    }) => ({
      value: e
    });
    vModelRadio.getSSRProps = ({
      value: e
    }, t) => {
      if (t.props && (0, i.looseEqual)(t.props.value, e)) {
        return {
          checked: true
        };
      }
    };
    vModelCheckbox.getSSRProps = ({
      value: e
    }, t) => {
      if ((0, i.isArray)(e)) {
        if (t.props && (0, i.looseIndexOf)(e, t.props.value) > -1) {
          return {
            checked: true
          };
        }
      } else if ((0, i.isSet)(e)) {
        if (t.props && e.has(t.props.value)) {
          return {
            checked: true
          };
        }
      } else if (e) {
        return {
          checked: true
        };
      }
    };
    vModelDynamic.getSSRProps = (e, t) => {
      if (typeof t.type != "string") {
        return;
      }
      const n = he(t.type.toUpperCase(), t.props && t.props.type);
      if (n.getSSRProps) {
        return n.getSSRProps(e, t);
      } else {
        return undefined;
      }
    };
    vShow.getSSRProps = ({
      value: e
    }) => {
      if (!e) {
        return {
          style: {
            display: "none"
          }
        };
      }
    };
  }
};