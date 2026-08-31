var n = require("./3287.js");
var o = n;
var a = require(/*webcrack:missing*/"./4003.js");
var i = require("./2966.js");
var c = i;
var s = require("./1697.js");
var l = s;
var u = require(/*webcrack:missing*/"./2743.js");
var f = require("./4275.js");
var d = require("./7782.js");
var h = require("./1579.js");
const p = function (e, t) {
  if (e == null) {
    return {};
  }
  var r = (0, u.Z)((0, h.Z)(e), function (e) {
    return [e];
  });
  t = (0, f.Z)(t);
  return (0, d.Z)(e, r, function (e, r) {
    return t(e, r[0]);
  });
};
var g = require("./4084.js");
var y = require("./5676.js");
var v = require(/*webcrack:missing*/"./5981.js");
const b = ["https://tiyu.baidu.com/api/match/NBA/live/date"];
const m = Object.create(null);
const w = async (e, t) => {
  const r = new c();
  if (t._single) {
    const n = ((e, t) => {
      let r;
      if (t._single === true) {
        const o = b.find(t => e.indexOf(t) > -1);
        r = o || t.fetchOpts?.method + "-" + e.split("?")[0];
      } else {
        r = t._single;
      }
      return r;
    })(e, t);
    if (m[n]) {
      m[n]();
    }
    m[n] = () => r.abort();
  }
  const {
    adapter: n,
    fetchOpts: o,
    type: a = "json"
  } = t;
  const i = await async function (e, t) {
    const {
      timeout: r = 60000
    } = t;
    return await Promise.race([fetch(e, t), new Promise((e, t) => setTimeout(() => t(new Error("timeout")), r))]);
  }(e, {
    ...o,
    signal: r.signal
  });
  if (i.status < 200 || i.status >= 300) {
    throw i;
  }
  let s;
  if (a === "json") {
    s = await i.json();
  } else if (a === "text") {
    s = await i.text();
  }
  if (n) {
    return n(s);
  } else {
    return s;
  }
};
w.get = (e, t, r) => {
  const n = `${e}${t ? `${e.includes("?") ? "&" : "?"}${new URLSearchParams(p(t, g.Z)).toString()}` : ""}`;
  return w(n, {
    ...r,
    fetchOpts: {
      ...(r == null ? undefined : r.fetchOpts),
      method: "GET"
    }
  });
};
var _ = require(/*webcrack:missing*/"./1785.js");
o.register({
  responseError: function (e) {
    return Promise.reject(e);
  },
  request: function (e, t) {
    if (!!t && t.method === "post" && !((t == null ? undefined : t.body) instanceof FormData)) {
      t.headers["Content-Type"] = "application/json;charset=UTF-8";
    }
    return [e, t];
  }
});
const k = {};
const A = Object.create(null);
export const hj = async (e, t) => {
  const r = new c();
  if (t._single) {
    const n = ((e, t) => {
      let r;
      r = t._single === true ? t.fetchOpts?.method + "-" + e.split("?")[0] : t._single;
      return r;
    })(e, t);
    if (A[n]) {
      A[n]();
    }
    A[n] = () => r.abort();
  }
  var n;
  if (t._delay) {
    await (n = t._delay, new Promise(e => {
      setTimeout(e, n);
    }));
  }
  const o = {
    "i-app": "hitab",
    "i-lang": window.i18nLangCode,
    "i-version": a.Ji,
    "i-branch": a.s8 ? "en" : "zh",
    "i-platform": a.Lt
  };
  if (t._auth) {
    const e = (0, y.useUserStore)();
    if (!e.token) {
      if (a.EF) {
        (0, _.bc)({
          type: _.o1.needLogin
        });
      } else {
        v.R.warn({
          message: i18n("此功能需要先登录"),
          btnText: i18n("去登录"),
          onBtnClick: () => {
            e.showLogin(false);
          }
        });
      }
      throw new Error("auth empty token");
    }
    o.Authorization = "Bearer " + e.token;
  }
  let i;
  t.fetchOpts ||= {
    headers: {}
  };
  t.fetchOpts.headers ||= {};
  Object.assign(t.fetchOpts.headers, o);
  i = await x(e, {
    ...t.fetchOpts,
    signal: r.signal,
    timeout: t.timeout
  }, r);
  if (i.status < 200 || i.status >= 300) {
    throw i;
  }
  if (t._responseAll) {
    return i;
  }
  if (t._stream) {
    const e = i.headers.get("content-type");
    if (e != null && e.includes("text/event-stream")) {
      return [i.body, null, r];
    }
    return [null, await i.json(), r];
  }
  let s = await i.json();
  var p;
  if (!t._Authorization) {
    if (s?.code === 4002 || s?.code === 4014) {
      if (a.EF) {
        (0, _.bc)({
          type: _.o1.needLogin
        });
      } else {
        const r = await function () {
          let e = false;
          const t = [];
          return new Promise(async (r, n) => {
            t.push({
              resolve: r,
              reject: n
            });
            if (!e) {
              e = true;
              try {
                const r = await async function () {
                  true;
                  return (0, y.useUserStore)();
                }();
                const {
                  refreshToken: n
                } = r;
                if (!n) {
                  e = false;
                  t.forEach(e => {
                    e.reject(new Error("no refreshtoken"));
                  });
                  return;
                }
                const o = await x(`${a.H}user/refreshtoken`, {
                  method: "post",
                  body: JSON.stringify({
                    refreshtoken: n
                  }),
                  headers: {
                    "i-app": "hitab",
                    "i-lang": window.i18nLangCode,
                    "i-version": a.Ji,
                    "i-branch": a.s8 ? "en" : "zh"
                  }
                });
                const i = await o.json();
                if (o.status !== 200 && o.status !== 201 || i.code !== 0) {
                  if (o.status !== 200 && o.status !== 201) {
                    throw new Error(i == null ? undefined : i.message);
                  }
                  if ((i == null ? undefined : i.code) === 4007 || (i == null ? undefined : i.code) === 4004) {
                    C(true);
                  } else {
                    if ((i == null ? undefined : i.code) !== 4003 && (i == null ? undefined : i.code) !== 4002) {
                      throw new Error(i == null ? undefined : i.message);
                    }
                    if (!a.EF) {
                      C();
                    }
                  }
                  e = false;
                  t.forEach(e => {
                    e.reject(i.message);
                  });
                } else {
                  (async function (e) {
                    (0, y.useUserStore)().updateTokens(e);
                  })(i.data);
                  e = false;
                  t.forEach(e => {
                    e.resolve(i.data.token);
                  });
                }
              } catch (r) {
                e = false;
                t.forEach(e => {
                  e.reject(r);
                });
              }
            }
          });
        }();
        t._Authorization = `Bearer ${r}`;
        delete o.Authorization;
        s = await hj(e, t);
      }
    } else if (s?.code === 4007 || s?.code === 4004) {
      C(true);
    } else if (s?.code === 4003) {
      C();
    } else if ((p = s) !== null && p !== undefined) {
      p.code;
    }
  }
  return s;
};
async function C(e = false) {
  const {
    useUserStore: t
  } = await Promise.resolve().then(require.bind(require, 5676));
  t().showLogin(e);
}
async function x(e, t, r) {
  const {
    timeout: n = 60000
  } = t;
  let o = null;
  const a = await Promise.race([fetch(e, t), new Promise((e, t) => {
    o = window.setTimeout(() => {
      t(new Error("timeout"));
      if (r) {
        r.abort();
      }
    }, n);
  })]);
  if (o) {
    clearTimeout(o);
  }
  return a;
}
["get", "delete"].forEach(e => {
  hj[e] = function (t, r, n = {}) {
    const o = `${t}${r ? `${t.includes("?") ? "&" : "?"}${new URLSearchParams(p(r, g.Z)).toString()}` : ""}`;
    const a = k[e + o];
    if (a) {
      return w.get(a);
    } else {
      return hj(o, {
        ...n,
        fetchOpts: {
          method: e,
          ...n.fetchOpts
        }
      });
    }
  };
});
["post", "patch", "put"].forEach(e => {
  hj[e] = function (t, r) {
    let n;
    let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    n = r instanceof FormData ? r : JSON.stringify(r);
    return hj(t, {
      ...o,
      fetchOpts: {
        body: n,
        method: e,
        ...o.fetchOpts
      }
    });
  };
});
hj.jsonp = (e, t, r) => l(`${e}${t ? `?${new URLSearchParams(p(t, g.Z)).toString()}` : ""}`, r);