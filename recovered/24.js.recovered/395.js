import * as r from "./5.js";
var o = r;
import * as i from /*webcrack:missing*/"./225.js";
import * as s from "./429.js";
import * as a from /*webcrack:missing*/"./1.js";
import * as c from /*webcrack:missing*/"./2.js";
var u = a.b`.i-bubble {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999999;
}
.i-bubble.network-error .i-bubble-wrap,
.i-bubble.error .i-bubble-wrap,
.i-bubble.success .i-bubble-wrap {
  padding-left: 30px;
  padding-right: 32px;
}
.i-bubble + .i-bubble-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999999;
  display: none;
  opacity: 0;
  transition: opacity 150ms ease-in 0s;
}
.i-bubble.loading + .i-bubble-mask {
  display: block;
}
.i-bubble.loading.popup + .i-bubble-mask {
  opacity: 1;
}
.i-bubble .i-bubble-wrap {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 12px 20px;
  background-color: #333;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 14px;
  line-height: 1.4em;
  transition: opacity 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: scale(0.8);
  opacity: 0;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  max-width: 600px;
}
.i-bubble.popup .i-bubble-wrap {
  transform: scale(1);
  opacity: 1;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.i-bubble .icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-right: 12px;
  display: none;
}
.i-bubble .icon.icon-loading {
  animation: spin 700ms linear infinite;
}
.i-bubble .i-bubble-text {
  color: #e4e4e4;
  display: block;
  box-sizing: border-box;
  flex-grow: 1;
  width: 100%;
  word-break: break-all;
}
.i-bubble .i-bubble-button {
  width: 70px;
  height: 28px;
  color: #4caf50;
  background-color: initial;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color, background-color 200ms;
  border-radius: 4px;
  outline: none;
  max-width: 180px;
  margin-left: 46px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.i-bubble .i-bubble-button:hover {
  background-color: rgba(76, 175, 80, 0.14);
}
`;
import * as l from "./24.js";
import * as h from "./51.js";
function p(t, e, n, r) {
  var o;
  var i = arguments.length;
  var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    s = Reflect.decorate(t, e, n, r);
  } else {
    for (var a = t.length - 1; a >= 0; a--) {
      if (o = t[a]) {
        s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
      }
    }
  }
  if (i > 3 && s) {
    Object.defineProperty(e, n, s);
  }
  return s;
}
const f = Object(h.a)("network-error.png", false);
const d = Object(h.a)("error.png", false);
const g = Object(h.a)("success.png", false);
const y = Object(h.a)("loading.png", false);
class m extends i.a {
  constructor() {
    super(...arguments);
    this.popup = false;
    this.showButton = false;
  }
  static _timeToHideHandler(t) {
    if (t.showButton) {
      const e = t.shadowRoot.querySelector(".i-bubble .i-bubble-button");
      e.onclick &&= null;
    }
    const e = t.shadowRoot.querySelector(".i-bubble > .i-bubble-wrap");
    let n = false;
    const r = () => {
      t.onmouseenter = null;
      t.onmouseleave = null;
      if (document.body.contains(t)) {
        document.body.removeChild(t);
      }
      n = true;
    };
    e.addEventListener("transitionend", r, {
      once: true
    });
    e.addEventListener("transitioncancel", r, {
      once: true
    });
    setTimeout(() => {
      if (!n) {
        r();
      }
    }, 150);
    t.setPopup(false);
  }
  static _setTimerToHide(t, e) {
    this._clearTimerToHide(t);
    t.hideTimer = setTimeout(() => this._timeToHideHandler(t), e);
  }
  static _clearTimerToHide(t) {
    if (t.hideTimer) {
      clearTimeout(t.hideTimer);
      t.hideTimer = null;
    }
  }
  static _messageMisc(t, e, n) {
    this.setText(t);
    document.body.appendChild(this);
    window.customElements.whenDefined("i-bubble").then(() => {
      this.offsetWidth;
      this.setPopup(true);
      return new o(t => requestAnimationFrame(t));
    }).then(() => {
      if (n) {
        n(this);
      }
    });
    if (e > 0) {
      m._setTimerToHide(this, e);
    }
  }
  static message(t, e) {
    const n = document.createElement("i-bubble");
    n.setType("message");
    e = e ?? this.duration;
    this._messageMisc.call(n, t, e);
  }
  static networkError(t, e) {
    const n = document.createElement("i-bubble");
    n.setType("network-error");
    e = e ?? this.duration;
    this._messageMisc.call(n, t, e);
  }
  static success(t, e) {
    const n = document.createElement("i-bubble");
    n.setType("success");
    e = e ?? this.duration;
    this._messageMisc.call(n, t, e);
  }
  static error(t, e) {
    const n = document.createElement("i-bubble");
    n.setType("error");
    e = e ?? this.duration;
    this._messageMisc.call(n, t, e);
  }
  static popupLogin(t) {
    const e = this.popup(i18n("reqeust_login_message"), {
      showButton: true,
      btnValue: i18n("to_login"),
      type: "message",
      onBtnClick: t ?? (() => {
        s.userStore.openModal();
      })
    });
    const n = Date.now();
    let r = this.duration2;
    e.onmouseenter = () => {
      r = Date.now() - n;
      m._clearTimerToHide(e);
    };
    e.onmouseleave = () => {
      m._setTimerToHide(e, r);
    };
  }
  static popupAddHomeAI(t) {
    const e = this.popup(i18n("add_infinity_ai"), {
      showButton: true,
      btnValue: i18n("add_now"),
      type: "message",
      onBtnClick: t,
      duration: 8000
    });
    const n = Date.now();
    let r = this.duration2;
    e.onmouseenter = () => {
      r = Date.now() - n;
      m._clearTimerToHide(e);
    };
    e.onmouseleave = () => {
      m._setTimerToHide(e, r);
    };
  }
  static popupLoading(t) {
    const e = this.popup(i18n("wallpaper_loading"), {
      duration: 0,
      showButton: true,
      btnValue: i18n("cancel"),
      type: "loading",
      onBtnClick: t
    });
    return () => setTimeout(() => this._timeToHideHandler(e), m.waitForReady);
  }
  static loading(t) {
    const e = this.popup(t, {
      type: "loading",
      duration: 0
    });
    return () => setTimeout(() => this._timeToHideHandler(e), m.waitForReady);
  }
  static popup(t, e) {
    const {
      duration: n = this.duration2,
      btnValue: r,
      onBtnClick: o,
      type: i,
      showButton: s
    } = e;
    const a = document.createElement("i-bubble");
    a.setType(i);
    if (r) {
      a.setBtnValue(r);
    }
    if (s) {
      a.setShowButton(s);
    }
    this._messageMisc.call(a, t, n, () => {
      if (a.showButton) {
        a.shadowRoot.querySelector(".i-bubble .i-bubble-button").onclick = t => {
          if (o) {
            o(t);
          }
          this._timeToHideHandler(a);
        };
      }
    });
    return a;
  }
  firstUpdated() {
    const t = "\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      display: block;\n    ";
    const e = document.createElement("style");
    e.appendChild(document.createTextNode(`\n      .i-bubble .icon.icon-network-error{\n        background-image: url(${f});${t}\n      }\n      .i-bubble .icon.icon-success{\n        background-image: url(${g});${t}\n      }\n      .i-bubble .icon.icon-error{\n        background-image: url(${d});${t}\n      }\n      .i-bubble .icon.icon-loading{\n        background-image: url(${y});${t}\n      }\n      `));
    this.shadowRoot.appendChild(e);
  }
  render() {
    return a.e`
      <section class="i-bubble ${this.type}${this.popup ? " popup" : ""}">
        <section class="i-bubble-wrap">
          <i class="icon icon-${this.type}"></i>
          <span class="i-bubble-text">${this.text}</span>
          <input
            class="i-bubble-button"
            type="button"
            .value=${this.btnValue}
            style="${this.showButton ? "" : "display: none;"}"
          />
        </section>
      </section>
      <section class="i-bubble-mask" @click=${l.a.stopBubble}></section>
    `;
  }
  setType(t) {
    this.type = t;
  }
  setText(t) {
    this.text = t;
  }
  setBtnValue(t) {
    this.btnValue = t;
  }
  setPopup(t) {
    this.popup = t;
  }
  setShowButton(t) {
    this.showButton = t;
  }
}
m.duration = 3000;
m.duration2 = 5000;
m.waitForReady = 1000 / 60;
m.styles = u;
p([c.g], m.prototype, "type", undefined);
p([c.g], m.prototype, "text", undefined);
p([c.g], m.prototype, "btnValue", undefined);
p([c.g], m.prototype, "popup", undefined);
p([c.g], m.prototype, "showButton", undefined);
p([c.b], m.prototype, "setType", null);
p([c.b], m.prototype, "setText", null);
p([c.b], m.prototype, "setBtnValue", null);
p([c.b], m.prototype, "setPopup", null);
p([c.b], m.prototype, "setShowButton", null);
window.customElements.define("i-bubble", m);
exports.default = m;