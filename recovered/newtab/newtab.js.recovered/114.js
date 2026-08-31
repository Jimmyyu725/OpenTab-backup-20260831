var r = require("./18.js");
var i = require("./101.js");
var o = require("./118.js");
var a = require("./10.js");
module.exports = r("Reflect", "ownKeys") || function (t) {
  var e = i.f(a(t));
  var n = o.f;
  if (n) {
    return e.concat(n(t));
  } else {
    return e;
  }
};