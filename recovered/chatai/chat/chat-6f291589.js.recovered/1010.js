var i = require("./3926.js");
var s = Function.prototype.call;
module.exports = i ? s.bind(s) : function () {
  return s.apply(s, arguments);
};