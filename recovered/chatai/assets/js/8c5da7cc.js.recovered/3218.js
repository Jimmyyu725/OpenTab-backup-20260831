var n = require(/*webcrack:missing*/"./5427.js");
var o = require(/*webcrack:missing*/"./7268.js");
var a = require(/*webcrack:missing*/"./4209.js");
var i = require(/*webcrack:missing*/"./9445.js");
var c = require(/*webcrack:missing*/"./8398.js");
const s = {
  class: "hi-form flex h-full flex-col"
};
const l = {
  class: "hi-scroll h-full"
};
const u = {
  class: "item-center flex flex-shrink-0 justify-between"
};
export const Z = (0, o.aZ)({
  __name: "hi-form",
  props: {
    model: null,
    rules: {
      default: undefined
    },
    submitBtnAttrs: {
      default: undefined
    },
    contentClass: {
      default: ""
    }
  },
  setup(e) {
    const r = e;
    const {
      appContext: f
    } = (0, o.FN)();
    const d = f.config.globalProperties.getSlots();
    const h = (0, i.iH)([]);
    const p = (0, i.iH)(r.submitBtnAttrs?.type || "primary");
    const g = (0, i.iH)(true);
    const y = (0, i.iH)(false);
    const v = async e => {
      await (0, o.Y3)();
      g.value = !!e || !h.value.every(e => {
        var t;
        return e == null || !e.$hiInput || e != null && (t = e.$hiInput) !== null && t !== undefined && !!t.getValidatorResult();
      });
    };
    (0, o.bv)(() => {
      v(false);
    });
    const b = () => {
      var e;
      var t;
      h.value.some(e => {
        var t;
        return (t = e.$hiInput) !== null && t !== undefined && !!t.checkInputIsError();
      });
      if (!g.value) {
        y.value = true;
        if ((e = r.submitBtnAttrs) !== null && e !== undefined && (t = e.handler) !== null && t !== undefined) {
          t.call(e).finally(() => {
            y.value = false;
          });
        }
      }
    };
    return (t, f) => {
      const m = n.Z;
      (0, o.wg)();
      return (0, o.iD)("div", s, [(0, o._)("div", {
        class: (0, a.normalizeClass)([r.contentClass, "overflow-hidden pb-[25px]"])
      }, [(0, o._)("div", l, [((0, o.wg)(true), (0, o.iD)(o.HY, null, (0, o.Ko)((0, i.SU)(d), (e, t) => {
        (0, o.wg)();
        return (0, o.j4)((0, o.LL)(e), {
          key: e.props.path,
          ref_for: true,
          ref: e => {
            if (e) {
              h.value[t] = e;
            }
          },
          validators: r.rules?.[e.props.path],
          onOnValidate: v,
          onKeypress: (0, c.withKeys)(b, ["enter"])
        }, null, 40, ["validators", "onKeypress"]);
      }), 128)), (0, o.WI)(t.$slots, "form-after")])], 2), (0, o._)("div", u, [(0, o.WI)(t.$slots, "form-btn"), (0, o.Wm)(m, (0, o.dG)(e.submitBtnAttrs, {
        type: p.value,
        disabled: g.value,
        loading: y.value,
        onClick: b
      }), {
        default: (0, o.w5)(() => {
          return [(0, o.Uk)((0, a.toDisplayString)(r.submitBtnAttrs?.text || t.i18n("提交")), 1)];
        }),
        _: 1
      }, 16, ["type", "disabled", "loading"])])]);
    };
  }
});