var n = require(/*webcrack:missing*/"./9282.js");
var o = require("./5395.js");
var a = require(/*webcrack:missing*/"./7268.js");
var i = require(/*webcrack:missing*/"./9445.js");
var c = require(/*webcrack:missing*/"./4209.js");
var s = require(/*webcrack:missing*/"./3446.js");
const l = (0, a.aZ)({
  __name: "hi-popup",
  props: {
    show: {
      type: Boolean
    },
    ani: {
      default: "scale"
    },
    closeble: {
      type: Boolean,
      default: true
    },
    keepAlive: {
      type: Boolean,
      default: false
    },
    maskOpacity: {
      default: 60
    }
  },
  emits: ["update:show", "click"],
  setup(e, t) {
    let {
      emit: r
    } = t;
    const l = e;
    const u = (0, a.Fl)({
      get: () => l.show,
      set(e) {
        r("update:show", e);
      }
    });
    const f = (0, i.iH)(0);
    const d = (0, i.iH)(0);
    const h = (0, i.iH)(true);
    (0, a.YP)(u, e => {
      if (e) {
        f.value = (0, s.K)();
        d.value = (0, s.K)();
      }
    });
    (0, a.JJ)("changeShow", e => {
      u.value = e;
    });
    const p = () => {
      if (l.closeble) {
        u.value = false;
      }
    };
    return (t, s) => {
      const g = o.Z;
      const y = n.Z;
      (0, a.wg)();
      return (0, a.iD)(a.HY, null, [((0, a.wg)(), (0, a.j4)(a.lR, {
        to: "body"
      }, [(0, a.Wm)(g, {
        show: (0, i.SU)(u),
        opacity: l.maskOpacity,
        "z-index": f.value,
        onClick: p
      }, null, 8, ["show", "opacity", "z-index"])])), (0, a.Wm)(y, {
        show: (0, i.SU)(u),
        ani: e.ani,
        teleport: "body",
        class: (0, c.normalizeClass)(["hi-popup absolute", t.$attrs.class]),
        style: (0, c.normalizeStyle)({
          zIndex: d.value
        }),
        onBeforeEnter: s[0] ||= e => h.value = true,
        onAfterLeave: s[1] ||= e => h.value = false,
        onClick: s[2] ||= e => r("click")
      }, {
        default: (0, a.w5)(() => [e.keepAlive || h.value ? (0, a.WI)(t.$slots, "default", {
          key: 0
        }) : (0, a.kq)("", true)]),
        _: 3
      }, 8, ["show", "ani", "class", "style"])], 64);
    };
  }
});
var u = require(/*webcrack:missing*/"./1585.js");
const f = {};
const d = e => {
  if (f[e]) {
    delete f[e];
  }
};
window.addEventListener("resize", () => {
  Object.values(f).forEach(e => {
    e(window.innerWidth, window.innerHeight);
  });
});
var h = require(/*webcrack:missing*/"./9857.js");
const p = function (e, t) {
  var r;
  if (typeof t != "function") {
    throw new TypeError("Expected a function");
  }
  e = (0, h.Z)(e);
  return function () {
    if (--e > 0) {
      r = t.apply(this, arguments);
    }
    if (e <= 1) {
      t = undefined;
    }
    return r;
  };
};
const g = function (e) {
  return p(2, e);
};
var y = require(/*webcrack:missing*/"./6223.js");
var v = 0;
const b = function (e) {
  var t = ++v;
  return (0, y.Z)(e) + t;
};
const m = (0, a.aZ)({
  inheritAttrs: false
});
export const Z = (0, a.aZ)({
  ...m,
  __name: "hi-dialog",
  props: {
    show: {
      type: Boolean
    },
    fullScreen: {
      type: Boolean
    },
    width: {
      default: 300
    },
    height: {
      default: 0
    },
    closeble: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:show"],
  setup(e, t) {
    let {
      emit: r
    } = t;
    const n = e;
    const o = (0, a.Fl)({
      get: () => n.show,
      set(e) {
        r("update:show", e);
      }
    });
    const s = (0, i.iH)("default");
    const h = (0, i.iH)();
    const p = (0, a.Fl)(() => s.value === "fullScreen");
    let y;
    const v = g(() => {
      y = h.value?.offsetHeight || 0;
    });
    const m = g(function (e, t, r = false) {
      (0, a.Ah)(() => {
        d(e);
      });
      return () => {
        if (r) {
          t(window.innerWidth, window.innerHeight);
        }
        f[e] = t;
      };
    }(b("hi-dialog"), (e, t) => {
      v();
      if (n.fullScreen && e < u.qf) {
        s.value = "fullScreen";
      } else {
        s.value = y > t ? "fullHeight" : "default";
      }
    }, true));
    (0, a.YP)(o, e => {
      if (e) {
        (0, a.Y3)(m);
      }
    });
    return (e, t) => {
      const r = l;
      (0, a.wg)();
      return (0, a.j4)(r, {
        show: (0, i.SU)(o),
        "onUpdate:show": t[0] ||= e => (0, i.dq)(o) ? o.value = e : null,
        closeble: n.closeble,
        ani: (0, i.SU)(p) ? "slide-right" : "dialog-scale",
        class: "hi-dialog pointer-events-none inset-0 flex items-center"
      }, {
        default: (0, a.w5)(() => [(0, a._)("div", {
          class: (0, c.normalizeClass)(["w-full flex-1", [{
            "px-[20px]": !(0, i.SU)(p)
          }, {
            "max-h-[calc(100vh-40px)]": s.value === "default"
          }]]),
          style: (0, c.normalizeStyle)({
            height: s.value === "default" ? n.height ? n.height + "px" : "auto" : "100%"
          })
        }, [(0, a._)("div", {
          ref_key: "$dialogMain",
          ref: h,
          class: (0, c.normalizeClass)(["pointer-events-auto relative mx-auto h-full overflow-hidden bg-color-b3 shadow-dialog dark:bg-color-b5", [{
            "rounded-[12px]": !(0, i.SU)(p)
          }, e.$attrs.class]]),
          style: (0, c.normalizeStyle)((0, i.SU)(p) ? {} : {
            maxWidth: n.width + "px"
          })
        }, [(0, a.WI)(e.$slots, "default")], 6)], 6)]),
        _: 3
      }, 8, ["show", "closeble", "ani"]);
    };
  }
});