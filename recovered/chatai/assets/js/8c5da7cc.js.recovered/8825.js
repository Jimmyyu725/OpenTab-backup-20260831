var n = require("./3056.js");
var o = require("./6559.js");
var a = require("./1219.js");
var i = require("./4772.js");
var c = require("./1377.js");
var s = require("./6173.js");
var l = u("C", undefined, undefined);
function u(e, t, r) {
  return {
    kind: e,
    value: t,
    error: r
  };
}
var f = require("./3986.js");
var d = require("./4791.js");
export var Lv = function (e) {
  function t(t) {
    var r = e.call(this) || this;
    r.isStopped = false;
    if (t) {
      r.destination = t;
      if ((0, a.Nn)(t)) {
        t.add(r);
      }
    } else {
      r.destination = w;
    }
    return r;
  }
  (0, n.ZT)(t, e);
  t.create = function (e, t, r) {
    return new Hp(e, t, r);
  };
  t.prototype.next = function (e) {
    if (this.isStopped) {
      m(function (e) {
        return u("N", e, undefined);
      }(e), this);
    } else {
      this._next(e);
    }
  };
  t.prototype.error = function (e) {
    if (this.isStopped) {
      m(u("E", undefined, e), this);
    } else {
      this.isStopped = true;
      this._error(e);
    }
  };
  t.prototype.complete = function () {
    if (this.isStopped) {
      m(l, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  t.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.isStopped = true;
      e.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  t.prototype._next = function (e) {
    this.destination.next(e);
  };
  t.prototype._error = function (e) {
    try {
      this.destination.error(e);
    } finally {
      this.unsubscribe();
    }
  };
  t.prototype._complete = function () {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return t;
}(a.w0);
var p = Function.prototype.bind;
function g(e, t) {
  return p.call(e, t);
}
var y = function () {
  function e(e) {
    this.partialObserver = e;
  }
  e.prototype.next = function (e) {
    var t = this.partialObserver;
    if (t.next) {
      try {
        t.next(e);
      } catch (e) {
        b(e);
      }
    }
  };
  e.prototype.error = function (e) {
    var t = this.partialObserver;
    if (t.error) {
      try {
        t.error(e);
      } catch (e) {
        b(e);
      }
    } else {
      b(e);
    }
  };
  e.prototype.complete = function () {
    var e = this.partialObserver;
    if (e.complete) {
      try {
        e.complete();
      } catch (e) {
        b(e);
      }
    }
  };
  return e;
}();
export var Hp = function (e) {
  function t(t, r, n) {
    var a;
    var c;
    var s = e.call(this) || this;
    if ((0, o.m)(t) || !t) {
      a = {
        next: t ?? undefined,
        error: r ?? undefined,
        complete: n ?? undefined
      };
    } else if (s && i.v.useDeprecatedNextContext) {
      (c = Object.create(t)).unsubscribe = function () {
        return s.unsubscribe();
      };
      a = {
        next: t.next && g(t.next, c),
        error: t.error && g(t.error, c),
        complete: t.complete && g(t.complete, c)
      };
    } else {
      a = t;
    }
    s.destination = new y(a);
    return s;
  }
  (0, n.ZT)(t, e);
  return t;
}(Lv);
function b(e) {
  if (i.v.useDeprecatedSynchronousErrorHandling) {
    (0, d.O)(e);
  } else {
    (0, c.h)(e);
  }
}
function m(e, t) {
  var r = i.v.onStoppedNotification;
  if (r) {
    f.z.setTimeout(function () {
      return r(e, t);
    });
  }
}
var w = {
  closed: true,
  next: s.Z,
  error: function (e) {
    throw e;
  },
  complete: s.Z
};