var r;
var o;
var i = require("./14.js");
var s = require("./146.js");
var a = i.process;
var c = a && a.versions;
var u = c && c.v8;
if (u) {
  o = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1];
} else if (s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/))) {
  o = r[1];
}
module.exports = o && +o;