var r = require("./449.js");
var o = require("./233.js");
var i = require("./149.js");
module.exports = function (t) {
  if (typeof t.constructor != "function" || i(t)) {
    return {};
  } else {
    return r(o(t));
  }
};