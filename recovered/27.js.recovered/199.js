var e;
var o;
var i = require("./14.js");
var c = require("./146.js");
var u = i.process;
var a = u && u.versions;
var f = a && a.v8;
if (f) {
  o = (e = f.split("."))[0] < 4 ? 1 : e[0] + e[1];
} else if (c && (!(e = c.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = c.match(/Chrome\/(\d+)/))) {
  o = e[1];
}
module.exports = o && +o;