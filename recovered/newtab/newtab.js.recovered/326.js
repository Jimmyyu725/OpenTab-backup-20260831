var r = require("./327.js");
var i = require("./328.js");
module.exports = function (t, e) {
  if (t && !r(e)) {
    return i(t, e);
  } else {
    return e;
  }
};