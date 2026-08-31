var e = require("./104.js");
var o = require("./14.js");
function i(t) {
  if (typeof t == "function") {
    return t;
  } else {
    return undefined;
  }
}
module.exports = function (t, n) {
  if (arguments.length < 2) {
    return i(e[t]) || i(o[t]);
  } else {
    return e[t] && e[t][n] || o[t] && o[t][n];
  }
};