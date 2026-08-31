(function () {
  var e;
  var n;
  var r;
  var i;
  var o;
  var a;
  var s;
  var c = [].slice;
  var u = {}.hasOwnProperty;
  e = function () {
    var t;
    var e;
    var n;
    var r;
    var i;
    var a;
    a = arguments[0];
    i = arguments.length >= 2 ? c.call(arguments, 1) : [];
    if (o(Object.assign)) {
      Object.assign.apply(null, arguments);
    } else {
      t = 0;
      n = i.length;
      for (; t < n; t++) {
        if ((r = i[t]) != null) {
          for (e in r) {
            if (u.call(r, e)) {
              a[e] = r[e];
            }
          }
        }
      }
    }
    return a;
  };
  o = function (t) {
    return !!t && Object.prototype.toString.call(t) === "[object Function]";
  };
  a = function (t) {
    var e;
    return !!t && ((e = typeof t) == "function" || e === "object");
  };
  r = function (t) {
    if (o(Array.isArray)) {
      return Array.isArray(t);
    } else {
      return Object.prototype.toString.call(t) === "[object Array]";
    }
  };
  i = function (t) {
    var e;
    if (r(t)) {
      return !t.length;
    }
    for (e in t) {
      if (u.call(t, e)) {
        return false;
      }
    }
    return true;
  };
  s = function (t) {
    var e;
    var n;
    return a(t) && (n = Object.getPrototypeOf(t)) && (e = n.constructor) && typeof e == "function" && e instanceof e && Function.prototype.toString.call(e) === Function.prototype.toString.call(Object);
  };
  n = function (t) {
    if (o(t.valueOf)) {
      return t.valueOf();
    } else {
      return t;
    }
  };
  module.exports.assign = e;
  module.exports.isFunction = o;
  module.exports.isObject = a;
  module.exports.isArray = r;
  module.exports.isEmpty = i;
  module.exports.isPlainObject = s;
  module.exports.getValue = n;
}).call(this);