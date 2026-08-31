var r = require("./327.js");
var o = require("./328.js");
module.exports = function (e, t) {
  if (e && !r(t)) {
    return o(e, t);
  } else {
    return t;
  }
};