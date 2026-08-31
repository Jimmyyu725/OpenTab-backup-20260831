var o = require("./9349.js");
var n = require(/*webcrack:missing*/"./7268.js");
var i = require(/*webcrack:missing*/"./9445.js");
var s = require("./9404.js");
var a = require("./3278.js");
var l = require("./907.js");
var d = require(/*webcrack:missing*/"./2244.js");
var c = require("./3935.js");
const u = Symbol();
var h = require("./361.js");
var p = require("./7890.js");
const [v, f] = (0, s.do)("loading");
const m = Array(12).fill(null).map((e, t) => (0, n.Wm)("i", {
  class: f("line", String(t + 1))
}, null));
const g = (0, n.Wm)("svg", {
  class: f("circular"),
  viewBox: "25 25 50 50"
}, [(0, n.Wm)("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]);
const b = {
  size: a.Or,
  type: (0, a.SQ)("circular"),
  color: String,
  vertical: Boolean,
  textSize: a.Or,
  textColor: String
};
var y = (0, n.aZ)({
  name: v,
  props: b,
  setup(e, {
    slots: t
  }) {
    const r = (0, n.Fl)(() => (0, h.l7)({
      color: e.color
    }, (0, p.Xn)(e.size)));
    const o = () => {
      if (t.default) {
        return (0, n.Wm)("span", {
          class: f("text"),
          style: {
            fontSize: (0, p.Nn)(e.textSize),
            color: e.textColor ?? e.color
          }
        }, [t.default()]);
      }
    };
    return () => {
      const {
        type: t,
        vertical: i
      } = e;
      return (0, n.Wm)("div", {
        class: f([t, {
          vertical: i
        }])
      }, [(0, n.Wm)("span", {
        class: f("spinner", t),
        style: r.value
      }, [t === "spinner" ? m : g]), o()]);
    };
  }
});
const w = (0, o.n)(y);
const [S, x, L] = (0, s.do)("list");
const O = {
  error: Boolean,
  offset: (0, a.SI)(300),
  loading: Boolean,
  finished: Boolean,
  errorText: String,
  direction: (0, a.SQ)("down"),
  loadingText: String,
  finishedText: String,
  immediateCheck: a.J5
};
var A = (0, n.aZ)({
  name: S,
  props: O,
  emits: ["load", "update:error", "update:loading"],
  setup(e, {
    emit: t,
    slots: r
  }) {
    const o = (0, i.iH)(false);
    const s = (0, i.iH)();
    const a = (0, i.iH)();
    const h = (0, n.f3)(u, null);
    const p = (0, d.eo)(s);
    const v = () => {
      (0, n.Y3)(() => {
        if (o.value || e.finished || e.error || (h == null ? undefined : h.value) === false) {
          return;
        }
        const {
          offset: r,
          direction: n
        } = e;
        const i = (0, d.EL)(p);
        if (!i.height || (0, l.xj)(s)) {
          return;
        }
        let c = false;
        const u = (0, d.EL)(a);
        c = n === "up" ? i.top - u.top <= r : u.bottom - i.bottom <= r;
        if (c) {
          o.value = true;
          t("update:loading", true);
          t("load");
        }
      });
    };
    const f = () => {
      if (e.finished) {
        const t = r.finished ? r.finished() : e.finishedText;
        if (t) {
          return (0, n.Wm)("div", {
            class: x("finished-text")
          }, [t]);
        }
      }
    };
    const m = () => {
      t("update:error", false);
      v();
    };
    const g = () => {
      if (e.error) {
        const t = r.error ? r.error() : e.errorText;
        if (t) {
          return (0, n.Wm)("div", {
            role: "button",
            class: x("error-text"),
            tabindex: 0,
            onClick: m
          }, [t]);
        }
      }
    };
    const b = () => {
      if (o.value && !e.finished) {
        return (0, n.Wm)("div", {
          class: x("loading")
        }, [r.loading ? r.loading() : (0, n.Wm)(w, {
          class: x("loading-icon")
        }, {
          default: () => [e.loadingText || L("loading")]
        })]);
      }
    };
    (0, n.YP)(() => [e.loading, e.finished, e.error], v);
    if (h) {
      (0, n.YP)(h, e => {
        if (e) {
          v();
        }
      });
    }
    (0, n.ic)(() => {
      o.value = e.loading;
    });
    (0, n.bv)(() => {
      if (e.immediateCheck) {
        v();
      }
    });
    (0, c.F)({
      check: v
    });
    (0, d.OR)("scroll", v, {
      target: p
    });
    return () => {
      var t;
      const i = (t = r.default) == null ? undefined : t.call(r);
      const l = (0, n.Wm)("div", {
        ref: a,
        class: x("placeholder")
      }, null);
      return (0, n.Wm)("div", {
        ref: s,
        role: "feed",
        class: x(),
        "aria-busy": o.value
      }, [e.direction === "down" ? i : l, b(), f(), g(), e.direction === "up" ? i : l]);
    };
  }
});
export var Z = (0, o.n)(A);