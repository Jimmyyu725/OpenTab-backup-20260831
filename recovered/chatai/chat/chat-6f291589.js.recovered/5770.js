var i;
var s;
var r = require("./2334.js");
var a = require("./8626.js");
var o = r.process;
var u = r.Deno;
var g = o && o.versions || u && u.version;
var h = g && g.v8;
if (h) {
  s = (i = h.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1]);
}
if (!s && a && (!(i = a.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = a.match(/Chrome\/(\d+)/))) {
  s = +i[1];
}
module.exports = s;