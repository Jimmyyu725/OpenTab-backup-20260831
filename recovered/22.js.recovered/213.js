var r = require("./208.js").IteratorPrototype;
var i = require("./195.js");
var o = require("./95.js");
var s = require("./149.js");
var a = require("./63.js");
function c() {
  return this;
}
module.exports = function (t, e, n) {
  var u = e + " Iterator";
  t.prototype = i(r, {
    next: o(1, n)
  });
  s(t, u, false, true);
  a[u] = c;
  return t;
};