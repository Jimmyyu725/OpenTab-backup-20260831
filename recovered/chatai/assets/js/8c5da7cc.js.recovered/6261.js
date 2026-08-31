var n = require(/*webcrack:missing*/"./1585.js");
export const xL = () => window.screen.availHeight < 800 && window.devicePixelRatio < 1.5 ? 30 : 100;
export const $j = n.bn <= 1366 ? "icon-s" : n.bn > 1920 ? "icon-l" : "icon-m";
export const fy = $j === "icon-l" || $j === "icon-m" && n.bn === 1920 ? 11 : 9;
export const gi = n.kn[$j] * fy + (fy - 1) * 60;
export const Df = "design";