export var a;
(function (e) {
  e.openAiModal = "master:openIframeAi";
  e.authToken = "master:authToken";
  e.needLogin = "slave:needLogin";
  e.openLogin = "slave:openLogin";
  e.closeAiModal = "slave:closeIframeAi";
  e.logout = "master:logout";
  e.needBindPhone = "slave:needBindPhone";
  e.updateIframeData = "master:updateIframeData";
})(a ||= {});
export const b = new class {
  constructor() {
    this.postIframeMessage = e => {
      if (this.$chatai) {
        this.$chatai.contentWindow.postMessage(e, "*");
      }
    };
    this.updateIframe = e => {
      this.$chatai = e;
    };
  }
}();