var n = require("./4581.js");
window.widgets = new Map();
export class ou {}
export const z2 = (e, t) => {
  if (!window.widgets.get(e)) {
    window.widgets.set(e, t);
  }
};
new Map();
export const Gl = new class {
  async preRender(e) {
    const t = await this.load(e.name);
    if (t) {
      t.preRender(e);
    }
  }
  async renderHome(e) {
    const t = await this.load(e.name);
    if (t) {
      return t.renderHome(e);
    }
  }
  async addWidget(e) {
    const t = await this.load(e.name);
    return !!t && t.addWidget(e);
  }
  async loadStore(e) {
    if (n.tD[e]) {
      const t = await this.load(n.tD[e]);
      return !!t && t.loadStore();
    }
  }
  async loadStoreFromName(e) {
    const t = await this.load(e);
    return t != null && !!t.loadStore && t.loadStore();
  }
  load(e) {
    return new Promise(t => {
      const n = window.widgets.get(e);
      if (n) {
        return t(n);
      }
      if (e.startsWith("widget-custom-")) {
        const r = document.createElement("script");
        r.src = `./${e}.js`;
        document.body.append(r);
        r.onload = () => {
          t(window.widgets.get(e));
        };
        r.onerror = () => {
          t(null);
        };
        return;
      }
      if (e.startsWith("widget-")) {
        require("./8531.js")(`./${e}/loader`).then(() => {
          t(window.widgets.get(e));
        }).catch(() => {
          t(null);
        });
      } else {
        t(null);
      }
    });
  }
}();