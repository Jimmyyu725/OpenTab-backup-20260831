var r = require("./186.js").charAt;
var o = require("./65.js");
var i = require("./209.js");
var s = o.set;
var a = o.getterFor("String Iterator");
i(String, "String", function (t) {
  s(this, {
    type: "String Iterator",
    string: String(t),
    index: 0
  });
}, function () {
  var t;
  var e = a(this);
  var n = e.string;
  var o = e.index;
  if (o >= n.length) {
    return {
      value: undefined,
      done: true
    };
  } else {
    t = r(n, o);
    e.index += t.length;
    return {
      value: t,
      done: false
    };
  }
});