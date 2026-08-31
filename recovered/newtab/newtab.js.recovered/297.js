require("./298.js");
var r = require("./300.js");
var i = require("./14.js");
var o = require("./147.js");
var a = require("./30.js");
var s = require("./63.js");
var c = require("./17.js")("toStringTag");
for (var u in r) {
  var l = i[u];
  var f = l && l.prototype;
  if (f && o(f) !== c) {
    a(f, c, u);
  }
  s[u] = s.Array;
}