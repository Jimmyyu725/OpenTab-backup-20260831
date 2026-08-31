var r = require("./2.js");
const i = Symbol("LitMobxRenderReaction");
const o = Symbol("LitMobxRequestUpdate");
var s = require("./1.js");
export class a extends function (t) {
  var e;
  var n;
  n = class extends t {
    constructor() {
      super(...arguments);
      this[e] = () => {
        this.requestUpdate();
      };
    }
    connectedCallback() {
      super.connectedCallback();
      const t = this.constructor.name || this.nodeName;
      this[i] = new r.a(t + ".update()", this[o]);
      if (this.hasUpdated) {
        this.requestUpdate();
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      if (this[i]) {
        this[i].dispose();
        this[i] = undefined;
      }
    }
    update(t) {
      if (this[i]) {
        this[i].track(super.update.bind(this, t));
      } else {
        super.update(t);
      }
    }
  };
  e = o;
  return n;
}(s.a) {}