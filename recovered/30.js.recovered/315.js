export class a {
  constructor() {
    this._events = new Map();
  }
  listenTask(t, e) {
    if (typeof e != "function") {
      return;
    }
    if (!this._events.has(t)) {
      this._events.set(t, new Set());
    }
    this._events.get(t).add(e);
  }
  execTask(t, e, ...i) {
    if (this._events.has(t)) {
      const n = this._events.get(t);
      for (const t of n) {
        t(e, ...i);
      }
    }
  }
}