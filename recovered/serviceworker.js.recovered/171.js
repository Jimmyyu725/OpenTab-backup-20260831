var r = require("./28.js");
var o = require("./177.js");
var i = require("./62.js");
var s = require("./114.js");
var a = require("./33.js");
var c = require("./20.js");
var u = require("./50.js");
var f = require("./298.js");
var l = require("./299.js");
var h = require("./19.js");
var p = require("./18.js");
var d = require("./9.js");
var y = require("./120.js");
var m = require("./300.js");
var g = require("./65.js");
var v = require("./43.js");
var b = d("matchAll");
var w = g.set;
var _ = g.getterFor("RegExp String Iterator");
var x = RegExp.prototype;
var T = x.exec;
var E = "".matchAll;
var O = !!E && !p(function () {
  "a".matchAll(/./);
});
var S = o(function (t, e, n, r) {
  w(this, {
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
    return T.call(t, e);
  }(e, n);
  if (r === null) {
    return {
      value: undefined,
      done: t.done = true
    };
  } else if (t.global) {
    if (String(r[0]) == "") {
      e.lastIndex = m(n, s(e.lastIndex), t.unicode);
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
  var f = String(t);
  e = y(u, RegExp);
  if ((n = u.flags) === undefined && u instanceof RegExp && !("flags" in x)) {
    n = l.call(u);
  }
  r = n === undefined ? "" : String(n);
  o = new e(e === RegExp ? u.source : u, r);
  i = !!~r.indexOf("g");
  a = !!~r.indexOf("u");
  o.lastIndex = s(u.lastIndex);
  return new S(o, f, i, a);
}
r({
  target: "String",
  proto: true,
  forced: O
}, {
  matchAll: function (t) {
    var e;
    var n;
    var r;
    var o = i(this);
    if (t != null) {
      if (f(t) && !~String(i("flags" in x ? t.flags : l.call(t))).indexOf("g")) {
        throw TypeError("`.matchAll` does not allow non-global regexes");
      }
      if (O) {
        return E.apply(o, arguments);
      }
      if ((n = t[b]) === undefined && v && u(t) == "RegExp") {
        n = I;
      }
      if (n != null) {
        return a(n).call(t, o);
      }
    } else if (O) {
      return E.apply(o, arguments);
    }
    e = String(o);
    r = new RegExp(t, "g");
    if (v) {
      return I.call(r, e);
    } else {
      return r[b](e);
    }
  }
});
if (!v && !(b in x)) {
  h(x, b, I);
}