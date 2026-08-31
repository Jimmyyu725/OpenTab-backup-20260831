var r = require("./18.js");
var o = require("./101.js");
var i = require("./118.js");
var c = require("./10.js");
module.exports = r("Reflect", "ownKeys") || function (t) {
  var n = o.f(c(t));
  var e = i.f;
  if (e) {
    return n.concat(e(t));
  } else {
    return n;
  }
};