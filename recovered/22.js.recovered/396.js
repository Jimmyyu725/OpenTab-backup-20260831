export class a {
  constructor() {
    this._caches = {};
    this._setCaches = t => (...e) => {
      this._caches[t] = e;
    };
  }
}
const i = [];
export const b = t => new Proxy(t, {
  set: (t, e, n) => n === null ? (t[e] = n, true) : typeof t[e] == "function" ? (console.warn("失败：重复注册"), true) : (t[e] = n, i.includes(e) && delete t._caches[e], t._caches.hasOwnProperty(e) && (t[e](...t._caches[e]), delete t._caches[e]), true),
  get: (t, e) => typeof t[e] == "function" ? t[e] : t._setCaches(e)
});