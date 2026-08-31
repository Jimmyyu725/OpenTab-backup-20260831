var r;
var i;
var o = require("./14.js");
var s = require("./146.js");
var a = o.process;
var c = a && a.versions;
var u = c && c.v8;
if (u) {
  i = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1];
} else if (s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/))) {
  i = r[1];
}
module.exports = i && +i;