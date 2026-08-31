require("./7.js");
var r = require("./1.js");
var i = r.b`:host {
  display: block;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.label-box {
  max-width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.label-box .label {
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  line-height: 20px;
  white-space: nowrap;
}
.error {
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #ea4747;
}
.input {
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  line-height: 1;
  height: 20px;
  box-sizing: content-box;
  padding-bottom: 10px;
  width: 100%;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
.input::placeholder {
  color: #999999;
}
.input:-moz-read-only {
  cursor: not-allowed;
  color: #999999;
}
.input:read-only {
  cursor: not-allowed;
  color: #999999;
}
`;
function o(t, e, n, r) {
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
const s = async t => null;
let a = class extends r.a {
  constructor() {
    super(...arguments);
    this.label = "";
    this.defaultValue = "";
    this.value = "";
    this.validateMsg = i18n("format_error");
    this.placeholder = i18n("please_enter_text");
    this.readonly = false;
    this.validate = s;
    this.validateStatus = null;
    this.onChange = t => {
      const e = t.currentTarget.value;
      if (this.validateStatus === false && this.validate(e)) {
        this.validateStatus = true;
      }
      this.value = e;
      this.emitChangeEvent(e);
    };
    this.emitChangeEvent = t => {
      const e = new CustomEvent("on-change", {
        detail: {
          value: t
        }
      });
      this.dispatchEvent(e);
    };
    this.checkValidity = async () => {
      this.validateStatus = await this.validate(this.value);
      return this.validateStatus;
    };
    this.reset = () => {
      this.value = this.defaultValue;
      this.emitChangeEvent(this.defaultValue);
      this.validateStatus = null;
    };
  }
  render() {
    return r.e`
      <div class="item">
        <div class="label-box">
          <span class="label">${this.label}</span
          ><span .hidden="${this.validateStatus !== false}" class="error ellipsis">*${this.validateMsg}</span>
        </div>

        <slot name="input">
          <input
            class="input"
            autocomplete="off"
            type="text"
            .value="${this.value || ""}"
            .placeholder="${this.placeholder}"
            .readOnly="${this.readonly}"
            @blur="${this.checkValidity}"
            @input=${t => {
      this.onChange(t);
    }}
          />
        </slot>
      </div>
    `;
  }
};
a.styles = i;
o([Object(r.g)({
  type: String
})], a.prototype, "label", undefined);
o([Object(r.g)({
  type: String
})], a.prototype, "defaultValue", undefined);
o([Object(r.g)({
  type: String
})], a.prototype, "value", undefined);
o([Object(r.g)({
  type: String
})], a.prototype, "validateMsg", undefined);
o([Object(r.g)({
  type: String
})], a.prototype, "placeholder", undefined);
o([Object(r.g)({
  type: Boolean
})], a.prototype, "readonly", undefined);
o([Object(r.g)({
  attribute: false
})], a.prototype, "validate", undefined);
o([Object(r.f)()], a.prototype, "validateStatus", undefined);
a = o([Object(r.c)("i-input")], a);