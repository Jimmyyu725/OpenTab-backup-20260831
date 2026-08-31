var n = require("./8885.js");
var o = require(/*webcrack:missing*/"./9860.js");
export const Z = function (e, t, r) {
  var a = true;
  var i = true;
  if (typeof e != "function") {
    throw new TypeError("Expected a function");
  }
  if ((0, o.Z)(r)) {
    a = "leading" in r ? !!r.leading : a;
    i = "trailing" in r ? !!r.trailing : i;
  }
  return (0, n.Z)(e, t, {
    leading: a,
    maxWait: t,
    trailing: i
  });
};