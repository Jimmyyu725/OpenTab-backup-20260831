require("./19.js");
var r = require("./1.js");
var i = r.b`.input {
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid #eeeeee;
  line-height: 1;
  height: 30px;
  box-sizing: border-box;
  padding-bottom: 6px;
  width: 100%;
  color: #333333;
  max-height: 50px;
  line-height: 16px;
  max-width: 100%;
  min-width: 100%;
  resize: none;
  background-color: transparent;
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
`;
var o = require("./310.js");
function s(t, e, n, r) {
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
let a = class extends r.a {
  constructor() {
    super(...arguments);
    this.textareaHeight = "auto";
    this.value = "";
    this.placeholder = "";
    this.emitChangeEvent = t => {
      const e = new CustomEvent("on-change", {
        detail: {
          value: t
        }
      });
      this.dispatchEvent(e);
    };
  }
  setTextareaHeight(t) {
    const e = t.split("\n");
    if (e.length === 1) {
      this.textareaHeight = "auto";
    } else {
      const t = e.length * 16;
      this.textareaHeight = t + 2 + "px";
    }
  }
  updated(t) {
    if (t.has("value")) {
      this.setTextareaHeight(this.value);
    }
  }
  render() {
    return r.e`
      <textarea
        class="input global-scrollbar"
        rows="1"
        style="height:${this.textareaHeight}"
        autocomplete="off"
        @input="${t => {
      const e = t.currentTarget.value;
      this.value = e;
      this.emitChangeEvent(e);
      this.setTextareaHeight(e);
    }}"
        .value="${this.value}"
        .placeholder="${this.placeholder}"
      ></textarea>
    `;
  }
};
a.styles = [o.a, i];
s([Object(r.f)()], a.prototype, "textareaHeight", undefined);
s([Object(r.g)({
  type: String
})], a.prototype, "value", undefined);
s([Object(r.g)({
  type: String
})], a.prototype, "placeholder", undefined);
a = s([Object(r.c)("i-textarea")], a);