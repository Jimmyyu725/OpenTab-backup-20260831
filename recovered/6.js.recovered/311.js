require(/*webcrack:missing*/"./7.js");
var o = require(/*webcrack:missing*/"./0.js");
var s = require(/*webcrack:missing*/"./22.js");
export const a = new class {
  constructor() {
    this.ga = null;
    this.localKey = "analytics-status-time";
    this.gap = 43200000;
    this.getPermission = async () => {
      let e = false;
      if (o.n) {
        try {
          const {
            privacyStore: t
          } = await Promise.all([require.e(8), require.e(7), require.e(40)]).then(require.bind(null, 601));
          if (t.collectData !== 1) {
            e = false;
          }
        } catch (t) {
          e = false;
        }
      }
      return e;
    };
    this.sendPageView = async e => {
      if (!(await this.getPermission())) {
        return;
      }
      const t = this.ga.getPageviewUrl(e);
      s.b.sendLog(t);
    };
    this.sendEvent = async (e, t = false) => {
      if (await this.getPermission()) {
        Object.keys(e).forEach(i => {
          const o = e[i];
          if (typeof o == "object") {
            Object.keys(o).forEach(e => {
              const n = o[e];
              const r = this.ga.getEventUrl({
                category: i,
                action: e,
                label: String(n),
                nonInteraction: t
              });
              s.b.sendLog(r);
            });
          } else {
            const e = this.ga.getEventUrl({
              category: i,
              action: String(o),
              nonInteraction: t
            });
            s.b.sendLog(e);
          }
        });
      }
    };
  }
  async sendStatus(e) {
    try {
      this.sendEvent(e, true);
      localStorage.setItem(this.localKey, "" + Date.now());
    } catch (e) {}
  }
}();