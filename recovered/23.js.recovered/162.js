var r = require("./0.js");
export const j = 0.2;
export function c(t) {
  return `https://chrome.google.com/webstore/detail/infinity-new-tab-pro/${t}/reviews?utm_source=infinity-rate`;
}
export const a = "https://addons.mozilla.org/" + r.C.lang + "/firefox/addon/infinity-new-tab-pro-firefox/";
export function d(t) {
  return "https://microsoftedge.microsoft.com/addons/detail/infinity-new-tab-pro/" + t;
}
export const i = "privacy_data_uninstall_title_pro";
export const h = "privacy_data_uninstall_confirm_pro";
export const f = true;
export const e = () => {};
export const b = () => {
  if (r.C.isZh) {
    chrome.runtime.setUninstallURL("https://hello.wetab.link/");
  } else {
    chrome.runtime.setUninstallURL("https://uninstall.infinitynewtab.com/?from=" + r.c);
  }
};
export const g = "https://infinityicon.infinitynewtab.com/assets/logo-pro.png";