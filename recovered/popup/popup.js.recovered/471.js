require("./7.js");
var r = require("./1.js");
var i = require("./382.js");
require("./435.js");
var o = r.b`:host {
  display: block;
  position: relative;
  z-index: 999;
}
.color-pick-list {
  width: 100%;
  box-sizing: border-box;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backface-visibility: hidden;
}
.color-item {
  position: relative;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  background-color: currentColor;
}
.color-item::before {
  content: "";
  display: none;
  width: 0px;
  height: 0px;
  color: #fff;
  border-width: 0px 0px 2px 2px;
  padding: 3px 3px 3px 6px;
  border-style: solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -78%) rotate(-45deg);
}
.color-item.active::before {
  display: block;
}
.color-item.transparent {
  color: #ddd !important;
  background-position: 0 0, 5px 5px;
  background-size: 10px 10px;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
}
.color-item.transparent i-svg {
  color: #fff !important;
  background: #ddd !important;
}
.color-item.transparent.active {
  background: #ddd;
  background-image: none;
}
.color-picker {
  position: absolute;
  bottom: 30px;
  right: 0;
  transform-origin: bottom right;
}
.side {
  transform: scale(calc(1 / var(--side-ratio)));
}
`;
var s = require("./437.js");
var a = s;
function c(t, e, n, r) {
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
let u = class extends r.a {
  constructor() {
    super(...arguments);
    this.value = "";
    this.offsetRight = 0;
    this.side = false;
    this.name = "";
    this.colors = ["rgba(255,71,52,1)", "rgba(255,122,9,1)", "rgba(255,207,12,1)", "rgba(42,233,121,1)", "rgba(44,214,223,1)", "rgba(0,116,255,1)", "rgba(138,49,255,1)", "transparent"];
    this.pickerStatus = false;
    this.activeIndex = -1;
    this._close_picker_lock = false;
    this._preClosePicker = () => {
      this._close_picker_lock &&= false;
    };
    this._postClosePicker = () => {
      if (!this._close_picker_lock) {
        this._closePicker();
      }
    };
    this._closePicker = () => {
      this.pickerStatus = false;
    };
  }
  firstUpdated() {
    this._importColor();
    this.resetActiveIndex();
    window.addEventListener("mousedown", this._preClosePicker);
    window.addEventListener("mouseup", this._postClosePicker);
  }
  disconnectedCallback() {
    this._closePicker();
    window.removeEventListener("mousedown", this._preClosePicker);
    window.removeEventListener("mouseup", this._postClosePicker);
    super.disconnectedCallback();
  }
  resetActiveIndex() {
    this.activeIndex = this.colors.findIndex(t => t === this.value);
  }
  _importColor() {
    const t = document.querySelector("#script-vue");
    const e = document.querySelector("#script-color");
    if (!t) {
      const t = document.createElement("script");
      t.src = "/vendor/vue.min.js";
      t.id = "script-vue";
      t.onload = () => {
        if (!e) {
          const t = document.createElement("script");
          t.src = "/vendor/color-picker.min.js";
          t.id = "script-color";
          document.body.append(t);
        }
      };
      document.body.append(t);
    }
  }
  _showPicker(t) {
    t.stopPropagation();
    this.pickerStatus = true;
    if (this.value === "transparent") {
      this.value = "#ff4734";
      this.activeIndex = -1;
      this._emitChange();
    }
  }
  _pickColor(t) {
    if (t instanceof CustomEvent) {
      const {
        rgba: e
      } = t.detail[0];
      const {
        r: n,
        g: r,
        b: i,
        a: o
      } = e;
      this.value = `rgba(${[n, r, i, o].join(",")})`;
      this.activeIndex = -1;
      this._emitChange();
    }
  }
  _pickThisColor(t) {
    this.value = this.colors[t];
    this.activeIndex = t;
    this._emitChange();
  }
  _emitChange() {
    const t = new CustomEvent("on-change", {
      detail: {
        value: this.value
      }
    });
    this.dispatchEvent(t);
  }
  async performUpdate() {
    this.resetActiveIndex();
    super.performUpdate();
  }
  updated(t) {
    if (t.has("pickerStatus") && this.pickerStatus === true) {
      try {
        this.$colorPicker.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        });
      } catch (t) {}
    }
  }
  render() {
    return r.e`
      <section class="color-pick-list">
        ${this.colors.map((t, e) => r.e`<span
            @click="${() => this._pickThisColor(e)}"
            class="${Object(i.a)({
      active: e === this.activeIndex,
      "color-item": true,
      transparent: t === "transparent"
    })}"
            style="color:${t.includes("255,255,255") ? "rgb(221,221,221)" : t};"
          >
          </span>`)}
        <span
          @click="${this._showPicker}"
          class="color-item color-dropper ${this.activeIndex === -1 && this.value ? "active" : ""}"
          style="background: url(${a}) no-repeat center; background-size: contain;"
        >
        </span>
      </section>
      <section
        @click="${t => {
      t.stopPropagation();
    }}"
        class="color-picker ${this.side ? "side" : ""}"
        .hidden=${!this.pickerStatus}
        style="margin-right:${this.offsetRight}px"
      >
        ${this.pickerStatus ? r.e` <color-picker
              @mousedown=${t => {
      t.stopPropagation();
      this._close_picker_lock = true;
    }}
              value="${this.value}"
              @input="${this._pickColor}"
            ></color-picker>` : null}
      </section>
    `;
  }
};
u.styles = o;
c([Object(r.g)({
  type: String
})], u.prototype, "value", undefined);
c([Object(r.g)({
  type: Number
})], u.prototype, "offsetRight", undefined);
c([Object(r.g)({
  type: Boolean
})], u.prototype, "side", undefined);
c([Object(r.g)({
  type: String
})], u.prototype, "name", undefined);
c([Object(r.g)({
  type: Array
})], u.prototype, "colors", undefined);
c([Object(r.f)()], u.prototype, "pickerStatus", undefined);
c([Object(r.f)()], u.prototype, "activeIndex", undefined);
c([Object(r.h)(".color-picker")], u.prototype, "$colorPicker", undefined);
u = c([Object(r.c)("i-colorpicker")], u);