import * as a from /*webcrack:missing*/"./9445.js";
import * as i from /*webcrack:missing*/"./8398.js";
import * as o from /*webcrack:missing*/"./7268.js";
import * as l from "./137.js";
import * as s from /*webcrack:missing*/"./5676.js";
import * as c from /*webcrack:missing*/"./8514.js";
import * as r from /*webcrack:missing*/"./1172.js";
import * as p from /*webcrack:missing*/"./661.js";
var d = p;
import * as u from /*webcrack:missing*/"./3844.js";
const g = (0, o.aZ)({
  __name: "widget-chatgpt-home",
  props: {
    size: null,
    id: null
  },
  setup(e) {
    const t = e;
    const n = (0, s.useUserStore)();
    const i = (0, r.useChatGptStore)();
    (0, o.YP)(() => i.activeTheme, e => {
      (0, c.o)(e);
    });
    (0, o.YP)(() => n.isLogin, e => {
      if (e) {
        i.reqConversionList();
        i.reqAssistantList();
      } else {
        i.resetPage();
      }
    });
    (0, o.bv)(() => {
      p();
      (0, c.o)(i.activeTheme);
    });
    const p = () => {
      if (d(i.overLimit).add(1, "day").get("date") <= d().get("date")) {
        i.setOverLimit(0);
      }
    };
    u.i.subscribe("EVERY_DAY", p);
    const {
      HomeComp: g
    } = (0, l.useChatGptComponent)(t);
    const {
      clickWidget: h
    } = (0, l.useModal)();
    return (e, t) => {
      (0, o.wg)();
      return (0, o.iD)("section", {
        class: "contents cursor-pointer",
        onClick: t[0] ||= function () {
          return (0, a.SU)(h) && (0, a.SU)(h)(...arguments);
        }
      }, [((0, o.wg)(), (0, o.j4)((0, o.LL)((0, a.SU)(g))))]);
    };
  }
});
import * as h from /*webcrack:missing*/"./6755.js";
import * as v from /*webcrack:missing*/"./5008.js";
export const widgetApp = (0, a.iH)(null);
export const mountHome = (e, t) => {
  const n = (0, i.createApp)(g, t);
  (0, v.f)(n);
  widgetApp.value = n;
  n.use(h.M);
  n.mount(e);
  return widgetApp.value;
};