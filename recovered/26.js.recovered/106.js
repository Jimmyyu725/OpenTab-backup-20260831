import * as r from "./395.js";
import * as o from /*webcrack:missing*/"./1.js";
import * as i from /*webcrack:missing*/"./382.js";
import * as s from "./433.js";
var a = s;
import * as c from "./434.js";
var u = c;
function l(t, e, n, r) {
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
export let iMessage = class extends o.a {
  constructor() {
    super(...arguments);
    this.content = "";
    this.type = "error";
  }
  render() {
    const t = {
      "infinity-message": true,
      "position-top": this.type === "top"
    };
    return o.e`
      <div class=${Object(i.a)(t)}>
        ${this.renderImg()}
        <span>${this.content}</span>
      </div>
    `;
  }
  renderImg() {
    if (this.type === "error") {
      return o.e`<img .src=${a} />`;
    } else if (this.type === "warn") {
      return o.e`<img .src=${u} />`;
    } else {
      return undefined;
    }
  }
};
iMessage.styles = o.b`
    :host {
      box-sizing: border-box;
      display: flex;
      position: fixed;
      min-width: 330px;
      padding: 0 20px;
      height: 60px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 6px 48px 0px rgba(0, 0, 0, 0.24);
      border-radius: 6px;
      z-index: 99999999999;
    }
    :host([type='top']) {
      width: 100%;
      margin: 0;
      left: 0;
      top: var(--top-bar-height);
      height: auto;
      padding: 5px;
      border-radius: 0;
      background: rgba(95, 92, 92, 0.6);
      color: #fff;
      transform: none;
      transition: all 300ms;
      opacity: 0;
      pointer-events: none;
    }
    :host(.anim[type='top']) {
      opacity: 1;
    }

    .infinity-message {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  `;
l([Object(o.g)({
  type: String
})], iMessage.prototype, "content", undefined);
l([Object(o.g)({
  type: String
})], iMessage.prototype, "type", undefined);
iMessage = l([Object(o.c)("i-message")], iMessage);
export const message = {
  newInstance: function (t, e = 2, n, r) {
    let o;
    if (document.querySelector("i-message")) {
      clearInterval(o);
      return;
    }
    const i = document.createElement("i-message");
    i.setAttribute("content", t);
    i.setAttribute("type", n);
    document.body.appendChild(i);
    if (e !== 0) {
      o = setTimeout(() => {
        document.body.removeChild(i);
        if (r) {
          r();
        }
      }, e * 1000);
    }
    return i;
  },
  error: function (t, e, n) {
    r.default.error(t, e);
    if (n) {
      setTimeout(n, e);
    }
  },
  success: function (t, e, n) {
    r.default.success(t, e);
    if (n) {
      setTimeout(n, e);
    }
  },
  top: function (t, e, n) {
    const r = this.newInstance(t, e, "top", n);
    setTimeout(() => r == null ? undefined : r.classList.add("anim"));
  },
  warn: function (t, e, n) {
    this.newInstance(t, e, "warn", n);
  }
};