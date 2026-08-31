var r = require("./327.js");
var o = require("./328.js");
module.exports = function (t, e) {
  if (t && !r(e)) {
    return o(t, e);
  } else {
    return e;
  }
};