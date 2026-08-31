var i = require("./8398.js");
var s = require("./5427.js");
var r = require("./7268.js");
var a = require("./4209.js");
var o = require("./9445.js");
var u = require("./3446.js");
const g = {
  class: "text-dot mr-[32px] text-color-t2"
};
const h = (0, r.aZ)({
  __name: "hi-message",
  setup(e, t) {
    let {
      expose: n
    } = t;
    const h = (0, o.iH)(false);
    const c = (0, o.iH)(0);
    const l = {
      message: "",
      type: "warn",
      className: "",
      duration: 4000,
      teleport: "",
      zIndexPlus: 0,
      btnText: "",
      onBtnClick: () => {},
      onClose: () => {}
    };
    const d = (0, o.iH)(l);
    let F = null;
    const f = {
      success: "icon-success_color_icon bg-color-green",
      warn: "icon-warning_color_icon bg-color-orange",
      fail: "icon-a-fail_color_icon2 bg-color-red",
      loading: "icon-loading_small animate-[spin_1.2s_linear_infinite] text-color-m2 text-opacity-20"
    };
    const C = (0, r.Fl)(() => f[d.value.type]);
    (0, r.Ah)(() => {
      E();
    });
    const p = () => {
      E();
      h.value = true;
    };
    const y = () => {
      _();
    };
    const A = () => {
      d.value.onBtnClick();
      setTimeout(() => {
        D();
      }, 0);
    };
    const E = () => {
      if (F) {
        window.clearTimeout(F);
        F = null;
      }
    };
    const _ = () => {
      E();
      h.value = true;
      F = window.setTimeout(() => {
        h.value = false;
        F = null;
      }, d.value.duration);
    };
    const D = () => {
      E();
      h.value = false;
      d.value.onClose();
    };
    n({
      open: (e, t) => {
        if (!h.value) {
          c.value = (0, u.K)() + (t.zIndexPlus ?? 0);
        }
        d.value = {
          ...l,
          type: e,
          ...t
        };
        _();
      },
      close: D
    });
    return (e, t) => {
      const n = s.Z;
      (0, r.wg)();
      return (0, r.j4)(r.lR, {
        to: d.value.teleport || undefined,
        disabled: !d.value.teleport
      }, [(0, r.Wm)(i.Transition, {
        name: "top"
      }, {
        default: (0, r.w5)(() => [(0, r.wy)((0, r._)("section", {
          class: (0, a.normalizeClass)([d.value.className, "hi-message fixed top-[5%] left-[50%] flex h-[44px] max-w-[90%] -translate-x-1/2 items-center rounded-[8px] bg-color-b3 pr-[8px] pl-[12px] dark:bg-color-b5"]),
          style: (0, a.normalizeStyle)({
            zIndex: c.value
          }),
          onMouseenter: p,
          onMouseleave: y
        }, [(0, r._)("i", {
          class: (0, a.normalizeClass)([(0, o.SU)(C), "iconfont mr-[12px] rounded-[50%] text-[24px] text-color-white"])
        }, null, 2), (0, r._)("span", g, (0, a.toDisplayString)(d.value.message), 1), d.value.btnText ? ((0, r.wg)(), (0, r.j4)(n, {
          key: 0,
          class: "h-[28px] w-auto rounded-[4px] px-[12px]",
          onClick: A
        }, {
          default: (0, r.w5)(() => [(0, r.Uk)((0, a.toDisplayString)(d.value.btnText), 1)]),
          _: 1
        })) : (0, r.kq)("", true)], 38), [[i.vShow, h.value]])]),
        _: 1
      })], 8, ["to", "disabled"]);
    };
  }
});
const c = (0, require("./6911.js").Z)(h, [["__scopeId", "data-v-8f4156ba"]]);
var l = require("./5008.js");
var d = require("./1475.js");
export const R = new class {
  mounted = false;
  mount() {
    if (!this.mounted) {
      this.app = (0, i.createApp)(c);
      (0, l.f)(this.app);
      this.container = (0, d.em)("hi-message-root");
      this.instance = this.app.mount(this.container);
      this.mounted = true;
    }
  }
  warn(e) {
    this.mount();
    this.instance.open("warn", e);
  }
  success(e) {
    this.mount();
    this.instance.open("success", e);
  }
  fail(e) {
    this.mount();
    this.instance.open("fail", e);
  }
  loading(e) {
    this.mount();
    this.instance.open("loading", e);
  }
  hide() {
    if (this.instance) {
      this.instance.close();
    }
  }
  destroy() {
    if (this.mounted) {
      this.app.unmount();
      this.mounted = false;
      document.body.removeChild(this.container);
    }
  }
}();