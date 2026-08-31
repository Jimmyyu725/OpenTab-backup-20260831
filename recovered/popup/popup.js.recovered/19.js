var r = require("./77.js");
var i = require("./137.js");
r({
  target: "RegExp",
  proto: true,
  forced: /./.exec !== i
}, {
  exec: i
});