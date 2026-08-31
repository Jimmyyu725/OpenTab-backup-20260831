var r = require("./421.js");
var o = require("./422.js");
var i = require("./80.js");
var s = require("./145.js");
var a = require("./425.js");
var c = require("./226.js");
var u = Object.prototype.hasOwnProperty;
module.exports = function (t, e) {
  var n = i(t);
  var f = !n && o(t);
  var l = !n && !f && s(t);
  var h = !n && !f && !l && c(t);
  var p = n || f || l || h;
  var d = p ? r(t.length, String) : [];
  var y = d.length;
  for (var m in t) {
    if ((!!e || !!u.call(t, m)) && (!p || m != "length" && (!l || m != "offset" && m != "parent") && (!h || m != "buffer" && m != "byteLength" && m != "byteOffset") && !a(m, y))) {
      d.push(m);
    }
  }
  return d;
};