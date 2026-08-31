require(/*webcrack:missing*/"./5.js");
require(/*webcrack:missing*/"./19.js");
require(/*webcrack:missing*/"./64.js");
require(/*webcrack:missing*/"./7.js");
require(/*webcrack:missing*/"./23.js");
require(/*webcrack:missing*/"./0.js");
var n = require(/*webcrack:missing*/"./36.js");
export function c(e = 15, t = 0) {
  const i = {
    "--wallpaper-alpha": e / 100,
    "--wallpaper-filter": t / 5 + "px"
  };
  Object.keys(i).forEach(e => {
    document.body.style.setProperty(e, i[e]);
  });
}
const _a = document.querySelector(".wallpaper");
export function a(e) {
  _a.style.backgroundImage &&= "";
  _a.style.backgroundColor = e;
}
export const b = e => {
  _a.style.backgroundColor &&= "";
  let t = e;
  if (n.f) {
    t = e.replace(n.g, "");
  }
  _a.style.backgroundImage = `url(${t})`;
};