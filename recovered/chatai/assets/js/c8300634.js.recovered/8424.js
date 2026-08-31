var t = require("./6146.js");
const u = function (n) {
  return n != n;
};
const o = function (n, r, e) {
  for (var t = e - 1, u = n.length; ++t < u;) {
    if (n[t] === r) {
      return t;
    }
  }
  return -1;
};
export const Z = function (n, r, e) {
  if (r == r) {
    return o(n, r, e);
  } else {
    return (0, t.Z)(n, u, e);
  }
};