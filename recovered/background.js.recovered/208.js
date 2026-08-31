var r;
var o;
var i;
var s = require("./29.js");
var a = require("./140.js");
var u = require("./30.js");
var c = require("./37.js");
var f = require("./17.js");
var l = require("./65.js");
var h = f("iterator");
var p = false;
if ([].keys) {
  if ("next" in (i = [].keys())) {
    if ((o = a(a(i))) !== Object.prototype) {
      r = o;
    }
  } else {
    p = true;
  }
}
var d = r == null || s(function () {
  var t = {};
  return r[h].call(t) !== t;
});
if (d) {
  r = {};
}
if ((!l || !!d) && !c(r, h)) {
  u(r, h, function () {
    return this;
  });
}
module.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: p
};