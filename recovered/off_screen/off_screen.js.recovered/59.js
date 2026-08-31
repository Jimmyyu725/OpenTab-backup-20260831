var r;
var o;
var i = require("./4.js");
var c = require("./28.js");
var u = i.process;
var a = u && u.versions;
var s = a && a.v8;
if (s) {
  o = (r = s.split("."))[0] < 4 ? 1 : r[0] + r[1];
} else if (c && (!(r = c.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = c.match(/Chrome\/(\d+)/))) {
  o = r[1];
}
module.exports = o && +o;