require("./5.js");
require("./19.js");
require("./64.js");
require("./7.js");
require("./23.js");
require("./0.js");
var r = require("./36.js");
export function c(t = 15, e = 0) {
  const n = {
    "--wallpaper-alpha": t / 100,
    "--wallpaper-filter": e / 5 + "px"
  };
  Object.keys(n).forEach(t => {
    document.body.style.setProperty(t, n[t]);
  });
}
const o = document.querySelector(".wallpaper");
export function a(t) {
  o.style.backgroundImage &&= "";
  o.style.backgroundColor = t;
}
export const b = t => {
  o.style.backgroundColor &&= "";
  let e = t;
  if (r.f) {
    e = t.replace(r.g, "");
  }
  o.style.backgroundImage = `url(${e})`;
};