export class a {
  constructor() {
    this._caches = {};
    this._setCaches = e => (...i) => {
      this._caches[e] = i;
    };
  }
}
const o = [];
export const b = e => new Proxy(e, {
  set: (e, i, s) => s === null ? (e[i] = s, true) : typeof e[i] == "function" ? (console.warn("失败：重复注册"), true) : (e[i] = s, o.includes(i) && delete e._caches[i], e._caches.hasOwnProperty(i) && (e[i](...e._caches[i]), delete e._caches[i]), true),
  get: (e, i) => typeof e[i] == "function" ? e[i] : e._setCaches(i)
});