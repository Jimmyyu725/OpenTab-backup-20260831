var n = require(/*webcrack:missing*/"./9282.js");
var o = require(/*webcrack:missing*/"./7268.js");
var a = require(/*webcrack:missing*/"./4209.js");
export const Z = (0, o.aZ)({
  __name: "hi-mask",
  props: {
    opacity: {
      default: 60
    },
    show: {
      type: Boolean,
      default: true
    },
    zIndex: {
      default: 0
    }
  },
  emits: ["click"],
  setup(e, t) {
    let {
      emit: r
    } = t;
    const i = e;
    return (t, c) => {
      const s = n.Z;
      (0, o.wg)();
      return (0, o.j4)(s, {
        show: i.show,
        ani: "fade",
        class: (0, a.normalizeClass)(["hi-mask absolute left-0 top-0 h-full w-full bg-[#000]", `bg-opacity-${i.opacity}`]),
        style: (0, a.normalizeStyle)(e.zIndex ? {
          zIndex: i.zIndex
        } : undefined),
        onClick: c[0] ||= e => r("click")
      }, {
        default: (0, o.w5)(() => [(0, o.WI)(t.$slots, "default")]),
        _: 3
      }, 8, ["show", "class", "style"]);
    };
  }
});