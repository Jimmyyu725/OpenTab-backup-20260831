var r = require("./115.js");
var i = require("./4.js");
function o(t) {
  if (typeof t == "function") {
    return t;
  } else {
    return undefined;
  }
}
module.exports = function (t, e) {
  if (arguments.length < 2) {
    return o(r[t]) || o(i[t]);
  } else {
    return r[t] && r[t][e] || i[t] && i[t][e];
  }
};