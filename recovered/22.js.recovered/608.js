require(/*webcrack:missing*/"./7.js");
import * as r from /*webcrack:missing*/"./1.js";
import * as i from "./618.js";
import * as o from "./22.js";
import * as s from "./163.js";
import * as a from "./6.js";
import * as c from "./417.js";
import * as u from "./106.js";
import * as l from "./162.js";
import * as h from "./161.js";
require(/*webcrack:missing*/"./470.js");
var p = r.b`.wrapper {
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
  padding: 60px;
  background: #f9f9f9;
  border-radius: 6px 0px 0px 6px;
}
.wrapper .bg {
  width: 400px;
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
.setting-wrapper .upload-input-control .border input,
.setting-wrapper .upload-input-control .border .loading {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  opacity: 0;
  cursor: pointer;
}
.setting-wrapper .upload-input-control .border .loading {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 2;
  opacity: 1;
}
.setting-wrapper .upload-input-control .border .loading i-svg {
  color: #fff;
  width: 35px;
  height: 35px;
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
import * as f from "./634.js";
var d = f;
import * as g from "./793.js";
var m = g;
import * as y from "./794.js";
var b = y;
import * as v from "./633.js";
var w = v;
import * as x from "./13.js";
function _(t, e, n, r) {
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
export let SettingProfile = class extends r.a {
  constructor() {
    super();
    this.cropper = null;
    this.preViewImgData = null;
    this.gender = "x";
    this.avatar = "";
    this.avatarKey = "";
    this.userInfo = {};
    this.error = "";
    this.loading = false;
    this.uploadLoading = false;
    document.title = Object(a.i18n)("settings");
  }
  async firstUpdated() {
    const {
      data: t,
      error: e
    } = await x.l.read();
    if (!e && t) {
      this.userInfo = t.userInfo;
      this.initCropper();
    }
  }
  render() {
    const {
      avatar: t = "",
      name: e = ""
    } = this.userInfo;
    return r.e`
      <div class="wrapper setting-wrapper">
        <div class="container">
          <div class="form setting-form">
            <div>
              <h2 class="large-title">${Object(a.i18n)("setting_your_avatar_nickname")}</h2>
            </div>
            <div class="form-control">
              <div class="upload-input-control">
                <div class="border">
                  ${this.avatar ? r.e`<div class="avatar" style="background: url(${this.avatar}); background-size: cover;"></div>` : r.e`<img class="avatar" .src=${t || l.g} />`}
                  <input
                    type="file"
                    name="avatar"
                    @change=${this.chooseImage}
                    @drop=${this.chooseImage}
                    accept="image/png, image/jpeg"
                  />
                  ${this.uploadLoading ? r.e`
                        <div class="loading">
                          <i-svg src=${w}></i-svg>
                        </div>
                      ` : null}
                </div>
                <span>${Object(a.i18n)("please_chose_picture")}</span>
              </div>
              <div class="input-control">
                <infinito-input
                  name="username"
                  placeholder="${Object(a.i18n)("please_enter_nickname")}"
                  .value=${e}
                  .error="${this.error}"
                  @onfocus=${() => {
      this.error = "";
    }}
                >
                </infinito-input>
              </div>
              <!-- <div class="radio-control">
                <span>${Object(a.i18n)("gender")}</span>
                <infinito-radio-group selected="${this.gender}" @on-change=${this.radioChange}>
                  <infinito-radio value="male">
                    <div class="radio-content">
                      <p>${Object(a.i18n)("male")}</p>
                      <img .src=${m} />
                    </div>
                  </infinito-radio>
                  <infinito-radio value="female">
                    <div class="radio-content">
                      <p>${Object(a.i18n)("female")}</p>
                      <img .src=${b} />
                    </div>
                  </infinito-radio>
                  <infinito-radio value="x">${Object(a.i18n)("none")}</infinito-radio>
                </infinito-radio-group>
              </div> -->
              <infinito-button primary @click="${this.handleClick}" .loading=${this.loading}>
                ${Object(a.i18n)("confirm")}
              </infinito-button>
              <p class="cancel" @click="${this.handleCancel}">${Object(a.i18n)("skip")}</p>
            </div>
          </div>
          <div
            class="bg register-bg"
            style=${Object(i.a)({
      backgroundImage: `url(${d})`,
      backgroundSize: "cover"
    })}
          ></div>
        </div>
      </div>
    `;
  }
  initCropper() {
    this.cropper = c.a.create({
      title: Object(a.i18n)("edit_avatar"),
      needBackground: true
    });
    this.cropper.addEventListener("on-change", async t => {
      const {
        data: e
      } = t.detail;
      this.preViewImgData = e;
      const n = this.avatar;
      this.avatar = URL.createObjectURL(this.preViewImgData);
      URL.revokeObjectURL(n);
      setTimeout(() => {
        this.uploadAvatar();
      }, 500);
    });
  }
  chooseImage() {
    const t = this.avatarInput.files[0];
    if (t.type !== "image/jpeg" && t.type !== "image/png") {
      u.message.error(Object(a.i18n)("please_chose_picture"));
      this.avatarInput.value = "";
      return;
    }
    if (!(t.size / 1024 / 1024 < 2)) {
      u.message.error(Object(a.i18n)("oversize"));
      this.avatarInput.value = "";
      return;
    }
    const e = new FileReader();
    e.readAsDataURL(t);
    this.avatarInput.value = null;
    e.onload = () => {
      this.cropper.init(e.result);
      this.cropper.show();
    };
  }
  async uploadAvatar() {
    this.uploadLoading = true;
    const t = await o.f.uploadAvatar(this.preViewImgData);
    if ((t == null ? undefined : t.code) === 0) {
      this.avatarKey = t.data.key;
    } else {
      this.avatar = "";
      this.preViewImgData = null;
      u.message.error(Object(a.i18n)("upload_avatar_failure"));
    }
    this.uploadLoading = false;
  }
  radioChange(t) {
    this.gender = t.detail.selected;
  }
  async handleClick() {
    if (this.loading) {
      return;
    }
    const t = this.userInput.value;
    if (!t) {
      this.error = Object(a.i18n)("username_cannot_empty");
      return;
    }
    const e = {
      name: t,
      gender: this.gender,
      avatar: this.avatarKey
    };
    this.loading = true;
    try {
      const t = await o.f.updateProfile(e);
      const {
        data: n,
        error: r
      } = await x.l.read();
      if (r) {
        throw r;
      }
      if ((t == null ? undefined : t.code) === 0) {
        const {
          user: e
        } = t.data;
        const {
          error: r
        } = await x.l.update({
          userInfo: Object.assign(Object.assign({}, n.userInfo), e)
        });
        if (r) {
          throw r;
        }
        h.slave.sendMessage("tabs-sync", x.l.key);
        Object(s.d)();
      } else {
        u.message.error(Object(a.i18n)("update_data_failure"));
      }
    } catch (t) {
      u.message.error(t.message);
    }
    this.loading = false;
  }
  handleCancel() {
    Object(s.d)();
  }
};
SettingProfile.styles = p;
_([Object(r.h)("infinito-input[name=\"username\"]")], SettingProfile.prototype, "userInput", undefined);
_([Object(r.h)("input[name=\"avatar\"]")], SettingProfile.prototype, "avatarInput", undefined);
_([Object(r.g)({
  type: String
})], SettingProfile.prototype, "gender", undefined);
_([Object(r.g)({
  type: String
})], SettingProfile.prototype, "avatar", undefined);
_([Object(r.g)({
  type: String
})], SettingProfile.prototype, "avatarKey", undefined);
_([Object(r.g)({
  type: Object
})], SettingProfile.prototype, "userInfo", undefined);
_([Object(r.g)({
  type: String
})], SettingProfile.prototype, "error", undefined);
_([Object(r.g)({
  type: Boolean
})], SettingProfile.prototype, "loading", undefined);
_([Object(r.g)({
  type: Boolean
})], SettingProfile.prototype, "uploadLoading", undefined);
SettingProfile = _([Object(r.c)("setting-profile")], SettingProfile);