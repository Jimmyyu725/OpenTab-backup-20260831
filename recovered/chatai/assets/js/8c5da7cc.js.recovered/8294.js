var n = require(/*webcrack:missing*/"./9282.js");
var o = require(/*webcrack:missing*/"./7268.js");
var a = require(/*webcrack:missing*/"./4209.js");
var i = require(/*webcrack:missing*/"./9445.js");
const c = function (e, t, r) {
  if (typeof e != "function") {
    throw new TypeError("Expected a function");
  }
  return setTimeout(function () {
    e.apply(undefined, r);
  }, t);
};
var s = require("./4828.js");
var l = require(/*webcrack:missing*/"./1774.js");
const u = (0, s.Z)(function (e, t, r) {
  return c(e, (0, l.Z)(t) || 0, r);
});
class f {
  static isRegSuccess(e, t) {
    return !t || t.test(e);
  }
  static isValidatorSuccess(e, t) {
    return !t || t(e);
  }
  static isSuccess(e, t) {
    return f.isRegSuccess(e, t.rule) && f.isValidatorSuccess(e, t.validator);
  }
}
const d = {
  class: "hi-input relative flex items-center"
};
const h = {
  class: "relative h-full flex-1"
};
const p = {
  key: 0,
  class: "pointer-events-none absolute left-[10px] top-[12px]"
};
const g = {
  class: "h-full"
};
const y = {
  key: 0,
  class: "h-full flex-shrink-0 p-[2px]"
};
const v = {
  key: 0,
  class: "ml-[12px] flex-shrink-0"
};
export const Z = (0, o.aZ)({
  __name: "hi-input",
  props: {
    value: null,
    tagName: {
      default: "input"
    },
    type: {
      default: "text"
    },
    icon: {
      default: ""
    },
    placeholder: {
      default: ""
    },
    alwaysShowCloseBtn: {
      type: Boolean,
      default: false
    },
    noClearBtn: {
      type: Boolean,
      default: false
    },
    validators: {
      default: undefined
    },
    rawAttrs: {
      default: undefined
    },
    trim: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:value", "on-validate", "focus"],
  setup(e, t) {
    let {
      expose: r,
      emit: c
    } = t;
    const s = e;
    const l = (0, o.Rr)();
    const b = (0, i.iH)();
    const m = (0, o.Fl)(() => s.tagName === "textarea");
    const w = (0, i.iH)(false);
    const _ = (0, i.iH)(s.type);
    const k = () => {
      _.value = _.value === "password" ? "text" : "password";
    };
    let A = 0;
    const E = (0, o.Fl)({
      get: () => s.value,
      set(e) {
        w.value = !!e;
        c("update:value", e);
      }
    });
    const C = () => {
      var e;
      if ((e = b.value) !== null && e !== undefined) {
        e.focus();
      }
      E.value = "";
    };
    const x = e => {
      if (S.value) {
        return;
      }
      let {
        value: t
      } = e.target;
      if (s.trim) {
        t = t.trim();
      }
      E.value = t;
      if (s.validators) {
        L(t, "input");
      }
    };
    const S = (0, i.iH)(false);
    const O = () => {
      S.value = true;
    };
    const B = e => {
      S.value = false;
      x(e);
    };
    const j = () => {
      F.value = false;
      P.value = true;
      if (!s.alwaysShowCloseBtn) {
        if (E.value) {
          clearTimeout(A);
          w.value = true;
        } else {
          w.value = false;
        }
        c("focus");
      }
    };
    const D = () => {
      if (!s.alwaysShowCloseBtn) {
        A = u(() => {
          w.value = false;
        }, 150);
        if (s.validators) {
          L(E.value, "blur");
        }
      }
    };
    const F = (0, i.iH)(false);
    const P = (0, i.iH)(false);
    const M = (0, i.iH)("");
    const T = e => {
      M.value = e;
    };
    const I = function (e = E.value, t = "blur") {
      for (const r of s.validators || []) {
        if (!f.isSuccess(e, r) && (r.trigger === t || !r.trigger)) {
          return r.message;
        }
      }
      return "";
    };
    function L(e = E.value, t = "blur") {
      if (!P.value) {
        F.value = false;
        return;
      }
      const r = I(e, t);
      if (r) {
        T(r);
        F.value = true;
      } else {
        F.value = false;
      }
      c("on-validate", !!r);
    }
    (0, o.YP)(M, e => {
      F.value = !!e;
    });
    r({
      stopValidate: () => {
        P.value = false;
      },
      restartValidate: () => {
        P.value = true;
      },
      setErrorMsg: T,
      getErrorMessage: I,
      checkInputIsError: L,
      getValidatorResult: function (e = E.value) {
        return (s.validators || []).every(t => f.isSuccess(e, t));
      },
      focus: () => {
        var e;
        var t;
        if ((e = b.value) !== null && e !== undefined && (t = e.focus) !== null && t !== undefined) {
          t.call(e);
        }
      }
    });
    return (t, r) => {
      const c = n.Z;
      (0, o.wg)();
      return (0, o.iD)("div", d, [(0, o._)("div", {
        class: (0, a.normalizeClass)(["flex flex-1 items-center overflow-hidden rounded-[8px] border-[1px] border-color-m2 border-opacity-[0.06] bg-color-m2 bg-opacity-[0.06] bg-clip-content duration-150", [(0, i.SU)(m) ? "h-[100px]" : "h-[44px]", {
          "!border-color-red !border-opacity-20 !bg-color-red !bg-opacity-10": F.value
        }]])
      }, [(0, o._)("div", h, [s.icon ? ((0, o.wg)(), (0, o.iD)("div", p, [(0, o._)("i", {
        class: (0, a.normalizeClass)(["iconfont text-[20px] text-color-t3 duration-150", [s.icon, {
          "!text-color-red": F.value
        }]])
      }, null, 2)])) : (0, o.kq)("", true), (0, o._)("div", g, [((0, o.wg)(), (0, o.j4)((0, o.LL)((0, i.SU)(m) ? "textarea" : "input"), (0, o.dG)({
        ref_key: "$input",
        ref: b,
        value: (0, i.SU)(E),
        "onUpdate:value": r[0] ||= e => (0, i.dq)(E) ? E.value = e : null,
        autocomplete: "off",
        type: _.value
      }, s.rawAttrs, {
        class: ["hi-scroll h-full w-full bg-[transparent] pr-[40px] text-color-t2 placeholder-color-t3 duration-150", [(0, i.SU)(m) ? "resize-none py-[12px] " : "", s.icon ? "pl-[40px]" : "pl-[12px]", {
          "!text-color-red placeholder-color-red": F.value
        }]],
        placeholder: e.placeholder,
        onInput: x,
        onFocus: j,
        onBlur: D,
        onCompositionstart: O,
        onCompositionend: B
      }), null, 16, ["value", "type", "class", "placeholder"]))]), s.type === "password" ? ((0, o.wg)(), (0, o.iD)("button", {
        key: 1,
        tabindex: "-1",
        type: "button",
        class: "absolute bottom-0 right-0 h-[42px] w-[40px]",
        onClick: k
      }, [(0, o._)("i", {
        class: (0, a.normalizeClass)(["iconfont text-[20px] text-color-t3 duration-150", [_.value === "password" ? "icon-hide_icon" : "icon-appear_icon", {
          "!text-color-red": F.value
        }]])
      }, null, 2)])) : ((0, o.wg)(), (0, o.j4)(c, {
        key: 2,
        show: !e.noClearBtn && w.value,
        ani: "scale",
        class: "absolute bottom-0 right-0 h-[42px] w-[40px]"
      }, {
        default: (0, o.w5)(() => [(0, o._)("button", {
          tabindex: "-1",
          type: "button",
          class: "h-full w-full",
          onClick: C
        }, [(0, o._)("i", {
          class: (0, a.normalizeClass)(["iconfont icon-clear_merge_icon text-[16px] text-color-t2 duration-150", {
            "!text-color-red": F.value
          }])
        }, null, 2)])]),
        _: 1
      }, 8, ["show"]))]), (0, i.SU)(l)["inner-right"] ? ((0, o.wg)(), (0, o.iD)("div", y, [(0, o.WI)(t.$slots, "inner-right")])) : (0, o.kq)("", true)], 2), (0, i.SU)(l)["outer-right"] ? ((0, o.wg)(), (0, o.iD)("div", v, [(0, o.WI)(t.$slots, "outer-right")])) : (0, o.kq)("", true), (0, o.Wm)(c, {
        show: F.value,
        ani: "scale-y",
        class: "absolute top-full left-0 text-[12px] text-color-red",
        onAfterLeave: r[1] ||= e => T("")
      }, {
        default: (0, o.w5)(() => [(0, o.Uk)((0, a.toDisplayString)(M.value), 1)]),
        _: 1
      }, 8, ["show"])]);
    };
  }
});