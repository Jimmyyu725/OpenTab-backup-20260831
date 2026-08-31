require("./7.js");
var r = require("./24.js");
var i = require("./22.js");
var o = require("./1.js");
var s = o.b`.item {
  position: relative;
  width: 100%;
  height: 100%;
}
.img-item {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #dddddd;
  background-image: linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px), linear-gradient(45deg, #ffffff 25%, transparent 0px, transparent 75%, #ffffff 0px);
  background-position: 0px 0px, 5px 5px;
  background-size: 10px 10px;
  border-radius: 6px;
}
.img-dropper {
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
.img-dropper[hidden] {
  display: none;
}
.active .preview {
  border-color: transparent;
}
.img-preview {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
}
.img-preview .editing:hover {
  opacity: 1;
}
.img-preview .editing {
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
.img-preview .editing-icon {
  width: 28px;
  height: 28px;
}
.img-preview i-svg {
  --size: 90%;
  color: #fff;
  opacity: 0.8;
  cursor: pointer;
}
.img-preview i-svg:hover {
  opacity: 1;
  color: #fff;
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
#imgType {
  width: 1px;
  height: 1px;
}
`;
var a = require("./417.js");
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
let u = class extends o.a {
  constructor() {
    super(...arguments);
    this.cropper = null;
    this.preViewImgData = null;
    this.preViewImgUrl = "";
    this.active = false;
    this.bgColor = "";
    this.iconType = "custom-icon";
    this.canDelete = false;
    this.modalBorderRadius = "3px";
    this.qiniu = false;
    this.emitChangeEvent = () => {
      const t = new CustomEvent("on-change", {
        detail: {
          bgColor: this.bgColor,
          preViewImgData: this.preViewImgData,
          preViewImgUrl: this.preViewImgUrl
        }
      });
      this.dispatchEvent(t);
    };
    this.initCropper = () => {
      this.cropper = a.a.create({
        borderRadius: this.modalBorderRadius
      });
      this.cropper.addEventListener("on-change", async t => {
        const {
          data: e,
          color: n,
          changed: r
        } = t.detail;
        if (!this.qiniu || r || !this.preViewImgUrl.startsWith("http")) {
          this.bgColor = n;
          this.preViewImgData = e;
          const t = this.preViewImgUrl;
          this.preViewImgUrl = URL.createObjectURL(this.preViewImgData);
          URL.revokeObjectURL(t);
        }
        this.emitChangeEvent();
      });
    };
    this.getImg = async () => {
      if (this.preViewImgUrl.startsWith("http")) {
        return {
          url: this.preViewImgUrl,
          bgColor: this.bgColor
        };
      }
      const {
        data: n,
        error: o
      } = await i.e.uploadFile(this.preViewImgData, r.a.randomId("icon-") + ".png", this.iconType);
      if (o) {
        const n = o.response?.data?.error ? o.response.data.error : o.message;
        throw new Error(n);
      }
      return {
        url: n.url,
        bgColor: this.bgColor
      };
    };
    this._chooseImg = t => {
      const e = (t.target.files || t.dataTransfer.files)[0];
      const n = new FileReader();
      n.readAsDataURL(e);
      t.currentTarget.value = null;
      n.onload = () => {
        this.cropper.init(n.result, this.bgColor);
        this.cropper.show();
      };
    };
    this.reset = () => {
      if (this.preViewImgUrl) {
        URL.revokeObjectURL(this.preViewImgUrl);
      }
      this.preViewImgData = null;
      this.preViewImgUrl = "";
      this.bgColor = "";
      this.emitChangeEvent();
    };
    this._delImg = t => {
      t.stopPropagation();
      if (this.preViewImgUrl) {
        URL.revokeObjectURL(this.preViewImgUrl);
      }
      this.preViewImgData = null;
      this.preViewImgUrl = "";
      this.emitChangeEvent();
    };
    this._editImg = () => {
      this.cropper.init(this.preViewImgUrl, this.bgColor);
      this.cropper.show();
    };
  }
  firstUpdated() {
    this.initCropper();
  }
  disconnectedCallback() {
    a.a.destroy();
    super.disconnectedCallback();
  }
  render() {
    return o.e`
      <div class="item img-item">
        <div class="img-item">
          <input
            @drop="${this._chooseImg}"
            accept="image/*"
            @change="${this._chooseImg}"
            type="file"
            id="imgType"
            style="position:absolute;clip:rect(0 0 0 0);"
          />
          <label
            .hidden="${!!this.preViewImgUrl}"
            class="img-dropper"
            style="${this.active ? "background-image: none;" : ""}"
            for="imgType"
          >
            <i-usesvg style="color:#C3C3C3;width:22px;height:22px" type="icon-xingzhuangjiehe2x" iconfont></i-usesvg>
          </label>
          <div
            .hidden="${!this.preViewImgUrl}"
            class="img-dropper img-preview"
            style="border:${this.active ? "none" : "1px solid #DADCE0"};background-color:${this.bgColor || "transparent"}; background-image: url('${this.preViewImgUrl}')"
            @click="${this._editImg}"
          >
            <div class="editing">
              <img class="editing-icon" src="${require("./483.js")}" alt="" />
            </div>
            <img
              .hidden="${!this.canDelete}"
              class="del"
              @click="${this._delImg}"
              src="${require("./484.js")}"
              alt=""
            />
          </div>
        </div>
      </div>
    `;
  }
};
u.styles = s;
c([Object(o.g)({
  type: String
})], u.prototype, "preViewImgUrl", undefined);
c([Object(o.g)({
  type: Boolean
})], u.prototype, "active", undefined);
c([Object(o.g)({
  type: String
})], u.prototype, "bgColor", undefined);
c([Object(o.g)({
  type: String
})], u.prototype, "iconType", undefined);
c([Object(o.g)({
  type: Boolean
})], u.prototype, "canDelete", undefined);
c([Object(o.g)({
  type: String
})], u.prototype, "modalBorderRadius", undefined);
c([Object(o.g)({
  type: Boolean
})], u.prototype, "qiniu", undefined);
u = c([Object(o.c)("i-imgicon")], u);