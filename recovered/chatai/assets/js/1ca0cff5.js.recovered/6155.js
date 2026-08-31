var o = require("./9349.js");
var n = require(/*webcrack:missing*/"./7268.js");
var i = require(/*webcrack:missing*/"./9445.js");
var s = require(/*webcrack:missing*/"./3802.js");
var a = require("./9404.js");
var l = require("./3278.js");
var d = require("./361.js");
const c = "van-hairline";
const u = `${c}--bottom`;
Symbol("van-form");
var h = require(/*webcrack:missing*/"./2244.js");
var p = require("./5216.js");
var v = require(/*webcrack:missing*/"./8398.js");
const f = {
  show: Boolean,
  zIndex: l.Or,
  overlay: l.J5,
  duration: l.Or,
  teleport: [String, Object],
  lockScroll: l.J5,
  lazyRender: l.J5,
  beforeClose: Function,
  overlayStyle: Object,
  overlayClass: l.Vg,
  transitionAppear: Boolean,
  closeOnClickOverlay: l.J5
};
Object.keys(f);
var m = require("./741.js");
var g = require("./3935.js");
var b = require("./1476.js");
var y = require("./907.js");
let w = 0;
const S = "van-overflow-hidden";
function x(e) {
  const t = (0, i.iH)(false);
  (0, n.YP)(e, e => {
    if (e) {
      t.value = e;
    }
  }, {
    immediate: true
  });
  return e => () => t.value ? e() : null;
}
const L = Symbol();
var O = require("./7890.js");
const [A, z] = (0, a.do)("overlay");
const E = {
  show: Boolean,
  zIndex: l.Or,
  duration: l.Or,
  className: l.Vg,
  lockScroll: l.J5,
  lazyRender: l.J5,
  customStyle: Object
};
var C = (0, n.aZ)({
  name: A,
  props: E,
  setup(e, {
    slots: t
  }) {
    const r = x(() => e.show || !e.lazyRender);
    const o = e => {
      (0, y.PF)(e, true);
    };
    const i = r(() => {
      var r;
      const i = (0, d.l7)((0, O.As)(e.zIndex), e.customStyle);
      if ((0, m.Xq)(e.duration)) {
        i.animationDuration = `${e.duration}s`;
      }
      return (0, n.wy)((0, n.Wm)("div", {
        style: i,
        class: [z(), e.className],
        onTouchmove: e.lockScroll ? o : d.ZT
      }, [(r = t.default) == null ? undefined : r.call(t)]), [[v.vShow, e.show]]);
    });
    return () => (0, n.Wm)(v.Transition, {
      name: "van-fade",
      appear: true
    }, {
      default: i
    });
  }
});
const $ = (0, o.n)(C);
const W = (0, d.l7)({}, f, {
  round: Boolean,
  position: (0, l.SQ)("center"),
  closeIcon: (0, l.SQ)("cross"),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: (0, l.SQ)("top-right"),
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: Boolean
});
const [k, I] = (0, a.do)("popup");
let H = 2000;
var P = (0, n.aZ)({
  name: k,
  inheritAttrs: false,
  props: W,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "click-overlay", "click-close-icon"],
  setup(e, {
    emit: t,
    attrs: r,
    slots: o
  }) {
    let s;
    let a;
    const l = (0, i.iH)();
    const c = (0, i.iH)();
    const u = x(() => e.show || !e.lazyRender);
    const f = (0, n.Fl)(() => {
      const t = {
        zIndex: l.value
      };
      if ((0, m.Xq)(e.duration)) {
        t[e.position === "center" ? "animationDuration" : "transitionDuration"] = `${e.duration}s`;
      }
      return t;
    });
    const O = () => {
      if (!s) {
        if (e.zIndex !== undefined) {
          H = +e.zIndex;
        }
        s = true;
        l.value = ++H;
        t("open");
      }
    };
    const A = () => {
      if (s) {
        (function (e, {
          args: t = [],
          done: r,
          canceled: o
        }) {
          if (e) {
            const n = e.apply(null, t);
            if ((0, m.tI)(n)) {
              n.then(e => {
                if (e) {
                  r();
                } else if (o) {
                  o();
                }
              }).catch(d.ZT);
            } else if (n) {
              r();
            } else if (o) {
              o();
            }
          } else {
            r();
          }
        })(e.beforeClose, {
          done() {
            s = false;
            t("close");
            t("update:show", false);
          }
        });
      }
    };
    const z = r => {
      t("click-overlay", r);
      if (e.closeOnClickOverlay) {
        A();
      }
    };
    const E = () => {
      if (e.overlay) {
        return (0, n.Wm)($, {
          show: e.show,
          class: e.overlayClass,
          zIndex: l.value,
          duration: e.duration,
          customStyle: e.overlayStyle,
          onClick: z
        }, {
          default: o["overlay-content"]
        });
      }
    };
    const C = e => {
      t("click-close-icon", e);
      A();
    };
    const W = () => {
      if (e.closeable) {
        return (0, n.Wm)(p.J, {
          role: "button",
          tabindex: 0,
          name: e.closeIcon,
          class: [I("close-icon", e.closeIconPosition), "van-haptics-feedback"],
          classPrefix: e.iconPrefix,
          onClick: C
        }, null);
      }
    };
    const k = () => t("opened");
    const P = () => t("closed");
    const T = e => t("keydown", e);
    const B = u(() => {
      var t;
      const {
        round: i,
        position: s,
        safeAreaInsetTop: a,
        safeAreaInsetBottom: l
      } = e;
      return (0, n.wy)((0, n.Wm)("div", (0, n.dG)({
        ref: c,
        style: f.value,
        class: [I({
          round: i,
          [s]: s
        }), {
          "van-safe-area-top": a,
          "van-safe-area-bottom": l
        }],
        onKeydown: T
      }, r), [(t = o.default) == null ? undefined : t.call(o), W()]), [[v.vShow, e.show]]);
    });
    const N = () => {
      const {
        position: t,
        transition: r,
        transitionAppear: o
      } = e;
      const i = t === "center" ? "van-fade" : `van-popup-slide-${t}`;
      return (0, n.Wm)(v.Transition, {
        name: r || i,
        appear: o,
        onAfterEnter: k,
        onAfterLeave: P
      }, {
        default: B
      });
    };
    (0, n.YP)(() => e.show, e => {
      if (e && !s) {
        O();
        if (r.tabindex === 0) {
          (0, n.Y3)(() => {
            var e;
            if ((e = c.value) != null) {
              e.focus();
            }
          });
        }
      }
      if (!e && s) {
        s = false;
        t("close");
      }
    });
    (0, g.F)({
      popupRef: c
    });
    (function (e, t) {
      const r = (0, b.o)();
      const o = t => {
        r.move(t);
        const o = r.deltaY.value > 0 ? "10" : "01";
        const n = (0, h.rP)(t.target, e.value);
        const {
          scrollHeight: i,
          offsetHeight: s,
          scrollTop: a
        } = n;
        let l = "11";
        if (a === 0) {
          l = s >= i ? "00" : "01";
        } else if (a + s >= i) {
          l = "10";
        }
        if (l !== "11" && !!r.isVertical() && !(parseInt(l, 2) & parseInt(o, 2))) {
          (0, y.PF)(t, true);
        }
      };
      const i = () => {
        document.addEventListener("touchstart", r.start);
        document.addEventListener("touchmove", o, {
          passive: false
        });
        if (!w) {
          document.body.classList.add(S);
        }
        w++;
      };
      const s = () => {
        if (w) {
          document.removeEventListener("touchstart", r.start);
          document.removeEventListener("touchmove", o);
          w--;
          if (!w) {
            document.body.classList.remove(S);
          }
        }
      };
      const a = () => t() && s();
      (0, h.Ib)(() => t() && i());
      (0, n.se)(a);
      (0, n.Jd)(a);
      (0, n.YP)(t, e => {
        if (e) {
          i();
        } else {
          s();
        }
      });
    })(c, () => e.show && e.lockScroll);
    (0, h.OR)("popstate", () => {
      if (e.closeOnPopstate) {
        A();
        a = false;
      }
    });
    (0, n.bv)(() => {
      if (e.show) {
        O();
      }
    });
    (0, n.dl)(() => {
      if (a) {
        t("update:show", true);
        a = false;
      }
    });
    (0, n.se)(() => {
      if (e.show) {
        A();
        a = true;
      }
    });
    (0, n.JJ)(L, () => e.show);
    return () => e.teleport ? (0, n.Wm)(n.lR, {
      to: e.teleport
    }, {
      default: () => [E(), N()]
    }) : (0, n.Wm)(n.HY, null, [E(), N()]);
  }
});
const T = (0, o.n)(P);
const [B, N] = (0, a.do)("popover");
const J = ["show", "overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"];
const j = {
  show: Boolean,
  theme: (0, l.SQ)("light"),
  overlay: Boolean,
  actions: (0, l.Ce)(),
  trigger: (0, l.SQ)("click"),
  duration: l.Or,
  showArrow: l.J5,
  placement: (0, l.SQ)("bottom"),
  iconPrefix: String,
  overlayClass: l.Vg,
  overlayStyle: Object,
  closeOnClickAction: l.J5,
  closeOnClickOverlay: l.J5,
  closeOnClickOutside: l.J5,
  offset: {
    type: Array,
    default: () => [0, 8]
  },
  teleport: {
    type: [String, Object],
    default: "body"
  }
};
var F = (0, n.aZ)({
  name: B,
  props: j,
  emits: ["select", "touchstart", "update:show"],
  setup(e, {
    emit: t,
    slots: r,
    attrs: o
  }) {
    let a;
    const l = (0, i.iH)();
    const c = (0, i.iH)();
    const v = () => {
      (0, n.Y3)(() => {
        if (e.show) {
          if (a) {
            a.setOptions({
              placement: e.placement
            });
          } else {
            a = l.value && c.value ? (0, s.f)(l.value, c.value.popupRef.value, {
              placement: e.placement,
              modifiers: [{
                name: "computeStyles",
                options: {
                  adaptive: false,
                  gpuAcceleration: false
                }
              }, (0, d.l7)({}, s.W, {
                options: {
                  offset: e.offset
                }
              })]
            }) : null;
          }
        }
      });
    };
    const f = e => t("update:show", e);
    const m = () => {
      if (e.trigger === "click") {
        f(!e.show);
      }
    };
    const g = e => {
      e.stopPropagation();
      t("touchstart", e);
    };
    const b = (t, o) => r.action ? r.action({
      action: t,
      index: o
    }) : [t.icon && (0, n.Wm)(p.J, {
      name: t.icon,
      classPrefix: e.iconPrefix,
      class: N("action-icon")
    }, null), (0, n.Wm)("div", {
      class: [N("action-text"), u]
    }, [t.text])];
    const y = (r, o) => {
      const {
        icon: i,
        color: s,
        disabled: a,
        className: l
      } = r;
      return (0, n.Wm)("div", {
        role: "menuitem",
        class: [N("action", {
          disabled: a,
          "with-icon": i
        }), l],
        style: {
          color: s
        },
        tabindex: a ? undefined : 0,
        "aria-disabled": a || undefined,
        onClick: () => ((r, o) => {
          if (!r.disabled) {
            t("select", r, o);
            if (e.closeOnClickAction) {
              f(false);
            }
          }
        })(r, o)
      }, [b(r, o)]);
    };
    (0, n.bv)(v);
    (0, n.Jd)(() => {
      if (a) {
        a.destroy();
        a = null;
      }
    });
    (0, n.YP)(() => [e.show, e.placement], v);
    (0, h.Vd)(l, () => {
      if (!!e.closeOnClickOutside && (!e.overlay || !!e.closeOnClickOverlay)) {
        f(false);
      }
    }, {
      eventName: "touchstart"
    });
    return () => {
      var t;
      return (0, n.Wm)(n.HY, null, [(0, n.Wm)("span", {
        ref: l,
        class: N("wrapper"),
        onClick: m
      }, [(t = r.reference) == null ? undefined : t.call(r)]), (0, n.Wm)(T, (0, n.dG)({
        ref: c,
        class: N([e.theme]),
        position: "",
        transition: "van-popover-zoom",
        lockScroll: false,
        onTouchstart: g,
        "onUpdate:show": f
      }, o, (0, d.ei)(e, J)), {
        default: () => [e.showArrow && (0, n.Wm)("div", {
          class: N("arrow")
        }, null), (0, n.Wm)("div", {
          role: "menu",
          class: N("content")
        }, [r.default ? r.default() : e.actions.map(y)])]
      })]);
    };
  }
});
export var Z = (0, o.n)(F);