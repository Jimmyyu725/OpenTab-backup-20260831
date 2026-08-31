require("./19.js");
require("./64.js");
var r = require(/*webcrack:missing*/"./1.js");
var i = require("./436.js");
var o = i;
require("./471.js");
require("./469.js");
var s = r.b`/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:11.623Z
 */
.cropper-container {
  direction: ltr;
  font-size: 0;
  line-height: 0;
  position: relative;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.cropper-container img {
  display: block;
  height: 100%;
  image-orientation: 0deg;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}
.cropper-wrap-box,
.cropper-canvas,
.cropper-drag-box,
.cropper-crop-box,
.cropper-modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.cropper-wrap-box,
.cropper-canvas {
  overflow: hidden;
}
.cropper-drag-box {
  background-color: #fff;
  opacity: 0;
}
.cropper-modal {
  background-color: #000;
  opacity: 0.5;
}
.cropper-view-box {
  display: block;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  overflow: hidden;
  width: 100%;
}
.cropper-dashed {
  border: 0 dashed #eee;
  display: block;
  opacity: 0.5;
  position: absolute;
}
.cropper-dashed.dashed-h {
  border-bottom-width: 1px;
  border-top-width: 1px;
  height: calc(100% / 3);
  left: 0;
  top: calc(100% / 3);
  width: 100%;
}
.cropper-dashed.dashed-v {
  border-left-width: 1px;
  border-right-width: 1px;
  height: 100%;
  left: calc(100% / 3);
  top: 0;
  width: calc(100% / 3);
}
.cropper-center {
  display: block;
  height: 0;
  left: 50%;
  opacity: 0.75;
  position: absolute;
  top: 50%;
  width: 0;
}
.cropper-center::before,
.cropper-center::after {
  background-color: #eee;
  content: ' ';
  display: block;
  position: absolute;
}
.cropper-center::before {
  height: 1px;
  left: -3px;
  top: 0;
  width: 7px;
}
.cropper-center::after {
  height: 7px;
  left: 0;
  top: -3px;
  width: 1px;
}
.cropper-face,
.cropper-line,
.cropper-point {
  display: block;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  width: 100%;
}
.cropper-face {
  background-color: #fff;
  left: 0;
  top: 0;
}
.cropper-line {
  background-color: #39f;
}
.cropper-line.line-e {
  cursor: ew-resize;
  right: -3px;
  top: 0;
  width: 5px;
}
.cropper-line.line-n {
  cursor: ns-resize;
  height: 5px;
  left: 0;
  top: -3px;
}
.cropper-line.line-w {
  cursor: ew-resize;
  left: -3px;
  top: 0;
  width: 5px;
}
.cropper-line.line-s {
  bottom: -3px;
  cursor: ns-resize;
  height: 5px;
  left: 0;
}
.cropper-point {
  background-color: #39f;
  height: 5px;
  opacity: 0.75;
  width: 5px;
}
.cropper-point.point-e {
  cursor: ew-resize;
  margin-top: -3px;
  right: -3px;
  top: 50%;
}
.cropper-point.point-n {
  cursor: ns-resize;
  left: 50%;
  margin-left: -3px;
  top: -3px;
}
.cropper-point.point-w {
  cursor: ew-resize;
  left: -3px;
  margin-top: -3px;
  top: 50%;
}
.cropper-point.point-s {
  bottom: -3px;
  cursor: s-resize;
  left: 50%;
  margin-left: -3px;
}
.cropper-point.point-ne {
  cursor: nesw-resize;
  right: -3px;
  top: -3px;
}
.cropper-point.point-nw {
  cursor: nwse-resize;
  left: -3px;
  top: -3px;
}
.cropper-point.point-sw {
  bottom: -3px;
  cursor: nesw-resize;
  left: -3px;
}
.cropper-point.point-se {
  bottom: -3px;
  cursor: nwse-resize;
  height: 20px;
  opacity: 1;
  right: -3px;
  width: 20px;
}
@media (min-width: 768px) {
  .cropper-point.point-se {
    height: 15px;
    width: 15px;
  }
}
@media (min-width: 992px) {
  .cropper-point.point-se {
    height: 10px;
    width: 10px;
  }
}
@media (min-width: 1200px) {
  .cropper-point.point-se {
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }
}
.cropper-point.point-se::before {
  background-color: #39f;
  bottom: -50%;
  content: ' ';
  display: block;
  height: 200%;
  opacity: 0;
  position: absolute;
  right: -50%;
  width: 200%;
}
.cropper-invisible {
  opacity: 0;
}
.cropper-bg {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
}
.cropper-hide {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}
.cropper-hidden {
  display: none !important;
}
.cropper-move {
  cursor: move;
}
.cropper-crop {
  cursor: crosshair;
}
.cropper-disabled .cropper-drag-box,
.cropper-disabled .cropper-face,
.cropper-disabled .cropper-line,
.cropper-disabled .cropper-point {
  cursor: not-allowed;
}
`;
var _a = r.b`:host {
  display: block;
  position: relative;
  z-index: 99999999;
}
.img-modal {
  position: fixed;
  z-index: 111;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.img-modal.hide {
  display: none;
}
.img-modal .img-modal-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.img-modal .img-modal-content {
  width: 640px;
  padding: 0 20px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
.img-modal .modal-header .close {
  margin-top: 18px;
  text-align: right;
}
.img-modal .modal-header .close i-usesvg {
  color: #d9d6d7;
  width: 14px;
  height: 14px;
  cursor: pointer;
}
.img-modal .modal-header .title {
  margin-top: 8px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
  line-height: 28px;
}
.img-modal .modal-body {
  display: flex;
  padding-bottom: 20px;
}
.img-modal .cropper {
  position: relative;
  width: 260px;
  height: 260px;
  margin-right: 24px;
  flex-shrink: 0;
  margin-bottom: 32px;
}
.img-modal .float-option {
  position: absolute;
  bottom: -32px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.img-modal .float-option i-usesvg {
  cursor: pointer;
  width: 18px;
  height: 18px;
  color: #333;
  opacity: 0.3;
  transition: opacity 0.2s;
}
.img-modal .float-option i-usesvg:hover {
  opacity: 1;
}
.img-modal .float-option-left > i-usesvg {
  margin-right: 16px;
}
.img-modal .float-option-right > i-usesvg {
  margin-left: 16px;
}
.img-modal .option {
  position: relative;
  flex-grow: 1;
}
.img-modal .option .title {
  display: block;
  margin-bottom: 14px;
  line-height: 1;
  font-weight: 500;
  color: #333333;
}
.img-modal .preview-box .preview {
  border: 1px solid #DADCE0;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 30px;
  width: 80px;
  height: 80px;
  border-radius: 6px;
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
          mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
}
.img-modal .color-box {
  position: relative;
}
.img-modal .color-box i-colorpicker {
  margin-right: 28px;
}
.modal-footer {
  margin-top: 20px;
  margin-bottom: 40px;
}
.modal-footer .btn-box {
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
}
.modal-footer .btn-box infinito-button {
  outline: none;
  border: none;
  width: 120px;
  height: 42px;
  background: #efefef;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #333333;
  cursor: pointer;
}
.cropper .cropper-wrap-box {
  background-color: currentColor;
}
.cropper img {
  max-width: 100%;
  max-height: 100%;
}
.cropper .cropper-wrap-box {
  background-color: currentColor;
}
.cropper .cropper-crop-box {
  background-color: currentColor;
}
.cropper .cropper-point.point-se {
  height: 5px;
  width: 5px;
}
`;
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
export let a = class extends r.a {
  constructor() {
    super(...arguments);
    this.modalStatus = false;
    this.rgba = "";
    this.needBackground = false;
    this.initRgba = "";
    this.title = "";
    this.borderRadius = "3px";
    this.showImg = false;
    this.changed = false;
    this.cropper = null;
  }
  static create(t) {
    const e = t == null ? undefined : t.title;
    const n = t == null ? undefined : t.needBackground;
    const r = (t == null ? undefined : t.borderRadius) || "3px";
    const i = document.body;
    const o = document.createElement("i-cropper");
    o.borderRadius = r;
    if (e) {
      o.setAttribute("title", e);
    }
    if (n) {
      o.setAttribute("needBackground", "" + n);
    }
    i.appendChild(o);
    this.instance = o;
    return o;
  }
  static destroy() {
    var e;
    if ((e = this.instance?.parentNode) !== null && e !== undefined) {
      e.removeChild(this.instance);
    }
    this.instance = null;
  }
  init(t, e) {
    this.showImg = false;
    this.rgba = e || "transparent";
    this.initRgba = e || "transparent";
    if (this.cropper) {
      this.cropper.replace(t);
      this.cropper.reset();
    } else {
      this.$img.src = t;
      this.cropper = new o(this.$img, {
        aspectRatio: 1,
        zoomOnWheel: true,
        autoCropArea: 0.9999,
        preview: this.$preview,
        checkCrossOrigin: false,
        dragMode: "move",
        ready: () => {
          this.showImg = true;
        },
        zoom: () => {
          this.changed = true;
        },
        cropend: () => {
          this.changed = true;
        }
      });
    }
  }
  close(t = true) {
    this.modalStatus = false;
    this.showImg = false;
    if (t) {
      this.rgba = "";
    }
    this.changed = false;
    const e = new CustomEvent("on-close-cropper", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(e);
  }
  show() {
    this.modalStatus = true;
    const t = new CustomEvent("on-show-cropper", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(t);
  }
  _rotateCropper(t) {
    this.cropper.rotate(t);
    this.changed = true;
  }
  _scaleCropper(t) {
    this.cropper.zoom(t);
    this.changed = true;
  }
  _resetCropper() {
    this.rgba = this.initRgba;
    this.cropper.reset();
    this.changed = false;
    requestAnimationFrame(() => {
      this.$colorPicker.resetActiveIndex();
    });
  }
  _onSubmitImg() {
    const t = {
      minWidth: 512,
      minHeight: 512,
      maxWidth: 600,
      maxHeight: 600
    };
    if (this.needBackground) {
      t.fillColor = this.rgba || "transparent";
    }
    this.cropper.getCroppedCanvas(t).toBlob(t => {
      const e = new CustomEvent("on-change", {
        detail: {
          data: t,
          color: this.rgba,
          changed: this.changed
        }
      });
      this.dispatchEvent(e);
      this.close();
    }, "image/png");
  }
  _pickColor(t) {
    const {
      value: e
    } = t.detail;
    this.rgba = e;
    this.changed = true;
  }
  render() {
    return r.e` <div class="img-modal ${this.modalStatus ? "show" : "hide"}">
      <div class="img-modal-mask"></div>
      <div class="img-modal-content" style="border-radius:${this.borderRadius}">
        <section class="modal-header">
          <div class="close">
            <i-usesvg @click="${this.close}" type="icon-guanbi1" iconfont></i-usesvg>
          </div>
          <div class="title">${this.title || i18n("custom_icon")}</div>
        </section>
        <section class="modal-body">
          <div
            style="${this.rgba ? `color:${this.rgba};` : "color:transparent;"}${this.showImg ? "opacity:1;" : "opacity:0;"}"
            class="cropper"
          >
            <img class="file-img" crossorigin="anonymous" src="" alt="" />
            <div class="float-option">
              <div class="float-option-left">
                <i-usesvg @click="${() => this._rotateCropper(90)}" type="infinity-pro-pure-icon-redo"></i-usesvg>
                <i-usesvg @click="${() => this._rotateCropper(-90)}" type="infinity-pro-pure-icon-undo"></i-usesvg>
              </div>
              <div class="float-option-right">
                <i-usesvg @click="${() => this._scaleCropper(-0.1)}" type="infinity-pro-pure-icon-zoom-out"></i-usesvg>
                <i-usesvg @click="${() => this._scaleCropper(0.1)}" type="infinity-pro-pure-icon-zoom-in"></i-usesvg>
              </div>
            </div>
          </div>
          <div class="option">
            <div class="preview-box">
              <span class="title">${i18n("preview")}</span>
              <div
                style="${this.rgba ? `background-color:${this.rgba};` : "background-color:transparent;"}"
                class="preview"
              ></div>
            </div>
            <div class="color-box">
              <span class="title">${i18n("bg_color")}</span>
              <i-colorpicker .value="${this.rgba || "transparent"}" @on-change="${this._pickColor}"></i-colorpicker>
            </div>
          </div>
        </section>
        <section class="modal-footer">
          <div class="btn-box">
            <infinito-button @click="${this.close}">${i18n("cancel")}</infinito-button>
            <infinito-button @click="${this._resetCropper}">${i18n("reset")}</infinito-button>
            <infinito-button primary @click="${this._onSubmitImg}">${i18n("confirm")}</infinito-button>
          </div>
        </section>
      </div>
    </div>`;
  }
};
a.styles = [_a, s];
a.instance = null;
c([Object(r.h)(".file-img")], a.prototype, "$img", undefined);
c([Object(r.h)(".preview")], a.prototype, "$preview", undefined);
c([Object(r.h)("i-colorpicker")], a.prototype, "$colorPicker", undefined);
c([Object(r.g)({
  type: Boolean
})], a.prototype, "modalStatus", undefined);
c([Object(r.g)({
  type: String
})], a.prototype, "rgba", undefined);
c([Object(r.g)({
  type: Boolean
})], a.prototype, "needBackground", undefined);
c([Object(r.g)({
  type: String
})], a.prototype, "title", undefined);
c([Object(r.g)({
  type: String
})], a.prototype, "borderRadius", undefined);
c([Object(r.f)()], a.prototype, "showImg", undefined);
a = c([Object(r.c)("i-cropper")], a);