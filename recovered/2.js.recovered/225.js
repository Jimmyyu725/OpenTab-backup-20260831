var n = require(/*webcrack:missing*/"./2.js");
const o = Symbol("LitMobxRenderReaction");
const c = Symbol("LitMobxRequestUpdate");
var i = require(/*webcrack:missing*/"./1.js");
export class a extends function (t) {
  var e;
  var r;
  r = class extends t {
    constructor() {
      super(...arguments);
      this[e] = () => {
        this.requestUpdate();
      };
    }
    connectedCallback() {
      super.connectedCallback();
      const t = this.constructor.name || this.nodeName;
      this[o] = new n.a(t + ".update()", this[c]);
      if (this.hasUpdated) {
        this.requestUpdate();
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      if (this[o]) {
        this[o].dispose();
        this[o] = undefined;
      }
    }
    update(t) {
      if (this[o]) {
        this[o].track(super.update.bind(this, t));
      } else {
        super.update(t);
      }
    }
  };
  e = c;
  return r;
}(i.a) {}