require(/*webcrack:missing*/"./7.js");
import * as r from /*webcrack:missing*/"./1.js";
require(/*webcrack:missing*/"./470.js");
import * as o from "./432.js";
import * as i from "./163.js";
import * as s from "./22.js";
import * as a from "./106.js";
import * as c from "./6.js";
import * as u from "./24.js";
import * as l from "./0.js";
var h = r.b`.wrapper {
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
  margin-top: 40px;
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
.email-wrapper {
  display: flex;
  margin-bottom: 24px;
}
.email-wrapper infinito-input {
  margin: 0;
  flex: 1;
}
.email-wrapper infinito-button {
  --button-color: none;
  --border-color: #333;
  --font-color: #333;
  width: auto;
  min-width: 90px;
  margin: 0;
  margin-left: 10px;
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
import * as p from "./621.js";
var f = p;
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
export let FindPassword = class extends r.a {
  constructor() {
    super();
    this.email = "";
    this.emailError = "";
    this.imgCode = "";
    this.imgcodeTime = Date.now();
    this.imgcodeError = "";
    this.password = "";
    this.codeError = "";
    this.disabled = false;
    this.showCounter = false;
    this.sec = 60;
    this.loading1 = false;
    this.loading2 = false;
    this.imgToken = "";
    this.imgData = "";
    document.title = Object(c.i18n)("forget_password");
  }
  firstUpdated() {
    this.getTokenImg();
  }
  getImg() {
    this.imgcodeTime = Date.now();
  }
  async getTokenImg() {
    if (l.C.supportCookie) {
      return;
    }
    const {
      data: t,
      error: e
    } = await s.f.geVerifyTokenImg();
    if (!e) {
      this.imgData = t.img;
      this.imgToken = t.token;
    }
  }
  render() {
    return r.e`
      <div class="wrapper">
        <div class="container">
          <div class="form">
            <div>
              <h2 class="large-title">${Object(c.i18n)("forget_password")}</h2>
              <p>${c.IS_ZH ? Object(c.i18n)("reset_password_by_email_or_phone") : Object(c.i18n)("reset_password_by_email")}</p>
            </div>
            <div class="form-control">
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
                ${l.C.supportCookie ? r.e`
                      <img
                        @click="${this.getImg}"
                        class="img-code"
                        src="${l.y + "/verify/get_img?t=" + this.imgcodeTime}"
                        alt=""
                      />
                    ` : r.e` <div @click="${this.getTokenImg}" class="img-code">${Object(o.a)(this.imgData)}</div> `}
              </div>
              <div class="email-wrapper">
                <infinito-input
                  name="email"
                  placeholder="${c.IS_ZH ? Object(c.i18n)("email_or_phone_number_tips") : Object(c.i18n)("email")}"
                  .error="${this.emailError}"
                  @onfocus=${() => {
      this.emailError = "";
    }}
                >
                </infinito-input>
                ${this.showCounter ? r.e`<infinito-button disabled>${this.sec}s</infinito-button>` : r.e`
                      <infinito-button
                        style="max-width: 165px;"
                        .loading=${this.loading1}
                        @click=${u.a.debounce(this.getCode, 200)}
                      >
                        ${Object(c.i18n)("verity_code")}
                      </infinito-button>
                    `}
              </div>
              <infinito-input
                name="code"
                placeholder="${Object(c.i18n)("enter_verification_code_tips")}"
                .error="${this.codeError}"
                @onfocus=${() => {
      this.codeError = "";
    }}
              >
              </infinito-input>
              <infinito-button primary .loading=${this.loading2} @click="${this.handleClick}">
                ${Object(c.i18n)("next")}
              </infinito-button>
            </div>
          </div>
          <div class="bg">
            <img .src=${f} alt="bg" />
          </div>
        </div>
      </div>
    `;
  }
  async getCode() {
    if (this.disabled) {
      return;
    }
    const t = this.checkEmailOrPhone();
    this.emailError = t.error;
    if (this.emailError) {
      return;
    }
    this.imgcodeError = this.checkImgcode();
    if (this.imgcodeError) {
      return;
    }
    const e = this.emilInput.value.trim();
    const n = this.imgcodeInput.value.trim();
    let r;
    this.disabled = true;
    this.loading1 = true;
    if (t.type === "email") {
      r = await s.f.getEmailCode({
        email: e,
        code: n,
        token: l.C.supportCookie ? undefined : this.imgToken
      });
    } else if (t.type === "phone") {
      r = await s.f.sendPhoneCode({
        phone_number: e,
        type: "reset_password",
        code: n,
        token: l.C.supportCookie ? undefined : this.imgToken
      });
    }
    if (!r.error || r.error.code !== 3021) {
      if (l.C.supportCookie) {
        this.getImg();
      } else {
        this.getTokenImg();
      }
    }
    if (r.error) {
      this.disabled = false;
      a.message.error(r.error.message);
    } else {
      a.message.success(Object(c.i18n)("send_success"));
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
    }
    this.loading1 = false;
  }
  async handleClick() {
    if (this.loading2) {
      return;
    }
    const t = this.emilInput.value;
    const e = this.codeInput.value;
    const n = this.checkEmailOrPhone();
    this.emailError = n.error;
    this.codeError = this.checkCode();
    if (this.emailError || this.codeError) {
      return;
    }
    let r;
    this.loading2 = true;
    if (n.type === "email") {
      r = await s.f.forgetPassword({
        email: t,
        code: e
      });
    } else if (n.type === "phone") {
      r = await s.f.verifyPhoneVCode(t, e);
    }
    if (r.error) {
      a.message.error(r.error.message);
    } else {
      Object(i.c)(`/reset-password/index.html?account=${encodeURIComponent(t)}&code=${e}`);
    }
    this.loading2 = false;
  }
  checkImgcode() {
    if (!this.imgcodeInput.value.trim()) {
      return Object(c.i18n)("cannot_empty");
    }
  }
  checkEmailOrPhone() {
    const t = this.emilInput.value.trim();
    if (t) {
      if (/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)) {
        return {
          type: "email"
        };
      } else if (/^1[3456789]\d{9}$/.test(t)) {
        return {
          type: "phone"
        };
      } else {
        return {
          error: c.IS_ZH ? Object(c.i18n)("please_enter_right_account") : Object(c.i18n)("email_format_error")
        };
      }
    } else {
      return {
        error: Object(c.i18n)("cannot_empty")
      };
    }
  }
  checkCode() {
    if (!this.codeInput.value) {
      return Object(c.i18n)("verity_code_no_value");
    }
  }
};
FindPassword.styles = h;
d([Object(r.h)("infinito-input[name=\"email\"]")], FindPassword.prototype, "emilInput", undefined);
d([Object(r.h)("infinito-input[name=\"imgcode\"]")], FindPassword.prototype, "imgcodeInput", undefined);
d([Object(r.h)("infinito-input[name=\"code\"]")], FindPassword.prototype, "codeInput", undefined);
d([Object(r.g)({
  type: String
})], FindPassword.prototype, "email", undefined);
d([Object(r.g)({
  type: String
})], FindPassword.prototype, "emailError", undefined);
d([Object(r.g)({
  type: String
})], FindPassword.prototype, "imgCode", undefined);
d([Object(r.g)({
  type: Number
})], FindPassword.prototype, "imgcodeTime", undefined);
d([Object(r.g)({
  type: String
})], FindPassword.prototype, "imgcodeError", undefined);
d([Object(r.g)({
  type: String
})], FindPassword.prototype, "password", undefined);
d([Object(r.g)({
  type: String
})], FindPassword.prototype, "codeError", undefined);
d([Object(r.g)({
  type: Boolean
})], FindPassword.prototype, "disabled", undefined);
d([Object(r.g)({
  type: Boolean
})], FindPassword.prototype, "showCounter", undefined);
d([Object(r.g)({
  type: Number
})], FindPassword.prototype, "sec", undefined);
d([Object(r.g)({
  type: Boolean
})], FindPassword.prototype, "loading1", undefined);
d([Object(r.g)({
  type: Boolean
})], FindPassword.prototype, "loading2", undefined);
d([Object(r.f)()], FindPassword.prototype, "imgToken", undefined);
d([Object(r.f)()], FindPassword.prototype, "imgData", undefined);
FindPassword = d([Object(r.c)("find-password")], FindPassword);