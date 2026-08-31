var r = require("./5.js");
var i = r;
var o = require("./1.js");
var s = o.b`.icon-preview {
  transform: scale(0.25);
  transform-origin: left top;
}
.svg-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border-radius: 6px;
  background-color: #ddd;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
  background-position: 0 0, 5px 5px;
  background-size: 10px 10px;
  overflow: hidden;
}
`;
var a = require("./432.js");
var c = require("./253.js");
function u(t, e, n, r) {
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
let l = class extends o.a {
  constructor() {
    super(...arguments);
    this.bgText = "";
    this.bgFont = 30;
    this.bgColor = "";
    this.iconType = "custom-icon";
    this.fontScale = 18 / 7;
    this.getImg = () => new i(t => {
      t(null);
    });
  }
  get previewFont() {
    return this.bgFont * this.fontScale + "px 'PingFang SC', 'Microsoft Yahei', monospace, sans-serif";
  }
  render() {
    return o.e`<div class="svg-box">
      <div class="svg-text" style="">
        ${Object(a.a)(Object(c.a)({
      bgFont: this.bgFont,
      bgText: this.bgText,
      bgColor: this.bgColor
    }, "6px"))}
      </div>
    </div>`;
  }
};
l.styles = s;
u([Object(o.g)({
  type: String
})], l.prototype, "bgText", undefined);
u([Object(o.g)({
  type: Number
})], l.prototype, "bgFont", undefined);
u([Object(o.g)({
  type: String
})], l.prototype, "bgColor", undefined);
u([Object(o.g)({
  type: String
})], l.prototype, "iconType", undefined);
u([Object(o.h)(".icon-preview")], l.prototype, "$preview", undefined);
l = u([Object(o.c)("i-texticon")], l);