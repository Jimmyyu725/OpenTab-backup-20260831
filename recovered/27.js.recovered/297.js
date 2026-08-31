require("./298.js");
var e = require("./300.js");
var o = require("./14.js");
var i = require("./147.js");
var c = require("./30.js");
var u = require("./63.js");
var a = require("./17.js")("toStringTag");
for (var f in e) {
  var s = o[f];
  var p = s && s.prototype;
  if (p && i(p) !== a) {
    c(p, a, f);
  }
  u[f] = u.Array;
}