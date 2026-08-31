(function () {
  var e;
  var n;
  var r;
  var o;
  var i;
  var s;
  var a;
  var c = [].slice;
  var u = {}.hasOwnProperty;
  e = function () {
    var t;
    var e;
    var n;
    var r;
    var o;
    var s;
    s = arguments[0];
    o = arguments.length >= 2 ? c.call(arguments, 1) : [];
    if (i(Object.assign)) {
      Object.assign.apply(null, arguments);
    } else {
      t = 0;
      n = o.length;
      for (; t < n; t++) {
        if ((r = o[t]) != null) {
          for (e in r) {
            if (u.call(r, e)) {
              s[e] = r[e];
            }
          }
        }
      }
    }
    return s;
  };
  i = function (t) {
    return !!t && Object.prototype.toString.call(t) === "[object Function]";
  };
  s = function (t) {
    var e;
    return !!t && ((e = typeof t) == "function" || e === "object");
  };
  r = function (t) {
    if (i(Array.isArray)) {
      return Array.isArray(t);
    } else {
      return Object.prototype.toString.call(t) === "[object Array]";
    }
  };
  o = function (t) {
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
  a = function (t) {
    var e;
    var n;
    return s(t) && (n = Object.getPrototypeOf(t)) && (e = n.constructor) && typeof e == "function" && e instanceof e && Function.prototype.toString.call(e) === Function.prototype.toString.call(Object);
  };
  n = function (t) {
    if (i(t.valueOf)) {
      return t.valueOf();
    } else {
      return t;
    }
  };
  module.exports.assign = e;
  module.exports.isFunction = i;
  module.exports.isObject = s;
  module.exports.isArray = r;
  module.exports.isEmpty = o;
  module.exports.isPlainObject = a;
  module.exports.getValue = n;
}).call(this);