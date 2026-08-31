var r;
var i;
var o;
var a = require("./29.js");
var s = require("./140.js");
var c = require("./30.js");
var u = require("./37.js");
var l = require("./17.js");
var f = require("./65.js");
var h = l("iterator");
var p = false;
if ([].keys) {
  if ("next" in (o = [].keys())) {
    if ((i = s(s(o))) !== Object.prototype) {
      r = i;
    }
  } else {
    p = true;
  }
}
var d = r == null || a(function () {
  var t = {};
  return r[h].call(t) !== t;
});
if (d) {
  r = {};
}
if ((!f || !!d) && !u(r, h)) {
  c(r, h, function () {
    return this;
  });
}
module.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: p
};