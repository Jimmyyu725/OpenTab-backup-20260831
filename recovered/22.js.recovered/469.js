var r = require(/*webcrack:missing*/"./1.js");
function i(t, e, n, r) {
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
let o = class extends r.a {
  constructor() {
    super(...arguments);
    this.type = "";
    this.iconfont = false;
  }
  render() {
    if (this.iconfont) {
      return r.e`
        <svg part="svg">
          <use href="${require("./472.js")}#${this.type}" style=${this.color ? `fill: ${this.color};` : ""}></use>
        </svg>
      `;
    } else {
      return r.e`
        <svg part="svg">
          <use href="${require("./473.js")}#${this.type}"></use>
        </svg>
      `;
    }
  }
};
o.styles = r.b`
    :host {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      color: #333;
    }
    svg {
      width: inherit;
      height: inherit;
      color: inherit;
      fill: currentColor;
    }
  `;
i([Object(r.g)({
  type: String
})], o.prototype, "type", undefined);
i([Object(r.g)({
  type: Boolean
})], o.prototype, "iconfont", undefined);
i([Object(r.g)({
  type: String
})], o.prototype, "color", undefined);
o = i([Object(r.c)("i-usesvg")], o);