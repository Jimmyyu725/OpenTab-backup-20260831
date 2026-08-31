var o = require("./9349.js");
var n = require(/*webcrack:missing*/"./7268.js");
var i = require("./9404.js");
var s = require("./3278.js");
var a = require("./7890.js");
var l = require("./741.js");
const [d, c] = (0, i.do)("badge");
const u = {
  dot: Boolean,
  max: s.Or,
  tag: (0, s.SQ)("div"),
  color: String,
  offset: Array,
  content: s.Or,
  showZero: s.J5,
  position: (0, s.SQ)("top-right")
};
var h = (0, n.aZ)({
  name: d,
  props: u,
  setup(e, {
    slots: t
  }) {
    const r = () => {
      if (t.content) {
        return true;
      }
      const {
        content: r,
        showZero: o
      } = e;
      return (0, l.Xq)(r) && r !== "" && (o || r !== 0);
    };
    const o = () => {
      const {
        dot: o,
        max: n,
        content: i
      } = e;
      if (!o && r()) {
        if (t.content) {
          return t.content();
        } else if ((0, l.Xq)(n) && (0, l.kE)(i) && +i > n) {
          return `${n}+`;
        } else {
          return i;
        }
      }
    };
    const i = (0, n.Fl)(() => {
      const r = {
        background: e.color
      };
      if (e.offset) {
        const [o, n] = e.offset;
        if (t.default) {
          r.top = (0, a.Nn)(n);
          r.right = typeof o == "number" ? (0, a.Nn)(-o) : o.startsWith("-") ? o.replace("-", "") : `-${o}`;
        } else {
          r.marginTop = (0, a.Nn)(n);
          r.marginLeft = (0, a.Nn)(o);
        }
      }
      return r;
    });
    const s = () => {
      if (r() || e.dot) {
        return (0, n.Wm)("div", {
          class: c([e.position, {
            dot: e.dot,
            fixed: !!t.default
          }]),
          style: i.value
        }, [o()]);
      }
    };
    return () => {
      if (t.default) {
        const {
          tag: r
        } = e;
        return (0, n.Wm)(r, {
          class: c("wrapper")
        }, {
          default: () => [t.default(), s()]
        });
      }
      return s();
    };
  }
});
const p = (0, o.n)(h);
const [v, f] = (0, i.do)("config-provider");
const m = Symbol(v);
const g = {
  tag: (0, s.SQ)("div"),
  themeVars: Object,
  iconPrefix: String
};
(0, n.aZ)({
  name: v,
  props: g,
  setup(e, {
    slots: t
  }) {
    const r = (0, n.Fl)(() => {
      if (e.themeVars) {
        return function (e) {
          const t = {};
          Object.keys(e).forEach(r => {
            t[`--van-${(0, a.GL)(r)}`] = e[r];
          });
          return t;
        }(e.themeVars);
      }
    });
    (0, n.JJ)(m, e);
    return () => (0, n.Wm)(e.tag, {
      class: f(),
      style: r.value
    }, {
      default: () => {
        var e;
        return [(e = t.default) == null ? undefined : e.call(t)];
      }
    });
  }
});
const [b, y] = (0, i.do)("icon");
const w = {
  dot: Boolean,
  tag: (0, s.SQ)("i"),
  name: String,
  size: s.Or,
  badge: s.Or,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var S = (0, n.aZ)({
  name: b,
  props: w,
  setup(e, {
    slots: t
  }) {
    const r = (0, n.f3)(m, null);
    const o = (0, n.Fl)(() => e.classPrefix || (r == null ? undefined : r.iconPrefix) || y());
    return () => {
      const {
        tag: r,
        dot: i,
        name: s,
        size: l,
        badge: d,
        color: c
      } = e;
      const u = (e => e == null ? undefined : e.includes("/"))(s);
      return (0, n.Wm)(p, (0, n.dG)({
        dot: i,
        tag: r,
        class: [o.value, u ? "" : `${o.value}-${s}`],
        style: {
          color: c,
          fontSize: (0, a.Nn)(l)
        },
        content: d
      }, e.badgeProps), {
        default: () => {
          var e;
          return [(e = t.default) == null ? undefined : e.call(t), u && (0, n.Wm)("img", {
            class: y("image"),
            src: s
          }, null)];
        }
      });
    };
  }
});
export const J = (0, o.n)(S);