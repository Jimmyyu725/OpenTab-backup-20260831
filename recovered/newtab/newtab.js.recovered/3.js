require("./19.js");
require("./7.js");
var r = require("./5.js");
var i = r;
var o = require("./107.js");
var _a = o;
var s = require("./0.js");
var c = require("./50.js");
var u = require("./13.js");
const l = _a.create({
  timeout: 30000
});
let f = false;
const h = [];
const p = () => new i(async (t, e) => {
  h.push({
    resolve: t,
    reject: e
  });
  if (!f) {
    f = true;
    try {
      let t;
      if (c.a) {
        const e = s.l && window.updateFromThirtyFiveStatus;
        const {
          data: n
        } = await u.l.read(e ? "localstorage" : null);
        t = n;
      } else {
        t = (await Promise.all([require.e(0), require.e(1), require.e(2), require.e(6)]).then(require.bind(null, 429))).userStore;
      }
      const {
        refreshToken: e
      } = t;
      if (!e) {
        t.setOutdated();
        f = false;
        h.forEach(t => {
          t.reject(new Error("no refreshtoken"));
        });
        return;
      }
      const {
        status: r,
        data: i
      } = await l.post(s.y + "/refresh_token", {
        refresh_token: e
      }, {
        headers: {
          "i-lang": s.C.lang
        }
      });
      if (r === 200 && i.code === 0) {
        const {
          token: e,
          refreshToken: n
        } = i.data;
        t.setToken(i.data);
        t.setRefreshToken(n);
        f = false;
        h.forEach(t => {
          t.resolve(e);
        });
      } else {
        if (r !== 200 || i.code !== 3010 && i.code !== 3012) {
          throw new Error(i == null ? undefined : i.message);
        }
        t.setOutdated();
        f = false;
        h.forEach(t => {
          t.reject(i.message);
        });
      }
    } catch (t) {
      f = false;
      h.forEach(e => {
        e.reject(t);
      });
    }
  }
});
var d = require("./24.js");
const m = ["params", "data", "_auth"];
const g = async t => {
  const {
    slave: e
  } = await require.e(9).then(require.bind(null, 161));
  const r = ((t, e = {}) => {
    const n = Object.keys(e).map(t => `${t}=${encodeURIComponent(e[t])}`);
    if (n.length) {
      if (t.includes("?")) {
        return t + n.join("&");
      } else {
        return t + "?" + n.join("&");
      }
    } else {
      return t;
    }
  })(t.url, t.params);
  const {
    request: i,
    option: o
  } = (t => {
    const e = {};
    const n = {};
    if (t.data && !e.body) {
      e.body = JSON.stringify(t.data);
    }
    Object.keys(t).forEach(r => {
      if (!m.includes(r)) {
        if (r.startsWith("_")) {
          n[r] = t[r];
        } else {
          e[r] = t[r];
        }
      }
    });
    return {
      request: e,
      option: n
    };
  })(t);
  return e.postTask("slave:fetch", {
    url: r,
    request: i,
    option: o
  });
};
const y = _a.CancelToken;
const _b = _a.create({
  timeout: 60000
});
_b.interceptors.response.use(null, t => {
  t.message = i18n("network_error");
  return i.reject(t);
});
const w = Object.create(null);
export const b = t => {
  if (w[t]) {
    w[t]();
  }
};
export const a = async t => {
  if (t._single) {
    const e = (t => {
      let e;
      e = t._single === true ? t.method + "-" + t.url.split("?")[0] : t._single;
      return e;
    })(t);
    if (w[e]) {
      w[e]();
    }
    t.cancelToken = new y(t => {
      w[e] = t;
    });
  }
  var e;
  if (t._delay) {
    await (e = t._delay, new i(t => {
      setTimeout(t, e);
    }));
  }
  const r = {};
  if (t._auth) {
    let e = null;
    if (c.a) {
      const t = s.l && window.updateFromThirtyFiveStatus;
      const {
        data: n
      } = await u.l.read(t ? "localstorage" : null);
      e = n;
    } else {
      const {
        userStore: t
      } = await Promise.all([require.e(0), require.e(1), require.e(2), require.e(6)]).then(require.bind(null, 429));
      e = t;
    }
    if (!e || !e.token) {
      throw new Error("error token");
    }
    {
      const n = d.a.parseJwt(e.token);
      const i = await d.a.getTimestamp();
      if (t._Authorization) {
        r.Authorization = t._Authorization;
        r["i-token"] = t._Authorization;
      } else if (Math.floor(i / 1000) > n.exp - 60) {
        const t = await p();
        r.Authorization = "Bearer " + t;
        r["i-token"] = "Bearer " + t;
      } else {
        r.Authorization = "Bearer " + e.token;
        r["i-token"] = "Bearer " + e.token;
      }
    }
  }
  let o;
  if (t.url.includes(s.y)) {
    r["i-lang"] = s.C.lang;
    r["i-edition"] = s.e;
    r["i-version"] = s.C.extVersion;
  }
  t.headers = Object.assign(Object.assign({}, r), t.headers);
  o = t._proxy ? await g(t) : await _b(t);
  if (t._responseAll) {
    return o;
  }
  let {
    data: _a2
  } = o;
  if (!t._Authorization && (_a2 == null ? undefined : _a2.code) === 3010) {
    const e = await p();
    t._Authorization = "Bearer " + e;
    delete t.headers.Authorization;
    delete t.headers["i-token"];
    _a2 = await a(t);
  }
  return _a2;
};
["get", "delete"].forEach(t => {
  a[t] = (e, n, r = {}) => a(Object.assign({
    url: e,
    params: n,
    method: t
  }, r));
});
["post", "patch", "put"].forEach(t => {
  a[t] = (e, n, r = {}) => a(Object.assign({
    url: e,
    data: n,
    method: t
  }, r));
});
a.jsonp = (t, e, n = {}) => a(Object.assign({
  url: t,
  params: e
}, n));