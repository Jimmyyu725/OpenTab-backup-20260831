require("./19.js");
require("./64.js");
require("./7.js");
var r = require("./1.js");
var i = require("./225.js");
var o = r.b`:host {
  width: 100%;
  box-sizing: border-box;
  padding: 24px 20px 60px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
textarea,
input {
  font-family: 'PingFang SC', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
}
.error {
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #ea4747;
}
.box-dynamic {
  padding-bottom: 30px;
}
.item-icon {
  height: 70px;
}
.img-item-box:not([hidden]) {
  display: flex;
  align-items: flex-end;
}
.img-item {
  width: 60px;
  background-color: #dddddd;
  background-image: linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px), linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px);
  background-position: 0px 0px, 5px 5px;
  background-size: 10px 10px;
  border-radius: 6px;
}
.item {
  position: relative;
  margin-bottom: 20px;
}
.item .label-box {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.item .label-box .label {
  font-weight: 500;
  color: #333333;
}
.item .label-box .tip-question {
  margin-left: 2px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.item #icon-preview {
  border: 4px solid #f6f6f6;
  transform: scale(0.25);
  transform-origin: left top;
  position: relative;
  border-radius: 30px;
  background-color: #ddd;
  background-image: linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0), linear-gradient(45deg, #fff 25%, transparent 0, transparent 75%, #fff 0);
  background-position: 0 0, 20px 20px;
  background-size: 40px 40px;
}
.item .img-dropper {
  position: relative;
  margin-right: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;
  width: 60px;
  height: 60px;
  background: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23C3C3C3FF' stroke-width='1' stroke-dasharray='5%2c 6' stroke-dashoffset='12' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 6px;
  cursor: pointer;
}
.item .img-dropper[hidden] {
  display: none;
}
.item .img-preview {
  background-size: cover;
  border: 1px solid #dadce0;
  box-sizing: border-box;
}
.item .img-preview .editing:hover {
  opacity: 1;
}
.item .img-preview .editing {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s;
}
.item .img-preview .editing-icon {
  width: 28px;
  height: 28px;
}
.item .img-preview i-svg {
  --size: 90%;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
}
.item .img-preview i-svg:hover {
  opacity: 1;
  color: #fff;
}
.item input::placeholder,
.item .input::placeholder,
.item textarea::placeholder {
  color: #999999;
}
.item input[type='text'],
.item .input {
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  line-height: 1;
  height: 30px;
  box-sizing: border-box;
  padding-bottom: 6px;
  width: 100%;
  color: #333333;
}
.item .input {
  height: auto;
  max-height: 50px;
  line-height: 16px;
  max-width: 100%;
  min-width: 100%;
  resize: none;
}
.item input:-moz-read-only {
  cursor: not-allowed;
}
.item input:read-only {
  cursor: not-allowed;
}
.item textarea.target {
  outline: none;
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  padding: 10px;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #eeeeee;
  resize: none;
  word-break: break-all;
  color: #333333;
}
.item input[type='file'] {
  width: 100px;
}
.item.btn-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item.btn-box infinito-button {
  width: 220px;
  height: 38px;
  background: #333333;
  border-radius: 6px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: #ffffff;
}
.item.btn-box infinito-button:disabled {
  background: rgba(51, 51, 51, 0.7);
}
.item.btn-box .btn-cancel {
  margin-top: 14px;
  background: #eeeeee;
  border-radius: 6px;
  font-size: 14px;
  color: #333333;
}
.item.btn-box .btn-cancel:hover {
  background: #c8c8c8;
}
.del {
  position: absolute;
  width: 18px;
  height: 18px;
  top: -6px;
  right: -6px;
  cursor: pointer;
  transition: transform 0.2s;
}
.del:hover {
  transform: scale(1.1);
}
.svg-box {
  width: 70px;
  height: 70px;
  border: 1px solid #f6f6f6;
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
require("./476.js");
require("./477.js");
require("./478.js");
require("./479.js");
var s = r.b`.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
i-input {
  display: block;
  margin-top: 20px;
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
.imgs-box {
  display: flex;
}
.img-item-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
}
.img-item-box .name {
  margin-top: 8px;
  max-width: 80px;
  height: 16px;
  font-size: 11px;
  line-height: 16px;
  font-weight: 400;
  color: #b3b3b3;
}
.active .img-item {
  box-shadow: 0px 4px 8px 0px rgba(59, 62, 64, 0.73);
}
.active .name {
  font-weight: 500;
  color: #4d4d4d;
}
.img-item {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s box-shadow;
}
.color-img {
  overflow: hidden;
}
.cloud-imgs-box {
  display: flex;
}
.cloud-imgs-box .cloud-img-box:not(:last-of-type) {
  margin-right: 10px;
}
.color-img-box {
  margin-right: 17px;
  position: relative;
}
.color-img-box:after {
  position: absolute;
  top: 8px;
  content: '';
  right: -17px;
  width: 1px;
  height: 48px;
  background: #eceeee;
}
.local-img-box {
  position: relative;
  margin-left: 17px;
}
.cloud-imgs-box + .local-img-box:after {
  position: absolute;
  top: 8px;
  content: '';
  left: -17px;
  width: 1px;
  height: 48px;
  background: #eceeee;
}
.cloud-imgs-box {
  margin: 0 17px;
}
.color-type-box {
  position: relative;
  margin-top: 18px;
  padding: 20px;
  padding-top: 1px;
  background: #f5f8fa;
}
.color-type-box:after {
  position: absolute;
  content: '';
  top: -19px;
  left: 20px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom: 10px solid #f5f8fa;
}
.permission-img {
  background: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23C3C3C3FF' stroke-width='1' stroke-dasharray='5%2c 6' stroke-dashoffset='12' stroke-linecap='butt'/%3e%3c/svg%3e");
  display: flex;
  align-items: center;
  justify-content: center;
}
.permission-img img {
  width: 28px;
  height: 28px;
}
.error {
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #ea4747;
}
`;
var _a = require("./22.js");
var c = require("./106.js");
var u = require("./85.js");
var l = require("./0.js");
function h(t, e, n, r) {
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
let p = class extends i.a {
  constructor() {
    super(...arguments);
    this.hasPermission = false;
    this.imgType = "local";
    this.imgIndex = 0;
    this.localImageError = false;
    this.localImagePreViewUrl = "";
    this.cloudImgs = [];
    this.offsetRight = 0;
    this.modalBorderRadius = "3px";
    this.isAutoBgText = true;
    this.colors = ["rgba(255,71,52,1)", "rgba(255,122,9,1)", "rgba(255,207,12,1)", "rgba(42,233,121,1)", "rgba(44,214,223,1)", "rgba(0,116,255,1)", "rgba(109,9,255,1)", "rgba(255,36,160,1)"];
    this.handleValue = async () => {
      try {
        await this.saveImage();
      } catch (t) {
        return !!this.localImagePreViewUrl && (t && t.message ? c.message.error(t.message) : c.message.error(t || "upload error"), false);
      }
      return true;
    };
    this.getPermissionUrl = () => {
      let t = [];
      t = l.k ? ["http://*/", "https://*/"] : l.r ? "<all_urls>" : ["<all_urls>"];
      return t;
    };
  }
  changeValue(t) {
    const e = new CustomEvent("on-change", {
      detail: {
        value: t
      }
    });
    this.dispatchEvent(e);
  }
  getAutoBgText() {
    if (!this.isAutoBgText) {
      return;
    }
    const {
      name: t
    } = this.value;
    let e = "";
    e = t.length > 3 ? t.substr(0, 2) : t;
    this.changeValue({
      bgText: e
    });
  }
  choosetextImg() {
    this.changeValue({
      bgType: "color"
    });
  }
  chooseCloudImg(t) {
    this.changeValue({
      bgType: "image"
    });
    this.imgType = "cloud";
    this.imgIndex = t;
  }
  chooseLocalImg() {
    this.changeValue({
      bgType: "image"
    });
    this.imgType = "local";
  }
  async saveImage() {
    if (this.value.bgType === "color") {
      if (!this.value.bgColor) {
        this.changeValue({
          bgColor: this.colors[0]
        });
      }
    } else if (this.value.bgType === "image") {
      let t = {};
      if (this.imgType === "cloud") {
        const e = this.$cloudIcons.querySelectorAll("i-imgicon")[this.imgIndex];
        t = await e.getImg();
      } else if (this.imgType === "local") {
        if (this.localImagePreViewUrl) {
          t = await this.$localicon.getImg();
        } else {
          if (!this.value.bgImage) {
            this.localImageError = true;
            throw new Error("none img");
          }
          t = {
            url: this.value.bgImage,
            bgColor: this.value.bgColor
          };
        }
      }
      this.changeValue({
        bgImage: t.url,
        bgColor: t.bgColor
      });
    }
  }
  getFormateUrl(t) {
    if (t.includes(":")) {
      return t;
    } else {
      return "http://" + this.value.target;
    }
  }
  renderCloudImgs() {
    return r.e`
      <div class="cloud-imgs-box">
        ${this.cloudImgs.map((t, e) => r.e`<div
            class="img-item-box cloud-img-box ${this.value.bgType === "image" && this.imgType === "cloud" && this.imgIndex === e ? "active" : ""}"
          >
            <div class="img-item cloud-img">
              <i-imgicon
                .preViewImgUrl="${t.url}"
                .bgColor="transparent"
                .canDelete="${false}"
                .modalBorderRadius="${this.modalBorderRadius}"
                .active="${this.value.bgType === "image" && this.imgType === "cloud" && this.imgIndex === e}"
                @on-change="${() => {
      this.chooseCloudImg(e);
    }}"
                .iconType="${this.iconType}"
              ></i-imgicon>
            </div>
            <div class="name ellipsis">${i18n("icon")}${"0" + (e + 1)}</div>
          </div>`)}
      </div>
    `;
  }
  async getUrlIcon() {
    await this.checkPermission();
    if (this.hasPermission || l.s) {
      const t = this.getFormateUrl(this.value.target);
      const e = await _a.a.getLogoList(t);
      if (e.error && e.error.__CANCEL__) {
        return;
      }
      const n = e.data || [];
      if (n.length < 2 && l.l) {
        const e = await _a.a.getUrlIcon(t.split("?")[0]);
        if (e.data && e.data.length > 0) {
          n.push(...e.data);
          n.length = 2;
        }
      }
      this.cloudImgs = n.map(t => ({
        url: t
      }));
    }
  }
  async getPermission() {
    try {
      await u.a.request([], this.getPermissionUrl());
      this.hasPermission = true;
      window.__INFINITY__.hasAllUrlPermission = this.hasPermission;
      this.getUrlIcon();
    } catch (t) {
      console.log("getPermission ~ error", t);
    }
  }
  async checkPermission() {
    try {
      const t = await u.a.has([], this.getPermissionUrl());
      this.hasPermission = !!t;
      window.__INFINITY__.hasAllUrlPermission = this.hasPermission;
    } catch (t) {
      console.log("checkPermission ~ error", t);
    }
  }
  renderPermissionIcon() {
    return r.e`
      <div class="cloud-imgs-box">
        <div class="img-item-box cloud-img-box ">
          <div @click="${this.getPermission}" class="img-item permission-img">
            <img src="${require("./553.js")}" alt="" />
          </div>
          <div class="name ellipsis">${i18n("get_cloud_icon")}</div>
        </div>
      </div>
    `;
  }
  firstUpdated(t) {
    this.checkPermission();
    if (t.has("value")) {
      if (this.value.name) {
        this.getAutoBgText();
      }
      if (this.value.target) {
        this.getUrlIcon();
      }
    }
  }
  updated(t) {
    const e = e => {
      const n = t.get("value");
      return !n || (e === "target" ? n[e].split("?")[0] !== this.value[e].split("?")[0] : n[e] !== this.value[e]);
    };
    if (t.has("value")) {
      if (e("name")) {
        this.getAutoBgText();
      }
      if (e("target")) {
        this.getUrlIcon();
      }
    }
  }
  render() {
    return r.e`
      <section class="i-edit-img">
        <div class="item">
          <div class="label-box">
            <span class="label">${i18n("select_icon")}</span>
            <span
              .hidden="${this.value.bgType !== "image" || this.imgType !== "local" || !this.localImageError}"
              class="error ellipsis"
              >* ${i18n("please_upload_photos")}</span
            >
          </div>
          <div class="imgs-box">
            <div class="img-item-box color-img-box ${this.value.bgType === "color" ? "active" : ""}">
              <div class="img-item color-img" @click="${this.choosetextImg}">
                <i-texticon
                  .bgColor="${this.value.bgColor || this.colors[0]}"
                  .bgFont="${this.value.bgFont}"
                  .bgText="${this.value.bgText}"
                ></i-texticon>
              </div>
              <div class="name ellipsis">${i18n("color_icon")}</div>
            </div>
            ${this.cloudImgs.length ? this.renderCloudImgs() : this.hasPermission === false && l.l && !l.h ? this.renderPermissionIcon() : null}
            <div
              class="img-item-box local-img-box ${this.value.bgType === "image" && this.imgType === "local" ? "active" : ""}"
            >
              <div class="img-item local-img">
                <i-imgicon
                  class="local-img-icon"
                  .qiniu="${true}"
                  .preViewImgUrl="${this.value.bgImage}"
                  .bgColor="${this.value.bgColor || "transparent"}"
                  .canDelete="${true}"
                  .modalBorderRadius="${this.modalBorderRadius}"
                  .active=${this.value.bgType === "image" && this.imgType === "local"}
                  @on-change="${t => {
      this.localImagePreViewUrl = t.detail.preViewImgUrl;
      if (this.localImagePreViewUrl) {
        this.chooseLocalImg();
      }
    }}"
                ></i-imgicon>
              </div>
              <div class="name ellipsis">${i18n("local_icon")}</div>
            </div>
          </div>
        </div>
        <div .hidden="${this.value.bgType !== "color"}" class="color-type-box">
          <i-input name="displayname" .label=${i18n("icon_bg_text")} .placeholder=${i18n("please_input_bg_text")}>
            <div class="bg-text" slot="input">
              <i-textarea
                .value="${this.value.bgText}"
                .placeholder="${i18n("show_name")}"
                @on-change="${t => {
      this.changeValue({
        bgText: t.detail.value
      });
      this.isAutoBgText = false;
    }}"
              ></i-textarea>
            </div>
          </i-input>
          <i-input name="displayfont" .label=${i18n("font_size")}>
            <div class="slider" style="margin-top: -2px;" slot="input">
              <infinito-slider
                style="--bg-color: #f5f8fa;"
                @on-change="${t => {
      this.changeValue({
        bgFont: t.detail.value
      });
    }}"
                .value=${this.value.bgFont}
                .min=${14}
                .max=${74}
              ></infinito-slider>
            </div>
          </i-input>
          <i-input name="displaycolor" style="margin-top: 16px;" .label=${i18n("color")}>
            <div class="color" style="margin-top:14px;" slot="input">
              <i-colorpicker
                .side="${true}"
                .value="${this.value.bgColor || this.colors[0]}"
                .colors="${this.colors}"
                .offsetRight="${this.offsetRight}"
                @on-change="${t => {
      this.changeValue({
        bgColor: t.detail.value
      });
    }}"
              ></i-colorpicker>
            </div>
          </i-input>
        </div>
      </section>
    `;
  }
};
p.styles = [s];
h([Object(r.f)()], p.prototype, "hasPermission", undefined);
h([Object(r.f)()], p.prototype, "imgType", undefined);
h([Object(r.f)()], p.prototype, "imgIndex", undefined);
h([Object(r.f)()], p.prototype, "localImageError", undefined);
h([Object(r.f)()], p.prototype, "localImagePreViewUrl", undefined);
h([Object(r.f)()], p.prototype, "cloudImgs", undefined);
h([Object(r.g)({
  type: Object
})], p.prototype, "value", undefined);
h([Object(r.g)({
  type: Number
})], p.prototype, "offsetRight", undefined);
h([Object(r.g)({
  type: String
})], p.prototype, "iconType", undefined);
h([Object(r.g)({
  type: String
})], p.prototype, "modalBorderRadius", undefined);
h([Object(r.h)(".cloud-imgs-box")], p.prototype, "$cloudIcons", undefined);
h([Object(r.h)("i-texticon")], p.prototype, "$texticon", undefined);
h([Object(r.h)(".local-img-icon")], p.prototype, "$localicon", undefined);
p = h([Object(r.c)("i-edit-img")], p);
var d = require("./2.js");
var f = require("./24.js");
function g(t, e, n, r) {
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
class y {
  async getTargetInfo(t, e) {
    const {
      data: n,
      error: r
    } = await _a.a.getUrlInfoWithPermission(t.split("?")[0]);
    if (r == null ? undefined : r.__CANCEL__) {
      return;
    }
    if (r) {
      if (e) {
        return {
          name: "",
          bgText: ""
        };
      } else {
        return null;
      }
    }
    return {
      name: function (t) {
        const e = {
          lt: "<",
          gt: ">",
          nbsp: " ",
          lrm: "",
          amp: "&",
          quot: "\""
        };
        return t.replace(/&(lt|gt|nbsp|amp|quot|lrm);/gi, (t, n) => e[n]);
      }(n.name),
      bgText: ""
    };
  }
  async uploadIcon(t, e) {
    const {
      data: i,
      error: o
    } = await _a.e.uploadFile(t, f.a.randomId("icon-") + ".png", e);
    if (o) {
      return {
        error: o.response?.data?.error ? o.response.data.error : o.message,
        url: ""
      };
    }
    return {
      url: i.url,
      error: ""
    };
  }
}
g([d.b], y.prototype, "getTargetInfo", null);
g([d.b], y.prototype, "uploadIcon", null);
const m = new y();
var b = require("./6.js");
var v = require("./310.js");
function w(t, e, n, r) {
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
let x = class extends r.a {
  constructor() {
    super(...arguments);
    this.show = false;
    this.closeModal = () => {
      this.show = false;
      const t = new CustomEvent("on-close", {});
      this.dispatchEvent(t);
    };
  }
  render() {
    return r.e`
      <infinito-modal style="--modal-padding:0;" .open=${this.show} .onCancel="${this.closeModal}">
        <div slot="body">
          <div class="container">
            <h2 class="title">${i18n("tip_question_title")}</h2>
            <span class="gap-line"></span>
            <div class="global-scrollbar" style="height: calc(100% - 81px);">
              <div class="content">
                <div class="card">
                  <div class="label">${i18n("tip_question_1")}</div>
                  <div class="img-box">
                    <img class="item-img" src="${require("./554.js")}" alt="" />
                  </div>
                </div>
                <div class="card">
                  <div class="label">${i18n("tip_question_2")}</div>
                  <div class="img-box img-box-2">
                    <img class="item-img" src="${require("./555.js")}" alt="" />
                    <div class="item-tip">${i18n("copy")}</div>
                  </div>
                </div>
                <div class="card">
                  <div class="label">${i18n("tip_question_3")}</div>
                  <div class="img-box img-box-3">
                    <img class="item-img" src="${require("./556.js")}" alt="" />
                    <div class="item-tip tip3-box">
                      <div class="tip3-item">
                        <div class="tip3-label-box">
                          <span class="tip3-label">${i18n("search_engine")}</span>
                        </div>
                        <span class="input">${i18n("placeholder_name")}</span>
                      </div>
                      <div class="tip3-item">
                        <div class="tip3-label-box">
                          <span class="tip3-label">${i18n("website_search_replace_char")}</span
                          ><img class="tip-question" src="${require("./453.js")}" alt="" />
                        </div>
                        <span class="input">https://www.google.com/search?sxsrf=ALeKk02...</span>
                        <img class="tip3-arrow" src="${require("./557.js")}" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </infinito-modal>
    `;
  }
};
x.styles = [v.a, r.b`
      .container {
        width: 800px;
        height: 70vh;
        min-height: 400px;
        max-height: 1000px;
        text-align: center;
        box-sizing: border-box;
        overflow: hidden;
      }
      .title {
        margin: 26px auto;
        height: 28px;
        font-size: 20px;
        font-weight: 500;
        color: #333333;
        line-height: 28px;
      }
      .gap-line {
        margin: auto;
        display: block;
        width: 720px;
        height: 1px;
        background: #ebebeb;
      }
      .content {
        padding: 33px 114px 50px;
        padding-right: 0;
        width: 572px;
        box-sizing: content-box;
        text-align: left;
      }
      .card {
        padding-bottom: 50px;
      }
      .label {
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        line-height: 22px;
      }
      .img-box {
        position: relative;
        margin-top: 20px;
      }
      .img-box .item-img {
        width: 572px;
        height: 235px;
      }
      .item-tip {
        position: absolute;
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        line-height: 20px;
      }
      .img-box-2 .item-tip {
        top: 86px;
        left: 396px;
      }
      .tip3-box {
        top: 64px;
        left: 138px;
      }
      .tip3-item {
        position: relative;
        margin-bottom: 20px;
        width: 320px;
      }
      .tip3-label-box {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
      }
      .tip3-label {
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #333333;
        line-height: 20px;
      }
      .tip3-item .input {
        display: block;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
        word-break: keep-all;
        border-bottom: 1px solid #eeeeee;
        box-sizing: content-box;
        padding-bottom: 6px;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: #656565;
        opacity: 0.8;
        width: 319px;
        height: 20px;
        line-height: 20px;
      }
      .tip-question {
        margin-left: 2px;
        width: 16px;
        height: 16px;
      }
      .tip3-arrow {
        width: 30px;
        height: 30px;
        position: absolute;
        left: -34px;
        bottom: 10px;
      }
    `];
w([Object(r.g)({
  type: Boolean
})], x.prototype, "show", undefined);
x = w([Object(r.c)("tip-question")], x);
var _;
function O(t, e, n, r) {
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
export let a = _ = class extends i.a {
  constructor() {
    super();
    this.sideRatio = 1;
    this.popup = false;
    this.iconType = "custom-icon";
    this.readonlyTarget = false;
    this.subSpin = false;
    this.isAutoName = true;
    this.validate = {
      name: null,
      target: null
    };
    this.tipQuestion = false;
    this.value = Object.assign({}, _.defaultValue);
  }
  _changeTarget(t, e = false) {
    if (e) {
      this.changeValue({
        target: t.currentTarget.value.replace(/%25s/g, "%s")
      });
    } else {
      this.changeValue({
        target: t.currentTarget.value
      });
    }
    this._validateTarget();
    if (this.isAutoName) {
      this.getTargetInfo();
    }
  }
  async getTargetInfo() {
    let t = this.value.target;
    if (!t) {
      return;
    }
    if (!t.includes(":")) {
      t = "http://" + t;
    }
    if (!/^https?:\/\/(.+\.)+.+/.test(t)) {
      return;
    }
    const e = await m.getTargetInfo(t, this.isAutoName);
    if (e) {
      this.changeValue({
        name: e.name
      });
    }
  }
  _validateTarget() {
    const t = this.value.target;
    let e = true;
    if (!t || (this.iconType === "search-engine-custom" || this.iconType === "search-engnie-add") && !t.includes("%s")) {
      e = false;
    }
    this.changeValidate({
      target: e
    });
    return e;
  }
  _validateName(t) {
    if (t || this.iconType === "custom-icon") {
      this.changeValidate({
        name: true
      });
    } else {
      this.changeValidate({
        name: false
      });
    }
    return t;
  }
  _validateAll() {
    this.changeValue({
      name: this.$name.value,
      target: this.$target.value
    });
    this._validateName(this.value.name);
    this._validateTarget();
    for (const t in this.validate) {
      if (Object.prototype.hasOwnProperty.call(this.validate, t)) {
        if (this.validate[t] === false) {
          return false;
        }
      }
    }
    return true;
  }
  changeValidate(t) {
    this.validate = Object.assign(Object.assign({}, this.validate), t);
  }
  async _submit() {
    if (!this._validateAll()) {
      return;
    }
    this.subSpin = true;
    const t = await this.$imgs.handleValue();
    this.subSpin = false;
    if (!t) {
      return;
    }
    this.changeValue({
      bgColorImage: null
    });
    const e = {
      value: Object.assign({}, this.value)
    };
    if (!e.value.target.includes(":")) {
      e.value.target = "http://" + this.value.target;
    }
    const n = Object.assign({}, e.value);
    if (n.bgType === "color") {
      delete n.bgImage;
    } else if (n.bgType === "image") {
      delete n.bgFont;
      delete n.bgText;
      delete n.bgColorImage;
      if (n.bgColor === "transparent") {
        n.bgColor = undefined;
      }
    }
    const r = new CustomEvent("on-submit", {
      detail: {
        value: n
      }
    });
    this.dispatchEvent(r);
  }
  _cancel() {
    const t = new CustomEvent("on-cancel");
    this.dispatchEvent(t);
  }
  changeValue(t) {
    this.value = Object.assign(Object.assign({}, this.value), t);
  }
  reset() {
    this.validate = {
      name: null,
      target: null
    };
    this.value = Object.assign({}, _.defaultValue);
  }
  openTipQuestion() {
    this.tipQuestion = true;
  }
  _renderBasic() {
    const {
      value: t
    } = this;
    if (this.iconType === "custom-icon") {
      return r.e`<div .hidden="${this.popup}" class="item">
          <div class="label-box">
            <span class="label">${Object(b.i18n)("website_address")}</span
            ><span .hidden="${this.validate.target !== false}" class="error">*${Object(b.i18n)("please_enter_url")}</span>
          </div>
          <input
            class="target"
            autocomplete="off"
            type="text"
            .value="${t.target || ""}"
            .placeholder="${Object(b.i18n)("website_address")}"
            .readOnly="${this.readonlyTarget}"
            @input=${t => {
        this._changeTarget(t);
      }}
          />
        </div>
        <div class="item">
          <div class="label-box">
            <span class="label">${Object(b.i18n)("website_name")}</span
            ><span .hidden="${this.validate.name !== false}" class="error">*${Object(b.i18n)("name_error")}</span>
          </div>
          <input
            autocomplete="off"
            type="text"
            class="name"
            .value="${t.name || ""}"
            .placeholder="${Object(b.i18n)("website_name")}"
            @input=${t => {
        this.isAutoName = false;
        const e = t.currentTarget.value;
        this.changeValue({
          name: e
        });
        this._validateName(e);
      }}
          />
        </div>`;
    } else {
      return r.e` <div class="item">
          <div class="label-box">
            <span class="label">${Object(b.i18n)("search_engine")}</span
            ><span .hidden="${this.validate.name !== false}" class="error">*${Object(b.i18n)("search_engine_error")}</span>
          </div>
          <input
            autocomplete="off"
            .value="${t.name || ""}"
            type="text"
            class="name"
            .placeholder="${Object(b.i18n)("placeholder_name")}"
            @input=${t => {
        const e = t.currentTarget.value;
        this.isAutoName = false;
        this.changeValue({
          name: e
        });
        this._validateName(e);
      }}
          />
        </div>
        <div class="item">
          <div class="label-box">
            <span class="label">${Object(b.i18n)("website_search_replace_char")}</span
            ><img
              @click="${this.openTipQuestion}"
              class="tip-question"
              src="${require("./453.js")}"
              alt=""
            /><span .hidden="${this.validate.target !== false}" class="error">*${Object(b.i18n)("format_error")}</span>
          </div>
          <textarea
            class="target global-scrollbar"
            rows="1"
            @input="${t => this._changeTarget(t, true)}"
            autocomplete="off"
            .value="${t.target || ""}"
            .placeholder="${Object(b.i18n)("website_address")}"
          ></textarea>
        </div>`;
    }
  }
  _renderImgs(t, e) {
    return r.e`<i-edit-img
      class="item"
      @on-change="${t => this.changeValue(t.detail.value)}"
      .value=${t}
      .offsetRight=${e}
      .iconType="${this.iconType}"
      .modalBorderRadius="${this.popup ? "0px" : "3px"}"
    ></i-edit-img> `;
  }
  render() {
    const t = this.sideRatio > 0.7 ? 0 : (this.sideRatio - 0.7) * 300;
    return r.e`
      ${this._renderBasic()} ${this._renderImgs(this.value, t)}
      <div class="item btn-box">
        <infinito-button primary .loading="${this.subSpin}" @click="${this._submit}"
          >${Object(b.i18n)("confirm")}</infinito-button
        >
        ${this.popup ? "" : r.e`<infinito-button class="btn-cancel" @click="${this._cancel}">${Object(b.i18n)("cancel")}</infinito-button>`}
      </div>
      <infinito-portal-entrance destination="tip-question">
        <tip-question
          @on-close="${() => {
      this.tipQuestion = false;
    }}"
          .show="${this.tipQuestion}"
        ></tip-question>
      </infinito-portal-entrance>
    `;
  }
};
a.styles = [v.a, o];
a.defaultValue = {
  bgType: "color",
  bgColor: "",
  bgFont: 30,
  bgText: "",
  bgImage: "",
  target: "",
  name: "",
  bgColorImage: ""
};
O([Object(r.g)({
  type: Number
})], a.prototype, "sideRatio", undefined);
O([Object(r.g)({
  type: Boolean
})], a.prototype, "popup", undefined);
O([Object(r.g)({
  type: String
})], a.prototype, "iconType", undefined);
O([Object(r.g)({
  type: Boolean
})], a.prototype, "readonlyTarget", undefined);
O([Object(r.g)({
  type: Object
})], a.prototype, "value", undefined);
O([Object(r.f)()], a.prototype, "subSpin", undefined);
O([Object(r.f)()], a.prototype, "isAutoName", undefined);
O([Object(r.f)()], a.prototype, "validate", undefined);
O([Object(r.f)()], a.prototype, "tipQuestion", undefined);
O([Object(r.h)(".target")], a.prototype, "$target", undefined);
O([Object(r.h)(".name")], a.prototype, "$name", undefined);
O([Object(r.h)("i-edit-img")], a.prototype, "$imgs", undefined);
a = _ = O([Object(r.c)("i-editicon")], a);