export var h = {};
export var c = {};
export var a = {};
export var f = {};
export var b = {};
export var d = {};
require("./7.js");
import * as u from "./0.js";
import * as l from "./3.js";
export const getLocalCity = async () => {
  try {
    const t = await l.a.get(u.A + "/city/locate", {
      lang: u.C.lang
    }, {
      timeout: 10000
    });
    if (t && t.city) {
      return {
        data: t.city
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getForecastWeather = async t => {
  try {
    return {
      data: (await l.a.get(u.A + "/weather/forecast", {
        lang: u.C.lang,
        cid: t
      }, {
        timeout: 10000
      })).forecast
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getCityList = async t => {
  try {
    return {
      data: await l.a.get(u.A + "/city/list", {
        lang: u.C.lang,
        searchkey: t
      }, {
        timeout: 10000
      })
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
require("./19.js");
import * as _d from "./24.js";
import * as m from "./82.js";
var _g = m;
import * as y from "./306.js";
var _b = y;
export const getSearchSuggest = async t => u.C.isZh ? u.h || u.s ? E(t) : T(t) : u.h || u.s ? x(t) : I(t);
export const getEnginesList = async t => {
  let e = u.q ? 600000 : 60000;
  if (!t) {
    e = 0;
  }
  try {
    if (!_d.a.requestFirefoxThrottle("/search/list-tn", e, true)) {
      return {
        error: "request throttle error"
      };
    }
    const n = await l.a.get(u.y + "/search/list-tn", {
      lang: u.C.lang,
      platform: u.C.platform,
      platformVersion: u.C.platformVersion,
      edition: u.e,
      maybe360: u.G,
      version: t || "" + Date.now()
    });
    if (n.code === 0) {
      const t = n.data.map(t => {
        const e = {
          name: t.name,
          uuid: t.seId,
          logo: t.logo,
          desc: t.desc,
          types: t.types,
          hide: t.hide,
          searchParams: t.searchParams
        };
        return e;
      });
      _d.a.requestFirefoxThrottle("/search/list-tn", true, true);
      return {
        data: {
          list: t,
          hash: _g(JSON.stringify(t)),
          meta: n.meta
        }
      };
    }
    if (n.code === 2005) {
      _d.a.requestFirefoxThrottle("/search/list-tn", true, true);
      return {
        error: n
      };
    }
    throw n;
  } catch (t) {
    return {
      error: t
    };
  }
};
const _ = _d.a.getLastReqValue(l.a.jsonp);
const E = async t => {
  var e;
  try {
    const n = await _(u.b + "/su?ie=utf-8&p=3", {
      wd: t
    }, {
      adapter: _b,
      callbackParamName: "cb"
    });
    return {
      data: ((e = n == null ? undefined : n.s) === null || e === undefined ? undefined : e.map(t => ({
        text: t
      }))) || []
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
const x = async t => {
  try {
    const n = await _(u.g + "/complete/search?client=chrome", {
      q: t
    }, {
      adapter: _b,
      callbackParamName: "jsonp"
    });
    return {
      data: (n == null ? undefined : n.length) && n[1]?.length ? n[1].map(t => ({
        text: t
      })) : []
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
const T = async t => {
  try {
    const e = await l.a.get(u.b + "/su?p=3&ie=UTF-8&cb=", {
      wd: t
    }, {
      _single: true,
      _delay: 0
    });
    const n = /s:(\[[\w\W]*\])/.exec(e);
    const r = JSON.parse(n[1]);
    return {
      data: r.map(t => ({
        text: t
      }))
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
const I = async t => {
  try {
    const e = await l.a.get(u.g + "/complete/search?client=chrome", {
      q: t
    }, {
      _single: true,
      _delay: 200
    });
    return {
      data: e[2].map((t, n) => {
        t ||= e[1][n];
        return {
          text: t
        };
      })
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
export var g = require("./165.js");
import * as S from "./5.js";
var A = S;
require("./64.js");
const N = u.C.lang;
export const getIcon = async ({
  page: t = 0,
  type: e,
  keyword: n,
  source: r
} = {}) => {
  try {
    const i = await l.a.get(u.w + "/get-icons", {
      lang: N,
      page: t,
      type: e,
      source: r,
      keyword: n,
      version: u.l ? u.z : ""
    }, {
      _single: true,
      _delay: 200
    });
    if (i.success) {
      i.icons.forEach(t => {
        if (t.source === "infinity") {
          if (t.url === "infinity://wallpaper") {
            t.name = "wallpaper_library";
          }
          switch (t.url) {
            case "infinity://wallpaper":
            case "infinity://weather":
            case "infinity://todos":
            case "infinity://notes":
            case "infinity://history":
            case "infinity://bookmarks":
            case "infinity://settings":
              t.name = i18n(t.name);
              t.description = i18n(t.description);
              break;
            case "infinity://extension":
              t.name = i18n(t.name);
              t.description = i18n(t.description, u.C.vendor);
          }
        }
        t._footer = t.description || i18n("no_description");
      });
      return {
        data: i
      };
    }
    throw i;
  } catch (t) {
    return {
      error: t
    };
  }
};
const C = async t => {
  try {
    const e = await l.a.get(u.y + "/icon/title", {
      url: t
    }, {
      _single: true,
      _delay: 0,
      timeout: 3000
    });
    if (e.code === 0) {
      return {
        data: {
          name: e.data.title
        }
      };
    }
    throw e;
  } catch (t) {
    return {
      error: t
    };
  }
};
const D = /<title[^>]*>\s*(.*)\s*<\/title>/;
export const getUrlInfoWithPermission = t => window.__INFINITY__.hasAllUrlPermission ? new A(async e => {
  let n = 0;
  C(t).then(t => {
    n += 1;
    if (!t.error || n === 2) {
      e(t);
    }
  });
  (async t => {
    try {
      const e = await l.a.get(t, {}, {
        _single: "getUrlInfoFromFE",
        timeout: 3000,
        responseType: "text",
        _responseAll: true
      });
      const n = e.data;
      if (n && e.status >= 200 && e.status < 300) {
        const t = n.indexOf("<title");
        if (t > 0) {
          const e = n.slice(t, t + 200);
          const r = D.exec(e);
          const i = r == null ? undefined : r[1];
          if (i) {
            return {
              data: {
                name: i
              }
            };
          }
        }
      }
      return {
        error: "error"
      };
    } catch (t) {
      return {
        error: t
      };
    }
  })(t).then(t => {
    n += 1;
    if (!t.error || n === 2) {
      e(t);
    }
  });
}) : new A(async e => {
  e(await C(t));
});
const R = (t, e) => {
  if (e.length === 0) {
    return e;
  }
  const n = new Map();
  const r = [];
  t.forEach((t, e) => {
    n.set(t, e);
  });
  e.forEach(t => {
    const e = n.get(t);
    r[e] = t;
  });
  return r.filter(t => !!t);
};
const L = t => new A(e => {
  const n = () => {
    const e = R(t, o);
    const n = R(t, a);
    const r = R(t, s);
    return e.concat(n, r);
  };
  const r = t.length;
  let i = 0;
  const o = [];
  const a = [];
  const s = [];
  t.forEach(t => {
    const c = new Image();
    c.onload = function () {
      i += 1;
      const {
        width: c,
        height: u
      } = this;
      const l = Math.max(c, u);
      const f = Math.min(c, u);
      if (l / f < 5) {
        if (f > 50 && l > 100) {
          o.push(t);
        } else if (f > 50 || l > 100) {
          a.push(t);
        } else {
          s.push(t);
        }
      } else {
        s.push(t);
      }
      if (i === r) {
        e(n());
      }
    };
    c.onerror = () => {
      i += 1;
      if (i === r) {
        e(n());
      }
    };
    c.src = t;
  });
  setTimeout(() => {
    e(n());
  }, 3000);
});
const P = /\.(ico|png|jpg|jpeg|svg|webp)$/;
export const getUrlIcon = async t => {
  try {
    if (t.startsWith("infinity://")) {
      return {
        data: []
      };
    }
    const n = await l.a.get(t, {}, {
      _single: "getUrlIcon",
      _delay: 100,
      timeout: 3000,
      responseType: "text",
      _responseAll: true
    });
    const r = n.data;
    if (r && n.status >= 200 && n.status < 300) {
      const i = n.request?.responseURL || t;
      let o = ((t, e) => {
        const n = [];
        e.replace(/<link [^>]*href=['"]([^'"]+)[^>]*/gi, (t, e) => {
          n.push(e);
        });
        return n.reduce((e, n) => {
          if (n && P.test(n)) {
            const r = new URL(n, t);
            e.push(r.href);
          }
          return e;
        }, []);
      })(i, r);
      if (o.length < 6) {
        const t = ((t, e) => {
          const n = [];
          e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*/gi, (t, e) => {
            n.push(e);
          });
          return n.reduce((e, n) => {
            if (n && P.test(n)) {
              const r = new URL(n, t);
              e.push(r.href);
            }
            return e;
          }, []);
        })(i, r);
        o = o.concat(t);
      }
      if (o.length > 4) {
        o.length = 4;
      }
      let a = await L(o);
      a = Array.from(new Set(a));
      if (a.length > 2) {
        a.length = 2;
      }
      return {
        data: a
      };
    }
    return {
      error: ""
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getFetchiconUrls = async t => {
  try {
    const {
      host: e
    } = new URL(t);
    const n = await l.a.get(u.y + "/icon/get_icon_urls", {
      host: e
    });
    if (n.code !== 0) {
      return {
        error: n
      };
    } else {
      return {
        data: n.data.map(t => t.url)
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getLogoList = async t => {
  try {
    const {
      host: e
    } = new URL(t);
    if (!e.includes(".")) {
      return {
        data: []
      };
    }
    const n = await l.a.get(u.y + "/icon/get_logo_list", {
      host: e,
      limit: 2
    }, {
      _single: true,
      _delay: 100
    });
    if (n.code !== 0) {
      return {
        error: n
      };
    } else {
      return {
        data: n.data.map(t => t.src)
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
};
require("./248.js");
import * as B from "./13.js";
export const register = async ({
  email: t,
  password: e,
  repeatPassword: n,
  code: r
}) => {
  const i = {
    email: t.trim(),
    password: _g(e),
    repeatPassword: _g(n),
    code: r.trim()
  };
  try {
    return await l.a.post(u.y + "/user/register", i);
  } catch (t) {
    return t;
  }
};
export const login = async ({
  email: t,
  password: e,
  phone_number: n
}) => {
  const r = {
    email: t ? t.trim() : undefined,
    phone_number: n ? n.trim() : undefined,
    password: _g(e)
  };
  try {
    return await l.a.post(u.y + "/user/login", r);
  } catch (t) {
    return t;
  }
};
export async function updateProfile(t) {
  const {
    data: e
  } = await B.l.read();
  const n = e.userInfo.uid;
  try {
    return await l.a.post(u.y + "/user/update_profile/" + n, t, {
      _auth: true
    });
  } catch (t) {
    throw new Error(t.message);
  }
}
export async function getUserProfile() {
  try {
    return await l.a.get(u.y + "/user/get_user_profile", {}, {
      _auth: true,
      _proxy: true
    });
  } catch (t) {
    return t;
  }
}
export async function uploadAvatar(t) {
  const e = new FormData();
  e.append("file", t);
  try {
    const t = await l.a.post(u.y + "/upload/avatar", e, {
      _auth: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    if ((t == null ? undefined : t.code) === 0) {
      return t;
    }
    throw new Error(i18n("upload_avatar_failure"));
  } catch (t) {
    throw new Error(t);
  }
}
export async function modifyPassword({
  originPassword: t,
  newPassword: e
}) {
  const {
    data: n
  } = await B.l.read();
  const r = n.userInfo.uid;
  const {
    token: i
  } = n;
  if (!i) {
    throw new Error(i18n("unknown_mistake"));
  }
  const o = {
    originPassword: _g(t),
    newPassword: _g(e)
  };
  try {
    return await l.a.post(u.y + "/user/modify_password/" + r, o, {
      _auth: true
    });
  } catch (t) {
    return t;
  }
}
export async function forgetPassword(t) {
  try {
    const e = await l.a.post(u.y + "/user/forget_password", t);
    if (e.code === 0) {
      return {
        data: e.data
      };
    } else {
      return {
        error: e
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function resetPassword({
  password: t,
  repeatPassword: e,
  email: n,
  code: r,
  phone_number: i
}) {
  const o = {
    password: _g(t),
    repeatPassword: _g(e),
    email: n ? n.trim() : undefined,
    code: r.trim(),
    phone_number: i ? i.trim() : undefined
  };
  try {
    return await l.a.post(u.y + "/user/reset_password", o);
  } catch (t) {
    return t;
  }
}
export async function getEmailCode(t) {
  try {
    const e = await l.a.post(`${u.y}/get_code2?lang=${u.C.lang}`, t, {
      withCredentials: true
    });
    if (e.code === 0) {
      return {
        data: e.data
      };
    } else {
      return {
        error: e
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function getRegisterCode(t) {
  try {
    return await l.a.post(`${u.y}/get_register_code2?lang=${u.C.lang}`, t, {
      withCredentials: true
    });
  } catch (t) {
    return t;
  }
}
export async function inspceCode(t) {
  try {
    return await l.a.post(u.y + "/inspce_code", t);
  } catch (t) {
    return t;
  }
}
export async function checkTokenIsExpired() {
  try {
    return await l.a.get(u.y + "/check_token", {}, {
      _auth: true
    });
  } catch (t) {
    return t;
  }
}
export async function deleteAccount() {
  const {
    data: t
  } = await B.l.read();
  const e = t.userInfo.uid;
  try {
    return await l.a.post(u.y + "/user/delete/" + e, {}, {
      _auth: true
    });
  } catch (t) {
    return t;
  }
}
export const loginWithUid = async t => {
  try {
    return await l.a.post(u.y + "/user/login_uid", t, {
      timeout: 10000
    });
  } catch (t) {
    return t;
  }
};
export const v1BasicLogin = async t => {
  try {
    return await l.a.post(u.y + "/user/v1_basic_login", t, {
      timeout: 10000
    });
  } catch (t) {
    return t;
  }
};
export const getMobileUid = async (t, e) => {
  try {
    return await l.a.get(`${u.y}/user/user_hash?uid=${t}&secret=${e}`);
  } catch (t) {
    return t;
  }
};
export const getMobileloginUrl = async () => {
  try {
    const t = await l.a.get(u.y + "/login_code/mobile_code", {}, {
      _auth: true
    });
    if (t.code === 0) {
      return {
        data: t.data
      };
    } else {
      return {
        error: t
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
};
export const checkMobileloginUrl = async (t, e) => {
  try {
    const n = await l.a.post(u.y + "/login_code/check", {
      code: t,
      type: e
    }, {
      _auth: true
    });
    if (n.code === 0) {
      return {
        data: n.data
      };
    } else {
      return {
        error: n
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
};
export async function sendPhoneCode(t) {
  try {
    const e = await l.a.post(u.y + "/phone/send_code", t, {
      withCredentials: true
    });
    if (e.code === 0) {
      return {
        data: e.data
      };
    } else {
      return {
        error: e
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function sendEmailCode(t) {
  try {
    const e = await l.a.post(u.y + "/get_email_bind_code", t, {
      _auth: true,
      withCredentials: true
    });
    if (e.code === 0) {
      return {
        data: e.data
      };
    } else {
      return {
        error: e
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function bindEmail(t) {
  try {
    const e = await l.a.post(u.y + "/bind/email", t, {
      _auth: true
    });
    if (e.code === 0) {
      return {
        data: e.data
      };
    } else {
      return {
        error: e
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function bindPhoneNumber(t) {
  try {
    const e = await l.a.post(u.y + "/bind/phone", t, {
      _auth: true
    });
    if (e.code === 0) {
      return {
        data: e.data
      };
    } else {
      return {
        error: e
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function unbindEmail() {
  try {
    const t = await l.a.post(u.y + "/unbind/email", {}, {
      _auth: true
    });
    if (t.code === 0) {
      return {
        data: t.data
      };
    } else {
      return {
        error: t
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function unbindPhoneNumber() {
  try {
    const t = await l.a.post(u.y + "/unbind/phone", {}, {
      _auth: true
    });
    if (t.code === 0) {
      return {
        data: t.data
      };
    } else {
      return {
        error: t
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function verifyPhoneVCode(t, e) {
  try {
    const n = await l.a.post(u.y + "/phone/verify_code", {
      phone_number: t,
      code: e
    });
    if (n.code === 0) {
      return {
        data: n.data
      };
    } else {
      return {
        error: n
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export var ThirdLoginType;
export async function bindThird(t, e) {
  try {
    const n = await l.a.post(`${u.y}/bind/${t}`, {
      access_code: e
    }, {
      _auth: true
    });
    if (n.code === 0) {
      return {
        data: n.data
      };
    } else {
      return {
        error: n
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function unbindThird(t) {
  try {
    const e = await l.a.post(`${u.y}/unbind/${t}`, {}, {
      _auth: true
    });
    if (e.code === 0) {
      return {
        data: e.data
      };
    } else {
      return {
        error: e
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function getAreaCodeList() {
  try {
    const t = await await l.a.get(u.y + "/phone/area_list");
    if (t.code === 0) {
      return {
        data: t.data
      };
    } else {
      return {
        error: t
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function verifyPassword(t) {
  try {
    const e = await l.a.post(u.y + "/user/verify_password", {
      password: _g(t)
    }, {
      _auth: true
    });
    if (e.code === 0) {
      return {
        data: e.data
      };
    } else {
      return {
        error: e
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
export async function geVerifyTokenImg() {
  try {
    const t = await l.a.get(u.y + "/verify/get_token_img");
    if (t.code === 0) {
      return {
        data: t.data
      };
    } else {
      return {
        error: t
      };
    }
  } catch (t) {
    return {
      error: t
    };
  }
}
(function (t) {
  t.weibo = "weibo";
  t.facebook = "facebook";
  t.google = "google";
  t.wechat = "wechat";
  t.qq = "qq";
})(ThirdLoginType ||= {});
export const getRepairConcat = async () => {
  try {
    const t = await l.a.get(u.y + "/get_concat_info");
    if (t.code === 0) {
      return {
        data: t.data
      };
    }
    throw t;
  } catch (t) {
    return {
      error: t
    };
  }
};
export const postErrorCollect = async (t, e) => {
  try {
    const {
      response: n,
      stack: r,
      config: i
    } = e;
    let o = n || i;
    o &&= JSON.stringify(o, (t, e) => {
      if (e instanceof FormData) {
        const t = {};
        for (const [n, r] of e) {
          t[n] = r;
        }
        return t;
      }
      if (e instanceof File) {
        return {
          lastModified: e.lastModified,
          name: e.name,
          size: e.size,
          type: e.type
        };
      }
      return e;
    });
    let {
      data: a,
      error: s
    } = await B.l.read();
    if (!s && a) {
      const t = ["mobileuid", "avatar", "refreshToken", "secret", "gender", "name"];
      a = JSON.stringify(a, (e, n) => {
        if (!t.includes(e)) {
          return n;
        }
      });
    }
    const c = await l.a.post(u.y + "/collect", {
      type: t,
      user: a,
      stack: r,
      info: o,
      env: Object.assign({}, u.C)
    });
    if (c.code === 0) {
      return {
        data: c.data
      };
    }
    throw c;
  } catch (t) {
    return {
      error: t
    };
  }
};
export const sendLog = async t => {
  await l.a.get(t, undefined, {
    _proxy: true,
    _proxyIgnoreRes: true
  });
};
const _t = t => {
  const e = JSON.stringify(t);
  const n = new TextEncoder().encode(e);
  return new Blob([n], {
    type: "application/json;charset=utf-8"
  });
};
const Et = t => {
  const e = {};
  t.forEach(t => {
    const {
      platform: n
    } = t;
    if (e[n]) {
      e[n].push(t);
    } else {
      e[n] = [t];
    }
  });
  return e;
};
const xt = t => {
  const {
    _id: e,
    _platform: n = "pc"
  } = t;
  return {
    id: e,
    time: _d.a.fmtTime(Number(e)),
    platform: n
  };
};
export const getSyncList = async () => {
  try {
    const t = await l.a.get(u.y + "/sync/list", undefined, {
      _auth: true,
      _proxy: true
    });
    if (t.code !== 0) {
      return {
        error: t
      };
    }
    const e = {};
    e.auto = t.meta.auto.map(xt);
    e.manual = Et(t.meta.manual.map(xt));
    return {
      data: e
    };
  } catch (t) {
    return {
      error: t
    };
  }
};
export const getSyncDetail = async (t, e, n = "all") => {
  try {
    const r = await l.a.get(u.y + "/sync/download_url", {
      id: t,
      type: e,
      keys: n
    }, {
      _auth: true
    });
    if (r.code !== 0) {
      return {
        error: r
      };
    }
    const i = r.data;
    let o = {};
    const a = await A.all(i.map(e => l.a.get(e.url + "&timestampid=" + (t === "latest" ? Date.now() : t), {}, {
      timeout: 180000
    })));
    i.forEach((t, n) => {
      const r = t.fileKey;
      if (e === "manual") {
        o = Object.assign(Object.assign({}, o), a[n]);
      } else if (e === "auto") {
        o[r] = a[n];
      }
    });
    return {
      data: o
    };
  } catch (t) {
    postErrorCollect("getSyncDetail", t);
    return {
      error: t
    };
  }
};
export const autoBackup = async (t, e = "") => {
  const n = Object.keys(t).join(",");
  try {
    const r = await l.a.get(u.y + "/sync/token", {
      type: "auto",
      keys: n
    }, {
      _auth: true
    });
    if (r.code !== 0 || !r.data.length) {
      return {
        error: r
      };
    }
    const i = r.data;
    await A.all(i.map(e => {
      const {
        url: n,
        key: r,
        token: i,
        host: o
      } = e;
      const a = new FormData();
      a.append("token", i);
      a.append("key", n);
      a.append("file", _t(t[r]));
      return l.a.post(o, a, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        timeout: 180000
      });
    }));
    localStorage.setItem("pre-sync-id", i[0].timestamp + "");
    const o = await l.a.post(u.y + "/sync/done", {
      type: "auto",
      websocketkeys: e,
      keys: n,
      record_time: i[0].timestamp
    }, {
      _auth: true
    });
    if (o.code !== 0) {
      return {
        error: o
      };
    } else {
      return {
        data: o.meta.map(xt)
      };
    }
  } catch (t) {
    postErrorCollect("autoBackup", t);
    return {
      error: t
    };
  }
};
export const manualBackup = async t => {
  try {
    const e = await l.a.get(u.y + "/sync/token", {
      type: "manual",
      keys: "data"
    }, {
      _auth: true
    });
    if (e.code !== 0 || !e.data.length) {
      return {
        error: e
      };
    }
    const {
      token: n,
      url: r,
      timestamp: i,
      host: o
    } = e.data[0];
    const a = new FormData();
    a.append("token", n);
    a.append("key", r);
    a.append("file", _t(t));
    await l.a.post(o, a, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      timeout: 180000
    });
    const s = await l.a.post(u.y + "/sync/done", {
      type: "manual",
      keys: "data",
      record_time: i
    }, {
      _auth: true
    });
    if (s.code !== 0) {
      return {
        error: s
      };
    } else {
      return {
        data: Et(s.meta.map(xt))
      };
    }
  } catch (t) {
    postErrorCollect("manualBackup", t);
    return {
      error: t
    };
  }
};
export const getV2DataFromV1 = t => t === "pro" ? async function () {
  try {
    const {
      data: {
        userInfo: t
      }
    } = await B.l.read();
    const {
      uid: e,
      secret: n
    } = t;
    const r = await l.a.get(u.x + "/user/recovery-pro", {
      uid: e,
      secret: n
    }, {
      timeout: 200000
    });
    if (r.success) {
      return {
        data: r.data
      };
    }
    throw r;
  } catch (t) {
    postErrorCollect("getProV1Data", t);
    return {
      error: t
    };
  }
}() : t === "basic" ? async function () {
  try {
    const t = await l.a.get(u.y + "/sync/recover_basic", {}, {
      _auth: true,
      timeout: 200000
    });
    if (t.code !== 0) {
      return {
        error: t
      };
    } else {
      return {
        data: t.data
      };
    }
  } catch (t) {
    postErrorCollect("getBasicV1Data", t);
    return {
      error: t
    };
  }
}() : undefined;
export var e = require("./316.js");