var r;
var o = typeof Reflect == "object" ? Reflect : null;
var i = o && typeof o.apply == "function" ? o.apply : function (t, e, n) {
  return Function.prototype.apply.call(t, e, n);
};
r = o && typeof o.ownKeys == "function" ? o.ownKeys : Object.getOwnPropertySymbols ? function (t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : function (t) {
  return Object.getOwnPropertyNames(t);
};
var s = Number.isNaN || function (t) {
  return t != t;
};
function a() {
  a.init.call(this);
}
module.exports = a;
module.exports.once = function (t, e) {
  return new Promise(function (n, r) {
    function o(n) {
      t.removeListener(e, i);
      r(n);
    }
    function i() {
      if (typeof t.removeListener == "function") {
        t.removeListener("error", o);
      }
      n([].slice.call(arguments));
    }
    m(t, e, i, {
      once: true
    });
    if (e !== "error") {
      (function (t, e, n) {
        if (typeof t.on == "function") {
          m(t, "error", e, n);
        }
      })(t, o, {
        once: true
      });
    }
  });
};
a.EventEmitter = a;
a.prototype._events = undefined;
a.prototype._eventsCount = 0;
a.prototype._maxListeners = undefined;
var c = 10;
function u(t) {
  if (typeof t != "function") {
    throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof t);
  }
}
function l(t) {
  if (t._maxListeners === undefined) {
    return a.defaultMaxListeners;
  } else {
    return t._maxListeners;
  }
}
function h(t, e, n, r) {
  var o;
  var i;
  var s;
  var a;
  u(n);
  if ((i = t._events) === undefined) {
    i = t._events = Object.create(null);
    t._eventsCount = 0;
  } else {
    if (i.newListener !== undefined) {
      t.emit("newListener", e, n.listener ? n.listener : n);
      i = t._events;
    }
    s = i[e];
  }
  if (s === undefined) {
    s = i[e] = n;
    ++t._eventsCount;
  } else {
    if (typeof s == "function") {
      s = i[e] = r ? [n, s] : [s, n];
    } else if (r) {
      s.unshift(n);
    } else {
      s.push(n);
    }
    if ((o = l(t)) > 0 && s.length > o && !s.warned) {
      s.warned = true;
      var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      c.name = "MaxListenersExceededWarning";
      c.emitter = t;
      c.type = e;
      c.count = s.length;
      a = c;
      if (console && console.warn) {
        console.warn(a);
      }
    }
  }
  return t;
}
function p() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) {
      return this.listener.call(this.target);
    } else {
      return this.listener.apply(this.target, arguments);
    }
  }
}
function f(t, e, n) {
  var r = {
    fired: false,
    wrapFn: undefined,
    target: t,
    type: e,
    listener: n
  };
  var o = p.bind(r);
  o.listener = n;
  r.wrapFn = o;
  return o;
}
function d(t, e, n) {
  var r = t._events;
  if (r === undefined) {
    return [];
  }
  var o = r[e];
  if (o === undefined) {
    return [];
  } else if (typeof o == "function") {
    if (n) {
      return [o.listener || o];
    } else {
      return [o];
    }
  } else if (n) {
    return function (t) {
      for (var e = new Array(t.length), n = 0; n < e.length; ++n) {
        e[n] = t[n].listener || t[n];
      }
      return e;
    }(o);
  } else {
    return y(o, o.length);
  }
}
function g(t) {
  var e = this._events;
  if (e !== undefined) {
    var n = e[t];
    if (typeof n == "function") {
      return 1;
    }
    if (n !== undefined) {
      return n.length;
    }
  }
  return 0;
}
function y(t, e) {
  var n = new Array(e);
  for (var r = 0; r < e; ++r) {
    n[r] = t[r];
  }
  return n;
}
function m(t, e, n, r) {
  if (typeof t.on == "function") {
    if (r.once) {
      t.once(e, n);
    } else {
      t.on(e, n);
    }
  } else {
    if (typeof t.addEventListener != "function") {
      throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof t);
    }
    t.addEventListener(e, function o(i) {
      if (r.once) {
        t.removeEventListener(e, o);
      }
      n(i);
    });
  }
}
Object.defineProperty(a, "defaultMaxListeners", {
  enumerable: true,
  get: function () {
    return c;
  },
  set: function (t) {
    if (typeof t != "number" || t < 0 || s(t)) {
      throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + t + ".");
    }
    c = t;
  }
});
a.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || undefined;
};
a.prototype.setMaxListeners = function (t) {
  if (typeof t != "number" || t < 0 || s(t)) {
    throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + t + ".");
  }
  this._maxListeners = t;
  return this;
};
a.prototype.getMaxListeners = function () {
  return l(this);
};
a.prototype.emit = function (t) {
  var e = [];
  for (var n = 1; n < arguments.length; n++) {
    e.push(arguments[n]);
  }
  var r = t === "error";
  var o = this._events;
  if (o !== undefined) {
    r = r && o.error === undefined;
  } else if (!r) {
    return false;
  }
  if (r) {
    var s;
    if (e.length > 0) {
      s = e[0];
    }
    if (s instanceof Error) {
      throw s;
    }
    var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
    a.context = s;
    throw a;
  }
  var c = o[t];
  if (c === undefined) {
    return false;
  }
  if (typeof c == "function") {
    i(c, this, e);
  } else {
    var u = c.length;
    var l = y(c, u);
    for (n = 0; n < u; ++n) {
      i(l[n], this, e);
    }
  }
  return true;
};
a.prototype.addListener = function (t, e) {
  return h(this, t, e, false);
};
a.prototype.on = a.prototype.addListener;
a.prototype.prependListener = function (t, e) {
  return h(this, t, e, true);
};
a.prototype.once = function (t, e) {
  u(e);
  this.on(t, f(this, t, e));
  return this;
};
a.prototype.prependOnceListener = function (t, e) {
  u(e);
  this.prependListener(t, f(this, t, e));
  return this;
};
a.prototype.removeListener = function (t, e) {
  var n;
  var r;
  var o;
  var i;
  var s;
  u(e);
  if ((r = this._events) === undefined) {
    return this;
  }
  if ((n = r[t]) === undefined) {
    return this;
  }
  if (n === e || n.listener === e) {
    if (--this._eventsCount == 0) {
      this._events = Object.create(null);
    } else {
      delete r[t];
      if (r.removeListener) {
        this.emit("removeListener", t, n.listener || e);
      }
    }
  } else if (typeof n != "function") {
    o = -1;
    i = n.length - 1;
    for (; i >= 0; i--) {
      if (n[i] === e || n[i].listener === e) {
        s = n[i].listener;
        o = i;
        break;
      }
    }
    if (o < 0) {
      return this;
    }
    if (o === 0) {
      n.shift();
    } else {
      (function (t, e) {
        for (; e + 1 < t.length; e++) {
          t[e] = t[e + 1];
        }
        t.pop();
      })(n, o);
    }
    if (n.length === 1) {
      r[t] = n[0];
    }
    if (r.removeListener !== undefined) {
      this.emit("removeListener", t, s || e);
    }
  }
  return this;
};
a.prototype.off = a.prototype.removeListener;
a.prototype.removeAllListeners = function (t) {
  var e;
  var n;
  var r;
  if ((n = this._events) === undefined) {
    return this;
  }
  if (n.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (n[t] !== undefined) {
      if (--this._eventsCount == 0) {
        this._events = Object.create(null);
      } else {
        delete n[t];
      }
    }
    return this;
  }
  if (arguments.length === 0) {
    var o;
    var i = Object.keys(n);
    for (r = 0; r < i.length; ++r) {
      if ((o = i[r]) !== "removeListener") {
        this.removeAllListeners(o);
      }
    }
    this.removeAllListeners("removeListener");
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  if (typeof (e = n[t]) == "function") {
    this.removeListener(t, e);
  } else if (e !== undefined) {
    for (r = e.length - 1; r >= 0; r--) {
      this.removeListener(t, e[r]);
    }
  }
  return this;
};
a.prototype.listeners = function (t) {
  return d(this, t, true);
};
a.prototype.rawListeners = function (t) {
  return d(this, t, false);
};
a.listenerCount = function (t, e) {
  if (typeof t.listenerCount == "function") {
    return t.listenerCount(e);
  } else {
    return g.call(t, e);
  }
};
a.prototype.listenerCount = g;
a.prototype.eventNames = function () {
  if (this._eventsCount > 0) {
    return r(this._events);
  } else {
    return [];
  }
};