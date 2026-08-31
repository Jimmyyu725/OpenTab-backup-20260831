var r = require("./96.js");
var o = require("./299.js");
var i = require("./63.js");
var s = require("./105.js");
var a = require("./207.js");
var c = s.set;
var u = s.getterFor("Array Iterator");
module.exports = a(Array, "Array", function (t, e) {
  c(this, {
    type: "Array Iterator",
    target: r(t),
    index: 0,
    kind: e
  });
}, function () {
  var t = u(this);
  var e = t.target;
  var n = t.kind;
  var r = t.index++;
  if (!e || r >= e.length) {
    t.target = undefined;
    return {
      value: undefined,
      done: true
    };
  } else if (n == "keys") {
    return {
      value: r,
      done: false
    };
  } else if (n == "values") {
    return {
      value: e[r],
      done: false
    };
  } else {
    return {
      value: [r, e[r]],
      done: false
    };
  }
}, "values");
i.Arguments = i.Array;
o("keys");
o("values");
o("entries");