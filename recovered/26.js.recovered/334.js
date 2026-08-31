export var a;
(function (t) {
  t.openAiModal = "master:openIframeAi";
  t.authToken = "master:authToken";
  t.needLogin = "slave:needLogin";
  t.openLogin = "slave:openLogin";
  t.closeAiModal = "slave:closeIframeAi";
  t.logout = "master:logout";
  t.needBindPhone = "slave:needBindPhone";
  t.updateIframeData = "master:updateIframeData";
})(a ||= {});
export const b = new class {
  constructor() {
    this.postIframeMessage = t => {
      if (this.$chatai) {
        this.$chatai.contentWindow.postMessage(t, "*");
      }
    };
    this.updateIframe = t => {
      this.$chatai = t;
    };
  }
}();