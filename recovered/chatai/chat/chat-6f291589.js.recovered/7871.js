var i = require("./3926.js");
var s = Function.prototype;
var r = s.bind;
var a = s.call;
var o = i && r.bind(a, a);
module.exports = i ? function (e) {
  return e && o(e);
} : function (e) {
  return e && function () {
    return a.apply(e, arguments);
  };
};