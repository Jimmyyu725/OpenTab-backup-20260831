var r = require("./224.js");
var o = require("./142.js");
var i = Object.prototype.hasOwnProperty;
module.exports = function (t, e, n) {
  var s = t[e];
  if (!i.call(t, e) || !o(s, n) || n === undefined && !(e in t)) {
    r(t, e, n);
  }
};