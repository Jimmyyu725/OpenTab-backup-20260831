var r = require("./208.js").IteratorPrototype;
var o = require("./195.js");
var i = require("./95.js");
var s = require("./149.js");
var a = require("./63.js");
function u() {
  return this;
}
module.exports = function (t, e, n) {
  var c = e + " Iterator";
  t.prototype = o(r, {
    next: i(1, n)
  });
  s(t, c, false, true);
  a[c] = u;
  return t;
};