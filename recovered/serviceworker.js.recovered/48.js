var r;
var o = require("./84.js");
var i = o;
require("./3.js");
var s = require("./6.js");
var _a = s;
require("./366.js");
var _c = {
  randomUUID: typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};
var u = new Uint8Array(16);
function f() {
  if (!r && !(r = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return r(u);
}
var l = [];
for (var h = 0; h < 256; ++h) {
  l.push((h + 256).toString(16).slice(1));
}
function p(t, e = 0) {
  return (l[t[e + 0]] + l[t[e + 1]] + l[t[e + 2]] + l[t[e + 3]] + "-" + l[t[e + 4]] + l[t[e + 5]] + "-" + l[t[e + 6]] + l[t[e + 7]] + "-" + l[t[e + 8]] + l[t[e + 9]] + "-" + l[t[e + 10]] + l[t[e + 11]] + l[t[e + 12]] + l[t[e + 13]] + l[t[e + 14]] + l[t[e + 15]]).toLowerCase();
}
var _d;
function y(t, e, n) {
  if (_c.randomUUID && !e && !t) {
    return _c.randomUUID();
  }
  var r = (t = t || {}).random || (t.rng || f)();
  r[6] = r[6] & 15 | 64;
  r[8] = r[8] & 63 | 128;
  if (e) {
    n = n || 0;
    for (var o = 0; o < 16; ++o) {
      e[n + o] = r[o];
    }
    return e;
  }
  return p(r);
}
(function (t) {
  t.BG_PLAY_AUDIO = "BG_PLAY_AUDIO";
  t.BG_GET_LOCAL_STORAGE = "BG_GET_LOCAL_STORAGE";
  t.BG_SET_LOCAL_STORAGE = "BG_SET_LOCAL_STORAGE";
  t.BG_REMOVE_LOCAL_STORAGE = "BG_REMOVE_LOCAL_STORAGE";
})(_d ||= {});
var m = require("./0.js");
function g(t, e) {
  if (Array.isArray(t)) {
    return t.includes(e);
  } else {
    return typeof t == "string" && t === e;
  }
}
function v(t) {
  const e = {};
  if (t instanceof Error) {
    e.message = t.message;
    e.stack = t.stack;
  } else {
    e.message = t.message || t || "error";
  }
  return e;
}
const _b = new class {
  constructor() {
    this.responseTimeout = 5000;
    this.actionListeners = new Map();
    this.responseListeners = new Map();
    if (m.f) {
      this.initListener();
    }
  }
  async execSendTypeCb(t) {
    const e = this.actionListeners.get(t.action);
    if (!e) {
      return;
    }
    const {
      listenInfo: n,
      listenCb: r
    } = e;
    if (g(n.from, t.from) && g(t.to, n.to)) {
      if (m.e) {
        console.log("-->> ~ execSendTypeCb:", t);
      }
      const e = await r(t.payload);
      if (t.needResponse && t.responseId) {
        const n = {
          type: "ext_response",
          responseId: t.responseId,
          response: {
            responseData: e,
            responseSuccess: true
          }
        };
        chrome.runtime.sendMessage(n, () => {
          if (chrome.runtime.lastError) {
            console.warn("Response sendMessage: ", chrome.runtime.lastError.message);
          }
        });
      }
      return e;
    }
  }
  async execResponseTypeCb(t) {
    const e = this.responseListeners.get(t.responseId);
    if (!e) {
      return;
    }
    if (m.e) {
      console.log("-->> ~ execResponseTypeCb:", t);
    }
    return await e(t.response);
  }
  initListener() {
    chrome.runtime.onMessage.addListener((t, e, n) => {
      try {
        const {
          type: e
        } = t;
        if (e === "ext_send") {
          const e = t;
          this.execSendTypeCb(e).catch(t => {
            console.warn("onMessage", e, t);
            if (e.needResponse && e.responseId) {
              const n = {
                type: "ext_response",
                responseId: e.responseId,
                response: {
                  responseData: v(t),
                  responseSuccess: false
                }
              };
              chrome.runtime.sendMessage(n, () => {
                if (chrome.runtime.lastError) {
                  console.warn("Response sendMessage: ", chrome.runtime.lastError.message);
                }
              });
            }
          }).finally(() => {
            n(null);
          });
          return true;
        }
        if (e === "ext_response") {
          this.execResponseTypeCb(t).catch(e => {
            console.warn("onMessage", t, e);
          }).finally(() => {
            n(null);
          });
          return true;
        }
      } catch (e) {
        console.warn("onMessage", t, e);
      }
    });
  }
  _listenResponse(t, e, n) {
    const r = t.action + ":" + y();
    const o = setTimeout(() => {
      this.responseListeners.delete(r);
      n(new Error("response timeout"));
    }, t.responseTimeout || this.responseTimeout);
    this.responseListeners.set(r, t => {
      const {
        responseData: i,
        responseSuccess: s
      } = t;
      clearTimeout(o);
      if (s) {
        e(i);
      } else {
        n(i);
      }
      this.responseListeners.delete(r);
    });
    return r;
  }
  listen(t, e) {
    if (this.actionListeners.has(t.action)) {
      console.warn("key already exists: " + t.action);
    } else {
      this.actionListeners.set(t.action, {
        listenInfo: t,
        listenCb: e
      });
    }
  }
  sendToRuntime(t) {
    return new _a((e, n) => {
      const r = Object.assign(Object.assign({}, t), {
        type: "ext_send"
      });
      if (!t.needResponse) {
        chrome.runtime.sendMessage(r, () => {
          if (chrome.runtime.lastError) {
            console.warn("sendMessage: ", chrome.runtime.lastError.message);
          }
        });
        e(null);
        return;
      }
      const o = this._listenResponse(t, e, n);
      chrome.runtime.sendMessage(Object.assign(Object.assign({}, r), {
        responseId: o
      }), () => {
        if (chrome.runtime.lastError) {
          console.warn("sendMessage: ", chrome.runtime.lastError.message);
          n(chrome.runtime.lastError);
        }
      });
    });
  }
  sendToContent(t) {
    return new _a((e, n) => {
      if (t.to === "content_scripts") {
        chrome.tabs.query({
          active: true,
          currentWindow: true
        }, ([r]) => {
          const o = r.id;
          if (!o) {
            n(new Error("No tabId"));
            return;
          }
          const i = Object.assign(Object.assign({}, t), {
            type: "ext_send"
          });
          if (!t.needResponse) {
            chrome.tabs.sendMessage(o, i, () => {
              if (chrome.runtime.lastError) {
                console.warn("sendMessage: ", chrome.runtime.lastError.message);
              }
            });
            e(null);
            return;
          }
          const s = this._listenResponse(t, e, n);
          chrome.tabs.sendMessage(o, Object.assign(Object.assign({}, i), {
            responseId: s
          }), () => {
            if (chrome.runtime.lastError) {
              console.warn("sendMessage: ", chrome.runtime.lastError.message);
              n(chrome.runtime.lastError);
            }
          });
        });
      } else {
        n(new Error("Not to content_scripts"));
      }
    });
  }
}();
export const b = async t => {
  try {
    const e = "AUDIO_PLAYBACK";
    await O("off_screen/index.html", e);
    _b.sendToRuntime({
      action: _d.BG_PLAY_AUDIO,
      from: "background",
      to: "offscreen",
      payload: {
        audioUrl: chrome.runtime.getURL(t)
      }
    });
  } catch (t) {
    console.error(t);
  }
};
export const a = async t => {
  try {
    const e = "LOCAL_STORAGE";
    await O("off_screen/index.html", e);
    return await _b.sendToRuntime({
      action: _d.BG_GET_LOCAL_STORAGE,
      payload: {
        key: t
      },
      from: "background",
      to: "offscreen",
      needResponse: true
    });
  } catch (t) {
    console.error(t);
  }
};
export const c = async t => {
  try {
    const e = "LOCAL_STORAGE";
    await O("off_screen/index.html", e);
    await _b.sendToRuntime({
      action: _d.BG_REMOVE_LOCAL_STORAGE,
      payload: {
        key: t
      },
      from: "background",
      to: "offscreen",
      needResponse: true
    });
  } catch (t) {
    console.error(t);
  }
};
export const d = async (t, e) => {
  try {
    const n = "LOCAL_STORAGE";
    await O("off_screen/index.html", n);
    await _b.sendToRuntime({
      action: _d.BG_SET_LOCAL_STORAGE,
      payload: {
        key: t,
        valueStr: e
      },
      from: "background",
      to: "offscreen",
      needResponse: true
    });
  } catch (t) {
    console.error(t);
  }
};
let E;
async function O(t, e) {
  try {
    if (await async function (t) {
      const e = chrome.runtime.getURL(t);
      if ("getContexts" in chrome.runtime) {
        const t = await chrome.runtime.getContexts({
          contextTypes: ["OFFSCREEN_DOCUMENT"],
          documentUrls: [e]
        });
        return Boolean(t.length);
      }
      {
        var n;
        const t = await i(n = self.clients).call(n);
        return await t.some(t => t.url.includes(chrome.runtime.id));
      }
    }(t)) {
      return;
    }
    if (E) {
      await E;
    } else {
      E = chrome.offscreen.createDocument({
        url: t,
        reasons: [e],
        justification: "Specifies that the offscreen document is responsible for playing audio."
      });
      await E;
      E = null;
    }
  } catch (t) {}
}