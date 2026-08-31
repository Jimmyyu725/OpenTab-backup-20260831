var n = require("./3056.js");
var o = require("./6559.js");
var a = (0, require("./782.js").d)(function (e) {
  return function (t) {
    e(this);
    this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function (e, t) {
      return t + 1 + ") " + e.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = t;
  };
});
var i = require("./7602.js");
export var w0 = function () {
  function e(e) {
    this.initialTeardown = e;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  var t;
  e.prototype.unsubscribe = function () {
    var e;
    var t;
    var r;
    var i;
    var c;
    if (!this.closed) {
      this.closed = true;
      var s = this._parentage;
      if (s) {
        this._parentage = null;
        if (Array.isArray(s)) {
          try {
            for (var l = (0, n.XA)(s), f = l.next(); !f.done; f = l.next()) {
              f.value.remove(this);
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              if (f && !f.done && (t = l.return)) {
                t.call(l);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
        } else {
          s.remove(this);
        }
      }
      var d = this.initialTeardown;
      if ((0, o.m)(d)) {
        try {
          d();
        } catch (e) {
          c = e instanceof a ? e.errors : [e];
        }
      }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var p = (0, n.XA)(h), g = p.next(); !g.done; g = p.next()) {
            var y = g.value;
            try {
              u(y);
            } catch (e) {
              c = c ?? [];
              if (e instanceof a) {
                c = (0, n.ev)((0, n.ev)([], (0, n.CR)(c)), (0, n.CR)(e.errors));
              } else {
                c.push(e);
              }
            }
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            if (g && !g.done && (i = p.return)) {
              i.call(p);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      }
      if (c) {
        throw new a(c);
      }
    }
  };
  e.prototype.add = function (t) {
    if (t && t !== this) {
      if (this.closed) {
        u(t);
      } else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) {
            return;
          }
          t._addParent(this);
        }
        (this._finalizers = this._finalizers ?? []).push(t);
      }
    }
  };
  e.prototype._hasParent = function (e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  };
  e.prototype._addParent = function (e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  };
  e.prototype._removeParent = function (e) {
    var t = this._parentage;
    if (t === e) {
      this._parentage = null;
    } else if (Array.isArray(t)) {
      (0, i.P)(t, e);
    }
  };
  e.prototype.remove = function (t) {
    var r = this._finalizers;
    if (r) {
      (0, i.P)(r, t);
    }
    if (t instanceof e) {
      t._removeParent(this);
    }
  };
  (t = new e()).closed = true;
  e.EMPTY = t;
  return e;
}();
export var Lc = w0.EMPTY;
export function Nn(e) {
  return e instanceof w0 || e && "closed" in e && (0, o.m)(e.remove) && (0, o.m)(e.add) && (0, o.m)(e.unsubscribe);
}
function u(e) {
  if ((0, o.m)(e)) {
    e();
  } else {
    e.unsubscribe();
  }
}