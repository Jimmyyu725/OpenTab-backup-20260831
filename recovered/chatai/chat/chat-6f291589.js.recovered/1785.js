export let o1;
(function (e) {
  e.openAiModal = "master:openIframeAi";
  e.authToken = "master:authToken";
  e.needLogin = "slave:needLogin";
  e.openLogin = "slave:openLogin";
  e.closeAiModal = "slave:closeIframeAi";
  e.logout = "master:logout";
  e.needBindPhone = "slave:needBindPhone";
  e.updateIframeData = "master:updateIframeData";
})(o1 ||= {});
export const bc = e => {
  window.parent.postMessage(e, "*");
};
export const LP = (e, t, n) => {
  if (n) {
    e.user.email = n;
  }
  return {
    token: t,
    user: e.user
  };
};