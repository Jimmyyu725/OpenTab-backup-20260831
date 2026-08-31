var n = require("./7346.js");
export const y = new class {
  bc = new n.g0("hitab_broadcast_channel");
  handlers = new Map();
  constructor() {
    this.bc.onmessage = e => {
      const {
        type: t,
        payload: r
      } = e;
      const n = this.handlers.get(t);
      if (n) {
        for (const e of n) {
          e(r);
        }
      }
    };
  }
  async post(e, t) {
    this.bc.postMessage({
      type: e,
      payload: t
    });
    return [null, ""];
  }
  listen(e, t) {
    if (this.handlers.has(e)) {
      this.handlers.get(e).add(t);
    } else {
      this.handlers.set(e, new Set([t]));
    }
  }
  remove(e, t) {
    if (this.handlers.has(e)) {
      this.handlers.get(e).delete(t);
    }
  }
  removeAll(e) {
    this.handlers.delete(e);
  }
}();