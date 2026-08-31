var n = require("./4365.js");
var o = require("./7422.js");
var a = Object.prototype.hasOwnProperty;
export const Z = function (e, t, r) {
  var i = e[t];
  if (!a.call(e, t) || !(0, o.Z)(i, r) || r === undefined && !(t in e)) {
    (0, n.Z)(e, t, r);
  }
};