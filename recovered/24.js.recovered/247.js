var r = require("./44.js");
var o = require("./213.js");
var i = require("./103.js");
var s = require("./158.js");
var a = require("./52.js");
var c = require("./32.js");
var u = require("./84.js");
var l = require("./371.js");
var h = require("./372.js");
var p = require("./30.js");
var f = require("./29.js");
var d = require("./17.js");
var g = require("./159.js");
var y = require("./373.js");
var m = require("./105.js");
var b = require("./65.js");
var w = d("matchAll");
var v = m.set;
var _ = m.getterFor("RegExp String Iterator");
var T = RegExp.prototype;
var E = T.exec;
var x = "".matchAll;
var S = !!x && !f(function () {
  "a".matchAll(/./);
});
var O = o(function (t, e, n, r) {
  v(this, {
    type: "RegExp String Iterator",
    regexp: t,
    string: e,
    global: n,
    unicode: r,
    done: false
  });
}, "RegExp String", function () {
  var t = _(this);
  if (t.done) {
    return {
      value: undefined,
      done: true
    };
  }
  var e = t.regexp;
  var n = t.string;
  var r = function (t, e) {
    var n;
    var r = t.exec;
    if (typeof r == "function") {
      if (typeof (n = r.call(t, e)) != "object") {
        throw TypeError("Incorrect exec result");
      }
      return n;
    }
    return E.call(t, e);
  }(e, n);
  if (r === null) {
    return {
      value: undefined,
      done: t.done = true
    };
  } else if (t.global) {
    if (String(r[0]) == "") {
      e.lastIndex = y(n, s(e.lastIndex), t.unicode);
    }
    return {
      value: r,
      done: false
    };
  } else {
    t.done = true;
    return {
      value: r,
      done: false
    };
  }
});
function I(t) {
  var e;
  var n;
  var r;
  var o;
  var i;
  var a;
  var u = c(this);
  var l = String(t);
  e = g(u, RegExp);
  if ((n = u.flags) === undefined && u instanceof RegExp && !("flags" in T)) {
    n = h.call(u);
  }
  r = n === undefined ? "" : String(n);
  o = new e(e === RegExp ? u.source : u, r);
  i = !!~r.indexOf("g");
  a = !!~r.indexOf("u");
  o.lastIndex = s(u.lastIndex);
  return new O(o, l, i, a);
}
r({
  target: "String",
  proto: true,
  forced: S
}, {
  matchAll: function (t) {
    var e;
    var n;
    var r;
    var o = i(this);
    if (t != null) {
      if (l(t) && !~String(i("flags" in T ? t.flags : h.call(t))).indexOf("g")) {
        throw TypeError("`.matchAll` does not allow non-global regexes");
      }
      if (S) {
        return x.apply(o, arguments);
      }
      if ((n = t[w]) === undefined && b && u(t) == "RegExp") {
        n = I;
      }
      if (n != null) {
        return a(n).call(t, o);
      }
    } else if (S) {
      return x.apply(o, arguments);
    }
    e = String(o);
    r = new RegExp(t, "g");
    if (b) {
      return I.call(r, e);
    } else {
      return r[w](e);
    }
  }
});
if (!b && !(w in T)) {
  p(T, w, I);
}