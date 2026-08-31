var e;
var o;
var i;
var c = require("./29.js");
var u = require("./140.js");
var a = require("./30.js");
var f = require("./37.js");
var s = require("./17.js");
var p = require("./65.js");
var l = s("iterator");
var v = false;
if ([].keys) {
  if ("next" in (i = [].keys())) {
    if ((o = u(u(i))) !== Object.prototype) {
      e = o;
    }
  } else {
    v = true;
  }
}
var h = e == null || c(function () {
  var t = {};
  return e[l].call(t) !== t;
});
if (h) {
  e = {};
}
if ((!p || !!h) && !f(e, l)) {
  a(e, l, function () {
    return this;
  });
}
module.exports = {
  IteratorPrototype: e,
  BUGGY_SAFARI_ITERATORS: v
};