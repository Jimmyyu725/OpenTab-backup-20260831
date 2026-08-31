var o = require("./9349.js");
var n = require(/*webcrack:missing*/"./7268.js");
var i = require(/*webcrack:missing*/"./9445.js");
var s = require("./9404.js");
var a = require("./3278.js");
var l = require("./7890.js");
var d = require("./741.js");
var c = require("./361.js");
var u = require("./5216.js");
const [h, p] = (0, s.do)("image");
const v = {
  src: String,
  alt: String,
  fit: String,
  position: String,
  round: Boolean,
  width: a.Or,
  height: a.Or,
  radius: a.Or,
  lazyLoad: Boolean,
  iconSize: a.Or,
  showError: a.J5,
  errorIcon: (0, a.SQ)("photo-fail"),
  iconPrefix: String,
  showLoading: a.J5,
  loadingIcon: (0, a.SQ)("photo")
};
var f = (0, n.aZ)({
  name: h,
  props: v,
  emits: ["load", "error"],
  setup(e, {
    emit: t,
    slots: r
  }) {
    const o = (0, i.iH)(false);
    const s = (0, i.iH)(true);
    const a = (0, i.iH)();
    const {
      $Lazyload: h
    } = (0, n.FN)().proxy;
    const v = (0, n.Fl)(() => {
      const t = {
        width: (0, l.Nn)(e.width),
        height: (0, l.Nn)(e.height)
      };
      if ((0, d.Xq)(e.radius)) {
        t.overflow = "hidden";
        t.borderRadius = (0, l.Nn)(e.radius);
      }
      return t;
    });
    (0, n.YP)(() => e.src, () => {
      o.value = false;
      s.value = true;
    });
    const f = e => {
      s.value = false;
      t("load", e);
    };
    const m = e => {
      o.value = true;
      s.value = false;
      t("error", e);
    };
    const g = (t, r, o) => o ? o() : (0, n.Wm)(u.J, {
      name: t,
      size: e.iconSize,
      class: r,
      classPrefix: e.iconPrefix
    }, null);
    const b = () => {
      if (o.value || !e.src) {
        return;
      }
      const t = {
        alt: e.alt,
        class: p("img"),
        style: {
          objectFit: e.fit,
          objectPosition: e.position
        }
      };
      if (e.lazyLoad) {
        return (0, n.wy)((0, n.Wm)("img", (0, n.dG)({
          ref: a
        }, t), null), [[(0, n.Q2)("lazy"), e.src]]);
      } else {
        return (0, n.Wm)("img", (0, n.dG)({
          src: e.src,
          onLoad: f,
          onError: m
        }, t), null);
      }
    };
    const y = ({
      el: e
    }) => {
      const t = () => {
        if (e === a.value && s.value) {
          f();
        }
      };
      if (a.value) {
        t();
      } else {
        (0, n.Y3)(t);
      }
    };
    const w = ({
      el: e
    }) => {
      if (e === a.value && !o.value) {
        m();
      }
    };
    if (h && c._f) {
      h.$on("loaded", y);
      h.$on("error", w);
      (0, n.Jd)(() => {
        h.$off("loaded", y);
        h.$off("error", w);
      });
    }
    return () => {
      var t;
      return (0, n.Wm)("div", {
        class: p({
          round: e.round
        }),
        style: v.value
      }, [b(), s.value && e.showLoading ? (0, n.Wm)("div", {
        class: p("loading")
      }, [g(e.loadingIcon, p("loading-icon"), r.loading)]) : o.value && e.showError ? (0, n.Wm)("div", {
        class: p("error")
      }, [g(e.errorIcon, p("error-icon"), r.error)]) : undefined, (t = r.default) == null ? undefined : t.call(r)]);
    };
  }
});
export var Z = (0, o.n)(f);