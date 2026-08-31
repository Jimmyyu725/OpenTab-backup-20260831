var r = require("./225.js");
var o = require("./427.js");
var i = require("./229.js");
module.exports = function (t) {
  if (i(t)) {
    return r(t);
  } else {
    return o(t);
  }
};