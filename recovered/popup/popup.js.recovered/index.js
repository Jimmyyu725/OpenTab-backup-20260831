require("./6.js");
require("./470.js");
require("./435.js");
require("./7.js");
import * as r from "./1.js";
import * as i from "./225.js";
import * as o from "./5.js";
var s = o;
import * as a from "./2.js";
import * as c from "./24.js";
import * as u from "./161.js";
function l(t, e, n, r) {
  var i;
  var o = arguments.length;
  var s = o < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    s = Reflect.decorate(t, e, n, r);
  } else {
    for (var a = t.length - 1; a >= 0; a--) {
      if (i = t[a]) {
        s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s;
      }
    }
  }
  if (o > 3 && s) {
    Object.defineProperty(e, n, s);
  }
  return s;
}
class h {
  getTabInfo() {
    return new s(t => {
      chrome.tabs.query({
        currentWindow: true,
        active: true
      }, ([e]) => {
        const n = {
          target: e.url,
          name: e.title
        };
        if (e.title.length > 3) {
          n.bgText = e.title.substr(0, 2);
        } else {
          n.bgText = e.title;
        }
        t(n);
      });
    });
  }
  async submit(t) {
    const e = Object.assign(Object.assign({}, t), {
      uuid: c.a.randomId("site-"),
      id: c.a.randomId("siteId-"),
      type: "web",
      updatetime: Date.now()
    });
    u.slave.postTask("slave:add-icon", e);
  }
}
l([a.b], h.prototype, "submit", null);
const p = new h();
import * as d from "./416.js";
import * as f from "./311.js";
function g(t, e, n, r) {
  var i;
  var o = arguments.length;
  var s = o < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    s = Reflect.decorate(t, e, n, r);
  } else {
    for (var a = t.length - 1; a >= 0; a--) {
      if (i = t[a]) {
        s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s;
      }
    }
  }
  if (o > 3 && s) {
    Object.defineProperty(e, n, s);
  }
  return s;
}
window.__INFINITY__ = window.__INFINITY__ || {};
let y = class extends i.a {
  constructor() {
    super(...arguments);
    this.initValue = Object.assign({}, d.a.defaultValue);
    this.step = 0;
  }
  firstUpdated() {
    f.a.sendPageView({
      page: "popup"
    });
    document.body.addEventListener("on-close-cropper", () => this.zoomPopup(false));
    document.body.addEventListener("on-show-cropper", () => this.zoomPopup(true));
    this.init();
  }
  async init() {
    const t = await p.getTabInfo();
    this.initValue = Object.assign(Object.assign({}, d.a.defaultValue), t);
  }
  createRenderRoot() {
    return this;
  }
  async _submit(t) {
    await p.submit(t.detail.value);
    this.step = 1;
    f.a.sendEvent({
      action: {
        addPopupIcon: c.a.getTargetLogDomain(t.detail.value?.target)
      }
    });
    setTimeout(() => {
      window.close();
    }, 3000);
  }
  zoomPopup(t) {
    if (t) {
      document.body.style.setProperty("--popup-width", "640px");
      document.body.style.setProperty("--popup-height", "538px");
      document.body.style.setProperty("--popup-editicon-padding", "0px");
      document.body.style.setProperty("--popup-editicon-height", "0px");
    } else {
      document.body.style.removeProperty("--popup-width");
      document.body.style.removeProperty("--popup-height");
      document.body.style.removeProperty("--popup-editicon-padding");
      document.body.style.removeProperty("--popup-editicon-height");
    }
  }
  render() {
    if (this.step === 0) {
      return r.e`
        <i-editicon
          style="padding: var(--popup-editicon-padding);height:var(--popup-editicon-height)"
          .value="${this.initValue}"
          @on-submit="${this._submit}"
          iconType="custom-icon"
          .popup="${true}"
        ></i-editicon>
      `;
    } else if (this.step === 1) {
      return r.e` <popup-add-success></popup-add-success> `;
    } else {
      return undefined;
    }
  }
};
g([Object(r.f)()], y.prototype, "initValue", undefined);
g([Object(r.f)()], y.prototype, "step", undefined);
y = g([Object(r.c)("popup-add-icon")], y);
function m(t, e, n, r) {
  var i;
  var o = arguments.length;
  var s = o < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    s = Reflect.decorate(t, e, n, r);
  } else {
    for (var a = t.length - 1; a >= 0; a--) {
      if (i = t[a]) {
        s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s;
      }
    }
  }
  if (o > 3 && s) {
    Object.defineProperty(e, n, s);
  }
  return s;
}
let b = class extends r.a {
  render() {
    return r.e`
      <div class="add-success">
        <img class="img" src="${require("./594.js")}" alt="" />
        <div class="text">${i18n("add_icon_success")}</div>
      </div>
    `;
  }
};
b.styles = r.b`
    .add-success {
      height: 530px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .img {
      margin-top: 184px;
      width: 60px;
      height: 60px;
    }
    .text {
      margin-top: 20px;
      height: 24px;
      font-size: 14px;
      font-weight: 300;
      color: #999999;
      line-height: 24px;
    }
  `;
b = m([Object(r.c)("popup-add-success")], b);