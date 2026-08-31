var r = require("./208.js").IteratorPrototype;
var o = require("./195.js");
var i = require("./95.js");
var s = require("./149.js");
var a = require("./63.js");
function c() {
  return this;
}
module.exports = function (t, e, n) {
  var u = e + " Iterator";
  t.prototype = o(r, {
    next: i(1, n)
  });
  s(t, u, false, true);
  a[u] = c;
  return t;
};