var r;
var o = require("./5.js");
var i = o;
require("./7.js");
require("./258.js");
var c = {
  randomUUID: typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};
var u = new Uint8Array(16);
function _a() {
  if (!r && !(r = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return r(u);
}
var s = [];
for (var f = 0; f < 256; ++f) {
  s.push((f + 256).toString(16).slice(1));
}
function l(t, n = 0) {
  return (s[t[n + 0]] + s[t[n + 1]] + s[t[n + 2]] + s[t[n + 3]] + "-" + s[t[n + 4]] + s[t[n + 5]] + "-" + s[t[n + 6]] + s[t[n + 7]] + "-" + s[t[n + 8]] + s[t[n + 9]] + "-" + s[t[n + 10]] + s[t[n + 11]] + s[t[n + 12]] + s[t[n + 13]] + s[t[n + 14]] + s[t[n + 15]]).toLowerCase();
}
export var a;
function v(t, n, e) {
  if (c.randomUUID && !n && !t) {
    return c.randomUUID();
  }
  var r = (t = t || {}).random || (t.rng || _a)();
  r[6] = r[6] & 15 | 64;
  r[8] = r[8] & 63 | 128;
  if (n) {
    e = e || 0;
    for (var o = 0; o < 16; ++o) {
      n[e + o] = r[o];
    }
    return n;
  }
  return l(r);
}
(function (t) {
  t.BG_PLAY_AUDIO = "BG_PLAY_AUDIO";
  t.BG_GET_LOCAL_STORAGE = "BG_GET_LOCAL_STORAGE";
  t.BG_SET_LOCAL_STORAGE = "BG_SET_LOCAL_STORAGE";
  t.BG_REMOVE_LOCAL_STORAGE = "BG_REMOVE_LOCAL_STORAGE";
})(a ||= {});
var d = require("./0.js");
function h(t, n) {
  if (Array.isArray(t)) {
    return t.includes(n);
  } else {
    return typeof t == "string" && t === n;
  }
}
function y(t) {
  const n = {};
  if (t instanceof Error) {
    n.message = t.message;
    n.stack = t.stack;
  } else {
    n.message = t.message || t || "error";
  }
  return n;
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
    const n = this.actionListeners.get(t.action);
    if (!n) {
      return;
    }
    const {
      listenInfo: e,
      listenCb: r
    } = n;
    if (h(e.from, t.from) && h(t.to, e.to)) {
      if (d.j) {
        console.log("-->> ~ execSendTypeCb:", t);
      }
      const n = await r(t.payload);
      if (t.needResponse && t.responseId) {
        const e = {
          type: "ext_response",
          responseId: t.responseId,
          response: {
            responseData: n,
            responseSuccess: true
          }
        };
        chrome.runtime.sendMessage(e, () => {
          if (chrome.runtime.lastError) {
            console.warn("Response sendMessage: ", chrome.runtime.lastError.message);
          }
        });
      }
      return n;
    }
  }
  async execResponseTypeCb(t) {
    const n = this.responseListeners.get(t.responseId);
    if (!n) {
      return;
    }
    if (d.j) {
      console.log("-->> ~ execResponseTypeCb:", t);
    }
    return await n(t.response);
  }
  initListener() {
    chrome.runtime.onMessage.addListener((t, n, e) => {
      try {
        const {
          type: n
        } = t;
        if (n === "ext_send") {
          const n = t;
          this.execSendTypeCb(n).catch(t => {
            console.warn("onMessage", n, t);
            if (n.needResponse && n.responseId) {
              const e = {
                type: "ext_response",
                responseId: n.responseId,
                response: {
                  responseData: y(t),
                  responseSuccess: false
                }
              };
              chrome.runtime.sendMessage(e, () => {
                if (chrome.runtime.lastError) {
                  console.warn("Response sendMessage: ", chrome.runtime.lastError.message);
                }
              });
            }
          }).finally(() => {
            e(null);
          });
          return true;
        }
        if (n === "ext_response") {
          this.execResponseTypeCb(t).catch(n => {
            console.warn("onMessage", t, n);
          }).finally(() => {
            e(null);
          });
          return true;
        }
      } catch (n) {
        console.warn("onMessage", t, n);
      }
    });
  }
  _listenResponse(t, n, e) {
    const r = t.action + ":" + v();
    const o = setTimeout(() => {
      this.responseListeners.delete(r);
      e(new Error("response timeout"));
    }, t.responseTimeout || this.responseTimeout);
    this.responseListeners.set(r, t => {
      const {
        responseData: i,
        responseSuccess: c
      } = t;
      clearTimeout(o);
      if (c) {
        n(i);
      } else {
        e(i);
      }
      this.responseListeners.delete(r);
    });
    return r;
  }
  listen(t, n) {
    if (this.actionListeners.has(t.action)) {
      console.warn("key already exists: " + t.action);
    } else {
      this.actionListeners.set(t.action, {
        listenInfo: t,
        listenCb: n
      });
    }
  }
  sendToRuntime(t) {
    return new i((n, e) => {
      const r = Object.assign(Object.assign({}, t), {
        type: "ext_send"
      });
      if (!t.needResponse) {
        chrome.runtime.sendMessage(r, () => {
          if (chrome.runtime.lastError) {
            console.warn("sendMessage: ", chrome.runtime.lastError.message);
          }
        });
        n(null);
        return;
      }
      const o = this._listenResponse(t, n, e);
      chrome.runtime.sendMessage(Object.assign(Object.assign({}, r), {
        responseId: o
      }), () => {
        if (chrome.runtime.lastError) {
          console.warn("sendMessage: ", chrome.runtime.lastError.message);
          e(chrome.runtime.lastError);
        }
      });
    });
  }
  sendToContent(t) {
    return new i((n, e) => {
      if (t.to === "content_scripts") {
        chrome.tabs.query({
          active: true,
          currentWindow: true
        }, ([r]) => {
          const o = r.id;
          if (!o) {
            e(new Error("No tabId"));
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
            n(null);
            return;
          }
          const c = this._listenResponse(t, n, e);
          chrome.tabs.sendMessage(o, Object.assign(Object.assign({}, i), {
            responseId: c
          }), () => {
            if (chrome.runtime.lastError) {
              console.warn("sendMessage: ", chrome.runtime.lastError.message);
              e(chrome.runtime.lastError);
            }
          });
        });
      } else {
        e(new Error("Not to content_scripts"));
      }
    });
  }
}();