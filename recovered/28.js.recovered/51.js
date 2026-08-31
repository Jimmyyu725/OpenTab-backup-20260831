var r = require("./36.js");
const _a = /^http[s]?:\/\//;
function o(e) {
  return _a.test(e);
}
export const a = (e, t) => {
  const n = "https://infinityicon.infinitynewtab.com/assets/images/" + e;
  if (t === true) {
    return b(n);
  } else if (t === false) {
    return n;
  } else if (/\.(png|jpg|jpeg)$/.test(e)) {
    return b(n);
  } else {
    return n;
  }
};
export function b(e) {
  if (o(e)) {
    if (e.includes("?")) {
      return e;
    } else if (r.f) {
      return e + "?imageView2/0/q/100";
    } else {
      return e + "?imageView2/0/format/webp/q/100";
    }
  } else {
    return e;
  }
}
export function c(e) {
  if (o(e)) {
    if (e.includes("?")) {
      return e;
    } else if (r.f) {
      return e + "?imageMogr2/thumbnail/240x/blur/1x0/quality/100|imageslim";
    } else {
      return e + "?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim";
    }
  } else {
    return e;
  }
}