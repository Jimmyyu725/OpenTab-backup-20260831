var r;
var o;
var i;
var c = require("./29.js");
var u = require("./140.js");
var a = require("./30.js");
var s = require("./37.js");
var f = require("./17.js");
var l = require("./65.js");
var p = f("iterator");
var v = false;
if ([].keys) {
  if ("next" in (i = [].keys())) {
    if ((o = u(u(i))) !== Object.prototype) {
      r = o;
    }
  } else {
    v = true;
  }
}
var d = r == null || c(function () {
  var t = {};
  return r[p].call(t) !== t;
});
if (d) {
  r = {};
}
if ((!l || !!d) && !s(r, p)) {
  a(r, p, function () {
    return this;
  });
}
module.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: v
};