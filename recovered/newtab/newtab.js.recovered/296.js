var r = require("./212.js").charAt;
var i = require("./105.js");
var o = require("./207.js");
var a = i.set;
var s = i.getterFor("String Iterator");
o(String, "String", function (t) {
  a(this, {
    type: "String Iterator",
    string: String(t),
    index: 0
  });
}, function () {
  var t;
  var e = s(this);
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