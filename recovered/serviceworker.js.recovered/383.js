var r = require("./384.js");
var o = require("./385.js");
module.exports = function (t, e) {
  if (t && !r(e)) {
    return o(t, e);
  } else {
    return e;
  }
};