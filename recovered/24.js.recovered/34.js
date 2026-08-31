var r;
var o = require("./5.js");
var i = o;
require(/*webcrack:missing*/"./7.js");
require("./258.js");
var s = {
  randomUUID: typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};
var _a = new Uint8Array(16);
function c() {
  if (!r && !(r = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return r(_a);
}
var u = [];
for (var l = 0; l < 256; ++l) {
  u.push((l + 256).toString(16).slice(1));
}
function h(t, e = 0) {
  return (u[t[e + 0]] + u[t[e + 1]] + u[t[e + 2]] + u[t[e + 3]] + "-" + u[t[e + 4]] + u[t[e + 5]] + "-" + u[t[e + 6]] + u[t[e + 7]] + "-" + u[t[e + 8]] + u[t[e + 9]] + "-" + u[t[e + 10]] + u[t[e + 11]] + u[t[e + 12]] + u[t[e + 13]] + u[t[e + 14]] + u[t[e + 15]]).toLowerCase();
}
export var a;
function f(t, e, n) {
  if (s.randomUUID && !e && !t) {
    return s.randomUUID();
  }
  var r = (t = t || {}).random || (t.rng || c)();
  r[6] = r[6] & 15 | 64;
  r[8] = r[8] & 63 | 128;
  if (e) {
    n = n || 0;
    for (var o = 0; o < 16; ++o) {
      e[n + o] = r[o];
    }
    return e;
  }
  return h(r);
}
(function (t) {
  t.BG_PLAY_AUDIO = "BG_PLAY_AUDIO";
  t.BG_GET_LOCAL_STORAGE = "BG_GET_LOCAL_STORAGE";
  t.BG_SET_LOCAL_STORAGE = "BG_SET_LOCAL_STORAGE";
  t.BG_REMOVE_LOCAL_STORAGE = "BG_REMOVE_LOCAL_STORAGE";
})(a ||= {});
var d = require("./0.js");
function g(t, e) {
  if (Array.isArray(t)) {
    return t.includes(e);
  } else {
    return typeof t == "string" && t === e;
  }
}
function y(t) {
  const e = {};
  if (t instanceof Error) {
    e.message = t.message;
    e.stack = t.stack;
  } else {
    e.message = t.message || t || "error";
  }
  return e;
}
export const b = new class {
  constructor() {
    this.responseTimeout = 5000;
    this.actionListeners = new Map();
    this.responseListeners = new Map();
    if (d.l) {
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
      if (d.j) {
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
    if (d.j) {
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
                  responseData: y(t),
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
    const r = t.action + ":" + f();
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
    return new i((e, n) => {
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
    return new i((e, n) => {
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