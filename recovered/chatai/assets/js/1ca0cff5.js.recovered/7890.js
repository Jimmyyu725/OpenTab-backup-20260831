var o = require("./741.js");
export function Nn(e) {
  if ((0, o.Xq)(e)) {
    if ((0, o.kE)(e)) {
      return `${e}px`;
    } else {
      return String(e);
    }
  }
}
export function Xn(e) {
  if ((0, o.Xq)(e)) {
    if (Array.isArray(e)) {
      return {
        width: Nn(e[0]),
        height: Nn(e[1])
      };
    }
    const t = Nn(e);
    return {
      width: t,
      height: t
    };
  }
}
export function As(e) {
  const t = {};
  if (e !== undefined) {
    t.zIndex = +e;
  }
  return t;
}
const a = /-(\w)/g;
export const _A = e => e.replace(a, (e, t) => t.toUpperCase());
export const GL = e => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
export const uZ = (e, t, r) => Math.min(Math.max(e, t), r);
export function Ft(e, t) {
  const r = 10000000000;
  return Math.round((e + t) * r) / r;
}