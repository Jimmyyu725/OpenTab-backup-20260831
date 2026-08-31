var n = require(/*webcrack:missing*/"./220.js");
var o = n ? n.prototype : undefined;
var c = o ? o.valueOf : undefined;
module.exports = function (t) {
  if (c) {
    return Object(c.call(t));
  } else {
    return {};
  }
};