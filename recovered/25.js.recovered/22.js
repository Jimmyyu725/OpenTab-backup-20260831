export var h = {};
export var c = {};
export var a = {};
export var f = {};
export var b = {};
export var d = {};
require(/*webcrack:missing*/"./7.js");
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
import * as _g from "./82.js";
var y = _g;
import * as m from "./306.js";
var _b = m;
export const getSearchSuggest = async t => u.C.isZh ? u.h || u.s ? T(t) : x(t) : u.h || u.s ? E(t) : S(t);
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
          hash: y(JSON.stringify(t)),
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
const T = async t => {
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
const E = async t => {
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
const x = async t => {
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
const S = async t => {
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
import * as I from "./5.js";
var A = I;
require("./64.js");
const k = u.C.lang;
export const getIcon = async ({
  page: t = 0,
  type: e,
  keyword: n,
  source: r
} = {}) => {
  try {
    const o = await l.a.get(u.w + "/get-icons", {
      lang: k,
      page: t,
      type: e,
      source: r,
      keyword: n,
      version: u.l ? u.z : ""
    }, {
      _single: true,
      _delay: 200
    });
    if (o.success) {
      o.icons.forEach(t => {
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
        data: o
      };
    }
    throw o;
  } catch (t) {
    return {
      error: t
    };
  }
};
const N = async t => {
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
const C = /<title[^>]*>\s*(.*)\s*<\/title>/;
export const getUrlInfoWithPermission = t => window.__INFINITY__.hasAllUrlPermission ? new A(async e => {
  let n = 0;
  N(t).then(t => {
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
          const r = C.exec(e);
          const o = r == null ? undefined : r[1];
          if (o) {
            return {
              data: {
                name: o
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
  e(await N(t));
});
const j = (t, e) => {
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
    const e = j(t, i);
    const n = j(t, s);
    const r = j(t, a);
    return e.concat(n, r);
  };
  const r = t.length;
  let o = 0;
  const i = [];
  const s = [];
  const a = [];
  t.forEach(t => {
    const c = new Image();
    c.onload = function () {
      o += 1;
      const {
        width: c,
        height: u
      } = this;
      const l = Math.max(c, u);
      const h = Math.min(c, u);
      if (l / h < 5) {
        if (h > 50 && l > 100) {
          i.push(t);
        } else if (h > 50 || l > 100) {
          s.push(t);
        } else {
          a.push(t);
        }
      } else {
        a.push(t);
      }
      if (o === r) {
        e(n());
      }
    };
    c.onerror = () => {
      o += 1;
      if (o === r) {
        e(n());
      }
    };
    c.src = t;
  });
  setTimeout(() => {
    e(n());
  }, 3000);
});
const R = /\.(ico|png|jpg|jpeg|svg|webp)$/;
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
      const o = n.request?.responseURL || t;
      let i = ((t, e) => {
        const n = [];
        e.replace(/<link [^>]*href=['"]([^'"]+)[^>]*/gi, (t, e) => {
          n.push(e);
        });
        return n.reduce((e, n) => {
          if (n && R.test(n)) {
            const r = new URL(n, t);
            e.push(r.href);
          }
          return e;
        }, []);
      })(o, r);
      if (i.length < 6) {
        const t = ((t, e) => {
          const n = [];
          e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*/gi, (t, e) => {
            n.push(e);
          });
          return n.reduce((e, n) => {
            if (n && R.test(n)) {
              const r = new URL(n, t);
              e.push(r.href);
            }
            return e;
          }, []);
        })(o, r);
        i = i.concat(t);
      }
      if (i.length > 4) {
        i.length = 4;
      }
      let s = await L(i);
      s = Array.from(new Set(s));
      if (s.length > 2) {
        s.length = 2;
      }
      return {
        data: s
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
import * as F from "./13.js";
export const register = async ({
  email: t,
  password: e,
  repeatPassword: n,
  code: r
}) => {
  const o = {
    email: t.trim(),
    password: y(e),
    repeatPassword: y(n),
    code: r.trim()
  };
  try {
    return await l.a.post(u.y + "/user/register", o);
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
    password: y(e)
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
  } = await F.l.read();
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
  } = await F.l.read();
  const r = n.userInfo.uid;
  const {
    token: o
  } = n;
  if (!o) {
    throw new Error(i18n("unknown_mistake"));
  }
  const i = {
    originPassword: y(t),
    newPassword: y(e)
  };
  try {
    return await l.a.post(u.y + "/user/modify_password/" + r, i, {
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
  phone_number: o
}) {
  const i = {
    password: y(t),
    repeatPassword: y(e),
    email: n ? n.trim() : undefined,
    code: r.trim(),
    phone_number: o ? o.trim() : undefined
  };
  try {
    return await l.a.post(u.y + "/user/reset_password", i);
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
  } = await F.l.read();
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
      password: y(t)
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
      config: o
    } = e;
    let i = n || o;
    i &&= JSON.stringify(i, (t, e) => {
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
      data: s,
      error: a
    } = await F.l.read();
    if (!a && s) {
      const t = ["mobileuid", "avatar", "refreshToken", "secret", "gender", "name"];
      s = JSON.stringify(s, (e, n) => {
        if (!t.includes(e)) {
          return n;
        }
      });
    }
    const c = await l.a.post(u.y + "/collect", {
      type: t,
      user: s,
      stack: r,
      info: i,
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
const Tt = t => {
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
const Et = t => {
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
    e.auto = t.meta.auto.map(Et);
    e.manual = Tt(t.meta.manual.map(Et));
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
    const o = r.data;
    let i = {};
    const s = await A.all(o.map(e => l.a.get(e.url + "&timestampid=" + (t === "latest" ? Date.now() : t), {}, {
      timeout: 180000
    })));
    o.forEach((t, n) => {
      const r = t.fileKey;
      if (e === "manual") {
        i = Object.assign(Object.assign({}, i), s[n]);
      } else if (e === "auto") {
        i[r] = s[n];
      }
    });
    return {
      data: i
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
    const o = r.data;
    await A.all(o.map(e => {
      const {
        url: n,
        key: r,
        token: o,
        host: i
      } = e;
      const s = new FormData();
      s.append("token", o);
      s.append("key", n);
      s.append("file", _t(t[r]));
      return l.a.post(i, s, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        timeout: 180000
      });
    }));
    localStorage.setItem("pre-sync-id", o[0].timestamp + "");
    const i = await l.a.post(u.y + "/sync/done", {
      type: "auto",
      websocketkeys: e,
      keys: n,
      record_time: o[0].timestamp
    }, {
      _auth: true
    });
    if (i.code !== 0) {
      return {
        error: i
      };
    } else {
      return {
        data: i.meta.map(Et)
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
      timestamp: o,
      host: i
    } = e.data[0];
    const s = new FormData();
    s.append("token", n);
    s.append("key", r);
    s.append("file", _t(t));
    await l.a.post(i, s, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      timeout: 180000
    });
    const a = await l.a.post(u.y + "/sync/done", {
      type: "manual",
      keys: "data",
      record_time: o
    }, {
      _auth: true
    });
    if (a.code !== 0) {
      return {
        error: a
      };
    } else {
      return {
        data: Tt(a.meta.map(Et))
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
    } = await F.l.read();
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