var r = require("./251.js");
var o = require("./5.js");
function i(t) {
  if (typeof t == "function") {
    return t;
  } else {
    return undefined;
  }
}
module.exports = function (t, e) {
  if (arguments.length < 2) {
    return i(r[t]) || i(o[t]);
  } else {
    return r[t] && r[t][e] || o[t] && o[t][e];
  }
};