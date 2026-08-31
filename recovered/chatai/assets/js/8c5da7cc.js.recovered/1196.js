import * as n from /*webcrack:missing*/"./8398.js";
import * as o from /*webcrack:missing*/"./7268.js";
import * as a from /*webcrack:missing*/"./9445.js";
import * as i from "./5676.js";
import * as c from /*webcrack:missing*/"./1785.js";
import * as s from "./8514.js";
import * as l from /*webcrack:missing*/"./661.js";
var u = l;
import * as f from "./3844.js";
import * as d from /*webcrack:missing*/"./4003.js";
import * as h from "./5029.js";
import * as p from /*webcrack:missing*/"./3131.js";
const g = {
  class: "hi-changes relative h-full"
};
const y = (0, o.aZ)({
  __name: "hi-changes",
  props: {
    variable: null
  },
  setup(e) {
    const t = e;
    const {
      appContext: r
    } = (0, o.FN)();
    const n = r.config.globalProperties.getSlots();
    return (e, r) => {
      (0, o.wg)();
      return (0, o.iD)("div", g, [((0, o.wg)(true), (0, o.iD)(o.HY, null, (0, o.Ko)((0, a.SU)(n), (r, n) => {
        (0, o.wg)();
        return (0, o.j4)((0, o.LL)(r), {
          key: n,
          show: e.isFn(r.props.value) ? r.props.value(t.variable) : t.variable === r.props.value
        }, null, 8, ["show"]);
      }), 128))]);
    };
  }
});
const v = y;
import * as b from /*webcrack:missing*/"./9282.js";
import * as m from /*webcrack:missing*/"./4209.js";
const w = (0, o.aZ)({
  inheritAttrs: false
});
const _ = (0, o.aZ)({
  ...w,
  __name: "hi-change",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Boolean, Number, Function]
    },
    style: {
      default: undefined
    },
    class: {
      default: null
    }
  },
  setup(e) {
    const t = e;
    return (r, n) => {
      const a = b.Z;
      (0, o.wg)();
      return (0, o.j4)(a, {
        show: e.show,
        class: (0, m.normalizeClass)(["hi-change h-full w-full", t.class]),
        ani: "fade-in-right",
        style: (0, m.normalizeStyle)(t.style)
      }, {
        default: (0, o.w5)(() => [(0, o.WI)(r.$slots, "default")]),
        _: 3
      }, 8, ["show", "class", "style"]);
    };
  }
});
import * as k from /*webcrack:missing*/"./5427.js";
import * as A from "./3218.js";
import * as E from "./581.js";
import * as C from "./8294.js";
import * as x from "./4472.js";
const S = d.AN ? "pay-card" : "card";
import * as O from "./7437.js";
import * as B from "./3002.js";
const j = e => {
  (0, o.dD)("data-v-782c9a14");
  e = e();
  (0, o.Cn)();
  return e;
};
const D = {
  class: "pointer-events-none absolute left-0 bottom-0 flex h-[74%] w-full flex-col"
};
const F = j(() => (0, o._)("div", {
  class: "flex-1 bg-color-b4"
}, null, -1));
const P = {
  class: "relative flex h-full flex-col"
};
const M = {
  key: 0,
  class: "font-ali-75 text-[32px] text-color-blue"
};
const T = ["src"];
const I = {
  key: 1,
  class: "relative mb-[54px] pt-[44px] font-ali-75 text-[20px] leading-none text-color-t2"
};
const L = [j(() => (0, o._)("i", {
  class: "iconfont icon-return_icon h-full text-[20px] text-color-t2"
}, null, -1))];
const Z = {
  key: 2,
  type: "button",
  class: "relative mt-[20px] inline-block cursor-auto font-ali-75 text-[20px] text-color-t2"
};
const U = [j(() => (0, o._)("i", {
  class: "iconfont icon-return_icon h-full text-[20px] text-color-t2"
}, null, -1))];
const R = {
  class: "flex-1 overflow-hidden"
};
const z = {
  class: "flex h-full flex-col"
};
const H = {
  class: "h-full max-h-[226px]"
};
const N = {
  class: "mt-[32px] flex-shrink-0"
};
const W = j(() => (0, o._)("i", {
  class: "iconfont icon-icon_left"
}, null, -1));
const $ = (0, o.aZ)({
  __name: "user-common",
  props: {
    isBack: {
      type: Boolean,
      default: false
    }
  },
  emits: ["back-login"],
  setup(e, t) {
    let {
      emit: r
    } = t;
    const n = e;
    const c = (0, o.Fl)(() => ({
      "mask-image": `url(${O})`
    }));
    const s = () => {
      l.userDialogType = "login";
      r("back-login");
    };
    const l = (0, i.useUserStore)();
    const u = (0, o.Fl)(() => S === "pay-card");
    return (e, t) => {
      (0, o.wg)();
      return (0, o.iD)("div", {
        class: (0, m.normalizeClass)([[{
          "px-[50px] py-[33px]": !(0, a.SU)(u)
        }, (0, a.SU)(u) ? "h-full" : "h-[551px]"], "user-common relative"])
      }, [(0, o._)("div", D, [(0, o._)("div", {
        class: "wave-img h-[25px] flex-shrink-0 bg-color-b4",
        style: (0, m.normalizeStyle)((0, a.SU)(c))
      }, null, 4), F]), (0, o._)("div", P, [(0, o._)("div", {
        class: (0, m.normalizeClass)([[{
          "mb-[96px]": !(0, a.SU)(u)
        }], "flex-shrink-0 text-center"])
      }, [(0, a.SU)(u) ? (0, o.kq)("", true) : ((0, o.wg)(), (0, o.iD)("div", M, [(0, o._)("img", {
        class: "mx-auto h-[41px] w-[156px]",
        src: (0, a.SU)(B),
        alt: ""
      }, null, 8, T)])), (0, a.SU)(u) ? ((0, o.wg)(), (0, o.iD)("div", I, [n.isBack ? ((0, o.wg)(), (0, o.iD)("div", {
        key: 0,
        class: "absolute left-0 top-0 cursor-pointer",
        onClick: s
      }, L)) : (0, o.kq)("", true), (0, o.WI)(e.$slots, "title")])) : ((0, o.wg)(), (0, o.iD)("button", Z, [n.isBack ? ((0, o.wg)(), (0, o.iD)("div", {
        key: 0,
        class: "absolute left-[-40px] top-[5px] cursor-pointer",
        onClick: s
      }, U)) : (0, o.kq)("", true), (0, o.WI)(e.$slots, "title")]))], 2), (0, o._)("div", R, [(0, o._)("div", z, [(0, o._)("div", H, [(0, o.WI)(e.$slots, "default")])])]), (0, o._)("div", N, [(0, o.WI)(e.$slots, "footer", {}, () => [(0, o._)("button", {
        type: "button",
        class: "mx-auto flex items-center text-[14px] text-color-t3",
        onClick: s
      }, [W, (0, o.Uk)(" " + (0, m.toDisplayString)(e.i18n("回到登录")), 1)])])])])], 2);
    };
  }
});
import * as q from /*webcrack:missing*/"./6911.js";
const Y = (0, q.Z)($, [["__scopeId", "data-v-782c9a14"]]);
i18n("用户名不能为空");
const Q = [{
  rule: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: i18n("请输入正确的邮箱格式"),
  trigger: "blur"
}];
const V = [{
  validator: e => e.trim() !== "",
  message: i18n("密码不能为空"),
  trigger: "blur"
}, {
  validator: e => e.trim().length >= 6,
  message: i18n("密码不能少于6位"),
  trigger: "blur"
}];
import * as G from "./8793.js";
import * as K from "./4118.js";
var J = K;
import * as X from /*webcrack:missing*/"./5981.js";
import * as ee from "./5762.js";
const te = {
  class: "flex h-full flex-col"
};
const re = ["onClick"];
const ne = {
  class: "flex w-[calc(100%-32px)] items-center"
};
const oe = {
  class: "text-dot h-[20px] font-ali-55 leading-[20px] text-color-t3 group-hover:text-color-t1"
};
const ae = {
  key: 0,
  class: "ml-[8px] h-[16px] w-[52px] shrink-0",
  src: x,
  alt: ""
};
const ie = ["onClick"];
const ce = [(e => {
  (0, o.dD)("data-v-1a7e4860");
  e = e();
  (0, o.Cn)();
  return e;
})(() => (0, o._)("i", {
  class: "iconfont icon-clear_merge_icon text-[16px] text-color-t2 duration-150"
}, null, -1))];
const se = {
  class: "flex items-center justify-between"
};
const le = {
  class: "text-[14px] text-color-t3"
};
const ue = (0, o.aZ)({
  __name: "login",
  setup(e) {
    const t = (0, a.qj)({
      email: {
        value: "",
        props: {
          placeholder: i18n("邮箱")
        }
      },
      password: {
        value: "",
        props: {
          type: "password",
          placeholder: i18n("密码")
        }
      }
    });
    const r = {
      email: Q,
      password: V
    };
    const c = (0, a.iH)();
    const s = (0, i.useUserStore)();
    const {
      userDialogType: l
    } = (0, p.Jk)(s);
    const u = d.AN ? () => {} : (0, o.f3)("changeShow");
    const f = {
      text: i18n("登录"),
      size: "block",
      async handler() {
        const [e, r] = await (0, G.x4)({
          email: t.email.value,
          password: J(t.password.value)
        });
        var n;
        if (e) {
          if ((n = c.value) !== null && n !== undefined) {
            n.setErrorMsg(e);
          }
        } else {
          X.R.success({
            message: i18n("登录成功")
          });
          s.setLoginSuccess(r);
          u(false);
        }
      }
    };
    const h = (0, a.iH)();
    const g = (0, a.iH)();
    const y = (0, a.iH)(false);
    const v = (0, a.iH)(false);
    const b = (0, a.iH)([]);
    const w = (0, o.Fl)(() => b.value.filter(e => e.email !== t.email.value && e.email.includes(t.email.value)));
    const _ = (0, o.Fl)(() => y.value || v.value);
    const x = () => {
      (0, o.Y3)(() => {
        h.value.checkInputIsError();
      });
    };
    const S = () => {
      y.value = true;
      h.value.stopValidate();
    };
    (0, o.bv)(() => {
      b.value = s.getUserHistory();
      t.email.value = b.value[0]?.email || "";
      (0, ee.i9H)(h.value, () => {
        y.value = false;
        x();
      });
      window.addEventListener("keydown", e => {
        if (e.key === "Tab") {
          if (window.document.activeElement?.tagName === "INPUT") {
            y.value = false;
            v.value = false;
            x();
          }
        }
      });
      if (b.value.length > 0) {
        O();
      }
    });
    const O = async () => {
      const e = await s.refreshUserHistory();
      if (e.length > 0) {
        b.value = e;
      }
    };
    (0, o.YP)(_, e => {
      if (e) {
        (0, o.Y3)(() => {
          (0, ee.i9H)(g.value, () => {
            v.value = false;
            x();
          });
        });
      }
      if (h.value) {
        if (e) {
          v.value = true;
          h.value.stopValidate();
        } else {
          (0, o.Y3)(() => {
            h.value.restartValidate();
          });
        }
      }
    });
    return (e, i) => {
      const u = C.Z;
      const p = E.Z;
      const y = A.Z;
      const O = k.Z;
      (0, o.wg)();
      return (0, o.j4)(Y, {
        id: "login"
      }, {
        title: (0, o.w5)(() => [(0, o.Uk)((0, m.toDisplayString)(e.i18n("欢迎使用您的账户")), 1)]),
        default: (0, o.w5)(() => [(0, o._)("div", te, [(0, o.Wm)(y, {
          model: t,
          rules: r,
          class: "flex-1 overflow-hidden",
          "is-scroll": false,
          "submit-btn-attrs": f
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(p, {
            path: "email"
          }, {
            default: (0, o.w5)(() => [(0, o.Wm)(u, (0, o.dG)({
              ref_key: "$inputEmail",
              ref: h,
              value: t.email.value,
              "onUpdate:value": i[0] ||= e => t.email.value = e
            }, t.email.props, {
              trim: true,
              onFocus: S
            }), null, 16, ["value"])]),
            _: 1
          }), (0, o.wy)((0, o._)("div", {
            ref_key: "$historyCard",
            ref: g,
            class: "history-users-card absolute z-20 mt-[-14px] max-h-[152px] w-full rounded-[8px] border border-color-m2 border-opacity-[0.08] bg-color-b3 p-[4px]"
          }, [((0, o.wg)(true), (0, o.iD)(o.HY, null, (0, o.Ko)((0, a.SU)(w), e => {
            (0, o.wg)();
            return (0, o.iD)("section", {
              key: e.email,
              class: "history-user-item group flex h-[36px] items-center justify-between rounded-[4px] px-[8px] hover:bg-color-white dark:hover:bg-opacity-20",
              onClick: (0, n.withModifiers)(r => {
                n = e.email;
                t.email.value = n;
                v.value = false;
                x();
                return;
                var n;
              }, ["stop"])
            }, [(0, o._)("div", ne, [(0, o._)("span", oe, (0, m.toDisplayString)(e.email), 1), e.aiPro ? ((0, o.wg)(), (0, o.iD)("img", ae)) : (0, o.kq)("", true)]), (0, o._)("button", {
              tabindex: "-1",
              type: "button",
              class: "hidden p-[2px] group-hover:block",
              onClick: (0, n.withModifiers)(t => {
                r = e.email;
                s.removeUserHistory(r);
                b.value = s.getUserHistory();
                h.value.focus();
                return;
                var r;
              }, ["stop"])
            }, ce, 8, ie)], 8, re);
          }), 128))], 512), [[n.vShow, (0, a.SU)(_) && (0, a.SU)(w).length > 0]]), (0, o.Wm)(p, {
            path: "password"
          }, {
            default: (0, o.w5)(() => [(0, o.Wm)(u, (0, o.dG)({
              ref_key: "$passwordInput",
              ref: c,
              value: t.password.value,
              "onUpdate:value": i[1] ||= e => t.password.value = e
            }, t.password.props), null, 16, ["value"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"]), (0, o._)("button", {
          type: "button",
          class: "mt-[12px] flex-shrink-0 font-ali-55 text-[14px] text-color-t3",
          onClick: i[2] ||= e => l.value = "find_password"
        }, (0, m.toDisplayString)(e.i18n("忘记密码？")), 1)])]),
        footer: (0, o.w5)(() => [(0, o.wy)((0, o._)("div", se, [(0, o._)("span", le, (0, m.toDisplayString)(e.i18n("还没账号？")), 1), (0, o.Wm)(O, {
          size: "small",
          plain: "",
          onClick: i[3] ||= e => l.value = "register"
        }, {
          default: (0, o.w5)(() => [(0, o.Uk)((0, m.toDisplayString)(e.i18n("马上注册")), 1)]),
          _: 1
        })], 512), [[n.vShow, !(0, a.SU)(d.PA)]])]),
        _: 1
      });
    };
  }
});
const fe = (0, q.Z)(ue, [["__scopeId", "data-v-1a7e4860"]]);
const de = ["innerHTML"];
const he = ["src"];
const pe = (0, o.aZ)({
  __name: "send-verify-code",
  props: {
    email: null,
    type: null
  },
  emits: ["update:email", "success"],
  setup(e, t) {
    let {
      expose: r,
      emit: n
    } = t;
    const i = e;
    const c = (0, a.Fl)({
      get: () => i.email,
      set(e) {
        n("update:email", e);
      }
    });
    const s = (0, a.iH)(Date.now());
    const l = (0, a.iH)();
    let u = "";
    const f = (0, a.Fl)(() => `${d.H}verify/image?i-branch=zh&type=${i.type}&t=${s.value}`);
    const h = async () => {
      const [e, t] = await (0, G.Jd)();
      if (!e) {
        l.value = t.svg;
        u = t.token;
      }
    };
    (0, o.bv)(() => {
      if (d.s$) {
        h();
      }
    });
    const p = async () => {
      var e;
      s.value = Date.now();
      if ((e = v.value) !== null && e !== undefined) {
        e.stopValidate();
      }
      g.verifyCode.value = "";
      if (d.s$) {
        h();
      }
    };
    const g = (0, a.qj)({
      email: {
        value: "",
        props: {
          placeholder: i18n("邮箱")
        }
      },
      verifyCode: {
        value: "",
        props: {
          placeholder: i18n("图片验证码"),
          rawAttrs: {
            maxlength: 4
          }
        }
      }
    });
    const y = {
      email: Q,
      verifyCode: [{
        validator: e => e.trim() !== "",
        message: i18n("验证码不能为空"),
        trigger: "blur"
      }]
    };
    const v = (0, a.iH)();
    const b = {
      text: i18n("发送"),
      size: "block",
      async handler() {
        let e;
        e = d.s$ ? await (0, G.Zd)({
          email: c.value,
          type: i.type,
          imgCode: g.verifyCode.value,
          token: u
        }) : await (0, G.Cz)({
          email: c.value,
          type: i.type,
          imgCode: g.verifyCode.value
        });
        const [t] = e;
        var r;
        if (t) {
          if ((r = v.value) !== null && r !== undefined) {
            r.setErrorMsg(t);
          }
        } else {
          n("success");
        }
      }
    };
    r({
      handleChangeVerifyCode: p
    });
    return (e, t) => {
      const r = C.Z;
      const n = E.Z;
      const i = A.Z;
      (0, o.wg)();
      return (0, o.j4)(Y, {
        class: "send-verify-code"
      }, {
        title: (0, o.w5)(() => [(0, o.WI)(e.$slots, "title")]),
        default: (0, o.w5)(() => [(0, o.Wm)(i, {
          model: g,
          rules: y,
          "submit-btn-attrs": b
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(n, {
            path: "email"
          }, {
            default: (0, o.w5)(() => [(0, o.Wm)(r, (0, o.dG)({
              value: (0, a.SU)(c),
              "onUpdate:value": t[0] ||= e => (0, a.dq)(c) ? c.value = e : null,
              trim: true
            }, g.email.props), null, 16, ["value"])]),
            _: 1
          }), (0, o.Wm)(n, {
            path: "verifyCode"
          }, {
            default: (0, o.w5)(() => [(0, o.Wm)(r, (0, o.dG)({
              ref_key: "$verifyCodeInput",
              ref: v
            }, g.verifyCode.props, {
              value: g.verifyCode.value,
              "onUpdate:value": t[1] ||= e => g.verifyCode.value = e
            }), {
              "outer-right": (0, o.w5)(() => [(0, o._)("div", {
                class: "h-[44px] w-[100px] cursor-pointer rounded-[8px] bg-color-m2 bg-opacity-10 dark:bg-opacity-20",
                onClick: p
              }, [(0, a.SU)(d.s$) ? ((0, o.wg)(), (0, o.iD)("div", {
                key: 0,
                class: "svg-box h-full w-full invert-[1]",
                innerHTML: l.value
              }, null, 8, de)) : ((0, o.wg)(), (0, o.iD)("img", {
                key: 1,
                src: (0, a.SU)(f),
                class: "h-full invert-[1]"
              }, null, 8, he))])]),
              _: 1
            }, 16, ["value"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]),
        _: 3
      });
    };
  }
});
const ge = {
  class: "block text-center font-ali-55 text-[14px] text-color-t3"
};
const ye = {
  class: "relative mt-[20px] flex flex-col justify-center"
};
const ve = ["placeholder"];
const be = (0, o.aZ)({
  __name: "verify-code-input",
  props: {
    verifyCode: null,
    showVerify: null,
    email: null,
    type: null
  },
  emits: ["update:verifyCode", "success", "back", "back-login"],
  setup(e, t) {
    let {
      emit: r
    } = t;
    const i = e;
    const c = (0, a.iH)();
    (0, o.bv)(() => {
      var e;
      if ((e = c.value) !== null && e !== undefined) {
        e.focus();
      }
    });
    (0, o.YP)(() => i.showVerify, () => {
      setTimeout(() => {
        var e;
        if ((e = c.value) === null || e === undefined) {
          return undefined;
        } else {
          return e.focus();
        }
      });
    });
    const s = (0, a.iH)("");
    const l = (0, a.iH)("");
    const u = async e => {
      var t;
      var n;
      const o = (t = e.clipboardData) === null || t === undefined || (n = t.getData) === null || n === undefined ? undefined : n.call(t, "text");
      if (o) {
        if (o.trim().length === 6) {
          const [e] = await (0, G.lm)({
            email: i.email,
            type: i.type,
            emailCode: s.value
          });
          if (e && e.includes("AbortError")) {
            return;
          }
          if (e) {
            l.value = e;
            return;
          }
          l.value = "";
          r("update:verifyCode", s.value);
          r("success");
        }
      }
      e.preventDefault();
    };
    const f = async () => {
      if (s.value.length === 6) {
        const [e] = await (0, G.lm)({
          email: i.email,
          type: i.type,
          emailCode: s.value
        });
        if (e) {
          l.value = e;
          return;
        }
        l.value = "";
        r("update:verifyCode", s.value);
        r("success");
      }
    };
    const d = () => {
      r("back");
    };
    const h = () => {
      r("back-login");
    };
    return (e, t) => {
      (0, o.wg)();
      return (0, o.j4)(Y, {
        class: "verify-code-input",
        onBackLogin: h
      }, {
        title: (0, o.w5)(() => [(0, o.WI)(e.$slots, "title")]),
        default: (0, o.w5)(() => [(0, o._)("span", ge, (0, m.toDisplayString)(e.i18n("邮箱验证码已发送到")) + (0, m.toDisplayString)(i.email), 1), (0, o._)("div", ye, [(0, o._)("div", {
          class: (0, m.normalizeClass)(["h-[44px] w-full flex-shrink-0 rounded-[8px] bg-color-m2 bg-opacity-[0.06] px-[12px]", [{
            "border-[1px] !border-color-red": l.value
          }]])
        }, [(0, o.wy)((0, o._)("input", {
          ref: e => {
            if (e) {
              c.value = e;
            }
          },
          "onUpdate:modelValue": t[0] ||= e => s.value = e,
          type: "text",
          placeholder: e.i18n("请输入邮箱验证码"),
          class: (0, m.normalizeClass)(["h-full w-full bg-[transparent] text-[14px] text-color-t1", [{
            "!text-color-red": l.value
          }]]),
          maxlength: "6",
          onPaste: u,
          onInput: f
        }, null, 42, ve), [[n.vModelText, s.value]])], 2), (0, o._)("span", {
          class: (0, m.normalizeClass)(["absolute top-full mt-[5px] block font-ali-55 text-[12px] text-color-red opacity-0", [{
            "opacity-100": l.value
          }]])
        }, (0, m.toDisplayString)(l.value), 3)]), (0, o._)("button", {
          type: "button",
          class: "mx-auto mt-[40px] overflow-hidden text-[14px] text-color-blue",
          onClick: d
        }, (0, m.toDisplayString)(e.i18n("重新发送")), 1)]),
        _: 3
      });
    };
  }
});
const me = (0, o.aZ)({
  __name: "password-input",
  props: {
    email: null,
    emailCode: null,
    type: null
  },
  setup(e) {
    const t = e;
    const r = (0, a.qj)({
      password: {
        value: "",
        props: {
          type: "password",
          placeholder: i18n("密码"),
          rawAttrs: {
            maxlength: 16
          }
        }
      }
    });
    const n = {
      password: V
    };
    const c = (0, a.iH)();
    const s = {
      register: G.z2,
      find_password: G.LI
    };
    const l = (0, i.useUserStore)();
    const {
      userDialogType: u
    } = (0, p.Jk)(l);
    const f = {
      text: i18n("完成"),
      size: "block",
      async handler() {
        const e = {
          email: t.email,
          password: J(r.password.value),
          emailCode: t.emailCode
        };
        if (t.type === "register") {
          e.nickname = t.email;
        }
        const [n, o] = await s[t.type](e);
        var a;
        if (n) {
          if ((a = c.value) !== null && a !== undefined) {
            a.setErrorMsg(n);
          }
        } else {
          X.R.success({
            message: i18n("登录成功")
          });
          u.value = "login";
          await l.setLoginSuccess(o);
        }
      }
    };
    return (e, t) => {
      const a = C.Z;
      const i = E.Z;
      const s = A.Z;
      (0, o.wg)();
      return (0, o.j4)(Y, {
        class: "password-input"
      }, {
        title: (0, o.w5)(() => [(0, o.WI)(e.$slots, "title")]),
        default: (0, o.w5)(() => [(0, o.Wm)(s, {
          model: r,
          rules: n,
          "submit-btn-attrs": f
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(i, {
            path: "password"
          }, {
            default: (0, o.w5)(() => [(0, o.Wm)(a, (0, o.dG)({
              ref_key: "$passwordInput",
              ref: c,
              value: r.password.value,
              "onUpdate:value": t[0] ||= e => r.password.value = e
            }, r.password.props), null, 16, ["value"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]),
        _: 3
      });
    };
  }
});
const we = (0, o.aZ)({
  __name: "register",
  setup(e) {
    const t = (0, a.iH)(null);
    const r = (0, a.iH)(i18n("欢迎注册 Wetab"));
    const n = (0, a.iH)("");
    const i = (0, a.iH)("");
    const c = (0, a.iH)("register");
    const s = (0, a.iH)(0);
    const l = () => {
      c.value = "register-verifycode";
      s.value = Date.now();
    };
    const u = () => {
      c.value = "register-password";
    };
    const f = () => {
      t.value.handleChangeVerifyCode();
      c.value = "register";
    };
    const d = () => {
      t.value.handleChangeVerifyCode();
      c.value = "register";
    };
    return (e, a) => {
      const h = _;
      const p = v;
      (0, o.wg)();
      return (0, o.j4)(p, {
        variable: c.value
      }, {
        default: (0, o.w5)(() => [(0, o.Wm)(h, {
          value: "register"
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(pe, {
            ref_key: "$sendCode",
            ref: t,
            email: n.value,
            "onUpdate:email": a[0] ||= e => n.value = e,
            type: "register",
            "is-back": "",
            onSuccess: l
          }, {
            title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(r.value), 1)]),
            _: 1
          }, 8, ["email"])]),
          _: 1
        }), (0, o.Wm)(h, {
          value: "register-verifycode"
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(be, {
            verifyCode: i.value,
            "onUpdate:verifyCode": a[1] ||= e => i.value = e,
            "show-verify": s.value,
            email: n.value,
            type: "register",
            onBack: f,
            onBackLogin: d,
            onSuccess: u
          }, {
            title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(r.value), 1)]),
            _: 1
          }, 8, ["verifyCode", "show-verify", "email"])]),
          _: 1
        }), (0, o.Wm)(h, {
          value: "register-password"
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(me, {
            email: n.value,
            "email-code": i.value,
            type: "register"
          }, {
            title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(r.value), 1)]),
            _: 1
          }, 8, ["email", "email-code"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["variable"]);
    };
  }
});
const _e = (0, o.aZ)({
  __name: "forget-password",
  setup(e) {
    const t = (0, a.iH)(null);
    const r = (0, a.iH)("");
    const n = (0, a.iH)("");
    const i = (0, a.iH)("find_password");
    const c = (0, a.iH)(0);
    const s = () => {
      i.value = "find_password-verifycode";
      c.value = Date.now();
    };
    const l = () => {
      i.value = "find_password-password";
    };
    const u = () => {
      t.value.handleChangeVerifyCode();
      i.value = "find_password";
    };
    const f = () => {
      alert("修改成功！");
    };
    return (e, a) => {
      const d = _;
      const h = v;
      (0, o.wg)();
      return (0, o.j4)(h, {
        variable: i.value
      }, {
        default: (0, o.w5)(() => [(0, o.Wm)(d, {
          value: "find_password"
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(pe, {
            ref_key: "$sendCode",
            ref: t,
            email: r.value,
            "onUpdate:email": a[0] ||= e => r.value = e,
            type: "find_password",
            "is-back": "",
            onSuccess: s
          }, {
            title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(e.i18n("忘记密码")), 1)]),
            _: 1
          }, 8, ["email"])]),
          _: 1
        }), (0, o.Wm)(d, {
          value: "find_password-verifycode"
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(be, {
            verifyCode: n.value,
            "onUpdate:verifyCode": a[1] ||= e => n.value = e,
            "show-verify": c.value,
            email: r.value,
            type: "find_password",
            onBack: u,
            onSuccess: l
          }, {
            title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(e.i18n("忘记密码")), 1)]),
            _: 1
          }, 8, ["verifyCode", "show-verify", "email"])]),
          _: 1
        }), (0, o.Wm)(d, {
          value: "find_password-password"
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(me, {
            email: r.value,
            "email-code": n.value,
            type: "find_password",
            onSuccess: f
          }, {
            title: (0, o.w5)(() => [(0, o._)("span", null, (0, m.toDisplayString)(e.i18n("忘记密码")), 1)]),
            _: 1
          }, 8, ["email", "email-code"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["variable"]);
    };
  }
});
const ke = (0, o.aZ)({
  __name: "login-items",
  setup(e) {
    const t = (0, i.useUserStore)();
    const {
      userDialogType: r
    } = (0, p.Jk)(t);
    return (e, t) => {
      const n = _;
      const i = v;
      (0, o.wg)();
      return (0, o.j4)(i, {
        class: "hi-scroll mb:bg-color-white",
        variable: (0, a.SU)(r)
      }, {
        default: (0, o.w5)(() => [(0, o.Wm)(n, {
          value: "login"
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(fe)]),
          _: 1
        }), (0, o.Wm)(n, {
          value: "register"
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(we)]),
          _: 1
        }), (0, o.Wm)(n, {
          value: "find_password"
        }, {
          default: (0, o.w5)(() => [(0, o.Wm)(_e)]),
          _: 1
        })]),
        _: 1
      }, 8, ["variable"]);
    };
  }
});
const Ae = [(0, o._)("i", {
  class: "iconfont icon-close_window_icon text-[12px] text-color-white opacity-100"
}, null, -1)];
const Ee = (0, o.aZ)({
  __name: "login-dialog",
  setup(e) {
    const t = (0, i.useUserStore)();
    const {
      loginShow: r,
      userDialogType: n
    } = (0, p.Jk)(t);
    return (e, n) => {
      const i = h.Z;
      (0, o.wg)();
      return (0, o.j4)(i, {
        show: (0, a.SU)(r),
        "onUpdate:show": n[1] ||= e => (0, a.dq)(r) ? r.value = e : null,
        class: "bg-color-b3",
        "full-screen": "",
        width: 400,
        height: 551,
        closeble: false
      }, {
        default: (0, o.w5)(() => [(0, o._)("div", {
          class: "group absolute left-[20px] top-[20px] z-10 flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#FF7330]",
          onClick: n[0] ||= e => (0, a.SU)(t).changeLoginShow(false)
        }, Ae), (0, o.Wm)(ke)]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
import * as Ce from "./9417.js";
const xe = {
  class: "flex flex-col items-center"
};
const Se = {
  class: "mt-[24px] text-[14px] font-[500] leading-[20px] text-[#1C1C1E]"
};
const Oe = ["src"];
const Be = {
  key: 1,
  class: "mt-[12px] text-[12px] font-[400] leading-[16px] text-[#3A3A3C]"
};
const je = (0, o._)("div", {
  class: "mt-[7.5px] mb-[8.5px] h-0 w-[312px] border-t border-dashed border-color-black border-opacity-[0.08]"
}, null, -1);
const De = {
  class: "mb-[24px] flex items-center"
};
const Fe = {
  class: "text-[14px] font-[500] text-[#1C1C1E]"
};
const Pe = [(0, o._)("span", {
  class: "text-[18px] font-[600] text-[#fff] opacity-60"
}, "×", -1)];
const Me = (0, o.aZ)({
  __name: "compliance",
  setup(e) {
    const t = (0, Ce.n)();
    return (e, r) => {
      const n = h.Z;
      (0, o.wg)();
      return (0, o.j4)(n, {
        show: (0, a.SU)(t).contactShow,
        class: "overflow-visible !bg-[#fff]",
        width: 360,
        closeble: false
      }, {
        default: (0, o.w5)(() => [(0, o._)("div", xe, [(0, o._)("h1", Se, (0, m.toDisplayString)((0, a.SU)(t).chatInfo.contactTitle), 1), (0, a.SU)(t).chatInfo.contactQrcode ? ((0, o.wg)(), (0, o.iD)("img", {
          key: 0,
          class: "mt-[28px] h-[100px] w-[100px]",
          draggable: "false",
          src: (0, a.SU)(t).chatInfo.contactQrcode
        }, null, 8, Oe)) : (0, o.kq)("", true), (0, a.SU)(t).chatInfo.contactDesc ? ((0, o.wg)(), (0, o.iD)("p", Be, (0, m.toDisplayString)((0, a.SU)(t).chatInfo.contactDesc), 1)) : (0, o.kq)("", true), je, (0, o._)("div", De, [(0, o._)("span", Fe, (0, m.toDisplayString)((0, a.SU)(t).chatInfo.contactQrcode ? e.i18n("huo4a7185") : "") + "Email：" + (0, m.toDisplayString)((0, a.SU)(t).chatInfo.contactEmail), 1), (0, o._)("i", {
          class: "iconfont icon-copy ml-[12px] cursor-pointer text-[16px] text-[#3A3A3C]",
          onClick: r[0] ||= e => {
            r = (0, a.SU)(t).chatInfo.contactEmail;
            navigator.clipboard.writeText(r).then(() => {
              X.R.success({
                message: i18n("yi34fb42")
              });
            });
            return;
            var r;
          }
        })])]), (0, o._)("button", {
          class: "absolute -bottom-[58px] left-1/2 flex h-[32px] w-[32px] -translate-x-1/2 items-center justify-center rounded-full border-[2px] border-[#fff] border-opacity-60",
          onClick: r[1] ||= e => (0, a.SU)(t).setContactShow(false)
        }, Pe)]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const Te = (0, o.aZ)({
  __name: "chat-iframe",
  setup(e) {
    const t = (0, Ce.n)();
    const n = (0, i.useUserStore)();
    (0, o.bv)(async () => {
      await Promise.all([require.e(942), require.e(652), require.e(172), require.e(533), require.e(198)]).then(require.bind(require, 6215));
      const {
        useChatGptStore: e
      } = await Promise.all([require.e(652), require.e(172)]).then(require.bind(require, 1172));
      const a = e();
      (0, s.o)(a.activeTheme);
      if (window.iframeAiInitData) {
        if (window.iframeAiInitData.authToken) {
          n.setLoginSuccess((0, c.LP)(n, window.iframeAiInitData.authToken, window.iframeAiInitData.userName));
        } else {
          n.loginOut(false);
        }
        a.setModal(true);
      }
      window.addEventListener("message", e => {
        const {
          baseAiInfo: t,
          type: r,
          authToken: o,
          logoutWithClear: i
        } = e.data;
        if (r === c.o1.openAiModal && t) {
          if (t.authToken) {
            n.setLoginSuccess((0, c.LP)(n, t.authToken, t.userName));
          } else {
            n.loginOut(false);
          }
          if (!a.uploadDocLoading) {
            a.setUploadModal(false);
          }
          a.setModal(true);
          a.setSelectModel();
        } else if (r === c.o1.authToken && o) {
          n.setLoginSuccess((0, c.LP)(n, o));
        } else if (r === c.o1.logout) {
          a.resetPage();
          n.loginOut(!!i);
        } else if (r === c.o1.updateIframeData) {
          window.iframeAiInitData = {
            ...window.iframeAiInitData,
            ...t
          };
        }
      });
      const i = () => {
        if (u(a.overLimit).add(1, "day").get("date") <= u().get("date")) {
          a.setOverLimit(0);
        }
      };
      i();
      f.i.subscribe("EVERY_DAY", i);
      (0, o.YP)(() => a.activeTheme, e => {
        (0, s.o)(e);
      });
      (0, o.YP)(() => n.isLogin, e => {
        if (e) {
          a.reqConversionList();
          a.reqAssistantList();
        } else {
          a.resetPage();
        }
      });
      (0, o.YP)(() => n.isLogin, e => {
        if (e) {
          t.getChatCompliance();
        }
      }, {
        immediate: true
      });
      const {
        useModal: l
      } = await Promise.all([require.e(652), require.e(172), require.e(533), require.e(371)]).then(require.bind(require, 137));
      const {
        clickWidget: d
      } = l();
      d();
    });
    return (e, t) => {
      (0, o.wg)();
      return (0, o.iD)(o.HY, null, [(0, a.SU)(d.PA) ? ((0, o.wg)(), (0, o.j4)(Ee, {
        key: 0
      })) : (0, o.kq)("", true), (0, o.Wm)(Me)], 64);
    };
  }
});
import * as Ie from "./2607.js";
var Le = Ie;
import * as Ze from "./1363.js";
var Ue = Ze;
import * as Re from "./4038.js";
var ze = Re;
import * as He from /*webcrack:missing*/"./5008.js";
require("./1798.js");
require(/*webcrack:missing*/"./7334.js");
import * as Ne from /*webcrack:missing*/"./6155.js";
require(/*webcrack:missing*/"./6790.js");
import * as We from /*webcrack:missing*/"./4955.js";
require(/*webcrack:missing*/"./7353.js");
import * as $e from /*webcrack:missing*/"./2371.js";
require(/*webcrack:missing*/"./6133.js");
import * as qe from /*webcrack:missing*/"./8437.js";
require(/*webcrack:missing*/"./2325.js");
import * as Ye from /*webcrack:missing*/"./7982.js";
import * as Qe from "./3603.js";
import * as Ve from "./6755.js";
(0, Qe.J$)({
  globalFont: "system-ui"
});
(0, Qe.Dc)({
  theme: "light"
});
u.extend(Le);
u.extend(Ue);
if (d.sM) {
  u.locale(ze);
}
const Ge = (0, n.createApp)(Te);
Ge.use(Ve.M);
(e => {
  e.use(Ne.Z).use(We.Z).use($e.Z).use(qe.Z).use(Ye.Z);
})(Ge);
(0, He.f)(Ge);
Ge.mount("#app");