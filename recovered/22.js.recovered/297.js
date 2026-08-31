require("./298.js");
var r = require("./300.js");
var i = require("./14.js");
var o = require("./147.js");
var s = require("./30.js");
var a = require("./63.js");
var c = require("./17.js")("toStringTag");
for (var u in r) {
  var l = i[u];
  var h = l && l.prototype;
  if (h && o(h) !== c) {
    s(h, c, u);
  }
  a[u] = a.Array;
}