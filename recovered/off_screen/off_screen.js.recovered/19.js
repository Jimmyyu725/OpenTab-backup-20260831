var r = require("./77.js");
var o = require("./137.js");
r({
  target: "RegExp",
  proto: true,
  forced: /./.exec !== o
}, {
  exec: o
});