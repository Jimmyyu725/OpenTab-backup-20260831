var r;
var i;
var o = require("./4.js");
var a = require("./28.js");
var s = o.process;
var c = s && s.versions;
var u = c && c.v8;
if (u) {
  i = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1];
} else if (a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/))) {
  i = r[1];
}
module.exports = i && +i;