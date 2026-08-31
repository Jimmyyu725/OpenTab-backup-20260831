var r = require("./220.js");
var i = r ? r.prototype : undefined;
var o = i ? i.valueOf : undefined;
module.exports = function (t) {
  if (o) {
    return Object(o.call(t));
  } else {
    return {};
  }
};