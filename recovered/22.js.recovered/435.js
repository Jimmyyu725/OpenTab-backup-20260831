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
    this.src = "";
  }
  render() {
    return r.e`
      <div class="svg" style="-webkit-mask-image: url(${this.src})"></div>
    `;
  }
};
o.styles = r.b`
    :host{
      display: block;
      width: 30px;
      height: 30px;
      --size: 100%;
      -webkit-mask-size: var(--size);
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      color: black;
    }
    .svg{
      width: inherit;
      height: inherit;
      -webkit-mask-size: inherit;
      -webkit-mask-position: inherit;
      color: inherit;
      background-color: currentcolor;
      -webkit-mask-repeat: inherit;
    }
  `;
i([Object(r.g)({
  type: String
})], o.prototype, "src", undefined);
o = i([Object(r.c)("i-svg")], o);