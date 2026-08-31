var e = require("./212.js").charAt;
var o = require("./105.js");
var i = require("./207.js");
var c = o.set;
var u = o.getterFor("String Iterator");
i(String, "String", function (t) {
  c(this, {
    type: "String Iterator",
    string: String(t),
    index: 0
  });
}, function () {
  var t;
  var n = u(this);
  var r = n.string;
  var o = n.index;
  if (o >= r.length) {
    return {
      value: undefined,
      done: true
    };
  } else {
    t = e(r, o);
    n.index += t.length;
    return {
      value: t,
      done: false
    };
  }
});