var r;
var o;
var i;
var s = require("./18.js");
var a = require("./110.js");
var c = require("./19.js");
var u = require("./30.js");
var f = require("./9.js");
var l = require("./43.js");
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
if ((!l || !!d) && !u(r, h)) {
  c(r, h, function () {
    return this;
  });
}
module.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: p
};