require(/*webcrack:missing*/"./7.js");
import * as n from /*webcrack:missing*/"./1.js";
import * as s from "./432.js";
require(/*webcrack:missing*/"./470.js");
import * as a from "./161.js";
import * as o from /*webcrack:missing*/"./0.js";
function r(t, e, i, n) {
  var s;
  var a = arguments.length;
  var o = a < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    o = Reflect.decorate(t, e, i, n);
  } else {
    for (var r = t.length - 1; r >= 0; r--) {
      if (s = t[r]) {
        o = (a < 3 ? s(o) : a > 3 ? s(e, i, o) : s(e, i)) || o;
      }
    }
  }
  if (a > 3 && o) {
    Object.defineProperty(e, i, o);
  }
  return o;
}
export let Imodal = class extends n.a {
  constructor() {
    super(...arguments);
    this.step = "loading";
  }
  showError() {
    this.step = "error";
  }
  async reUpdate() {
    a.slave.sendMessage("tabs-reload");
    setTimeout(() => {
      location.reload();
    }, 0);
  }
  async showRepair() {
    this.step = null;
    document.querySelector("i-updating").classList.add("hide");
    localStorage.setItem("user-checkout-repair", o.z);
    if (localStorage.getItem("updating-manual")) {
      return;
    }
    const {
      pluginStore: t
    } = await Promise.all([require.e(1), require.e(35)]).then(require.bind(null, 431));
    t.showRepair();
  }
  render() {
    if (this.step === "loading") {
      return n.e`
        <div class="step-loading">
          <img
            src="https://infinityicon.infinitynewtab.com/assets/updating.png?imageView2/2/w/490/format/webp/interlace/1"
            alt=""
          />
          <p>${i18n("bg_updating")}</p>
        </div>
      `;
    } else if (this.step === "error") {
      return n.e`
        <div class="step-error">
          <infinito-modal style="--modal-padding:0;" .open=${true} .closeable="${false}">
            <div slot="body">
              <div class="content">
                <div class="tips">
                  <span> ${i18n("update_error_desc1")} </span>
                  <span>
                    ${Object(s.a)(i18n("update_error_desc2", "<img style=\"width:18px;height:18px;vertical-align: middle;\" src=\"https://infinityicon.infinitynewtab.com/assets/btn-setting.png\" alt=\"\">"))}
                  </span>
                </div>
                <div class="btns">
                  <infinito-button @click="${this.reUpdate}" primary>${i18n("re_update")}</infinito-button>
                  <infinito-button @click="${this.showRepair}">${i18n("do_later")}</infinito-button>
                </div>
              </div>
            </div>
          </infinito-modal>
        </div>
      `;
    } else {
      return undefined;
    }
  }
};
Imodal.styles = n.b`
    .step-loading,
    .step-error {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .step-loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #2b2b2c;
      z-index: 11111111;
    }

    .step-loading img {
      width: 245px;
      margin-bottom: 34px;
    }
    .step-loading p {
      height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
    }
    .step-error infinito-modal {
      --modal-top: 50vh;
    }
    .step-error .content {
      width: 478px;
      box-sizing: border-box;
      padding: 28px 48px 30px;
    }
    .step-error .tips {
      font-size: 13px;
      font-weight: 400;
      color: #b3b3b3;
      line-height: 20px;
    }
    .tips span {
      display: block;
    }
    .step-error .btns {
      margin-top: 24px;
      display: flex;
      justify-content: center;
    }
    infinito-button {
      min-width: 128px;
      height: 42px;
    }
    .step-error infinito-button:first-child {
      margin-right: 18px;
    }
  `;
r([Object(n.g)({
  type: String
})], Imodal.prototype, "step", undefined);
Imodal = r([Object(n.c)("i-updating")], Imodal);