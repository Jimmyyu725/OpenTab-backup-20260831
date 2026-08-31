var r = require("./371.js");
var o = /^\s+/;
module.exports = function (t) {
  if (t) {
    return t.slice(0, r(t) + 1).replace(o, "");
  } else {
    return t;
  }
};