var t = require(/*webcrack:missing*/"./3520.js");
function u(n) {
  return n[n.length - 1];
}
export function yG(n) {
  if ((0, t.K)(u(n))) {
    return n.pop();
  } else {
    return undefined;
  }
}
export function _6(n, r) {
  if (typeof u(n) == "number") {
    return n.pop();
  } else {
    return r;
  }
}