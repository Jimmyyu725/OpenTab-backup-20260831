var n = require(/*webcrack:missing*/"./13.js");
var s = require(/*webcrack:missing*/"./2.js");
var _a = require(/*webcrack:missing*/"./309.js");
function o(e, t, i, n) {
  var s;
  var a = arguments.length;
  var o = a < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    o = Reflect.decorate(e, t, i, n);
  } else {
    for (var c = e.length - 1; c >= 0; c--) {
      if (s = e[c]) {
        o = (a < 3 ? s(o) : a > 3 ? s(t, i, o) : s(t, i)) || o;
      }
    }
  }
  if (a > 3 && o) {
    Object.defineProperty(t, i, o);
  }
  return o;
}
class c extends _a.a {
  constructor() {
    super(...arguments);
    this.onlyOneItem = false;
    this.ready = false;
  }
  initStore() {
    return this.initSyncStore(n.m, ["onlyOneItem", "ready", "nextId", "nextRawURL", "nextURL", "nextItem"]);
  }
  setOnlyOneItem(e) {
    this.onlyOneItem = e;
  }
  setReady(e) {
    this.ready = e;
  }
  setNextId(e) {
    this.nextId = e;
  }
  setNextRawURL(e) {
    this.nextRawURL = e;
  }
  setNextURL(e) {
    this.nextURL = e;
  }
  setNextItem(e) {
    this.nextItem = e;
  }
  clearNextData() {
    this.nextURL = undefined;
    this.nextRawURL = undefined;
    this.nextId = undefined;
    this.nextItem = null;
  }
}
o([s.g], c.prototype, "onlyOneItem", undefined);
o([s.g], c.prototype, "ready", undefined);
o([s.g], c.prototype, "nextId", undefined);
o([s.g], c.prototype, "nextRawURL", undefined);
o([s.g], c.prototype, "nextURL", undefined);
o([s.g], c.prototype, "nextItem", undefined);
o([s.b], c.prototype, "setOnlyOneItem", null);
o([s.b], c.prototype, "setReady", null);
o([s.b], c.prototype, "setNextId", null);
o([s.b], c.prototype, "setNextRawURL", null);
o([s.b], c.prototype, "setNextURL", null);
o([s.b], c.prototype, "setNextItem", null);
o([s.b], c.prototype, "clearNextData", null);
export const a = new c();