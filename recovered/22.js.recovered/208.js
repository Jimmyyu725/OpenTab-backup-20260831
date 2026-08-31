var r;
var i;
var o;
var s = require("./29.js");
var a = require("./140.js");
var c = require("./30.js");
var u = require("./37.js");
var l = require("./17.js");
var h = require("./65.js");
var p = l("iterator");
var f = false;
if ([].keys) {
  if ("next" in (o = [].keys())) {
    if ((i = a(a(o))) !== Object.prototype) {
      r = i;
    }
  } else {
    f = true;
  }
}
var d = r == null || s(function () {
  var t = {};
  return r[p].call(t) !== t;
});
if (d) {
  r = {};
}
if ((!h || !!d) && !u(r, p)) {
  c(r, p, function () {
    return this;
  });
}
module.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: f
};