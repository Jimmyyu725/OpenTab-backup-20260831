var r = require("./96.js");
var o = require("./299.js");
var i = require("./63.js");
var c = require("./105.js");
var u = require("./207.js");
var a = c.set;
var s = c.getterFor("Array Iterator");
module.exports = u(Array, "Array", function (t, n) {
  a(this, {
    type: "Array Iterator",
    target: r(t),
    index: 0,
    kind: n
  });
}, function () {
  var t = s(this);
  var n = t.target;
  var e = t.kind;
  var r = t.index++;
  if (!n || r >= n.length) {
    t.target = undefined;
    return {
      value: undefined,
      done: true
    };
  } else if (e == "keys") {
    return {
      value: r,
      done: false
    };
  } else if (e == "values") {
    return {
      value: n[r],
      done: false
    };
  } else {
    return {
      value: [r, n[r]],
      done: false
    };
  }
}, "values");
i.Arguments = i.Array;
o("keys");
o("values");
o("entries");