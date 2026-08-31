export class a {
  constructor() {
    this._events = new Map();
  }
  listenTask(e, t) {
    if (typeof t != "function") {
      return;
    }
    if (!this._events.has(e)) {
      this._events.set(e, new Set());
    }
    this._events.get(e).add(t);
  }
  execTask(e, t, ...s) {
    if (this._events.has(e)) {
      const n = this._events.get(e);
      for (const e of n) {
        e(t, ...s);
      }
    }
  }
}