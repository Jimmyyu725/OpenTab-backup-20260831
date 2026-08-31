var i = require("./9282.js");
var s = require("./7268.js");
var r = require("./4209.js");
var a = require("./9445.js");
const o = {
  class: "flex items-center justify-center truncate"
};
const u = (0, s.aZ)({
  inheritAttrs: false
});
export const Z = (0, s.aZ)({
  ...u,
  __name: "hi-button",
  props: {
    type: {
      default: "primary"
    },
    size: {
      default: "large"
    },
    textColor: {
      default: ""
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      default: ""
    },
    class: {
      default: ""
    }
  },
  emits: ["click"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const u = e;
    const g = {
      small: "max-w-[100px] py-[5px] px-[16px] text-[14px]",
      medium: "max-w-[120px] py-[8px] px-[18px] text-[15px]",
      large: "w-[120px] h-[36px] px-[20px] text-[16px]",
      block: "w-full h-[44px] text-[18px]"
    };
    const h = (0, s.Fl)(() => `cursor-not-allowed ${u.type === "main" ? "bg-color-m1" : "bg-color-m2 bg-opacity-[0.06]"} !text-color-t4`);
    const c = {
      primary: "bg-color-blue text-color-white hover:bg-[rgb(96,165,250)] active:bg-[rgb(37,99,235)]",
      success: "bg-color-green text-color-white",
      warning: "bg-color-yellow text-color-white",
      risk: "bg-color-orange text-color-white",
      danger: "bg-color-red text-color-white hover:bg-[rgb(255,131,121)] active:bg-[rgb(219,56,72)]",
      main: "bg-color-m1 text-color-t2 hover:text-color-t3 active:text-color-t1",
      opposite: "bg-color-m2 text-color-white"
    };
    const l = {
      primary: "blue",
      success: "green",
      warning: "yellow",
      risk: "orange",
      danger: "red",
      main: "",
      opposite: ""
    };
    const d = (0, s.Fl)(() => u.disabled || u.loading ? h.value : u.plain ? "border-[1px] hover:text-color-white active:bg-[rgb(37,99,235)] " + (l[u.type] ? `border-color-${l[u.type]} hover:bg-color-${l[u.type]} text-color-${l[u.type]}` : "") : "");
    const F = {
      "color-primary": "text-color-blue hover:text-[rgb(96,165,250)] active:text-[rgb(37,99,235)]",
      "color-danger": "text-color-red hover:text-[rgb(255,131,121)] active:text-[rgb(219,56,72)]"
    };
    const f = (0, s.Fl)(() => u.loading);
    const C = (0, s.Fl)(() => f.value ? "icon-loading_small animate-spin" : u.icon || "");
    const p = () => {
      if (!u.disabled && !f.value) {
        n("click");
      }
    };
    return (e, t) => {
      const n = i.Z;
      (0, s.wg)();
      return (0, s.iD)("button", {
        type: "button",
        class: (0, r.normalizeClass)(["hi-button rounded-[8px] duration-150", [u.class, g[u.size], (0, a.SU)(d) || c[u.type] + " " + F[u.textColor]]]),
        onClick: p
      }, [(0, s._)("span", o, [(0, s.Wm)(n, {
        show: !!(0, a.SU)(C),
        class: "mr-[8px] flex-shrink-0"
      }, {
        default: (0, s.w5)(() => [(0, s._)("i", {
          class: (0, r.normalizeClass)(["iconfont text-[18px]", (0, a.SU)(C)])
        }, null, 2)]),
        _: 1
      }, 8, ["show"]), (0, s.WI)(e.$slots, "default")])], 2);
    };
  }
});