var n = require("./3056.js");
var _o = function (e) {
  function t(t, r) {
    return e.call(this) || this;
  }
  (0, n.ZT)(t, e);
  t.prototype.schedule = function (e, t = 0) {
    return this;
  };
  return t;
}(require("./1219.js").w0);
var a = {
  setInterval: function (e, t) {
    var r = [];
    for (var o = 2; o < arguments.length; o++) {
      r[o - 2] = arguments[o];
    }
    var i = a.delegate;
    if (i == null ? undefined : i.setInterval) {
      return i.setInterval.apply(i, (0, n.ev)([e, t], (0, n.CR)(r)));
    } else {
      return setInterval.apply(undefined, (0, n.ev)([e, t], (0, n.CR)(r)));
    }
  },
  clearInterval: function (e) {
    var t = a.delegate;
    return ((t == null ? undefined : t.clearInterval) || clearInterval)(e);
  },
  delegate: undefined
};
var i = require("./7602.js");
export var o = function (e) {
  function t(t, r) {
    var n = e.call(this, t, r) || this;
    n.scheduler = t;
    n.work = r;
    n.pending = false;
    return n;
  }
  (0, n.ZT)(t, e);
  t.prototype.schedule = function (e, t = 0) {
    if (this.closed) {
      return this;
    }
    this.state = e;
    var r = this.id;
    var n = this.scheduler;
    if (r != null) {
      this.id = this.recycleAsyncId(n, r, t);
    }
    this.pending = true;
    this.delay = t;
    this.id = this.id || this.requestAsyncId(n, this.id, t);
    return this;
  };
  t.prototype.requestAsyncId = function (e, t, r = 0) {
    return a.setInterval(e.flush.bind(e, this), r);
  };
  t.prototype.recycleAsyncId = function (e, t, r = 0) {
    if (r != null && this.delay === r && this.pending === false) {
      return t;
    }
    a.clearInterval(t);
  };
  t.prototype.execute = function (e, t) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var r = this._execute(e, t);
    if (r) {
      return r;
    }
    if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  t.prototype._execute = function (e, t) {
    var r;
    var n = false;
    try {
      this.work(e);
    } catch (e) {
      n = true;
      r = e || new Error("Scheduled action threw falsy error");
    }
    if (n) {
      this.unsubscribe();
      return r;
    }
  };
  t.prototype.unsubscribe = function () {
    if (!this.closed) {
      var t = this.id;
      var r = this.scheduler;
      var n = r.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0, i.P)(n, this);
      if (t != null) {
        this.id = this.recycleAsyncId(r, t, null);
      }
      this.delay = null;
      e.prototype.unsubscribe.call(this);
    }
  };
  return t;
}(_o);