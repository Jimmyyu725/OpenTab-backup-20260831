import * as o from "./395.js";
import * as s from /*webcrack:missing*/"./1.js";
import * as n from /*webcrack:missing*/"./382.js";
import * as r from "./433.js";
var a = r;
import * as c from "./434.js";
var l = c;
function p(e, t, i, o) {
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
export let iMessage = class extends s.a {
  constructor() {
    super(...arguments);
    this.content = "";
    this.type = "error";
  }
  render() {
    const e = {
      "infinity-message": true,
      "position-top": this.type === "top"
    };
    return s.e`
      <div class=${Object(n.a)(e)}>
        ${this.renderImg()}
        <span>${this.content}</span>
      </div>
    `;
  }
  renderImg() {
    if (this.type === "error") {
      return s.e`<img .src=${a} />`;
    } else if (this.type === "warn") {
      return s.e`<img .src=${l} />`;
    } else {
      return undefined;
    }
  }
};
iMessage.styles = s.b`
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
p([Object(s.g)({
  type: String
})], iMessage.prototype, "content", undefined);
p([Object(s.g)({
  type: String
})], iMessage.prototype, "type", undefined);
iMessage = p([Object(s.c)("i-message")], iMessage);
export const message = {
  newInstance: function (e, t = 2, i, o) {
    let s;
    if (document.querySelector("i-message")) {
      clearInterval(s);
      return;
    }
    const n = document.createElement("i-message");
    n.setAttribute("content", e);
    n.setAttribute("type", i);
    document.body.appendChild(n);
    if (t !== 0) {
      s = setTimeout(() => {
        document.body.removeChild(n);
        if (o) {
          o();
        }
      }, t * 1000);
    }
    return n;
  },
  error: function (e, t, i) {
    o.default.error(e, t);
    if (i) {
      setTimeout(i, t);
    }
  },
  success: function (e, t, i) {
    o.default.success(e, t);
    if (i) {
      setTimeout(i, t);
    }
  },
  top: function (e, t, i) {
    const o = this.newInstance(e, t, "top", i);
    setTimeout(() => o == null ? undefined : o.classList.add("anim"));
  },
  warn: function (e, t, i) {
    this.newInstance(e, t, "warn", i);
  }
};