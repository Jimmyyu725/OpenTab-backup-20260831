var n = require("./517.js");
var o = require("./518.js");
var c = require("./407.js");
var i = require("./444.js");
var a = require("./521.js");
var u = require("./522.js");
var s = Object.prototype.hasOwnProperty;
module.exports = function (t, e) {
  var r = c(t);
  var f = !r && o(t);
  var p = !r && !f && i(t);
  var l = !r && !f && !p && u(t);
  var b = r || f || p || l;
  var v = b ? n(t.length, String) : [];
  var h = v.length;
  for (var y in t) {
    if ((!!e || !!s.call(t, y)) && (!b || y != "length" && (!p || y != "offset" && y != "parent") && (!l || y != "buffer" && y != "byteLength" && y != "byteOffset") && !a(y, h))) {
      v.push(y);
    }
  }
  return v;
};