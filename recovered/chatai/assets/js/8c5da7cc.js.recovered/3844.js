var n = require(/*webcrack:missing*/"./661.js");
var o = n;
const a = ["EVERY_SECOND", "EVERY_MINUTE", "EVERY_HOUR", "EVERY_DAY"].reduce((e, t) => {
  e[t] = new Set();
  return e;
}, {});
export const i = new class {
  tasks = a;
  constructor() {
    new Worker(new URL(require.p + require.u(853), require.b)).onmessage = e => {
      if (e.data !== "tick") {
        return;
      }
      const t = o();
      if (t.second() === 0) {
        this.tasks.EVERY_MINUTE.forEach(e => e(t));
      }
      if (t.minute() === 0 && t.second() === 0) {
        this.tasks.EVERY_HOUR.forEach(e => e(t));
      }
      if (t.hour() === 0 && t.minute() === 0 && t.second() === 0) {
        this.tasks.EVERY_DAY.forEach(e => e(t));
      }
      this.tasks.EVERY_SECOND.forEach(e => e(t));
    };
  }
  subscribe(e, t) {
    this.tasks[e].add(t);
  }
  unsubscribe(e, t) {
    this.tasks[e].delete(t);
  }
  clear() {
    Object.keys(this.tasks).forEach(e => {
      this.tasks[e].clear();
    });
  }
}();