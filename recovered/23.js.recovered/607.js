require(/*webcrack:missing*/"./7.js");
import * as r from /*webcrack:missing*/"./1.js";
require(/*webcrack:missing*/"./470.js");
import * as o from "./432.js";
import * as i from "./163.js";
import * as s from "./0.js";
import * as a from "./22.js";
import * as c from "./6.js";
import * as u from "./611.js";
var l = r.b`.wrapper {
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
/**
 * 注册
 */
.register-wrapper .register-form {
  padding: 45px 60px;
}
.register-wrapper .form-control {
  margin-top: 50px;
}
.register-wrapper .form-control .email-wrapper {
  display: flex;
  margin-bottom: 24px;
}
.register-wrapper .form-control .email-wrapper infinito-input {
  margin: 0;
  flex: 1;
}
.register-wrapper .form-control .email-wrapper infinito-button {
  --button-color: none;
  --border-color: #333;
  --font-color: #333;
  width: auto;
  min-width: 90px;
  margin: 0;
  margin-left: 10px;
}
.register-wrapper .return {
  margin: -36px 0 20px 0;
  font-size: 12px;
  font-weight: 400;
  color: #656565;
  line-height: 16px;
  cursor: pointer;
  transition: color 300ms;
}
.register-wrapper .return:hover {
  color: #333;
}
.register-wrapper .return img {
  width: 14px;
  vertical-align: middle;
}
.imgcode-wrapper .img-code {
  width: 156px;
  height: 52px;
  margin-left: 12px;
  border-radius: 6px;
  background: #e9e9e9;
  cursor: pointer;
}
.imgcode-wrapper .img-code svg {
  width: 100%;
  height: 100%;
}
`;
import * as h from "./634.js";
var p = h;
import * as f from "./24.js";
import * as d from "./792.js";
var g = d;
import * as y from "./106.js";
import * as m from "./13.js";
function b(t, e, n, r) {
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
export let UserRegister = class extends r.a {
  constructor() {
    super();
    this.email = "";
    this.imgCode = "";
    this.imgcodeTime = Date.now();
    this.code = "";
    this.emailError = "";
    this.imgcodeError = "";
    this.codeError = "";
    this.password = "";
    this.passwordError = "";
    this.repeatPassword = "";
    this.repeatPasswordError = "";
    this.disabled = false;
    this.showCounter = false;
    this.sec = 60;
    this.isShowPassword = false;
    this.loading1 = false;
    this.codeLoading = false;
    this.imgToken = "";
    this.imgData = "";
    this.validatorFunc = () => {
      const t = new u.a();
      t.add(this.passwordInput.value, [{
        strategy: "isNonEmpty",
        errorMsg: Object(c.i18n)("password_dont_empty")
      }, {
        strategy: "minLength:6",
        errorMsg: Object(c.i18n)("password_length_low")
      }]);
      return t.start();
    };
    document.title = Object(c.i18n)("register");
  }
  firstUpdated() {
    this.getTokenImg();
  }
  getImg() {
    this.imgcodeTime = Date.now();
  }
  async getTokenImg() {
    if (s.C.supportCookie) {
      return;
    }
    const {
      data: t,
      error: e
    } = await a.f.geVerifyTokenImg();
    if (!e) {
      this.imgData = t.img;
      this.imgToken = t.token;
    }
  }
  render() {
    return r.e`
      <div class="wrapper register-wrapper">
        <div class="container">
          <div class="form register-form">
            <div>
              <h2 class="large-title">${Object(c.i18n)("welcome_infinity")}</h2>
              ${this.isShowPassword ? r.e`<p>${Object(c.i18n)("please_set_your_password")}</p>` : r.e`<p>${Object(c.i18n)("register_now")}</p>`}
            </div>
            <div class="form-control">
              ${this.isShowPassword ? r.e`
                      <p class="return" @click=${this.goBack}><img .src=${g} />${Object(c.i18n)("register_back")}</p>
                      <infinito-input
                        name="password"
                        type="password"
                        placeholder="${Object(c.i18n)("password")}"
                        .error="${this.passwordError}"
                        @onfocus=${() => {
      this.passwordError = "";
    }}
                      ></infinito-input>
                      <infinito-input
                        name="repeatPassword"
                        type="password"
                        placeholder="${Object(c.i18n)("confirm_password_2")}"
                        .error="${this.repeatPasswordError}"
                        @keyup=${this.handleKeyUp}
                        @onfocus=${() => {
      this.repeatPasswordError = "";
    }}
                      ></infinito-input>
                      <infinito-button primary .loading=${this.codeLoading} @click="${this.handleClick}">
                        ${Object(c.i18n)("next")}
                      </infinito-button>
                    ` : r.e`
                      <div class="email-wrapper imgcode-wrapper">
                        <infinito-input
                          name="imgcode"
                          placeholder="${Object(c.i18n)("img_verify_code")}"
                          .error="${this.imgcodeError}"
                          @onfocus=${() => {
      this.imgcodeError = "";
    }}
                        >
                        </infinito-input>
                        ${s.C.supportCookie ? r.e`<img
                              @click="${this.getImg}"
                              class="img-code"
                              src="${s.y + "/verify/get_img?t=" + this.imgcodeTime}"
                              alt=""
                            />` : r.e`
                              <div @click="${this.getTokenImg}" class="img-code">${Object(o.a)(this.imgData)}</div>
                            `}
                      </div>
                      <div class="email-wrapper">
                        <infinito-input
                          name="email"
                          placeholder="${Object(c.i18n)("email")}"
                          .error="${this.emailError}"
                          @onfocus=${() => {
      this.emailError = "";
    }}
                        >
                        </infinito-input>
                        ${this.showCounter ? r.e`<infinito-button disabled>${this.sec}s</infinito-button>` : r.e`
                              <infinito-button
                                style="max-width: 165px;"
                                ?disabled=${this.loading1}
                                @click=${f.a.debounce(this.getCode, 200)}
                              >
                                ${Object(c.i18n)("verity_code")}
                              </infinito-button>
                            `}
                      </div>

                      <infinito-input
                        name="code"
                        placeholder="${Object(c.i18n)("email_code")}"
                        .error="${this.codeError}"
                        @onfocus=${() => {
      this.codeError = "";
    }}
                      >
                      </infinito-input>
                      <infinito-button primary .loading=${this.codeLoading} @click="${this.setPassword}">
                        ${Object(c.i18n)("next")}
                      </infinito-button>
                    `}
              </div>
            </div>
          </div>
          <div class="bg register-bg">
            <img .src=${p} alt="bg" />
          </div>
        </div>
      </div>
    `;
  }
  async goBack() {
    this.passwordError = "";
    this.repeatPasswordError = "";
    this.isShowPassword = false;
    await this.updateComplete;
    this.emilInput.value = this.email;
    this.codeInput.value = this.code;
  }
  async getCode() {
    if (this.disabled) {
      return;
    }
    this.imgcodeError = this.checkImgcode();
    if (this.imgcodeError) {
      return;
    }
    this.emailError = this.checkEmail();
    if (this.emailError) {
      return;
    }
    const t = this.emilInput.value.trim();
    const e = this.imgcodeInput.value.trim();
    this.disabled = true;
    this.loading1 = true;
    const n = await a.f.getRegisterCode({
      email: t,
      code: e,
      token: s.C.supportCookie ? undefined : this.imgToken
    });
    if (n.code !== 3021) {
      if (s.C.supportCookie) {
        this.getImg();
      } else {
        this.getTokenImg();
      }
    }
    if (n.code === 0) {
      y.message.success(Object(c.i18n)("send_success"));
      this.showCounter = true;
      this.timer = setInterval(() => {
        if (this.sec > 0 && this.sec <= 60) {
          this.sec--;
        } else {
          this.sec = 60;
          this.showCounter = false;
          this.disabled = false;
          clearInterval(this.timer);
        }
      }, 1000);
    } else {
      this.disabled = false;
      this.emilInput.shadowRoot.querySelector("input").focus();
      if (typeof n.message == "string") {
        y.message.error(n.message);
      } else {
        y.message.error(Object(c.i18n)("register_get_email_code_error"));
      }
    }
    this.loading1 = false;
  }
  checkEmail() {
    const t = this.emilInput.value.trim();
    if (t) {
      if (/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)) {
        return undefined;
      } else {
        return Object(c.i18n)("email_format_error");
      }
    } else {
      return Object(c.i18n)("cannot_empty");
    }
  }
  checkImgcode() {
    if (!this.imgcodeInput.value.trim()) {
      return Object(c.i18n)("cannot_empty");
    }
  }
  checkCode() {
    if (!this.codeInput.value) {
      return Object(c.i18n)("verity_code_no_value");
    }
  }
  async setPassword() {
    const t = this.emilInput.value.trim();
    const e = this.codeInput.value;
    this.emailError = this.checkEmail();
    this.codeError = this.checkCode();
    if (this.emailError || this.codeError) {
      return;
    }
    this.codeLoading = true;
    const n = await a.f.inspceCode({
      email: t,
      code: e
    });
    if (n.code === 0) {
      this.email = t;
      this.code = e;
      this.isShowPassword = true;
    } else {
      y.message.error(n.message);
    }
    this.codeLoading = false;
  }
  handleKeyUp(t) {
    if (t.keyCode === 13) {
      t.preventDefault();
      this.handleClick();
    }
  }
  async handleClick() {
    if (this.codeLoading) {
      return;
    }
    const t = this.passwordInput.value;
    const e = this.repeatPasswordInput.value;
    const n = this.validatorFunc();
    this.passwordError = n;
    if (!e || e !== t) {
      this.repeatPasswordError = Object(c.i18n)("password_not_equals");
    }
    if (n || this.repeatPasswordError) {
      return;
    }
    this.codeLoading = true;
    const r = await a.f.register({
      email: this.email,
      password: t,
      repeatPassword: e,
      code: this.code
    });
    if (r.code === 0) {
      const {
        user: t,
        token: e,
        refreshToken: n
      } = r.data;
      const o = await a.f.getMobileUid(t.uid, t.secret);
      if ((o == null ? undefined : o.code) === 0) {
        const {
          mobileuid: e
        } = o.data;
        t.mobileuid = e;
      }
      const {
        data: s,
        error: c
      } = await m.l.read();
      if (c || (s == null ? undefined : s.isLogin)) {
        f.a.openUrl(null);
        setTimeout(() => {
          window.close();
        }, 0);
        return;
      }
      await m.l.create({
        isLogin: true,
        userInfo: t,
        token: e,
        refreshToken: n
      });
      Object(i.c)("/user-setting/index.html");
    } else {
      y.message.error(r.message);
    }
    this.codeLoading = false;
  }
};
UserRegister.styles = l;
b([Object(r.h)("infinito-input[name=\"email\"]")], UserRegister.prototype, "emilInput", undefined);
b([Object(r.h)("infinito-input[name=\"imgcode\"]")], UserRegister.prototype, "imgcodeInput", undefined);
b([Object(r.h)("infinito-input[name=\"code\"]")], UserRegister.prototype, "codeInput", undefined);
b([Object(r.h)("infinito-input[name=\"password\"]")], UserRegister.prototype, "passwordInput", undefined);
b([Object(r.h)("infinito-input[name=\"repeatPassword\"]")], UserRegister.prototype, "repeatPasswordInput", undefined);
b([Object(r.g)({
  type: String
})], UserRegister.prototype, "email", undefined);
b([Object(r.g)({
  type: String
})], UserRegister.prototype, "imgCode", undefined);
b([Object(r.g)({
  type: Number
})], UserRegister.prototype, "imgcodeTime", undefined);
b([Object(r.g)({
  type: String
})], UserRegister.prototype, "code", undefined);
b([Object(r.g)({
  type: String
})], UserRegister.prototype, "emailError", undefined);
b([Object(r.g)({
  type: String
})], UserRegister.prototype, "imgcodeError", undefined);
b([Object(r.g)({
  type: String
})], UserRegister.prototype, "codeError", undefined);
b([Object(r.g)({
  type: String
})], UserRegister.prototype, "password", undefined);
b([Object(r.g)({
  type: String
})], UserRegister.prototype, "passwordError", undefined);
b([Object(r.g)({
  type: String
})], UserRegister.prototype, "repeatPassword", undefined);
b([Object(r.g)({
  type: String
})], UserRegister.prototype, "repeatPasswordError", undefined);
b([Object(r.g)({
  type: Boolean
})], UserRegister.prototype, "disabled", undefined);
b([Object(r.g)({
  type: Boolean
})], UserRegister.prototype, "showCounter", undefined);
b([Object(r.g)({
  type: Number
})], UserRegister.prototype, "sec", undefined);
b([Object(r.g)({
  type: Boolean
})], UserRegister.prototype, "isShowPassword", undefined);
b([Object(r.g)({
  type: Boolean
})], UserRegister.prototype, "loading1", undefined);
b([Object(r.g)({
  type: Boolean
})], UserRegister.prototype, "codeLoading", undefined);
b([Object(r.f)()], UserRegister.prototype, "imgToken", undefined);
b([Object(r.f)()], UserRegister.prototype, "imgData", undefined);
UserRegister = b([Object(r.c)("user-register")], UserRegister);