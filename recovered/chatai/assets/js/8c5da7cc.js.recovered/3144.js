var n = require("./3056.js");
var o = {
  now: function () {
    return (o.delegate || Date).now();
  },
  delegate: undefined
};
var a = function () {
  function e(t, r = e.now) {
    this.schedulerActionCtor = t;
    this.now = r;
  }
  e.prototype.schedule = function (e, t = 0, r) {
    return new this.schedulerActionCtor(this, e).schedule(r, t);
  };
  e.now = o.now;
  return e;
}();
export var v = function (e) {
  function t(t, r = a.now) {
    var n = e.call(this, t, r) || this;
    n.actions = [];
    n._active = false;
    n._scheduled = undefined;
    return n;
  }
  (0, n.ZT)(t, e);
  t.prototype.flush = function (e) {
    var t = this.actions;
    if (this._active) {
      t.push(e);
    } else {
      var r;
      this._active = true;
      do {
        if (r = e.execute(e.state, e.delay)) {
          break;
        }
      } while (e = t.shift());
      this._active = false;
      if (r) {
        while (e = t.shift()) {
          e.unsubscribe();
        }
        throw r;
      }
    }
  };
  return t;
}(a);