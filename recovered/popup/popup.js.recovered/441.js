var r = require("./442.js");
var i = require("./438.js");
var o = Object.prototype.hasOwnProperty;
module.exports = function (t, e, n) {
  var s = t[e];
  if (!o.call(t, e) || !i(s, n) || n === undefined && !(e in t)) {
    r(t, e, n);
  }
};