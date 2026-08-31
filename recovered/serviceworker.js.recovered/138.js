var e = require("./51.js");
var r = require("./199.js").setImmediate;
var o = require("./14.js");
var i = require("./70.js");
function s(t) {
  var e = this;
  this.next = null;
  this.entry = null;
  this.finish = function () {
    (function (t, e, n) {
      var r = t.entry;
      t.entry = null;
      while (r) {
        var o = r.callback;
        e.pendingcb--;
        o(n);
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
module.exports = v;
var a;
var c = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : i.nextTick;
v.WritableState = g;
var u = Object.create(require("./52.js"));
u.inherits = require("./46.js");
var f = {
  deprecate: require("./323.js")
};
var l = require("./197.js");
var h = require("./137.js").Buffer;
var p = o.Uint8Array || function () {};
var d;
var y = require("./198.js");
function m() {}
function g(t, e) {
  a = a || require("./34.js");
  t = t || {};
  var r = e instanceof a;
  this.objectMode = !!t.objectMode;
  if (r) {
    this.objectMode = this.objectMode || !!t.writableObjectMode;
  }
  var o = t.highWaterMark;
  var u = t.writableHighWaterMark;
  var f = this.objectMode ? 16 : 16384;
  this.highWaterMark = o || o === 0 ? o : r && (u || u === 0) ? u : f;
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  var l = t.decodeStrings === false;
  this.decodeStrings = !l;
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
      var o = n.writecb;
      (function (t) {
        t.writing = false;
        t.writecb = null;
        t.length -= t.writelen;
        t.writelen = 0;
      })(n);
      if (e) {
        (function (t, e, n, r, o) {
          --e.pendingcb;
          if (n) {
            i.nextTick(o, r);
            i.nextTick(E, t, e);
            t._writableState.errorEmitted = true;
            t.emit("error", r);
          } else {
            o(r);
            t._writableState.errorEmitted = true;
            t.emit("error", r);
            E(t, e);
          }
        })(t, n, r, e, o);
      } else {
        var s = x(n);
        if (!s && !n.corked && !n.bufferProcessing && !!n.bufferedRequest) {
          _(t, n);
        }
        if (r) {
          c(w, t, n, s, o);
        } else {
          w(t, n, s, o);
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
  this.corkedRequestsFree = new s(this);
}
function v(t) {
  a = a || require("./34.js");
  if (!d.call(v, this) && !(this instanceof a)) {
    return new v(t);
  }
  this._writableState = new g(t, this);
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
  l.call(this);
}
function b(t, e, n, r, o, i, s) {
  e.writelen = r;
  e.writecb = s;
  e.writing = true;
  e.sync = true;
  if (n) {
    t._writev(o, e.onwrite);
  } else {
    t._write(o, i, e.onwrite);
  }
  e.sync = false;
}
function w(t, e, n, r) {
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
  E(t, e);
}
function _(t, e) {
  e.bufferProcessing = true;
  var n = e.bufferedRequest;
  if (t._writev && n && n.next) {
    var r = e.bufferedRequestCount;
    var o = new Array(r);
    var i = e.corkedRequestsFree;
    i.entry = n;
    var a = 0;
    var c = true;
    while (n) {
      o[a] = n;
      if (!n.isBuf) {
        c = false;
      }
      n = n.next;
      a += 1;
    }
    o.allBuffers = c;
    b(t, e, true, e.length, o, "", i.finish);
    e.pendingcb++;
    e.lastBufferedRequest = null;
    if (i.next) {
      e.corkedRequestsFree = i.next;
      i.next = null;
    } else {
      e.corkedRequestsFree = new s(e);
    }
    e.bufferedRequestCount = 0;
  } else {
    while (n) {
      var u = n.chunk;
      var f = n.encoding;
      var l = n.callback;
      b(t, e, false, e.objectMode ? 1 : u.length, u, f, l);
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
function x(t) {
  return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
}
function T(t, e) {
  t._final(function (n) {
    e.pendingcb--;
    if (n) {
      t.emit("error", n);
    }
    e.prefinished = true;
    t.emit("prefinish");
    E(t, e);
  });
}
function E(t, e) {
  var n = x(e);
  if (n) {
    (function (t, e) {
      if (!e.prefinished && !e.finalCalled) {
        if (typeof t._final == "function") {
          e.pendingcb++;
          e.finalCalled = true;
          i.nextTick(T, t, e);
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
u.inherits(v, l);
g.prototype.getBuffer = function () {
  for (var t = this.bufferedRequest, e = []; t;) {
    e.push(t);
    t = t.next;
  }
  return e;
};
(function () {
  try {
    Object.defineProperty(g.prototype, "buffer", {
      get: f.deprecate(function () {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
    });
  } catch (t) {}
})();
if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
  d = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(v, Symbol.hasInstance, {
    value: function (t) {
      return !!d.call(this, t) || this === v && t && t._writableState instanceof g;
    }
  });
} else {
  d = function (t) {
    return t instanceof this;
  };
}
v.prototype.pipe = function () {
  this.emit("error", new Error("Cannot pipe, not readable"));
};
v.prototype.write = function (t, e, n) {
  var r;
  var o = this._writableState;
  var s = false;
  var a = !o.objectMode && (r = t, h.isBuffer(r) || r instanceof p);
  if (a && !h.isBuffer(t)) {
    t = function (t) {
      return h.from(t);
    }(t);
  }
  if (typeof e == "function") {
    n = e;
    e = null;
  }
  if (a) {
    e = "buffer";
  } else {
    e ||= o.defaultEncoding;
  }
  if (typeof n != "function") {
    n = m;
  }
  if (o.ended) {
    (function (t, e) {
      var n = new Error("write after end");
      t.emit("error", n);
      i.nextTick(e, n);
    })(this, n);
  } else if (a || function (t, e, n, r) {
    var o = true;
    var s = false;
    if (n === null) {
      s = new TypeError("May not write null values to stream");
    } else if (typeof n != "string" && n !== undefined && !e.objectMode) {
      s = new TypeError("Invalid non-string/buffer chunk");
    }
    if (s) {
      t.emit("error", s);
      i.nextTick(r, s);
      o = false;
    }
    return o;
  }(this, o, t, n)) {
    o.pendingcb++;
    s = function (t, e, n, r, o, i) {
      if (!n) {
        var s = function (t, e, n) {
          if (!t.objectMode && t.decodeStrings !== false && typeof e == "string") {
            e = h.from(e, n);
          }
          return e;
        }(e, r, o);
        if (r !== s) {
          n = true;
          o = "buffer";
          r = s;
        }
      }
      var a = e.objectMode ? 1 : r.length;
      e.length += a;
      var c = e.length < e.highWaterMark;
      if (!c) {
        e.needDrain = true;
      }
      if (e.writing || e.corked) {
        var u = e.lastBufferedRequest;
        e.lastBufferedRequest = {
          chunk: r,
          encoding: o,
          isBuf: n,
          callback: i,
          next: null
        };
        if (u) {
          u.next = e.lastBufferedRequest;
        } else {
          e.bufferedRequest = e.lastBufferedRequest;
        }
        e.bufferedRequestCount += 1;
      } else {
        b(t, e, false, a, r, o, i);
      }
      return c;
    }(this, o, a, t, e, n);
  }
  return s;
};
v.prototype.cork = function () {
  this._writableState.corked++;
};
v.prototype.uncork = function () {
  var t = this._writableState;
  if (t.corked) {
    t.corked--;
    if (!t.writing && !t.corked && !t.finished && !t.bufferProcessing && !!t.bufferedRequest) {
      _(this, t);
    }
  }
};
v.prototype.setDefaultEncoding = function (t) {
  if (typeof t == "string") {
    t = t.toLowerCase();
  }
  if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) {
    throw new TypeError("Unknown encoding: " + t);
  }
  this._writableState.defaultEncoding = t;
  return this;
};
Object.defineProperty(v.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});
v.prototype._write = function (t, e, n) {
  n(new Error("_write() is not implemented"));
};
v.prototype._writev = null;
v.prototype.end = function (t, e, n) {
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
      E(t, e);
      if (n) {
        if (e.finished) {
          i.nextTick(n);
        } else {
          t.once("finish", n);
        }
      }
      e.ended = true;
      t.writable = false;
    })(this, r, n);
  }
};
Object.defineProperty(v.prototype, "destroyed", {
  get: function () {
    return this._writableState !== undefined && this._writableState.destroyed;
  },
  set: function (t) {
    if (this._writableState) {
      this._writableState.destroyed = t;
    }
  }
});
v.prototype.destroy = y.destroy;
v.prototype._undestroy = y.undestroy;
v.prototype._destroy = function (t, e) {
  this.end();
  e(t);
};