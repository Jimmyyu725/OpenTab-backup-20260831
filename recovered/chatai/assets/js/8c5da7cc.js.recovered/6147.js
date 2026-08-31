var n = require(/*webcrack:missing*/"./4282.js");
export const Z = function (e) {
  if (typeof e == "string" || (0, n.Z)(e)) {
    return e;
  }
  var t = e + "";
  if (t == "0" && 1 / e == -Infinity) {
    return "-0";
  } else {
    return t;
  }
};