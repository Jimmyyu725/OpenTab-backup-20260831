require("./350.js");
var r = require("./352.js");
var o = require("./7.js");
var i = require("./119.js");
var s = require("./19.js");
var a = require("./45.js");
var c = require("./9.js")("toStringTag");
for (var u in r) {
  var f = o[u];
  var l = f && f.prototype;
  if (l && i(l) !== c) {
    s(l, c, u);
  }
  a[u] = a.Array;
}