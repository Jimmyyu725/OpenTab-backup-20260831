var n = require("./8825.js");
var o = require("./1219.js");
var a = require("./1641.js");
var i = require("./7107.js");
function c(e) {
  if (e.length === 0) {
    return i.y;
  } else if (e.length === 1) {
    return e[0];
  } else {
    return function (t) {
      return e.reduce(function (e, t) {
        return t(e);
      }, t);
    };
  }
}
var s = require("./4772.js");
var l = require("./6559.js");
var u = require("./4791.js");
export var y = function () {
  function e(e) {
    if (e) {
      this._subscribe = e;
    }
  }
  e.prototype.lift = function (t) {
    var r = new e();
    r.source = this;
    r.operator = t;
    return r;
  };
  e.prototype.subscribe = function (e, t, r) {
    var a;
    var i = this;
    var c = (a = e) && a instanceof n.Lv || function (e) {
      return e && (0, l.m)(e.next) && (0, l.m)(e.error) && (0, l.m)(e.complete);
    }(a) && (0, o.Nn)(a) ? e : new n.Hp(e, t, r);
    (0, u.x)(function () {
      var e = i;
      var t = e.operator;
      var r = e.source;
      c.add(t ? t.call(c, r) : r ? i._subscribe(c) : i._trySubscribe(c));
    });
    return c;
  };
  e.prototype._trySubscribe = function (e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  };
  e.prototype.forEach = function (e, t) {
    var r = this;
    return new (t = d(t))(function (t, o) {
      var a = new n.Hp({
        next: function (t) {
          try {
            e(t);
          } catch (e) {
            o(e);
            a.unsubscribe();
          }
        },
        error: o,
        complete: t
      });
      r.subscribe(a);
    });
  };
  e.prototype._subscribe = function (e) {
    var t;
    if ((t = this.source) === null || t === undefined) {
      return undefined;
    } else {
      return t.subscribe(e);
    }
  };
  e.prototype[a.L] = function () {
    return this;
  };
  e.prototype.pipe = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return c(e)(this);
  };
  e.prototype.toPromise = function (e) {
    var t = this;
    return new (e = d(e))(function (e, r) {
      var n;
      t.subscribe(function (e) {
        return n = e;
      }, function (e) {
        return r(e);
      }, function () {
        return e(n);
      });
    });
  };
  e.create = function (t) {
    return new e(t);
  };
  return e;
}();
function d(e) {
  return e ?? s.v.Promise ?? Promise;
}