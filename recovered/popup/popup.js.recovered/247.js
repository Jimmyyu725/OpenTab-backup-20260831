var r = require("./44.js");
var i = require("./213.js");
var o = require("./103.js");
var s = require("./158.js");
var a = require("./52.js");
var c = require("./32.js");
var u = require("./84.js");
var l = require("./371.js");
var h = require("./372.js");
var p = require("./30.js");
var d = require("./29.js");
var f = require("./17.js");
var g = require("./159.js");
var y = require("./373.js");
var m = require("./105.js");
var b = require("./65.js");
var v = f("matchAll");
var w = m.set;
var x = m.getterFor("RegExp String Iterator");
var _ = RegExp.prototype;
var O = _.exec;
var T = "".matchAll;
var S = !!T && !d(function () {
  "a".matchAll(/./);
});
var E = i(function (t, e, n, r) {
  w(this, {
    type: "RegExp String Iterator",
    regexp: t,
    string: e,
    global: n,
    unicode: r,
    done: false
  });
}, "RegExp String", function () {
  var t = x(this);
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
    return O.call(t, e);
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
function j(t) {
  var e;
  var n;
  var r;
  var i;
  var o;
  var a;
  var u = c(this);
  var l = String(t);
  e = g(u, RegExp);
  if ((n = u.flags) === undefined && u instanceof RegExp && !("flags" in _)) {
    n = h.call(u);
  }
  r = n === undefined ? "" : String(n);
  i = new e(e === RegExp ? u.source : u, r);
  o = !!~r.indexOf("g");
  a = !!~r.indexOf("u");
  i.lastIndex = s(u.lastIndex);
  return new E(i, l, o, a);
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
    var i = o(this);
    if (t != null) {
      if (l(t) && !~String(o("flags" in _ ? t.flags : h.call(t))).indexOf("g")) {
        throw TypeError("`.matchAll` does not allow non-global regexes");
      }
      if (S) {
        return T.apply(i, arguments);
      }
      if ((n = t[v]) === undefined && b && u(t) == "RegExp") {
        n = j;
      }
      if (n != null) {
        return a(n).call(t, i);
      }
    } else if (S) {
      return T.apply(i, arguments);
    }
    e = String(i);
    r = new RegExp(t, "g");
    if (b) {
      return j.call(r, e);
    } else {
      return r[v](e);
    }
  }
});
if (!b && !(v in _)) {
  p(_, v, j);
}