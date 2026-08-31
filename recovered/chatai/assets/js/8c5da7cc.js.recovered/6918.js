var n = require("./3056.js");
export function x(e, t, r, n, o) {
  return new a(e, t, r, n, o);
}
var a = function (e) {
  function t(t, r, n, o, a, i) {
    var c = e.call(this, t) || this;
    c.onFinalize = a;
    c.shouldUnsubscribe = i;
    c._next = r ? function (e) {
      try {
        r(e);
      } catch (e) {
        t.error(e);
      }
    } : e.prototype._next;
    c._error = o ? function (e) {
      try {
        o(e);
      } catch (e) {
        t.error(e);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error;
    c._complete = n ? function () {
      try {
        n();
      } catch (e) {
        t.error(e);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete;
    return c;
  }
  (0, n.ZT)(t, e);
  t.prototype.unsubscribe = function () {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this);
      if (!r) {
        if ((t = this.onFinalize) !== null && t !== undefined) {
          t.call(this);
        }
      }
    }
  };
  return t;
}(require("./8825.js").Lv);