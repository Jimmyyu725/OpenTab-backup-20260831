const n = function (e, t) {
  for (var r = -1, n = Array(e); ++r < e;) {
    n[r] = t(r);
  }
  return n;
};
var o = require("./9091.js");
var a = require(/*webcrack:missing*/"./3829.js");
var i = require("./8637.js");
var c = require("./684.js");
var s = require("./2787.js");
var l = Object.prototype.hasOwnProperty;
export const Z = function (e, t) {
  var r = (0, a.Z)(e);
  var u = !r && (0, o.Z)(e);
  var f = !r && !u && (0, i.Z)(e);
  var d = !r && !u && !f && (0, s.Z)(e);
  var h = r || u || f || d;
  var p = h ? n(e.length, String) : [];
  var g = p.length;
  for (var y in e) {
    if ((!!t || !!l.call(e, y)) && (!h || y != "length" && (!f || y != "offset" && y != "parent") && (!d || y != "buffer" && y != "byteLength" && y != "byteOffset") && !(0, c.Z)(y, g))) {
      p.push(y);
    }
  }
  return p;
};