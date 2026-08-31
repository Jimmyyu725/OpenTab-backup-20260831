var o = require("./361.js");
export const Xq = e => e != null;
export const mf = e => typeof e == "function";
export const Kn = e => e !== null && typeof e == "object";
export const tI = e => Kn(e) && mf(e.then) && mf(e.catch);
export const kE = e => typeof e == "number" || /^\d+(\.\d+)?$/.test(e);
export const gn = () => !!o._f && /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());