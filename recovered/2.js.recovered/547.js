var n = require("./548.js");
var o = require("./451.js");
var c = require("./411.js");
module.exports = function (t) {
  if (typeof t.constructor != "function" || c(t)) {
    return {};
  } else {
    return n(o(t));
  }
};