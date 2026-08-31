export class a {
  constructor() {
    this._caches = {};
    this._setCaches = e => (...t) => {
      this._caches[e] = t;
    };
  }
}
const s = [];
export const b = e => new Proxy(e, {
  set: (e, t, i) => i === null ? (e[t] = i, true) : typeof e[t] == "function" ? (console.warn("失败：重复注册"), true) : (e[t] = i, s.includes(t) && delete e._caches[t], e._caches.hasOwnProperty(t) && (e[t](...e._caches[t]), delete e._caches[t]), true),
  get: (e, t) => typeof e[t] == "function" ? e[t] : e._setCaches(t)
});