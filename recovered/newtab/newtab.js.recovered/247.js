var r = require("./44.js");
var i = require("./213.js");
var o = require("./103.js");
var a = require("./158.js");
var s = require("./52.js");
var c = require("./32.js");
var u = require("./84.js");
var l = require("./371.js");
var f = require("./372.js");
var h = require("./30.js");
var p = require("./29.js");
var d = require("./17.js");
var m = require("./159.js");
var g = require("./373.js");
var y = require("./105.js");
var b = require("./65.js");
var w = d("matchAll");
var v = y.set;
var _ = y.getterFor("RegExp String Iterator");
var E = RegExp.prototype;
var x = E.exec;
var T = "".matchAll;
var I = !!T && !p(function () {
  "a".matchAll(/./);
});
var O = i(function (t, e, n, r) {
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
    return x.call(t, e);
  }(e, n);
  if (r === null) {
    return {
      value: undefined,
      done: t.done = true
    };
  } else if (t.global) {
    if (String(r[0]) == "") {
      e.lastIndex = g(n, a(e.lastIndex), t.unicode);
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
function S(t) {
  var e;
  var n;
  var r;
  var i;
  var o;
  var s;
  var u = c(this);
  var l = String(t);
  e = m(u, RegExp);
  if ((n = u.flags) === undefined && u instanceof RegExp && !("flags" in E)) {
    n = f.call(u);
  }
  r = n === undefined ? "" : String(n);
  i = new e(e === RegExp ? u.source : u, r);
  o = !!~r.indexOf("g");
  s = !!~r.indexOf("u");
  i.lastIndex = a(u.lastIndex);
  return new O(i, l, o, s);
}
r({
  target: "String",
  proto: true,
  forced: I
}, {
  matchAll: function (t) {
    var e;
    var n;
    var r;
    var i = o(this);
    if (t != null) {
      if (l(t) && !~String(o("flags" in E ? t.flags : f.call(t))).indexOf("g")) {
        throw TypeError("`.matchAll` does not allow non-global regexes");
      }
      if (I) {
        return T.apply(i, arguments);
      }
      if ((n = t[w]) === undefined && b && u(t) == "RegExp") {
        n = S;
      }
      if (n != null) {
        return s(n).call(t, i);
      }
    } else if (I) {
      return T.apply(i, arguments);
    }
    e = String(i);
    r = new RegExp(t, "g");
    if (b) {
      return S.call(r, e);
    } else {
      return r[w](e);
    }
  }
});
if (!b && !(w in E)) {
  h(E, w, S);
}