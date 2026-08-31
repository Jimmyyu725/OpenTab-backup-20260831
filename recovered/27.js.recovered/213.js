var e = require("./208.js").IteratorPrototype;
var o = require("./195.js");
var i = require("./95.js");
var c = require("./149.js");
var u = require("./63.js");
function a() {
  return this;
}
module.exports = function (t, n, r) {
  var f = n + " Iterator";
  t.prototype = o(e, {
    next: i(1, r)
  });
  c(t, f, false, true);
  u[f] = a;
  return t;
};