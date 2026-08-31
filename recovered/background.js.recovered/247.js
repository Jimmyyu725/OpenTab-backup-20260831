var r = require("./44.js");
var o = require("./213.js");
var i = require("./103.js");
var s = require("./158.js");
var a = require("./52.js");
var u = require("./32.js");
var c = require("./84.js");
var f = require("./371.js");
var l = require("./372.js");
var h = require("./30.js");
var p = require("./29.js");
var d = require("./17.js");
var y = require("./159.js");
var m = require("./373.js");
var g = require("./105.js");
var v = require("./65.js");
var b = d("matchAll");
var w = g.set;
var _ = g.getterFor("RegExp String Iterator");
var E = RegExp.prototype;
var T = E.exec;
var x = "".matchAll;
var O = !!x && !p(function () {
  "a".matchAll(/./);
});
var I = o(function (t, e, n, r) {
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
function S(t) {
  var e;
  var n;
  var r;
  var o;
  var i;
  var a;
  var c = u(this);
  var f = String(t);
  e = y(c, RegExp);
  if ((n = c.flags) === undefined && c instanceof RegExp && !("flags" in E)) {
    n = l.call(c);
  }
  r = n === undefined ? "" : String(n);
  o = new e(e === RegExp ? c.source : c, r);
  i = !!~r.indexOf("g");
  a = !!~r.indexOf("u");
  o.lastIndex = s(c.lastIndex);
  return new I(o, f, i, a);
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
      if (f(t) && !~String(i("flags" in E ? t.flags : l.call(t))).indexOf("g")) {
        throw TypeError("`.matchAll` does not allow non-global regexes");
      }
      if (O) {
        return x.apply(o, arguments);
      }
      if ((n = t[b]) === undefined && v && c(t) == "RegExp") {
        n = S;
      }
      if (n != null) {
        return a(n).call(t, o);
      }
    } else if (O) {
      return x.apply(o, arguments);
    }
    e = String(o);
    r = new RegExp(t, "g");
    if (v) {
      return S.call(r, e);
    } else {
      return r[b](e);
    }
  }
});
if (!v && !(b in E)) {
  h(E, b, S);
}