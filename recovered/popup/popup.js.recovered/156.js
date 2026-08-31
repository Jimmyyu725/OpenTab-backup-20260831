var r;
var i = typeof Reflect == "object" ? Reflect : null;
var o = i && typeof i.apply == "function" ? i.apply : function (t, e, n) {
  return Function.prototype.apply.call(t, e, n);
};
r = i && typeof i.ownKeys == "function" ? i.ownKeys : Object.getOwnPropertySymbols ? function (t) {
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
    function i(n) {
      t.removeListener(e, o);
      r(n);
    }
    function o() {
      if (typeof t.removeListener == "function") {
        t.removeListener("error", i);
      }
      n([].slice.call(arguments));
    }
    m(t, e, o, {
      once: true
    });
    if (e !== "error") {
      (function (t, e, n) {
        if (typeof t.on == "function") {
          m(t, "error", e, n);
        }
      })(t, i, {
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
  var i;
  var o;
  var s;
  var a;
  u(n);
  if ((o = t._events) === undefined) {
    o = t._events = Object.create(null);
    t._eventsCount = 0;
  } else {
    if (o.newListener !== undefined) {
      t.emit("newListener", e, n.listener ? n.listener : n);
      o = t._events;
    }
    s = o[e];
  }
  if (s === undefined) {
    s = o[e] = n;
    ++t._eventsCount;
  } else {
    if (typeof s == "function") {
      s = o[e] = r ? [n, s] : [s, n];
    } else if (r) {
      s.unshift(n);
    } else {
      s.push(n);
    }
    if ((i = l(t)) > 0 && s.length > i && !s.warned) {
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
function d(t, e, n) {
  var r = {
    fired: false,
    wrapFn: undefined,
    target: t,
    type: e,
    listener: n
  };
  var i = p.bind(r);
  i.listener = n;
  r.wrapFn = i;
  return i;
}
function f(t, e, n) {
  var r = t._events;
  if (r === undefined) {
    return [];
  }
  var i = r[e];
  if (i === undefined) {
    return [];
  } else if (typeof i == "function") {
    if (n) {
      return [i.listener || i];
    } else {
      return [i];
    }
  } else if (n) {
    return function (t) {
      for (var e = new Array(t.length), n = 0; n < e.length; ++n) {
        e[n] = t[n].listener || t[n];
      }
      return e;
    }(i);
  } else {
    return y(i, i.length);
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
    t.addEventListener(e, function i(o) {
      if (r.once) {
        t.removeEventListener(e, i);
      }
      n(o);
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
  var i = this._events;
  if (i !== undefined) {
    r = r && i.error === undefined;
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
  var c = i[t];
  if (c === undefined) {
    return false;
  }
  if (typeof c == "function") {
    o(c, this, e);
  } else {
    var u = c.length;
    var l = y(c, u);
    for (n = 0; n < u; ++n) {
      o(l[n], this, e);
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
  this.on(t, d(this, t, e));
  return this;
};
a.prototype.prependOnceListener = function (t, e) {
  u(e);
  this.prependListener(t, d(this, t, e));
  return this;
};
a.prototype.removeListener = function (t, e) {
  var n;
  var r;
  var i;
  var o;
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
    i = -1;
    o = n.length - 1;
    for (; o >= 0; o--) {
      if (n[o] === e || n[o].listener === e) {
        s = n[o].listener;
        i = o;
        break;
      }
    }
    if (i < 0) {
      return this;
    }
    if (i === 0) {
      n.shift();
    } else {
      (function (t, e) {
        for (; e + 1 < t.length; e++) {
          t[e] = t[e + 1];
        }
        t.pop();
      })(n, i);
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
    var i;
    var o = Object.keys(n);
    for (r = 0; r < o.length; ++r) {
      if ((i = o[r]) !== "removeListener") {
        this.removeAllListeners(i);
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
  return f(this, t, true);
};
a.prototype.rawListeners = function (t) {
  return f(this, t, false);
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