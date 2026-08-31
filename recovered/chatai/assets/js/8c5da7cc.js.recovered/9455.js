const n = function (e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n;) {
    var i = e[r];
    if (t(i, r, e)) {
      a[o++] = i;
    }
  }
  return a;
};
var o = require("./2507.js");
var a = Object.prototype.propertyIsEnumerable;
var i = Object.getOwnPropertySymbols;
export const Z = i ? function (e) {
  if (e == null) {
    return [];
  } else {
    e = Object(e);
    return n(i(e), function (t) {
      return a.call(e, t);
    });
  }
} : o.Z;