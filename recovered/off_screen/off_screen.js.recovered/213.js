var r = require("./208.js").IteratorPrototype;
var o = require("./195.js");
var i = require("./95.js");
var c = require("./149.js");
var u = require("./63.js");
function a() {
  return this;
}
module.exports = function (t, n, e) {
  var s = n + " Iterator";
  t.prototype = o(r, {
    next: i(1, e)
  });
  c(t, s, false, true);
  u[s] = a;
  return t;
};