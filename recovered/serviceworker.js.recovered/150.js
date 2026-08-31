var r = require("./225.js");
var o = require("./430.js");
var i = require("./229.js");
module.exports = function (t) {
  if (i(t)) {
    return r(t, true);
  } else {
    return o(t);
  }
};