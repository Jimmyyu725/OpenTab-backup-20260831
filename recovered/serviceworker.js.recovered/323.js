var e = require("./14.js");
function n(t) {
  try {
    if (!e.localStorage) {
      return false;
    }
  } catch (t) {
    return false;
  }
  var n = e.localStorage[t];
  return n != null && String(n).toLowerCase() === "true";
}
module.exports = function (t, e) {
  if (n("noDeprecation")) {
    return t;
  }
  var r = false;
  return function () {
    if (!r) {
      if (n("throwDeprecation")) {
        throw new Error(e);
      }
      if (n("traceDeprecation")) {
        console.trace(e);
      } else {
        console.warn(e);
      }
      r = true;
    }
    return t.apply(this, arguments);
  };
};