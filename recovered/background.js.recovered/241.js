var e = require("./25.js");
var r = require("./94.js");
var o = require("./157.js");
module.exports = b;
var i;
var s = require("./240.js");
b.ReadableState = v;
require("./156.js").EventEmitter;
function a(t, e) {
  return t.listeners(e).length;
}
var u = require("./242.js");
var c = require("./184.js").Buffer;
var f = e.Uint8Array || function () {};
var l = Object.create(require("./108.js"));
l.inherits = require("./91.js");
var h = require("./349.js");
var p = undefined;
p = h && h.debuglog ? h.debuglog("stream") : function () {};
var d;
var y = require("./350.js");
var m = require("./243.js");
l.inherits(b, u);
var g = ["error", "close", "destroy", "pause", "resume"];
function v(t, e) {
  t = t || {};
  var r = e instanceof (i = i || require("./80.js"));
  this.objectMode = !!t.objectMode;
  if (r) {
    this.objectMode = this.objectMode || !!t.readableObjectMode;
  }
  var o = t.highWaterMark;
  var s = t.readableHighWaterMark;
  var a = this.objectMode ? 16 : 16384;
  this.highWaterMark = o || o === 0 ? o : r && (s || s === 0) ? s : a;
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.buffer = new y();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;
  this.sync = true;
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.destroyed = false;
  this.defaultEncoding = t.defaultEncoding || "utf8";
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (t.encoding) {
    d ||= require("./186.js").StringDecoder;
    this.decoder = new d(t.encoding);
    this.encoding = t.encoding;
  }
}
function b(t) {
  i = i || require("./80.js");
  if (!(this instanceof b)) {
    return new b(t);
  }
  this._readableState = new v(t, this);
  this.readable = true;
  if (t) {
    if (typeof t.read == "function") {
      this._read = t.read;
    }
    if (typeof t.destroy == "function") {
      this._destroy = t.destroy;
    }
  }
  u.call(this);
}
function w(t, e, n, r, o) {
  var i;
  var s = t._readableState;
  if (e === null) {
    s.reading = false;
    (function (t, e) {
      if (e.ended) {
        return;
      }
      if (e.decoder) {
        var n = e.decoder.end();
        if (n && n.length) {
          e.buffer.push(n);
          e.length += e.objectMode ? 1 : n.length;
        }
      }
      e.ended = true;
      T(t);
    })(t, s);
  } else {
    if (!o) {
      i = function (t, e) {
        var n;
        r = e;
        if (!c.isBuffer(r) && !(r instanceof f) && typeof e != "string" && e !== undefined && !t.objectMode) {
          n = new TypeError("Invalid non-string/buffer chunk");
        }
        var r;
        return n;
      }(s, e);
    }
    if (i) {
      t.emit("error", i);
    } else if (s.objectMode || e && e.length > 0) {
      if (typeof e != "string" && !s.objectMode && Object.getPrototypeOf(e) !== c.prototype) {
        e = function (t) {
          return c.from(t);
        }(e);
      }
      if (r) {
        if (s.endEmitted) {
          t.emit("error", new Error("stream.unshift() after end event"));
        } else {
          _(t, s, e, true);
        }
      } else if (s.ended) {
        t.emit("error", new Error("stream.push() after EOF"));
      } else {
        s.reading = false;
        if (s.decoder && !n) {
          e = s.decoder.write(e);
          if (s.objectMode || e.length !== 0) {
            _(t, s, e, false);
          } else {
            O(t, s);
          }
        } else {
          _(t, s, e, false);
        }
      }
    } else if (!r) {
      s.reading = false;
    }
  }
  return function (t) {
    return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
  }(s);
}
function _(t, e, n, r) {
  if (e.flowing && e.length === 0 && !e.sync) {
    t.emit("data", n);
    t.read(0);
  } else {
    e.length += e.objectMode ? 1 : n.length;
    if (r) {
      e.buffer.unshift(n);
    } else {
      e.buffer.push(n);
    }
    if (e.needReadable) {
      T(t);
    }
  }
  O(t, e);
}
Object.defineProperty(b.prototype, "destroyed", {
  get: function () {
    return this._readableState !== undefined && this._readableState.destroyed;
  },
  set: function (t) {
    if (this._readableState) {
      this._readableState.destroyed = t;
    }
  }
});
b.prototype.destroy = m.destroy;
b.prototype._undestroy = m.undestroy;
b.prototype._destroy = function (t, e) {
  this.push(null);
  e(t);
};
b.prototype.push = function (t, e) {
  var n;
  var r = this._readableState;
  if (r.objectMode) {
    n = true;
  } else if (typeof t == "string") {
    if ((e = e || r.defaultEncoding) !== r.encoding) {
      t = c.from(t, e);
      e = "";
    }
    n = true;
  }
  return w(this, t, e, false, n);
};
b.prototype.unshift = function (t) {
  return w(this, t, null, true, false);
};
b.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};
b.prototype.setEncoding = function (t) {
  d ||= require("./186.js").StringDecoder;
  this._readableState.decoder = new d(t);
  this._readableState.encoding = t;
  return this;
};
function E(t, e) {
  if (t <= 0 || e.length === 0 && e.ended) {
    return 0;
  } else if (e.objectMode) {
    return 1;
  } else if (t != t) {
    if (e.flowing && e.length) {
      return e.buffer.head.data.length;
    } else {
      return e.length;
    }
  } else {
    if (t > e.highWaterMark) {
      e.highWaterMark = function (t) {
        if (t >= 8388608) {
          t = 8388608;
        } else {
          t--;
          t |= t >>> 1;
          t |= t >>> 2;
          t |= t >>> 4;
          t |= t >>> 8;
          t |= t >>> 16;
          t++;
        }
        return t;
      }(t);
    }
    if (t <= e.length) {
      return t;
    } else if (e.ended) {
      return e.length;
    } else {
      e.needReadable = true;
      return 0;
    }
  }
}
function T(t) {
  var e = t._readableState;
  e.needReadable = false;
  if (!e.emittedReadable) {
    p("emitReadable", e.flowing);
    e.emittedReadable = true;
    if (e.sync) {
      o.nextTick(x, t);
    } else {
      x(t);
    }
  }
}
function x(t) {
  p("emit readable");
  t.emit("readable");
  D(t);
}
function O(t, e) {
  if (!e.readingMore) {
    e.readingMore = true;
    o.nextTick(I, t, e);
  }
}
function I(t, e) {
  for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (p("maybeReadMore read 0"), t.read(0), n !== e.length);) {
    n = e.length;
  }
  e.readingMore = false;
}
function S(t) {
  p("readable nexttick read 0");
  t.read(0);
}
function A(t, e) {
  if (!e.reading) {
    p("resume read 0");
    t.read(0);
  }
  e.resumeScheduled = false;
  e.awaitDrain = 0;
  t.emit("resume");
  D(t);
  if (e.flowing && !e.reading) {
    t.read(0);
  }
}
function D(t) {
  var e = t._readableState;
  for (p("flow", e.flowing); e.flowing && t.read() !== null;);
}
function N(t, e) {
  if (e.length === 0) {
    return null;
  } else {
    if (e.objectMode) {
      n = e.buffer.shift();
    } else if (!t || t >= e.length) {
      n = e.decoder ? e.buffer.join("") : e.buffer.length === 1 ? e.buffer.head.data : e.buffer.concat(e.length);
      e.buffer.clear();
    } else {
      n = function (t, e, n) {
        var r;
        if (t < e.head.data.length) {
          r = e.head.data.slice(0, t);
          e.head.data = e.head.data.slice(t);
        } else {
          r = t === e.head.data.length ? e.shift() : n ? function (t, e) {
            var n = e.head;
            var r = 1;
            var o = n.data;
            t -= o.length;
            while (n = n.next) {
              var i = n.data;
              var s = t > i.length ? i.length : t;
              if (s === i.length) {
                o += i;
              } else {
                o += i.slice(0, t);
              }
              if ((t -= s) === 0) {
                if (s === i.length) {
                  ++r;
                  if (n.next) {
                    e.head = n.next;
                  } else {
                    e.head = e.tail = null;
                  }
                } else {
                  e.head = n;
                  n.data = i.slice(s);
                }
                break;
              }
              ++r;
            }
            e.length -= r;
            return o;
          }(t, e) : function (t, e) {
            var n = c.allocUnsafe(t);
            var r = e.head;
            var o = 1;
            r.data.copy(n);
            t -= r.data.length;
            while (r = r.next) {
              var i = r.data;
              var s = t > i.length ? i.length : t;
              i.copy(n, n.length - t, 0, s);
              if ((t -= s) === 0) {
                if (s === i.length) {
                  ++o;
                  if (r.next) {
                    e.head = r.next;
                  } else {
                    e.head = e.tail = null;
                  }
                } else {
                  e.head = r;
                  r.data = i.slice(s);
                }
                break;
              }
              ++o;
            }
            e.length -= o;
            return n;
          }(t, e);
        }
        return r;
      }(t, e.buffer, e.decoder);
    }
    return n;
  }
  var n;
}
function C(t) {
  var e = t._readableState;
  if (e.length > 0) {
    throw new Error("\"endReadable()\" called on non-empty stream");
  }
  if (!e.endEmitted) {
    e.ended = true;
    o.nextTick(P, e, t);
  }
}
function P(t, e) {
  if (!t.endEmitted && t.length === 0) {
    t.endEmitted = true;
    e.readable = false;
    e.emit("end");
  }
}
function j(t, e) {
  for (var n = 0, r = t.length; n < r; n++) {
    if (t[n] === e) {
      return n;
    }
  }
  return -1;
}
b.prototype.read = function (t) {
  p("read", t);
  t = parseInt(t, 10);
  var e = this._readableState;
  var n = t;
  if (t !== 0) {
    e.emittedReadable = false;
  }
  if (t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended)) {
    p("read: emitReadable", e.length, e.ended);
    if (e.length === 0 && e.ended) {
      C(this);
    } else {
      T(this);
    }
    return null;
  }
  if ((t = E(t, e)) === 0 && e.ended) {
    if (e.length === 0) {
      C(this);
    }
    return null;
  }
  var r;
  var o = e.needReadable;
  p("need readable", o);
  if (e.length === 0 || e.length - t < e.highWaterMark) {
    p("length less than watermark", o = true);
  }
  if (e.ended || e.reading) {
    p("reading or ended", o = false);
  } else if (o) {
    p("do read");
    e.reading = true;
    e.sync = true;
    if (e.length === 0) {
      e.needReadable = true;
    }
    this._read(e.highWaterMark);
    e.sync = false;
    if (!e.reading) {
      t = E(n, e);
    }
  }
  if ((r = t > 0 ? N(t, e) : null) === null) {
    e.needReadable = true;
    t = 0;
  } else {
    e.length -= t;
  }
  if (e.length === 0) {
    if (!e.ended) {
      e.needReadable = true;
    }
    if (n !== t && e.ended) {
      C(this);
    }
  }
  if (r !== null) {
    this.emit("data", r);
  }
  return r;
};
b.prototype._read = function (t) {
  this.emit("error", new Error("_read() is not implemented"));
};
b.prototype.pipe = function (t, e) {
  var n = this;
  var i = this._readableState;
  switch (i.pipesCount) {
    case 0:
      i.pipes = t;
      break;
    case 1:
      i.pipes = [i.pipes, t];
      break;
    default:
      i.pipes.push(t);
  }
  i.pipesCount += 1;
  p("pipe count=%d opts=%j", i.pipesCount, e);
  var u = (!e || e.end !== false) && t !== r.stdout && t !== r.stderr ? f : b;
  function c(e, r) {
    p("onunpipe");
    if (e === n && r && r.hasUnpiped === false) {
      r.hasUnpiped = true;
      p("cleanup");
      t.removeListener("close", g);
      t.removeListener("finish", v);
      t.removeListener("drain", l);
      t.removeListener("error", m);
      t.removeListener("unpipe", c);
      n.removeListener("end", f);
      n.removeListener("end", b);
      n.removeListener("data", y);
      h = true;
      if (!!i.awaitDrain && (!t._writableState || !!t._writableState.needDrain)) {
        l();
      }
    }
  }
  function f() {
    p("onend");
    t.end();
  }
  if (i.endEmitted) {
    o.nextTick(u);
  } else {
    n.once("end", u);
  }
  t.on("unpipe", c);
  var l = function (t) {
    return function () {
      var e = t._readableState;
      p("pipeOnDrain", e.awaitDrain);
      if (e.awaitDrain) {
        e.awaitDrain--;
      }
      if (e.awaitDrain === 0 && a(t, "data")) {
        e.flowing = true;
        D(t);
      }
    };
  }(n);
  t.on("drain", l);
  var h = false;
  var d = false;
  function y(e) {
    p("ondata");
    d = false;
    if (t.write(e) === false && !d) {
      if ((i.pipesCount === 1 && i.pipes === t || i.pipesCount > 1 && j(i.pipes, t) !== -1) && !h) {
        p("false write response, pause", n._readableState.awaitDrain);
        n._readableState.awaitDrain++;
        d = true;
      }
      n.pause();
    }
  }
  function m(e) {
    p("onerror", e);
    b();
    t.removeListener("error", m);
    if (a(t, "error") === 0) {
      t.emit("error", e);
    }
  }
  function g() {
    t.removeListener("finish", v);
    b();
  }
  function v() {
    p("onfinish");
    t.removeListener("close", g);
    b();
  }
  function b() {
    p("unpipe");
    n.unpipe(t);
  }
  n.on("data", y);
  (function (t, e, n) {
    if (typeof t.prependListener == "function") {
      return t.prependListener(e, n);
    }
    if (t._events && t._events[e]) {
      if (s(t._events[e])) {
        t._events[e].unshift(n);
      } else {
        t._events[e] = [n, t._events[e]];
      }
    } else {
      t.on(e, n);
    }
  })(t, "error", m);
  t.once("close", g);
  t.once("finish", v);
  t.emit("pipe", n);
  if (!i.flowing) {
    p("pipe resume");
    n.resume();
  }
  return t;
};
b.prototype.unpipe = function (t) {
  var e = this._readableState;
  var n = {
    hasUnpiped: false
  };
  if (e.pipesCount === 0) {
    return this;
  }
  if (e.pipesCount === 1) {
    if (!t || t === e.pipes) {
      t ||= e.pipes;
      e.pipes = null;
      e.pipesCount = 0;
      e.flowing = false;
      if (t) {
        t.emit("unpipe", this, n);
      }
    }
    return this;
  }
  if (!t) {
    var r = e.pipes;
    var o = e.pipesCount;
    e.pipes = null;
    e.pipesCount = 0;
    e.flowing = false;
    for (var i = 0; i < o; i++) {
      r[i].emit("unpipe", this, n);
    }
    return this;
  }
  var s = j(e.pipes, t);
  if (s !== -1) {
    e.pipes.splice(s, 1);
    e.pipesCount -= 1;
    if (e.pipesCount === 1) {
      e.pipes = e.pipes[0];
    }
    t.emit("unpipe", this, n);
  }
  return this;
};
b.prototype.on = function (t, e) {
  var n = u.prototype.on.call(this, t, e);
  if (t === "data") {
    if (this._readableState.flowing !== false) {
      this.resume();
    }
  } else if (t === "readable") {
    var r = this._readableState;
    if (!r.endEmitted && !r.readableListening) {
      r.readableListening = r.needReadable = true;
      r.emittedReadable = false;
      if (r.reading) {
        if (r.length) {
          T(this);
        }
      } else {
        o.nextTick(S, this);
      }
    }
  }
  return n;
};
b.prototype.addListener = b.prototype.on;
b.prototype.resume = function () {
  var t = this._readableState;
  if (!t.flowing) {
    p("resume");
    t.flowing = true;
    (function (t, e) {
      if (!e.resumeScheduled) {
        e.resumeScheduled = true;
        o.nextTick(A, t, e);
      }
    })(this, t);
  }
  return this;
};
b.prototype.pause = function () {
  p("call pause flowing=%j", this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    p("pause");
    this._readableState.flowing = false;
    this.emit("pause");
  }
  return this;
};
b.prototype.wrap = function (t) {
  var e = this;
  var n = this._readableState;
  var r = false;
  t.on("end", function () {
    p("wrapped end");
    if (n.decoder && !n.ended) {
      var t = n.decoder.end();
      if (t && t.length) {
        e.push(t);
      }
    }
    e.push(null);
  });
  t.on("data", function (o) {
    if (!(p("wrapped data"), n.decoder && (o = n.decoder.write(o)), n.objectMode && o == null)) {
      if (n.objectMode || o && o.length) {
        if (!e.push(o)) {
          r = true;
          t.pause();
        }
      }
    }
  });
  for (var o in t) {
    if (this[o] === undefined && typeof t[o] == "function") {
      this[o] = function (e) {
        return function () {
          return t[e].apply(t, arguments);
        };
      }(o);
    }
  }
  for (var i = 0; i < g.length; i++) {
    t.on(g[i], this.emit.bind(this, g[i]));
  }
  this._read = function (e) {
    p("wrapped _read", e);
    if (r) {
      r = false;
      t.resume();
    }
  };
  return this;
};
Object.defineProperty(b.prototype, "readableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});
b._fromList = N;