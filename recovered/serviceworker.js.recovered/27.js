var r = require("./88.js");
var o = require("./106.js");
r({
  target: "RegExp",
  proto: true,
  forced: /./.exec !== o
}, {
  exec: o
});