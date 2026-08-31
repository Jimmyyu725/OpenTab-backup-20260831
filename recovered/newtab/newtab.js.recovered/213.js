var r = require("./208.js").IteratorPrototype;
var i = require("./195.js");
var o = require("./95.js");
var a = require("./149.js");
var s = require("./63.js");
function c() {
  return this;
}
module.exports = function (t, e, n) {
  var u = e + " Iterator";
  t.prototype = i(r, {
    next: o(1, n)
  });
  a(t, u, false, true);
  s[u] = c;
  return t;
};