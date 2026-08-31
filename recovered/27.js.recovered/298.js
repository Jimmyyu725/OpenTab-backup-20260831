var e = require("./96.js");
var o = require("./299.js");
var i = require("./63.js");
var c = require("./105.js");
var u = require("./207.js");
var a = c.set;
var f = c.getterFor("Array Iterator");
module.exports = u(Array, "Array", function (t, n) {
  a(this, {
    type: "Array Iterator",
    target: e(t),
    index: 0,
    kind: n
  });
}, function () {
  var t = f(this);
  var n = t.target;
  var r = t.kind;
  var e = t.index++;
  if (!n || e >= n.length) {
    t.target = undefined;
    return {
      value: undefined,
      done: true
    };
  } else if (r == "keys") {
    return {
      value: e,
      done: false
    };
  } else if (r == "values") {
    return {
      value: n[e],
      done: false
    };
  } else {
    return {
      value: [e, n[e]],
      done: false
    };
  }
}, "values");
i.Arguments = i.Array;
o("keys");
o("values");
o("entries");