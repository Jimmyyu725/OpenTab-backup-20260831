var r = require("./548.js");
var i = require("./451.js");
var o = require("./411.js");
module.exports = function (t) {
  if (typeof t.constructor != "function" || o(t)) {
    return {};
  } else {
    return r(i(t));
  }
};