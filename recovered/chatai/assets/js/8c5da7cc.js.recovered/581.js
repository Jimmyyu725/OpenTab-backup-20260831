var n = require(/*webcrack:missing*/"./7268.js");
var o = require(/*webcrack:missing*/"./9445.js");
const a = {
  class: "hi-form-item mb-[18px]"
};
export const Z = (0, n.aZ)({
  __name: "hi-form-item",
  props: {
    path: null,
    validators: null
  },
  emits: ["on-validate"],
  setup(e, t) {
    let {
      expose: r,
      emit: i
    } = t;
    const c = e;
    const s = (0, n.Rr)();
    const l = (0, n.Fl)(() => {
      var e;
      return ((e = s.default) === null || e === undefined ? undefined : e.call(s)) || [];
    });
    const u = (0, o.iH)();
    r({
      $hiInput: u
    });
    const f = e => {
      i("on-validate", e);
    };
    return (e, t) => {
      (0, n.wg)();
      return (0, n.iD)("div", a, [((0, n.wg)(true), (0, n.iD)(n.HY, null, (0, n.Ko)((0, o.SU)(l), (e, t) => {
        (0, n.wg)();
        return (0, n.j4)((0, n.LL)(e), {
          ref_for: true,
          ref: e => {
            if (e) {
              u.value = e;
            }
          },
          key: t,
          validators: c.validators,
          onOnValidate: f
        }, null, 40, ["validators"]);
      }), 128))]);
    };
  }
});