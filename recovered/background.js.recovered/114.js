var r = require("./18.js");
var o = require("./101.js");
var i = require("./118.js");
var s = require("./10.js");
module.exports = r("Reflect", "ownKeys") || function (t) {
  var e = o.f(s(t));
  var n = i.f;
  if (n) {
    return e.concat(n(t));
  } else {
    return e;
  }
};