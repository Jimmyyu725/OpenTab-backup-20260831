var r = require("./421.js");
var i = /^\s+/;
module.exports = function (t) {
  if (t) {
    return t.slice(0, r(t) + 1).replace(i, "");
  } else {
    return t;
  }
};