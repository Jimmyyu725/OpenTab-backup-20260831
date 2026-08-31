var r = require("./36.js");
const o = /^http[s]?:\/\//;
function i(t) {
  return o.test(t);
}
export const a = (t, e) => {
  const n = "https://infinityicon.infinitynewtab.com/assets/images/" + t;
  if (e === true) {
    return b(n);
  } else if (e === false) {
    return n;
  } else if (/\.(png|jpg|jpeg)$/.test(t)) {
    return b(n);
  } else {
    return n;
  }
};
export function b(t) {
  if (i(t)) {
    if (t.includes("?")) {
      return t;
    } else if (r.f) {
      return t + "?imageView2/0/q/100";
    } else {
      return t + "?imageView2/0/format/webp/q/100";
    }
  } else {
    return t;
  }
}
export function c(t) {
  if (i(t)) {
    if (t.includes("?")) {
      return t;
    } else if (r.f) {
      return t + "?imageMogr2/thumbnail/240x/blur/1x0/quality/100|imageslim";
    } else {
      return t + "?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim";
    }
  } else {
    return t;
  }
}