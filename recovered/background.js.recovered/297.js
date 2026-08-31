require("./298.js");
var r = require("./300.js");
var o = require("./14.js");
var i = require("./147.js");
var s = require("./30.js");
var a = require("./63.js");
var u = require("./17.js")("toStringTag");
for (var c in r) {
  var f = o[c];
  var l = f && f.prototype;
  if (l && i(l) !== u) {
    s(l, u, c);
  }
  a[c] = a.Array;
}