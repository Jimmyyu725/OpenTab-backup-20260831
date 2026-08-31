var o = require("./9349.js");
var n = require(/*webcrack:missing*/"./7268.js");
var i = require(/*webcrack:missing*/"./9445.js");
var s = require("./9404.js");
var a = require("./3278.js");
var l = require("./7890.js");
var d = require("./907.js");
var c = require(/*webcrack:missing*/"./2244.js");
var u = require("./1476.js");
const [h, p] = (0, s.do)("slider");
const v = {
  min: (0, a.SI)(0),
  max: (0, a.SI)(100),
  step: (0, a.SI)(1),
  range: Boolean,
  reverse: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  vertical: Boolean,
  barHeight: a.Or,
  buttonSize: a.Or,
  activeColor: String,
  inactiveColor: String,
  modelValue: {
    type: [Number, Array],
    default: 0
  }
};
var f = (0, n.aZ)({
  name: h,
  props: v,
  emits: ["change", "drag-end", "drag-start", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: r
  }) {
    let o;
    let s;
    let a;
    const h = (0, i.iH)();
    const v = (0, i.iH)();
    const f = (0, u.o)();
    const m = (0, n.Fl)(() => Number(e.max) - Number(e.min));
    const g = (0, n.Fl)(() => {
      const t = e.vertical ? "width" : "height";
      return {
        background: e.inactiveColor,
        [t]: (0, l.Nn)(e.barHeight)
      };
    });
    const b = t => e.range && Array.isArray(t);
    const y = () => {
      const {
        modelValue: t,
        min: r
      } = e;
      if (b(t)) {
        return (t[1] - t[0]) * 100 / m.value + "%";
      } else {
        return (t - Number(r)) * 100 / m.value + "%";
      }
    };
    const w = (0, n.Fl)(() => {
      const t = {
        [e.vertical ? "height" : "width"]: y(),
        background: e.activeColor
      };
      if (v.value) {
        t.transition = "none";
      }
      t[e.vertical ? e.reverse ? "bottom" : "top" : e.reverse ? "right" : "left"] = (() => {
        const {
          modelValue: t,
          min: r
        } = e;
        if (b(t)) {
          return (t[0] - Number(r)) * 100 / m.value + "%";
        } else {
          return "0%";
        }
      })();
      return t;
    });
    const S = t => {
      const r = +e.min;
      const o = +e.max;
      const n = +e.step;
      t = (0, l.uZ)(t, r, o);
      const i = Math.round((t - r) / n) * n;
      return (0, l.Ft)(r, i);
    };
    const x = (e, t) => JSON.stringify(e) === JSON.stringify(t);
    const L = (r, o) => {
      r = b(r) ? (t => {
        const n = t[0] ?? Number(e.min);
        const i = t[1] ?? Number(e.max);
        if (n > i) {
          return [i, n];
        } else {
          return [n, i];
        }
      })(r).map(S) : S(r);
      if (!x(r, e.modelValue)) {
        t("update:modelValue", r);
      }
      if (o && !x(r, a)) {
        t("change", r);
      }
    };
    const O = t => {
      t.stopPropagation();
      if (e.disabled || e.readonly) {
        return;
      }
      const {
        min: r,
        reverse: o,
        vertical: n,
        modelValue: i
      } = e;
      const s = (0, c.EL)(h);
      const a = n ? s.height : s.width;
      const l = Number(r) + (n ? o ? s.bottom - t.clientY : t.clientY - s.top : o ? s.right - t.clientX : t.clientX - s.left) / a * m.value;
      if (b(i)) {
        const [e, t] = i;
        L(l <= (e + t) / 2 ? [l, t] : [e, l], true);
      } else {
        L(l, true);
      }
    };
    const A = r => {
      if (e.disabled || e.readonly) {
        return;
      }
      if (v.value === "start") {
        t("drag-start", r);
      }
      (0, d.PF)(r, true);
      f.move(r);
      v.value = "dragging";
      const n = (0, c.EL)(h);
      let i = (e.vertical ? f.deltaY.value : f.deltaX.value) / (e.vertical ? n.height : n.width) * m.value;
      if (e.reverse) {
        i = -i;
      }
      if (b(a)) {
        const t = e.reverse ? 1 - o : o;
        s[t] = a[t] + i;
      } else {
        s = a + i;
      }
      L(s);
    };
    const z = r => {
      if (!e.disabled && !e.readonly) {
        if (v.value === "dragging") {
          L(s, true);
          t("drag-end", r);
        }
        v.value = "";
      }
    };
    const E = t => {
      if (typeof t == "number") {
        return p("button-wrapper", ["left", "right"][t]);
      }
      return p("button-wrapper", e.reverse ? "left" : "right");
    };
    const C = (t, o) => {
      if (typeof o == "number") {
        const e = r[o === 0 ? "left-button" : "right-button"];
        if (e) {
          return e({
            value: t
          });
        }
      }
      if (r.button) {
        return r.button({
          value: t
        });
      } else {
        return (0, n.Wm)("div", {
          class: p("button"),
          style: (0, l.Xn)(e.buttonSize)
        }, null);
      }
    };
    const $ = t => {
      const r = typeof t == "number" ? e.modelValue[t] : e.modelValue;
      return (0, n.Wm)("div", {
        role: "slider",
        class: E(t),
        tabindex: e.disabled ? undefined : 0,
        "aria-valuemin": e.min,
        "aria-valuenow": r,
        "aria-valuemax": e.max,
        "aria-disabled": e.disabled || undefined,
        "aria-readonly": e.readonly || undefined,
        "aria-orientation": e.vertical ? "vertical" : "horizontal",
        onTouchstart: r => {
          if (typeof t == "number") {
            o = t;
          }
          (t => {
            if (!e.disabled && !e.readonly) {
              f.start(t);
              s = e.modelValue;
              a = b(s) ? s.map(S) : S(s);
              v.value = "start";
            }
          })(r);
        },
        onTouchmove: A,
        onTouchend: z,
        onTouchcancel: z,
        onClick: d.UW
      }, [C(r, t)]);
    };
    L(e.modelValue);
    (0, c.aM)(() => e.modelValue);
    return () => (0, n.Wm)("div", {
      ref: h,
      style: g.value,
      class: p({
        vertical: e.vertical,
        disabled: e.disabled
      }),
      onClick: O
    }, [(0, n.Wm)("div", {
      class: p("bar"),
      style: w.value
    }, [e.range ? [$(0), $(1)] : $()])]);
  }
});
export var Z = (0, o.n)(f);