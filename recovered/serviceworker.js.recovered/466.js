require("./2.js");
const r = (t, ...e) => {
  let n = t;
  if (e.length > 0) {
    n += " :: " + JSON.stringify(e);
  }
  return n;
};
class o extends Error {
  constructor(t, e) {
    super(r(t, e));
    this.name = t;
    this.details = e;
  }
}
const i = new Set();
const s = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration != "undefined" ? registration.scope : ""
};
const a = t => [s.prefix, t, s.suffix].filter(t => t && t.length > 0).join("-");
const c = t => t || a(s.runtime);
const u = t => new URL(String(t), location.href).href.replace(new RegExp("^" + location.origin), "");
const f = (t, e) => t.filter(t => e in t);
const l = async ({
  request: t,
  mode: e,
  plugins: n = []
}) => {
  const r = f(n, "cacheKeyWillBeUsed");
  let o = t;
  for (const t of r) {
    o = await t.cacheKeyWillBeUsed.call(t, {
      mode: e,
      request: o
    });
    if (typeof o == "string") {
      o = new Request(o);
    }
  }
  return o;
};
const h = async ({
  cacheName: t,
  request: e,
  event: n,
  matchOptions: r,
  plugins: o = []
}) => {
  const i = await self.caches.open(t);
  const s = await l({
    plugins: o,
    request: e,
    mode: "read"
  });
  let a = await i.match(s, r);
  for (const e of o) {
    if ("cachedResponseWillBeUsed" in e) {
      const o = e.cachedResponseWillBeUsed;
      a = await o.call(e, {
        cacheName: t,
        event: n,
        matchOptions: r,
        cachedResponse: a,
        request: s
      });
    }
  }
  return a;
};
const p = async ({
  cacheName: t,
  request: e,
  response: n,
  event: r,
  plugins: s = [],
  matchOptions: a
}) => {
  const c = await l({
    plugins: s,
    request: e,
    mode: "write"
  });
  if (!n) {
    throw new o("cache-put-with-no-response", {
      url: u(c.url)
    });
  }
  const p = await (async ({
    request: t,
    response: e,
    event: n,
    plugins: r = []
  }) => {
    let o = e;
    let i = false;
    for (const e of r) {
      if ("cacheWillUpdate" in e) {
        i = true;
        const r = e.cacheWillUpdate;
        o = await r.call(e, {
          request: t,
          response: o,
          event: n
        });
        if (!o) {
          break;
        }
      }
    }
    if (!i) {
      o = o && o.status === 200 ? o : undefined;
    }
    return o || null;
  })({
    event: r,
    plugins: s,
    response: n,
    request: c
  });
  if (!p) {
    return undefined;
  }
  const d = await self.caches.open(t);
  const y = f(s, "cacheDidUpdate");
  const m = y.length > 0 ? await h({
    cacheName: t,
    matchOptions: a,
    request: c
  }) : null;
  try {
    await d.put(c, p);
  } catch (t) {
    if (t.name === "QuotaExceededError") {
      await async function () {
        for (const t of i) {
          await t();
        }
      }();
    }
    throw t;
  }
  for (const e of y) {
    await e.cacheDidUpdate.call(e, {
      cacheName: t,
      event: r,
      oldResponse: m,
      newResponse: p,
      request: c
    });
  }
};
const d = h;
function y(t) {
  t.then(() => {});
}
class m {
  constructor(t, e, {
    onupgradeneeded: n,
    onversionchange: r
  } = {}) {
    this._db = null;
    this._name = t;
    this._version = e;
    this._onupgradeneeded = n;
    this._onversionchange = r || (() => this.close());
  }
  get db() {
    return this._db;
  }
  async open() {
    if (!this._db) {
      this._db = await new Promise((t, e) => {
        let n = false;
        setTimeout(() => {
          n = true;
          e(new Error("The open request was blocked and timed out"));
        }, this.OPEN_TIMEOUT);
        const r = indexedDB.open(this._name, this._version);
        r.onerror = () => e(r.error);
        r.onupgradeneeded = t => {
          if (n) {
            r.transaction.abort();
            r.result.close();
          } else if (typeof this._onupgradeneeded == "function") {
            this._onupgradeneeded(t);
          }
        };
        r.onsuccess = () => {
          const e = r.result;
          if (n) {
            e.close();
          } else {
            e.onversionchange = this._onversionchange.bind(this);
            t(e);
          }
        };
      });
      return this;
    }
  }
  async getKey(t, e) {
    return (await this.getAllKeys(t, e, 1))[0];
  }
  async getAll(t, e, n) {
    return await this.getAllMatching(t, {
      query: e,
      count: n
    });
  }
  async getAllKeys(t, e, n) {
    return (await this.getAllMatching(t, {
      query: e,
      count: n,
      includeKeys: true
    })).map(t => t.key);
  }
  async getAllMatching(t, {
    index: e,
    query: n = null,
    direction: r = "next",
    count: o,
    includeKeys: i = false
  } = {}) {
    return await this.transaction([t], "readonly", (s, a) => {
      const c = s.objectStore(t);
      const u = e ? c.index(e) : c;
      const f = [];
      const l = u.openCursor(n, r);
      l.onsuccess = () => {
        const t = l.result;
        if (t) {
          f.push(i ? t : t.value);
          if (o && f.length >= o) {
            a(f);
          } else {
            t.continue();
          }
        } else {
          a(f);
        }
      };
    });
  }
  async transaction(t, e, n) {
    await this.open();
    return await new Promise((r, o) => {
      const i = this._db.transaction(t, e);
      i.onabort = () => o(i.error);
      i.oncomplete = () => r();
      n(i, t => r(t));
    });
  }
  async _call(t, e, n, ...r) {
    return await this.transaction([e], n, (n, o) => {
      const i = n.objectStore(e);
      const s = i[t].apply(i, r);
      s.onsuccess = () => o(s.result);
    });
  }
  close() {
    if (this._db) {
      this._db.close();
      this._db = null;
    }
  }
}
m.prototype.OPEN_TIMEOUT = 2000;
const g = {
  readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
  readwrite: ["add", "put", "clear", "delete"]
};
for (const [t, e] of Object.entries(g)) {
  for (const n of e) {
    if (n in IDBObjectStore.prototype) {
      m.prototype[n] = async function (e, ...r) {
        return await this._call(n, e, t, ...r);
      };
    }
  }
}
const v = async ({
  request: t,
  fetchOptions: e,
  event: n,
  plugins: r = []
}) => {
  if (typeof t == "string") {
    t = new Request(t);
  }
  if (n instanceof FetchEvent && n.preloadResponse) {
    const t = await n.preloadResponse;
    if (t) {
      return t;
    }
  }
  const i = f(r, "fetchDidFail");
  const s = i.length > 0 ? t.clone() : null;
  try {
    for (const e of r) {
      if ("requestWillFetch" in e) {
        const r = e.requestWillFetch;
        const o = t.clone();
        t = await r.call(e, {
          request: o,
          event: n
        });
      }
    }
  } catch (t) {
    throw new o("plugin-error-request-will-fetch", {
      thrownError: t
    });
  }
  const a = t.clone();
  try {
    let o;
    o = t.mode === "navigate" ? await fetch(t) : await fetch(t, e);
    for (const t of r) {
      if ("fetchDidSucceed" in t) {
        o = await t.fetchDidSucceed.call(t, {
          event: n,
          request: a,
          response: o
        });
      }
    }
    return o;
  } catch (t) {
    0;
    for (const e of i) {
      await e.fetchDidFail.call(e, {
        error: t,
        event: n,
        originalRequest: s.clone(),
        request: a.clone()
      });
    }
    throw t;
  }
};
require("./16.js");
const b = t => t && typeof t == "object" ? t : {
  handle: t
};
class w {
  constructor(t, e, n = "GET") {
    this.handler = b(e);
    this.match = t;
    this.method = n;
  }
}
class _ extends w {
  constructor(t, e, n) {
    super(({
      url: e
    }) => {
      const n = t.exec(e.href);
      if (n && (e.origin === location.origin || n.index === 0)) {
        return n.slice(1);
      }
    }, e, n);
  }
}
class x {
  constructor() {
    this._routes = new Map();
  }
  get routes() {
    return this._routes;
  }
  addFetchListener() {
    self.addEventListener("fetch", t => {
      const {
        request: e
      } = t;
      const n = this.handleRequest({
        request: e,
        event: t
      });
      if (n) {
        t.respondWith(n);
      }
    });
  }
  addCacheListener() {
    self.addEventListener("message", t => {
      if (t.data && t.data.type === "CACHE_URLS") {
        const {
          payload: e
        } = t.data;
        0;
        const n = Promise.all(e.urlsToCache.map(t => {
          if (typeof t == "string") {
            t = [t];
          }
          const e = new Request(...t);
          return this.handleRequest({
            request: e
          });
        }));
        t.waitUntil(n);
        if (t.ports && t.ports[0]) {
          n.then(() => t.ports[0].postMessage(true));
        }
      }
    });
  }
  handleRequest({
    request: t,
    event: e
  }) {
    const n = new URL(t.url, location.href);
    if (!n.protocol.startsWith("http")) {
      return undefined;
    }
    const {
      params: r,
      route: o
    } = this.findMatchingRoute({
      url: n,
      request: t,
      event: e
    });
    let i = o && o.handler;
    if (!i && this._defaultHandler) {
      i = this._defaultHandler;
    }
    if (!i) {
      return undefined;
    }
    let s;
    try {
      s = i.handle({
        url: n,
        request: t,
        event: e,
        params: r
      });
    } catch (t) {
      s = Promise.reject(t);
    }
    if (s instanceof Promise && this._catchHandler) {
      s = s.catch(r => this._catchHandler.handle({
        url: n,
        request: t,
        event: e
      }));
    }
    return s;
  }
  findMatchingRoute({
    url: t,
    request: e,
    event: n
  }) {
    const r = this._routes.get(e.method) || [];
    for (const o of r) {
      let r;
      const i = o.match({
        url: t,
        request: e,
        event: n
      });
      if (i) {
        r = i;
        if (Array.isArray(i) && i.length === 0 || i.constructor === Object && Object.keys(i).length === 0 || typeof i == "boolean") {
          r = undefined;
        }
        return {
          route: o,
          params: r
        };
      }
    }
    return {};
  }
  setDefaultHandler(t) {
    this._defaultHandler = b(t);
  }
  setCatchHandler(t) {
    this._catchHandler = b(t);
  }
  registerRoute(t) {
    if (!this._routes.has(t.method)) {
      this._routes.set(t.method, []);
    }
    this._routes.get(t.method).push(t);
  }
  unregisterRoute(t) {
    if (!this._routes.has(t.method)) {
      throw new o("unregister-route-but-not-found-with-method", {
        method: t.method
      });
    }
    const e = this._routes.get(t.method).indexOf(t);
    if (!(e > -1)) {
      throw new o("unregister-route-route-not-registered");
    }
    this._routes.get(t.method).splice(e, 1);
  }
}
let T;
const E = () => {
  if (!T) {
    T = new x();
    T.addFetchListener();
    T.addCacheListener();
  }
  return T;
};
function O(t, e, n) {
  let r;
  if (typeof t == "string") {
    const o = new URL(t, location.href);
    0;
    r = new w(({
      url: t
    }) => t.href === o.href, e, n);
  } else if (t instanceof RegExp) {
    r = new _(t, e, n);
  } else if (typeof t == "function") {
    r = new w(t, e, n);
  } else {
    if (!(t instanceof w)) {
      throw new o("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
      });
    }
    r = t;
  }
  E().registerRoute(r);
  return r;
}
require("./26.js");
class S {
  constructor(t = {}) {
    this._cacheName = c(t.cacheName);
    this._plugins = t.plugins || [];
    this._fetchOptions = t.fetchOptions;
    this._matchOptions = t.matchOptions;
  }
  async handle({
    event: t,
    request: e
  }) {
    if (typeof e == "string") {
      e = new Request(e);
    }
    let n;
    let r = await d({
      cacheName: this._cacheName,
      request: e,
      event: t,
      matchOptions: this._matchOptions,
      plugins: this._plugins
    });
    if (r) {
      0;
    } else {
      0;
      try {
        r = await this._getFromNetwork(e, t);
      } catch (t) {
        n = t;
      }
      0;
    }
    if (!r) {
      throw new o("no-response", {
        url: e.url,
        error: n
      });
    }
    return r;
  }
  async _getFromNetwork(t, e) {
    const n = await v({
      request: t,
      event: e,
      fetchOptions: this._fetchOptions,
      plugins: this._plugins
    });
    const r = n.clone();
    const o = p({
      cacheName: this._cacheName,
      request: t,
      response: r,
      event: e,
      plugins: this._plugins
    });
    if (e) {
      try {
        e.waitUntil(o);
      } catch (t) {
        0;
      }
    }
    return n;
  }
}
const I = {
  cacheWillUpdate: async ({
    response: t
  }) => t.status === 200 || t.status === 0 ? t : null
};
class A {
  constructor(t = {}) {
    this._cacheName = c(t.cacheName);
    this._plugins = t.plugins || [];
    if (t.plugins) {
      const e = t.plugins.some(t => !!t.cacheWillUpdate);
      this._plugins = e ? t.plugins : [I, ...t.plugins];
    } else {
      this._plugins = [I];
    }
    this._fetchOptions = t.fetchOptions;
    this._matchOptions = t.matchOptions;
  }
  async handle({
    event: t,
    request: e
  }) {
    if (typeof e == "string") {
      e = new Request(e);
    }
    const n = this._getFromNetwork({
      request: e,
      event: t
    });
    let r;
    let i = await d({
      cacheName: this._cacheName,
      request: e,
      event: t,
      matchOptions: this._matchOptions,
      plugins: this._plugins
    });
    if (i) {
      if (t) {
        try {
          t.waitUntil(n);
        } catch (r) {
          0;
        }
      }
    } else {
      0;
      try {
        i = await n;
      } catch (t) {
        r = t;
      }
    }
    if (!i) {
      throw new o("no-response", {
        url: e.url,
        error: r
      });
    }
    return i;
  }
  async _getFromNetwork({
    request: t,
    event: e
  }) {
    const n = await v({
      request: t,
      event: e,
      fetchOptions: this._fetchOptions,
      plugins: this._plugins
    });
    const r = p({
      cacheName: this._cacheName,
      request: t,
      response: n.clone(),
      event: e,
      plugins: this._plugins
    });
    if (e) {
      try {
        e.waitUntil(r);
      } catch (t) {
        0;
      }
    }
    return n;
  }
}
require("./59.js");
const N = t => {
  const e = new URL(t, location.href);
  e.hash = "";
  return e.href;
};
class j {
  constructor(t) {
    this._cacheName = t;
    this._db = new m("workbox-expiration", 1, {
      onupgradeneeded: t => this._handleUpgrade(t)
    });
  }
  _handleUpgrade(t) {
    const e = t.target.result.createObjectStore("cache-entries", {
      keyPath: "id"
    });
    e.createIndex("cacheName", "cacheName", {
      unique: false
    });
    e.createIndex("timestamp", "timestamp", {
      unique: false
    });
    (async t => {
      await new Promise((e, n) => {
        const r = indexedDB.deleteDatabase(t);
        r.onerror = () => {
          n(r.error);
        };
        r.onblocked = () => {
          n(new Error("Delete blocked"));
        };
        r.onsuccess = () => {
          e();
        };
      });
    })(this._cacheName);
  }
  async setTimestamp(t, e) {
    const n = {
      url: t = N(t),
      timestamp: e,
      cacheName: this._cacheName,
      id: this._getId(t)
    };
    await this._db.put("cache-entries", n);
  }
  async getTimestamp(t) {
    return (await this._db.get("cache-entries", this._getId(t))).timestamp;
  }
  async expireEntries(t, e) {
    const n = await this._db.transaction("cache-entries", "readwrite", (n, r) => {
      const o = n.objectStore("cache-entries").index("timestamp").openCursor(null, "prev");
      const i = [];
      let s = 0;
      o.onsuccess = () => {
        const n = o.result;
        if (n) {
          const r = n.value;
          if (r.cacheName === this._cacheName) {
            if (t && r.timestamp < t || e && s >= e) {
              i.push(n.value);
            } else {
              s++;
            }
          }
          n.continue();
        } else {
          r(i);
        }
      };
    });
    const r = [];
    for (const t of n) {
      await this._db.delete("cache-entries", t.id);
      r.push(t.url);
    }
    return r;
  }
  _getId(t) {
    return this._cacheName + "|" + N(t);
  }
}
class D {
  constructor(t, e = {}) {
    this._isRunning = false;
    this._rerunRequested = false;
    this._maxEntries = e.maxEntries;
    this._maxAgeSeconds = e.maxAgeSeconds;
    this._cacheName = t;
    this._timestampModel = new j(t);
  }
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = true;
      return;
    }
    this._isRunning = true;
    const t = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1000 : 0;
    const e = await this._timestampModel.expireEntries(t, this._maxEntries);
    const n = await self.caches.open(this._cacheName);
    for (const t of e) {
      await n.delete(t);
    }
    this._isRunning = false;
    if (this._rerunRequested) {
      this._rerunRequested = false;
      y(this.expireEntries());
    }
  }
  async updateTimestamp(t) {
    await this._timestampModel.setTimestamp(t, Date.now());
  }
  async isURLExpired(t) {
    if (this._maxAgeSeconds) {
      return (await this._timestampModel.getTimestamp(t)) < Date.now() - this._maxAgeSeconds * 1000;
    }
    return false;
  }
  async delete() {
    this._rerunRequested = false;
    await this._timestampModel.expireEntries(Infinity);
  }
}
class C {
  constructor(t = {}) {
    var e;
    this.cachedResponseWillBeUsed = async ({
      event: t,
      request: e,
      cacheName: n,
      cachedResponse: r
    }) => {
      if (!r) {
        return null;
      }
      const o = this._isResponseDateFresh(r);
      const i = this._getCacheExpiration(n);
      y(i.expireEntries());
      const s = i.updateTimestamp(e.url);
      if (t) {
        try {
          t.waitUntil(s);
        } catch (t) {
          0;
        }
      }
      if (o) {
        return r;
      } else {
        return null;
      }
    };
    this.cacheDidUpdate = async ({
      cacheName: t,
      request: e
    }) => {
      const n = this._getCacheExpiration(t);
      await n.updateTimestamp(e.url);
      await n.expireEntries();
    };
    this._config = t;
    this._maxAgeSeconds = t.maxAgeSeconds;
    this._cacheExpirations = new Map();
    if (t.purgeOnQuotaError) {
      e = () => this.deleteCacheAndMetadata();
      i.add(e);
    }
  }
  _getCacheExpiration(t) {
    if (t === c()) {
      throw new o("expire-custom-caches-only");
    }
    let e = this._cacheExpirations.get(t);
    if (!e) {
      e = new D(t, this._config);
      this._cacheExpirations.set(t, e);
    }
    return e;
  }
  _isResponseDateFresh(t) {
    if (!this._maxAgeSeconds) {
      return true;
    }
    const e = this._getDateHeaderTimestamp(t);
    if (e === null) {
      return true;
    }
    return e >= Date.now() - this._maxAgeSeconds * 1000;
  }
  _getDateHeaderTimestamp(t) {
    if (!t.headers.has("date")) {
      return null;
    }
    const e = t.headers.get("date");
    const n = new Date(e).getTime();
    if (isNaN(n)) {
      return null;
    } else {
      return n;
    }
  }
  async deleteCacheAndMetadata() {
    for (const [t, e] of this._cacheExpirations) {
      await self.caches.delete(t);
      await e.delete();
    }
    this._cacheExpirations = new Map();
  }
}
require("./105.js");
class P {
  constructor(t = {}) {
    this._statuses = t.statuses;
    this._headers = t.headers;
  }
  isResponseCacheable(t) {
    let e = true;
    if (this._statuses) {
      e = this._statuses.includes(t.status);
    }
    if (this._headers && e) {
      e = Object.keys(this._headers).some(e => t.headers.get(e) === this._headers[e]);
    }
    return e;
  }
}
class k {
  constructor(t) {
    this.cacheWillUpdate = async ({
      response: t
    }) => this._cacheableResponse.isResponseCacheable(t) ? t : null;
    this._cacheableResponse = new P(t);
  }
}
self.__WB_DISABLE_DEV_LOGS = true;
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
const R = [new C({
  maxAgeSeconds: 3600
}), new k({
  statuses: [200],
  headers: {
    "i-success": "true"
  }
})];
const L = [new C({
  maxAgeSeconds: 604800
}), new k({
  statuses: [200],
  headers: {
    "i-success": "true"
  }
})];
var M;
O(({
  url: t
}) => t.pathname === "/get_concat_info", new S({
  cacheName: "infinity-api",
  plugins: R
}));
O(({
  url: t
}) => t.pathname === "/v2/get_ext_version", new S({
  cacheName: "infinity-api",
  plugins: R
}));
O(({
  url: t
}) => t.pathname === "/v2/get_user_wallpaper_library", new class {
  constructor(t = {}) {
    this._cacheName = c(t.cacheName);
    if (t.plugins) {
      const e = t.plugins.some(t => !!t.cacheWillUpdate);
      this._plugins = e ? t.plugins : [I, ...t.plugins];
    } else {
      this._plugins = [I];
    }
    this._networkTimeoutSeconds = t.networkTimeoutSeconds || 0;
    this._fetchOptions = t.fetchOptions;
    this._matchOptions = t.matchOptions;
  }
  async handle({
    event: t,
    request: e
  }) {
    const n = [];
    if (typeof e == "string") {
      e = new Request(e);
    }
    const r = [];
    let i;
    if (this._networkTimeoutSeconds) {
      const {
        id: o,
        promise: s
      } = this._getTimeoutPromise({
        request: e,
        event: t,
        logs: n
      });
      i = o;
      r.push(s);
    }
    const s = this._getNetworkPromise({
      timeoutId: i,
      request: e,
      event: t,
      logs: n
    });
    r.push(s);
    let a = await Promise.race(r);
    a ||= await s;
    if (!a) {
      throw new o("no-response", {
        url: e.url
      });
    }
    return a;
  }
  _getTimeoutPromise({
    request: t,
    logs: e,
    event: n
  }) {
    let r;
    return {
      promise: new Promise(e => {
        r = setTimeout(async () => {
          e(await this._respondFromCache({
            request: t,
            event: n
          }));
        }, this._networkTimeoutSeconds * 1000);
      }),
      id: r
    };
  }
  async _getNetworkPromise({
    timeoutId: t,
    request: e,
    logs: n,
    event: r
  }) {
    let o;
    let i;
    try {
      i = await v({
        request: e,
        event: r,
        fetchOptions: this._fetchOptions,
        plugins: this._plugins
      });
    } catch (t) {
      o = t;
    }
    if (t) {
      clearTimeout(t);
    }
    if (o || !i) {
      i = await this._respondFromCache({
        request: e,
        event: r
      });
    } else {
      const t = i.clone();
      const n = p({
        cacheName: this._cacheName,
        request: e,
        response: t,
        event: r,
        plugins: this._plugins
      });
      if (r) {
        try {
          r.waitUntil(n);
        } catch (t) {
          0;
        }
      }
    }
    return i;
  }
  _respondFromCache({
    event: t,
    request: e
  }) {
    return d({
      cacheName: this._cacheName,
      request: e,
      event: t,
      matchOptions: this._matchOptions,
      plugins: this._plugins
    });
  }
}({
  cacheName: "infinity-api",
  plugins: L
}));
O(({
  url: t
}) => t.pathname === "/get-wallpaper", new A({
  cacheName: "infinity-wallpaper-list"
}));
O(({
  url: t
}) => t.pathname === "/get-icons", new A({
  cacheName: "infinity-data-api"
}));
O(({
  url: t
}) => ["/api/chat/list", "/api/chat/recommended", "/api/chat/assistant-list", "/api/chat-pay/vip-group"].includes(t.pathname), new S({
  cacheName: "req-data-api",
  plugins: (M = 600, [new C({
    maxAgeSeconds: M,
    maxEntries: 10
  }), new k({
    statuses: [200],
    headers: {
      "i-success": "true"
    }
  })]),
  fetchOptions: {
    mode: "cors",
    credentials: "omit"
  }
}));