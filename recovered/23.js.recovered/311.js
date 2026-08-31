require(/*webcrack:missing*/"./7.js");
var r = require("./0.js");
var o = require("./22.js");
export const a = new class {
  constructor() {
    this.ga = null;
    this.localKey = "analytics-status-time";
    this.gap = 43200000;
    this.getPermission = async () => {
      let t = false;
      if (r.n) {
        try {
          const {
            privacyStore: e
          } = await Promise.all([require.e(8), require.e(7), require.e(40)]).then(require.bind(null, 601));
          if (e.collectData !== 1) {
            t = false;
          }
        } catch (e) {
          t = false;
        }
      }
      return t;
    };
    this.sendPageView = async t => {
      if (!(await this.getPermission())) {
        return;
      }
      const e = this.ga.getPageviewUrl(t);
      o.b.sendLog(e);
    };
    this.sendEvent = async (t, e = false) => {
      if (await this.getPermission()) {
        Object.keys(t).forEach(n => {
          const r = t[n];
          if (typeof r == "object") {
            Object.keys(r).forEach(t => {
              const i = r[t];
              const s = this.ga.getEventUrl({
                category: n,
                action: t,
                label: String(i),
                nonInteraction: e
              });
              o.b.sendLog(s);
            });
          } else {
            const t = this.ga.getEventUrl({
              category: n,
              action: String(r),
              nonInteraction: e
            });
            o.b.sendLog(t);
          }
        });
      }
    };
  }
  async sendStatus(t) {
    try {
      this.sendEvent(t, true);
      localStorage.setItem(this.localKey, "" + Date.now());
    } catch (t) {}
  }
}();