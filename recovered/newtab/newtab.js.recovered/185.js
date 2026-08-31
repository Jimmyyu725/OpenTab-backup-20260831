var e = require("./94.js");
var r = require("./244.js").setImmediate;
var i = require("./25.js");
var o = require("./157.js");
function a(t) {
  var e = this;
  this.next = null;
  this.entry = null;
  this.finish = function () {
    (function (t, e, n) {
      var r = t.entry;
      t.entry = null;
      while (r) {
        var i = r.callback;
        e.pendingcb--;
        i(n);
        r = r.next;
      }
      if (e.corkedRequestsFree) {
        e.corkedRequestsFree.next = t;
      } else {
        e.corkedRequestsFree = t;
      }
    })(e, t);
  };
}
module.exports = b;
var s;
var c = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : o.nextTick;
b.WritableState = y;
var u = Object.create(require("./108.js"));
u.inherits = require("./91.js");
var l = {
  deprecate: require("./353.js")
};
var f = require("./242.js");
var h = require("./184.js").Buffer;
var p = i.Uint8Array || function () {};
var d;
var m = require("./243.js");
function g() {}
function y(t, e) {
  s = s || require("./80.js");
  t = t || {};
  var r = e instanceof s;
  this.objectMode = !!t.objectMode;
  if (r) {
    this.objectMode = this.objectMode || !!t.writableObjectMode;
  }
  var i = t.highWaterMark;
  var u = t.writableHighWaterMark;
  var l = this.objectMode ? 16 : 16384;
  this.highWaterMark = i || i === 0 ? i : r && (u || u === 0) ? u : l;
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  var f = t.decodeStrings === false;
  this.decodeStrings = !f;
  this.defaultEncoding = t.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function (t) {
    (function (t, e) {
      var n = t._writableState;
      var r = n.sync;
      var i = n.writecb;
      (function (t) {
        t.writing = false;
        t.writecb = null;
        t.length -= t.writelen;
        t.writelen = 0;
      })(n);
      if (e) {
        (function (t, e, n, r, i) {
          --e.pendingcb;
          if (n) {
            o.nextTick(i, r);
            o.nextTick(T, t, e);
            t._writableState.errorEmitted = true;
            t.emit("error", r);
          } else {
            i(r);
            t._writableState.errorEmitted = true;
            t.emit("error", r);
            T(t, e);
          }
        })(t, n, r, e, i);
      } else {
        var a = E(n);
        if (!a && !n.corked && !n.bufferProcessing && !!n.bufferedRequest) {
          _(t, n);
        }
        if (r) {
          c(v, t, n, a, i);
        } else {
          v(t, n, a, i);
        }
      }
    })(e, t);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = false;
  this.errorEmitted = false;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new a(this);
}
function b(t) {
  s = s || require("./80.js");
  if (!d.call(b, this) && !(this instanceof s)) {
    return new b(t);
  }
  this._writableState = new y(t, this);
  this.writable = true;
  if (t) {
    if (typeof t.write == "function") {
      this._write = t.write;
    }
    if (typeof t.writev == "function") {
      this._writev = t.writev;
    }
    if (typeof t.destroy == "function") {
      this._destroy = t.destroy;
    }
    if (typeof t.final == "function") {
      this._final = t.final;
    }
  }
  f.call(this);
}
function w(t, e, n, r, i, o, a) {
  e.writelen = r;
  e.writecb = a;
  e.writing = true;
  e.sync = true;
  if (n) {
    t._writev(i, e.onwrite);
  } else {
    t._write(i, o, e.onwrite);
  }
  e.sync = false;
}
function v(t, e, n, r) {
  if (!n) {
    (function (t, e) {
      if (e.length === 0 && e.needDrain) {
        e.needDrain = false;
        t.emit("drain");
      }
    })(t, e);
  }
  e.pendingcb--;
  r();
  T(t, e);
}
function _(t, e) {
  e.bufferProcessing = true;
  var n = e.bufferedRequest;
  if (t._writev && n && n.next) {
    var r = e.bufferedRequestCount;
    var i = new Array(r);
    var o = e.corkedRequestsFree;
    o.entry = n;
    var s = 0;
    var c = true;
    while (n) {
      i[s] = n;
      if (!n.isBuf) {
        c = false;
      }
      n = n.next;
      s += 1;
    }
    i.allBuffers = c;
    w(t, e, true, e.length, i, "", o.finish);
    e.pendingcb++;
    e.lastBufferedRequest = null;
    if (o.next) {
      e.corkedRequestsFree = o.next;
      o.next = null;
    } else {
      e.corkedRequestsFree = new a(e);
    }
    e.bufferedRequestCount = 0;
  } else {
    while (n) {
      var u = n.chunk;
      var l = n.encoding;
      var f = n.callback;
      w(t, e, false, e.objectMode ? 1 : u.length, u, l, f);
      n = n.next;
      e.bufferedRequestCount--;
      if (e.writing) {
        break;
      }
    }
    if (n === null) {
      e.lastBufferedRequest = null;
    }
  }
  e.bufferedRequest = n;
  e.bufferProcessing = false;
}
function E(t) {
  return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
}
function x(t, e) {
  t._final(function (n) {
    e.pendingcb--;
    if (n) {
      t.emit("error", n);
    }
    e.prefinished = true;
    t.emit("prefinish");
    T(t, e);
  });
}
function T(t, e) {
  var n = E(e);
  if (n) {
    (function (t, e) {
      if (!e.prefinished && !e.finalCalled) {
        if (typeof t._final == "function") {
          e.pendingcb++;
          e.finalCalled = true;
          o.nextTick(x, t, e);
        } else {
          e.prefinished = true;
          t.emit("prefinish");
        }
      }
    })(t, e);
    if (e.pendingcb === 0) {
      e.finished = true;
      t.emit("finish");
    }
  }
  return n;
}
u.inherits(b, f);
y.prototype.getBuffer = function () {
  for (var t = this.bufferedRequest, e = []; t;) {
    e.push(t);
    t = t.next;
  }
  return e;
};
(function () {
  try {
    Object.defineProperty(y.prototype, "buffer", {
      get: l.deprecate(function () {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
    });
  } catch (t) {}
})();
if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
  d = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(b, Symbol.hasInstance, {
    value: function (t) {
      return !!d.call(this, t) || this === b && t && t._writableState instanceof y;
    }
  });
} else {
  d = function (t) {
    return t instanceof this;
  };
}
b.prototype.pipe = function () {
  this.emit("error", new Error("Cannot pipe, not readable"));
};
b.prototype.write = function (t, e, n) {
  var r;
  var i = this._writableState;
  var a = false;
  var s = !i.objectMode && (r = t, h.isBuffer(r) || r instanceof p);
  if (s && !h.isBuffer(t)) {
    t = function (t) {
      return h.from(t);
    }(t);
  }
  if (typeof e == "function") {
    n = e;
    e = null;
  }
  if (s) {
    e = "buffer";
  } else {
    e ||= i.defaultEncoding;
  }
  if (typeof n != "function") {
    n = g;
  }
  if (i.ended) {
    (function (t, e) {
      var n = new Error("write after end");
      t.emit("error", n);
      o.nextTick(e, n);
    })(this, n);
  } else if (s || function (t, e, n, r) {
    var i = true;
    var a = false;
    if (n === null) {
      a = new TypeError("May not write null values to stream");
    } else if (typeof n != "string" && n !== undefined && !e.objectMode) {
      a = new TypeError("Invalid non-string/buffer chunk");
    }
    if (a) {
      t.emit("error", a);
      o.nextTick(r, a);
      i = false;
    }
    return i;
  }(this, i, t, n)) {
    i.pendingcb++;
    a = function (t, e, n, r, i, o) {
      if (!n) {
        var a = function (t, e, n) {
          if (!t.objectMode && t.decodeStrings !== false && typeof e == "string") {
            e = h.from(e, n);
          }
          return e;
        }(e, r, i);
        if (r !== a) {
          n = true;
          i = "buffer";
          r = a;
        }
      }
      var s = e.objectMode ? 1 : r.length;
      e.length += s;
      var c = e.length < e.highWaterMark;
      if (!c) {
        e.needDrain = true;
      }
      if (e.writing || e.corked) {
        var u = e.lastBufferedRequest;
        e.lastBufferedRequest = {
          chunk: r,
          encoding: i,
          isBuf: n,
          callback: o,
          next: null
        };
        if (u) {
          u.next = e.lastBufferedRequest;
        } else {
          e.bufferedRequest = e.lastBufferedRequest;
        }
        e.bufferedRequestCount += 1;
      } else {
        w(t, e, false, s, r, i, o);
      }
      return c;
    }(this, i, s, t, e, n);
  }
  return a;
};
b.prototype.cork = function () {
  this._writableState.corked++;
};
b.prototype.uncork = function () {
  var t = this._writableState;
  if (t.corked) {
    t.corked--;
    if (!t.writing && !t.corked && !t.finished && !t.bufferProcessing && !!t.bufferedRequest) {
      _(this, t);
    }
  }
};
b.prototype.setDefaultEncoding = function (t) {
  if (typeof t == "string") {
    t = t.toLowerCase();
  }
  if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) {
    throw new TypeError("Unknown encoding: " + t);
  }
  this._writableState.defaultEncoding = t;
  return this;
};
Object.defineProperty(b.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});
b.prototype._write = function (t, e, n) {
  n(new Error("_write() is not implemented"));
};
b.prototype._writev = null;
b.prototype.end = function (t, e, n) {
  var r = this._writableState;
  if (typeof t == "function") {
    n = t;
    t = null;
    e = null;
  } else if (typeof e == "function") {
    n = e;
    e = null;
  }
  if (t != null) {
    this.write(t, e);
  }
  if (r.corked) {
    r.corked = 1;
    this.uncork();
  }
  if (!r.ending && !r.finished) {
    (function (t, e, n) {
      e.ending = true;
      T(t, e);
      if (n) {
        if (e.finished) {
          o.nextTick(n);
        } else {
          t.once("finish", n);
        }
      }
      e.ended = true;
      t.writable = false;
    })(this, r, n);
  }
};
Object.defineProperty(b.prototype, "destroyed", {
  get: function () {
    return this._writableState !== undefined && this._writableState.destroyed;
  },
  set: function (t) {
    if (this._writableState) {
      this._writableState.destroyed = t;
    }
  }
});
b.prototype.destroy = m.destroy;
b.prototype._undestroy = m.undestroy;
b.prototype._destroy = function (t, e) {
  this.end();
  e(t);
};