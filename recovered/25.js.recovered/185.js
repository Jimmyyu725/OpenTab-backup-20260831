var e = require("./94.js");
var r = require("./244.js").setImmediate;
var o = require(/*webcrack:missing*/"./25.js");
var i = require("./157.js");
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
module.exports = b;
var a;
var c = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? r : i.nextTick;
b.WritableState = m;
var u = Object.create(require("./108.js"));
u.inherits = require("./91.js");
var l = {
  deprecate: require("./353.js")
};
var h = require("./242.js");
var p = require("./184.js").Buffer;
var f = o.Uint8Array || function () {};
var d;
var g = require("./243.js");
function y() {}
function m(t, e) {
  a = a || require("./80.js");
  t = t || {};
  var r = e instanceof a;
  this.objectMode = !!t.objectMode;
  if (r) {
    this.objectMode = this.objectMode || !!t.writableObjectMode;
  }
  var o = t.highWaterMark;
  var u = t.writableHighWaterMark;
  var l = this.objectMode ? 16 : 16384;
  this.highWaterMark = o || o === 0 ? o : r && (u || u === 0) ? u : l;
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  var h = t.decodeStrings === false;
  this.decodeStrings = !h;
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
            i.nextTick(x, t, e);
            t._writableState.errorEmitted = true;
            t.emit("error", r);
          } else {
            o(r);
            t._writableState.errorEmitted = true;
            t.emit("error", r);
            x(t, e);
          }
        })(t, n, r, e, o);
      } else {
        var s = T(n);
        if (!s && !n.corked && !n.bufferProcessing && !!n.bufferedRequest) {
          _(t, n);
        }
        if (r) {
          c(v, t, n, s, o);
        } else {
          v(t, n, s, o);
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
function b(t) {
  a = a || require("./80.js");
  if (!d.call(b, this) && !(this instanceof a)) {
    return new b(t);
  }
  this._writableState = new m(t, this);
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
  h.call(this);
}
function w(t, e, n, r, o, i, s) {
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
  x(t, e);
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
    for (; n;) {
      o[a] = n;
      if (!n.isBuf) {
        c = false;
      }
      n = n.next;
      a += 1;
    }
    o.allBuffers = c;
    w(t, e, true, e.length, o, "", i.finish);
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
      var l = n.encoding;
      var h = n.callback;
      w(t, e, false, e.objectMode ? 1 : u.length, u, l, h);
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
function T(t) {
  return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
}
function E(t, e) {
  t._final(function (n) {
    e.pendingcb--;
    if (n) {
      t.emit("error", n);
    }
    e.prefinished = true;
    t.emit("prefinish");
    x(t, e);
  });
}
function x(t, e) {
  var n = T(e);
  if (n) {
    (function (t, e) {
      if (!e.prefinished && !e.finalCalled) {
        if (typeof t._final == "function") {
          e.pendingcb++;
          e.finalCalled = true;
          i.nextTick(E, t, e);
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
u.inherits(b, h);
m.prototype.getBuffer = function () {
  for (var t = this.bufferedRequest, e = []; t;) {
    e.push(t);
    t = t.next;
  }
  return e;
};
(function () {
  try {
    Object.defineProperty(m.prototype, "buffer", {
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
      return !!d.call(this, t) || this === b && t && t._writableState instanceof m;
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
  var o = this._writableState;
  var s = false;
  var a = !o.objectMode && (r = t, p.isBuffer(r) || r instanceof f);
  if (a && !p.isBuffer(t)) {
    t = function (t) {
      return p.from(t);
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
    n = y;
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
            e = p.from(e, n);
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
        w(t, e, false, a, r, o, i);
      }
      return c;
    }(this, o, a, t, e, n);
  }
  return s;
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
      x(t, e);
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
b.prototype.destroy = g.destroy;
b.prototype._undestroy = g.undestroy;
b.prototype._destroy = function (t, e) {
  this.end();
  e(t);
};