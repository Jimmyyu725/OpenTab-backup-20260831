require(/*webcrack:missing*/"./7.js");
import * as r from /*webcrack:missing*/"./1.js";
require(/*webcrack:missing*/"./470.js");
import * as o from "./611.js";
import * as i from "./22.js";
import * as s from "./163.js";
import * as a from "./6.js";
var c = r.b`.wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.wrapper .container {
  display: flex;
}
.wrapper .form {
  box-sizing: border-box;
  width: 450px;
  height: 495px;
  padding: 60px;
  background: #f9f9f9;
  border-radius: 6px 0px 0px 6px;
}
.wrapper .bg {
  width: 400px;
  height: 495px;
}
.wrapper .bg img {
  width: 100%;
  height: 100%;
}
.large-title {
  margin: 0;
  margin-bottom: 2px;
  font-size: 30px;
  font-weight: 600;
  color: #333;
  line-height: 42px;
}
.large-title + p {
  margin: 0;
  color: #333;
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
}
.form-control {
  margin-top: 64px;
}
.form-control infinito-button {
  --button-color: #333;
  margin-top: 26px;
  width: 100%;
  height: 52px;
}
.form-control .cancel {
  display: block;
  margin: 0;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}
infinito-input {
  --border-color: #999;
  margin-bottom: 24px;
}
.radio-control {
  display: flex;
  align-items: center;
}
.radio-control > span {
  font-size: 14px;
  margin-right: 24px;
}
.radio-control infinito-radio-group {
  flex: 1;
}
.radio-control .radio-content {
  display: flex;
}
.radio-control .radio-content p {
  margin: 0;
  margin-right: 6px;
}
.register-wrapper .register-form {
  padding: 45px 60px;
}
.register-wrapper .form-control {
  margin-top: 45px;
}
.register-wrapper .form-control infinito-button {
  margin-top: -4px;
}
.setting-wrapper .large-title {
  font-size: 23px;
  text-align: center;
  line-height: 32px;
}
.setting-wrapper .setting-form {
  padding: 45px 60px 40px;
}
.setting-wrapper .form-control {
  margin-top: 24px;
}
.setting-wrapper .form-control infinito-button {
  margin: 40px 0 30px;
  --font-size: 16px;
}
.setting-wrapper .upload-input-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
}
.setting-wrapper .upload-input-control .border {
  position: relative;
  width: 64px;
  height: 64px;
  margin-bottom: 14px;
  border-radius: 50%;
  background: #ececec;
  overflow: hidden;
  cursor: pointer;
}
.setting-wrapper .upload-input-control .border input {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  opacity: 0;
  cursor: pointer;
}
.setting-wrapper .upload-input-control .border .avatar {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
}
.setting-wrapper .upload-input-control .border + span {
  font-size: 14px;
}
.email-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.email-wrapper infinito-input {
  margin: 0;
  flex: 1;
}
.email-wrapper infinito-button {
  --button-color: none;
  --border-color: #999;
  --font-color: #999;
  width: auto;
  min-width: 90px;
  margin: 0;
  margin-left: 10px;
}
`;
import * as u from "./621.js";
var l = u;
import * as h from "./106.js";
import * as p from "./161.js";
import * as f from "./13.js";
function d(t, e, n, r) {
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
export let ModifyPassword = class extends r.a {
  constructor() {
    super();
    this.originPasswordError = "";
    this.newPasswordError = "";
    this.loading = false;
    this.validatorFunc = () => {
      const t = new o.a();
      const e = new o.a();
      t.add(this.originPasswordInput.value, [{
        strategy: "isNonEmpty",
        errorMsg: Object(a.i18n)("password_dont_empty")
      }]);
      e.add(this.newPasswordInput.value, [{
        strategy: "isNonEmpty",
        errorMsg: Object(a.i18n)("password_dont_empty")
      }, {
        strategy: "minLength:6",
        errorMsg: Object(a.i18n)("password_length_low")
      }]);
      return {
        errorMsg: t.start(),
        errorMsg2: e.start()
      };
    };
    document.title = Object(a.i18n)("modify_pwd");
  }
  render() {
    return r.e`
      <div class="wrapper modify-password">
        <div class="container">
          <div class="form">
            <div>
              <h2 class="large-title">${Object(a.i18n)("set_new_password")}</h2>
              <p>${Object(a.i18n)("reset_your_password")}</p>
            </div>
            <div class="form-control">
              <infinito-input
                type="password"
                name="originPassword"
                placeholder="${Object(a.i18n)("origin_password")}"
                .error="${this.originPasswordError}"
                @onfocus=${() => {
      this.originPasswordError = "";
    }}
              ></infinito-input>
              <infinito-input
                type="password"
                name="newPassword"
                placeholder="${Object(a.i18n)("new_password")}"
                .error="${this.newPasswordError}"
                @onfocus=${() => {
      this.newPasswordError = "";
    }}
                @keyup=${this.handleKeyUp}
              ></infinito-input>
              <infinito-button primary .loading=${this.loading} @click=${this.handleSubmit}>
                ${Object(a.i18n)("confirm")}
              </infinito-button>
            </div>
          </div>
          <div class="bg">
            <img .src=${l} alt="bg" />
          </div>
        </div>
      </div>
    `;
  }
  handleKeyUp(t) {
    if (t.keyCode === 13) {
      t.preventDefault();
      this.handleSubmit();
    }
  }
  async handleSubmit() {
    if (this.loading) {
      return;
    }
    const t = this.originPasswordInput.value;
    const e = this.newPasswordInput.value;
    const {
      errorMsg: n,
      errorMsg2: r
    } = this.validatorFunc();
    this.originPasswordError = n;
    this.newPasswordError = r;
    if (!n && !r) {
      this.loading = true;
      try {
        const n = await i.f.modifyPassword({
          originPassword: t,
          newPassword: e
        });
        if (n && n.code === 0) {
          await f.l.update({
            userInfo: n.data.user,
            token: n.data.token,
            refreshToken: n.data.refreshToken
          });
          p.slave.sendMessage("tabs-sync", f.l.key);
          Object(s.d)();
        } else {
          h.message.error(n.message);
        }
      } catch (t) {
        h.message.error(t.message);
      }
      this.loading = false;
    }
  }
};
ModifyPassword.styles = c;
d([Object(r.h)("infinito-input[name=\"originPassword\"]")], ModifyPassword.prototype, "originPasswordInput", undefined);
d([Object(r.h)("infinito-input[name=\"newPassword\"]")], ModifyPassword.prototype, "newPasswordInput", undefined);
d([Object(r.g)({
  type: String
})], ModifyPassword.prototype, "originPasswordError", undefined);
d([Object(r.g)({
  type: String
})], ModifyPassword.prototype, "newPasswordError", undefined);
d([Object(r.g)({
  type: Boolean
})], ModifyPassword.prototype, "loading", undefined);
ModifyPassword = d([Object(r.c)("modify-password")], ModifyPassword);