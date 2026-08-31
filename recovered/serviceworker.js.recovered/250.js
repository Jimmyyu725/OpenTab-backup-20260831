var r = require("./40.js");
var o = require("./252.js");
var i = require("./255.js");
var s = require("./15.js");
module.exports = r("Reflect", "ownKeys") || function (t) {
  var e = o.f(s(t));
  var n = i.f;
  if (n) {
    return e.concat(n(t));
  } else {
    return e;
  }
};