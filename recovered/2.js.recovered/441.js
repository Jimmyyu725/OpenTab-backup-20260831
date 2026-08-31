var n = require("./442.js");
var o = require("./438.js");
var c = Object.prototype.hasOwnProperty;
module.exports = function (t, e, r) {
  var i = t[e];
  if (!c.call(t, e) || !o(i, r) || r === undefined && !(e in t)) {
    n(t, e, r);
  }
};