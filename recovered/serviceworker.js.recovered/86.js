var r = require("./0.js");
r.o.lang;
export const b = () => {};
export const a = () => {
  if (r.o.isZh) {
    chrome.runtime.setUninstallURL("https://hello.wetab.link/");
  } else {
    chrome.runtime.setUninstallURL("https://uninstall.infinitynewtab.com/?from=" + r.a);
  }
};