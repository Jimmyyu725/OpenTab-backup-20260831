var n = require("./5246.js");
var o = require(/*webcrack:missing*/"./9860.js");
var a = require("./9114.js");
const i = function (e) {
  var t = [];
  if (e != null) {
    for (var r in Object(e)) {
      t.push(r);
    }
  }
  return t;
};
var c = Object.prototype.hasOwnProperty;
const s = function (e) {
  if (!(0, o.Z)(e)) {
    return i(e);
  }
  var t = (0, a.Z)(e);
  var r = [];
  for (var n in e) {
    if (n != "constructor" || !t && c.call(e, n)) {
      r.push(n);
    }
  }
  return r;
};
var l = require("./385.js");
export const Z = function (e) {
  if ((0, l.Z)(e)) {
    return (0, n.Z)(e, true);
  } else {
    return s(e);
  }
};