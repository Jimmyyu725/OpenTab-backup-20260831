var r = require("./74.js");
var o = r ? r.prototype : undefined;
var i = o ? o.valueOf : undefined;
module.exports = function (t) {
  if (i) {
    return Object(i.call(t));
  } else {
    return {};
  }
};