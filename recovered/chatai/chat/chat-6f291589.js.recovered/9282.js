var i = require("./7268.js");
var s = require("./4209.js");
var r = require("./9445.js");
var a = require("./8398.js");
const o = (0, i.aZ)({
  __name: "hi-demand",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    teleport: {
      default: undefined
    },
    class: {
      default: ""
    },
    style: {
      default: undefined
    },
    ani: {
      default: ""
    }
  },
  emits: ["before-enter", "after-leave", "click", "transitionstart", "transitionend"],
  setup(e, t) {
    let {
      expose: n,
      emit: o
    } = t;
    const u = e;
    const g = (0, r.iH)(null);
    const h = (0, r.iH)(false);
    const c = (0, i.Fl)(() => ({
      to: u.teleport,
      disabled: !u.teleport
    }));
    const l = (0, i.YP)(() => u.show, e => {
      if (e) {
        setTimeout(() => {
          if (l) {
            l();
          }
        }, 0);
        h.value = true;
      }
    }, {
      immediate: true
    });
    n({
      getBoundingClientRect: () => g.value ? g.value.getBoundingClientRect() : null
    });
    return (e, t) => {
      (0, i.wg)();
      return (0, i.j4)(i.lR, (0, s.normalizeProps)((0, i.F4)((0, r.SU)(c))), [(0, i.Wm)(a.Transition, {
        name: u.ani,
        "leave-active-class": "leave-class",
        onBeforeEnter: t[3] ||= e => o("before-enter"),
        onAfterLeave: t[4] ||= e => o("after-leave")
      }, {
        default: (0, i.w5)(() => [h.value ? (0, i.wy)(((0, i.wg)(), (0, i.iD)("div", {
          key: 0,
          ref_key: "wrapperRef",
          ref: g,
          class: (0, s.normalizeClass)([u.class, "hi-demand"]),
          style: (0, s.normalizeStyle)(u.style),
          onClick: t[0] ||= e => o("click"),
          onTransitionend: t[1] ||= e => o("transitionend", e),
          onTransitionstart: t[2] ||= e => o("transitionstart", e)
        }, [(0, i.WI)(e.$slots, "default")], 38)), [[a.vShow, u.show]]) : (0, i.kq)("", true)]),
        _: 3
      }, 8, ["name"])], 16);
    };
  }
});
export const Z = (0, require("./6911.js").Z)(o, [["__scopeId", "data-v-7655e2c3"]]);