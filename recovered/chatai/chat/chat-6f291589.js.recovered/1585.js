var i = require("./5073.js");
var s = i;
export const qf = 720;
const a = getComputedStyle(document.body).getPropertyValue("--hover");
const o = getComputedStyle(document.body).getPropertyValue("--pointer");
Number(a);
Number(o);
export const q$ = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone|Opera Mini/i.test(navigator.userAgent);
if (!("ontouchstart" in window)) {
  navigator.maxTouchPoints;
}
export const ID = q$ ? window.screen.width < qf ? "mobile" : "pad" : "pc";
const h = new s();
h.getOS().name;
const c = h.getBrowser();
c.name;
c.version;
export const bn = window.screen.availWidth;
export const kn = {
  "icon-s": 60,
  "icon-m": 72,
  "icon-l": 88
};
if (!localStorage.getItem("install")) {
  localStorage.setItem("install", `${Date.now()}`);
}