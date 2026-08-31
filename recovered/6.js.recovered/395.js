import * as o from /*webcrack:missing*/"./5.js";
var s = o;
import * as n from /*webcrack:missing*/"./225.js";
import * as r from "./429.js";
import * as a from /*webcrack:missing*/"./1.js";
import * as c from /*webcrack:missing*/"./2.js";
var l = a.b`.i-bubble {
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
import * as p from /*webcrack:missing*/"./24.js";
import * as h from /*webcrack:missing*/"./51.js";
function d(e, t, i, o) {
  var s;
  var n = arguments.length;
  var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    r = Reflect.decorate(e, t, i, o);
  } else {
    for (var a = e.length - 1; a >= 0; a--) {
      if (s = e[a]) {
        r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
      }
    }
  }
  if (n > 3 && r) {
    Object.defineProperty(t, i, r);
  }
  return r;
}
const u = Object(h.a)("network-error.png", false);
const g = Object(h.a)("error.png", false);
const b = Object(h.a)("success.png", false);
const m = Object(h.a)("loading.png", false);
class f extends n.a {
  constructor() {
    super(...arguments);
    this.popup = false;
    this.showButton = false;
  }
  static _timeToHideHandler(e) {
    if (e.showButton) {
      const t = e.shadowRoot.querySelector(".i-bubble .i-bubble-button");
      t.onclick &&= null;
    }
    const t = e.shadowRoot.querySelector(".i-bubble > .i-bubble-wrap");
    let i = false;
    const o = () => {
      e.onmouseenter = null;
      e.onmouseleave = null;
      if (document.body.contains(e)) {
        document.body.removeChild(e);
      }
      i = true;
    };
    t.addEventListener("transitionend", o, {
      once: true
    });
    t.addEventListener("transitioncancel", o, {
      once: true
    });
    setTimeout(() => {
      if (!i) {
        o();
      }
    }, 150);
    e.setPopup(false);
  }
  static _setTimerToHide(e, t) {
    this._clearTimerToHide(e);
    e.hideTimer = setTimeout(() => this._timeToHideHandler(e), t);
  }
  static _clearTimerToHide(e) {
    if (e.hideTimer) {
      clearTimeout(e.hideTimer);
      e.hideTimer = null;
    }
  }
  static _messageMisc(e, t, i) {
    this.setText(e);
    document.body.appendChild(this);
    window.customElements.whenDefined("i-bubble").then(() => {
      this.offsetWidth;
      this.setPopup(true);
      return new s(e => requestAnimationFrame(e));
    }).then(() => {
      if (i) {
        i(this);
      }
    });
    if (t > 0) {
      f._setTimerToHide(this, t);
    }
  }
  static message(e, t) {
    const i = document.createElement("i-bubble");
    i.setType("message");
    t = t ?? this.duration;
    this._messageMisc.call(i, e, t);
  }
  static networkError(e, t) {
    const i = document.createElement("i-bubble");
    i.setType("network-error");
    t = t ?? this.duration;
    this._messageMisc.call(i, e, t);
  }
  static success(e, t) {
    const i = document.createElement("i-bubble");
    i.setType("success");
    t = t ?? this.duration;
    this._messageMisc.call(i, e, t);
  }
  static error(e, t) {
    const i = document.createElement("i-bubble");
    i.setType("error");
    t = t ?? this.duration;
    this._messageMisc.call(i, e, t);
  }
  static popupLogin(e) {
    const t = this.popup(i18n("reqeust_login_message"), {
      showButton: true,
      btnValue: i18n("to_login"),
      type: "message",
      onBtnClick: e ?? (() => {
        r.userStore.openModal();
      })
    });
    const i = Date.now();
    let o = this.duration2;
    t.onmouseenter = () => {
      o = Date.now() - i;
      f._clearTimerToHide(t);
    };
    t.onmouseleave = () => {
      f._setTimerToHide(t, o);
    };
  }
  static popupAddHomeAI(e) {
    const t = this.popup(i18n("add_infinity_ai"), {
      showButton: true,
      btnValue: i18n("add_now"),
      type: "message",
      onBtnClick: e,
      duration: 8000
    });
    const i = Date.now();
    let o = this.duration2;
    t.onmouseenter = () => {
      o = Date.now() - i;
      f._clearTimerToHide(t);
    };
    t.onmouseleave = () => {
      f._setTimerToHide(t, o);
    };
  }
  static popupLoading(e) {
    const t = this.popup(i18n("wallpaper_loading"), {
      duration: 0,
      showButton: true,
      btnValue: i18n("cancel"),
      type: "loading",
      onBtnClick: e
    });
    return () => setTimeout(() => this._timeToHideHandler(t), f.waitForReady);
  }
  static loading(e) {
    const t = this.popup(e, {
      type: "loading",
      duration: 0
    });
    return () => setTimeout(() => this._timeToHideHandler(t), f.waitForReady);
  }
  static popup(e, t) {
    const {
      duration: i = this.duration2,
      btnValue: o,
      onBtnClick: s,
      type: n,
      showButton: r
    } = t;
    const a = document.createElement("i-bubble");
    a.setType(n);
    if (o) {
      a.setBtnValue(o);
    }
    if (r) {
      a.setShowButton(r);
    }
    this._messageMisc.call(a, e, i, () => {
      if (a.showButton) {
        a.shadowRoot.querySelector(".i-bubble .i-bubble-button").onclick = e => {
          if (s) {
            s(e);
          }
          this._timeToHideHandler(a);
        };
      }
    });
    return a;
  }
  firstUpdated() {
    const e = "\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      display: block;\n    ";
    const t = document.createElement("style");
    t.appendChild(document.createTextNode(`\n      .i-bubble .icon.icon-network-error{\n        background-image: url(${u});${e}\n      }\n      .i-bubble .icon.icon-success{\n        background-image: url(${b});${e}\n      }\n      .i-bubble .icon.icon-error{\n        background-image: url(${g});${e}\n      }\n      .i-bubble .icon.icon-loading{\n        background-image: url(${m});${e}\n      }\n      `));
    this.shadowRoot.appendChild(t);
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
      <section class="i-bubble-mask" @click=${p.a.stopBubble}></section>
    `;
  }
  setType(e) {
    this.type = e;
  }
  setText(e) {
    this.text = e;
  }
  setBtnValue(e) {
    this.btnValue = e;
  }
  setPopup(e) {
    this.popup = e;
  }
  setShowButton(e) {
    this.showButton = e;
  }
}
f.duration = 3000;
f.duration2 = 5000;
f.waitForReady = 1000 / 60;
f.styles = l;
d([c.g], f.prototype, "type", undefined);
d([c.g], f.prototype, "text", undefined);
d([c.g], f.prototype, "btnValue", undefined);
d([c.g], f.prototype, "popup", undefined);
d([c.g], f.prototype, "showButton", undefined);
d([c.b], f.prototype, "setType", null);
d([c.b], f.prototype, "setText", null);
d([c.b], f.prototype, "setBtnValue", null);
d([c.b], f.prototype, "setPopup", null);
d([c.b], f.prototype, "setShowButton", null);
window.customElements.define("i-bubble", f);
exports.default = f;