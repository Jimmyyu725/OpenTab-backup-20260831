require("./298.js");
var r = require("./300.js");
var o = require("./14.js");
var i = require("./147.js");
var c = require("./30.js");
var u = require("./63.js");
var a = require("./17.js")("toStringTag");
for (var s in r) {
  var f = o[s];
  var l = f && f.prototype;
  if (l && i(l) !== a) {
    c(l, a, s);
  }
  u[s] = u.Array;
}