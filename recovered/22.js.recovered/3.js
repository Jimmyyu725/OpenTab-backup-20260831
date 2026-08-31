require("./19.js");
require(/*webcrack:missing*/"./7.js");
var r = require("./5.js");
var i = r;
var o = require("./107.js");
var s = o;
var _a = require("./0.js");
var c = require("./50.js");
var u = require("./13.js");
const l = s.create({
  timeout: 30000
});
let h = false;
const p = [];
const f = () => new i(async (t, e) => {
  p.push({
    resolve: t,
    reject: e
  });
  if (!h) {
    h = true;
    try {
      let t;
      if (c.a) {
        const e = _a.l && window.updateFromThirtyFiveStatus;
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
        h = false;
        p.forEach(t => {
          t.reject(new Error("no refreshtoken"));
        });
        return;
      }
      const {
        status: r,
        data: i
      } = await l.post(_a.y + "/refresh_token", {
        refresh_token: e
      }, {
        headers: {
          "i-lang": _a.C.lang
        }
      });
      if (r === 200 && i.code === 0) {
        const {
          token: e,
          refreshToken: n
        } = i.data;
        t.setToken(i.data);
        t.setRefreshToken(n);
        h = false;
        p.forEach(t => {
          t.resolve(e);
        });
      } else {
        if (r !== 200 || i.code !== 3010 && i.code !== 3012) {
          throw new Error(i == null ? undefined : i.message);
        }
        t.setOutdated();
        h = false;
        p.forEach(t => {
          t.reject(i.message);
        });
      }
    } catch (t) {
      h = false;
      p.forEach(e => {
        e.reject(t);
      });
    }
  }
});
var d = require("./24.js");
const g = ["params", "data", "_auth"];
const m = async t => {
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
      if (!g.includes(r)) {
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
const y = s.CancelToken;
const _b = s.create({
  timeout: 60000
});
_b.interceptors.response.use(null, t => {
  t.message = i18n("network_error");
  return i.reject(t);
});
const v = Object.create(null);
export const b = t => {
  if (v[t]) {
    v[t]();
  }
};
export const a = async t => {
  if (t._single) {
    const e = (t => {
      let e;
      e = t._single === true ? t.method + "-" + t.url.split("?")[0] : t._single;
      return e;
    })(t);
    if (v[e]) {
      v[e]();
    }
    t.cancelToken = new y(t => {
      v[e] = t;
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
      const t = _a.l && window.updateFromThirtyFiveStatus;
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
        const t = await f();
        r.Authorization = "Bearer " + t;
        r["i-token"] = "Bearer " + t;
      } else {
        r.Authorization = "Bearer " + e.token;
        r["i-token"] = "Bearer " + e.token;
      }
    }
  }
  let o;
  if (t.url.includes(_a.y)) {
    r["i-lang"] = _a.C.lang;
    r["i-edition"] = _a.e;
    r["i-version"] = _a.C.extVersion;
  }
  t.headers = Object.assign(Object.assign({}, r), t.headers);
  o = t._proxy ? await m(t) : await _b(t);
  if (t._responseAll) {
    return o;
  }
  let {
    data: s
  } = o;
  if (!t._Authorization && (s == null ? undefined : s.code) === 3010) {
    const e = await f();
    t._Authorization = "Bearer " + e;
    delete t.headers.Authorization;
    delete t.headers["i-token"];
    s = await a(t);
  }
  return s;
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