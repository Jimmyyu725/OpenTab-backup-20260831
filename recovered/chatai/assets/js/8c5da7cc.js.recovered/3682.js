var n = require("./9174.js");
var o = require("./6147.js");
export const Z = function (e, t) {
  for (var r = 0, a = (t = (0, n.Z)(t, e)).length; e != null && r < a;) {
    e = e[(0, o.Z)(t[r++])];
  }
  if (r && r == a) {
    return e;
  } else {
    return undefined;
  }
};