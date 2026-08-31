var r = require("./220.js");
var o = require("./227.js");
module.exports = function (t) {
  return t != null && o(t.length) && !r(t);
};