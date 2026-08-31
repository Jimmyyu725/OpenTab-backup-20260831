var r = require("./178.js").IteratorPrototype;
var o = require("./183.js");
var i = require("./60.js");
var s = require("./117.js");
var a = require("./45.js");
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