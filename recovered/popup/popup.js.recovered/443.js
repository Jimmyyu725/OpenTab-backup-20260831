var r = require("./517.js");
var i = require("./518.js");
var o = require("./407.js");
var s = require("./444.js");
var a = require("./521.js");
var c = require("./522.js");
var u = Object.prototype.hasOwnProperty;
module.exports = function (t, e) {
  var n = o(t);
  var l = !n && i(t);
  var h = !n && !l && s(t);
  var p = !n && !l && !h && c(t);
  var d = n || l || h || p;
  var f = d ? r(t.length, String) : [];
  var g = f.length;
  for (var y in t) {
    if ((!!e || !!u.call(t, y)) && (!d || y != "length" && (!h || y != "offset" && y != "parent") && (!p || y != "buffer" && y != "byteLength" && y != "byteOffset") && !a(y, g))) {
      f.push(y);
    }
  }
  return f;
};