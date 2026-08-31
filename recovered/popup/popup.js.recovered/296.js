var r = require("./212.js").charAt;
var i = require("./105.js");
var o = require("./207.js");
var s = i.set;
var a = i.getterFor("String Iterator");
o(String, "String", function (t) {
  s(this, {
    type: "String Iterator",
    string: String(t),
    index: 0
  });
}, function () {
  var t;
  var e = a(this);
  var n = e.string;
  var i = e.index;
  if (i >= n.length) {
    return {
      value: undefined,
      done: true
    };
  } else {
    t = r(n, i);
    e.index += t.length;
    return {
      value: t,
      done: false
    };
  }
});