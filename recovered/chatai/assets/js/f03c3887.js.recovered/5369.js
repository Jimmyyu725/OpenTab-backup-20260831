import * as n from /*webcrack:missing*/"./143.js";
class i extends n.ou {
  loadStore = async () => {
    const {
      useChatGptStore: e
    } = await Promise.all([require.e(652), require.e(172)]).then(require.bind(require, 1172));
    e();
  };
  addWidget = async e => {};
  preRender = async e => {};
  renderHome = async e => {
    const {
      mountHome: t
    } = await Promise.all([require.e(652), require.e(172), require.e(533), require.e(371)]).then(require.bind(require, 3214));
    setTimeout(() => Promise.all([require.e(942), require.e(652), require.e(172), require.e(533), require.e(198)]).then(require.bind(require, 6215)), 20);
    return t(e.container, e.state);
  };
  openModal = async () => {
    await Promise.all([require.e(942), require.e(652), require.e(172), require.e(533), require.e(198)]).then(require.bind(require, 6215));
    const {
      useChatGptStore: e
    } = await Promise.all([require.e(652), require.e(172)]).then(require.bind(require, 1172));
    const t = e();
    t.setPanelShowType("chatai-double11");
    t.setModal(true);
  };
}
(0, n.z2)("widget-chatgpt", new i());