var o = require(/*webcrack:missing*/"./2244.js");
var n = require(/*webcrack:missing*/"./9445.js");
(0, require("./741.js").gn)();
export const UW = e => e.stopPropagation();
export function PF(e, t) {
  if (typeof e.cancelable != "boolean" || e.cancelable) {
    e.preventDefault();
  }
  if (t) {
    UW(e);
  }
}
export function xj(e) {
  const t = (0, n.SU)(e);
  if (!t) {
    return false;
  }
  const r = window.getComputedStyle(t);
  const o = r.display === "none";
  const i = t.offsetParent === null && r.position !== "fixed";
  return o || i;
}
const {
  width: l,
  height: d
} = (0, o.iP)();