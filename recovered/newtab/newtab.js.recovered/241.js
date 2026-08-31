var e = require("./25.js");
var r = require("./94.js");
var i = require("./157.js");
module.exports = w;
var o;
var a = require("./240.js");
w.ReadableState = b;
require("./156.js").EventEmitter;
function s(t, e) {
  return t.listeners(e).length;
}
var c = require("./242.js");
var u = require("./184.js").Buffer;
var l = e.Uint8Array || function () {};
var f = Object.create(require("./108.js"));
f.inherits = require("./91.js");
var h = require("./349.js");
var p = undefined;
p = h && h.debuglog ? h.debuglog("stream") : function () {};
var d;
var m = require("./350.js");
var g = require("./243.js");
f.inherits(w, c);
var y = ["error", "close", "destroy", "pause", "resume"];
function b(t, e) {
  t = t || {};
  var r = e instanceof (o = o || require("./80.js"));
  this.objectMode = !!t.objectMode;
  if (r) {
    this.objectMode = this.objectMode || !!t.readableObjectMode;
  }
  var i = t.highWaterMark;
  var a = t.readableHighWaterMark;
  var s = this.objectMode ? 16 : 16384;
  this.highWaterMark = i || i === 0 ? i : r && (a || a === 0) ? a : s;
  this.highWaterMark = Math.floor(this.highWaterMark);
  this.buffer = new m();
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
function w(t) {
  o = o || require("./80.js");
  if (!(this instanceof w)) {
    return new w(t);
  }
  this._readableState = new b(t, this);
  this.readable = true;
  if (t) {
    if (typeof t.read == "function") {
      this._read = t.read;
    }
    if (typeof t.destroy == "function") {
      this._destroy = t.destroy;
    }
  }
  c.call(this);
}
function v(t, e, n, r, i) {
  var o;
  var a = t._readableState;
  if (e === null) {
    a.reading = false;
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
      x(t);
    })(t, a);
  } else {
    if (!i) {
      o = function (t, e) {
        var n;
        r = e;
        if (!u.isBuffer(r) && !(r instanceof l) && typeof e != "string" && e !== undefined && !t.objectMode) {
          n = new TypeError("Invalid non-string/buffer chunk");
        }
        var r;
        return n;
      }(a, e);
    }
    if (o) {
      t.emit("error", o);
    } else if (a.objectMode || e && e.length > 0) {
      if (typeof e != "string" && !a.objectMode && Object.getPrototypeOf(e) !== u.prototype) {
        e = function (t) {
          return u.from(t);
        }(e);
      }
      if (r) {
        if (a.endEmitted) {
          t.emit("error", new Error("stream.unshift() after end event"));
        } else {
          _(t, a, e, true);
        }
      } else if (a.ended) {
        t.emit("error", new Error("stream.push() after EOF"));
      } else {
        a.reading = false;
        if (a.decoder && !n) {
          e = a.decoder.write(e);
          if (a.objectMode || e.length !== 0) {
            _(t, a, e, false);
          } else {
            I(t, a);
          }
        } else {
          _(t, a, e, false);
        }
      }
    } else if (!r) {
      a.reading = false;
    }
  }
  return function (t) {
    return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
  }(a);
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
      x(t);
    }
  }
  I(t, e);
}
Object.defineProperty(w.prototype, "destroyed", {
  get: function () {
    return this._readableState !== undefined && this._readableState.destroyed;
  },
  set: function (t) {
    if (this._readableState) {
      this._readableState.destroyed = t;
    }
  }
});
w.prototype.destroy = g.destroy;
w.prototype._undestroy = g.undestroy;
w.prototype._destroy = function (t, e) {
  this.push(null);
  e(t);
};
w.prototype.push = function (t, e) {
  var n;
  var r = this._readableState;
  if (r.objectMode) {
    n = true;
  } else if (typeof t == "string") {
    if ((e = e || r.defaultEncoding) !== r.encoding) {
      t = u.from(t, e);
      e = "";
    }
    n = true;
  }
  return v(this, t, e, false, n);
};
w.prototype.unshift = function (t) {
  return v(this, t, null, true, false);
};
w.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};
w.prototype.setEncoding = function (t) {
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
function x(t) {
  var e = t._readableState;
  e.needReadable = false;
  if (!e.emittedReadable) {
    p("emitReadable", e.flowing);
    e.emittedReadable = true;
    if (e.sync) {
      i.nextTick(T, t);
    } else {
      T(t);
    }
  }
}
function T(t) {
  p("emit readable");
  t.emit("readable");
  N(t);
}
function I(t, e) {
  if (!e.readingMore) {
    e.readingMore = true;
    i.nextTick(O, t, e);
  }
}
function O(t, e) {
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
  N(t);
  if (e.flowing && !e.reading) {
    t.read(0);
  }
}
function N(t) {
  var e = t._readableState;
  for (p("flow", e.flowing); e.flowing && t.read() !== null;);
}
function j(t, e) {
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
            var i = n.data;
            t -= i.length;
            while (n = n.next) {
              var o = n.data;
              var a = t > o.length ? o.length : t;
              if (a === o.length) {
                i += o;
              } else {
                i += o.slice(0, t);
              }
              if ((t -= a) === 0) {
                if (a === o.length) {
                  ++r;
                  if (n.next) {
                    e.head = n.next;
                  } else {
                    e.head = e.tail = null;
                  }
                } else {
                  e.head = n;
                  n.data = o.slice(a);
                }
                break;
              }
              ++r;
            }
            e.length -= r;
            return i;
          }(t, e) : function (t, e) {
            var n = u.allocUnsafe(t);
            var r = e.head;
            var i = 1;
            r.data.copy(n);
            t -= r.data.length;
            while (r = r.next) {
              var o = r.data;
              var a = t > o.length ? o.length : t;
              o.copy(n, n.length - t, 0, a);
              if ((t -= a) === 0) {
                if (a === o.length) {
                  ++i;
                  if (r.next) {
                    e.head = r.next;
                  } else {
                    e.head = e.tail = null;
                  }
                } else {
                  e.head = r;
                  r.data = o.slice(a);
                }
                break;
              }
              ++i;
            }
            e.length -= i;
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
    i.nextTick(D, e, t);
  }
}
function D(t, e) {
  if (!t.endEmitted && t.length === 0) {
    t.endEmitted = true;
    e.readable = false;
    e.emit("end");
  }
}
function k(t, e) {
  for (var n = 0, r = t.length; n < r; n++) {
    if (t[n] === e) {
      return n;
    }
  }
  return -1;
}
w.prototype.read = function (t) {
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
      x(this);
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
  var i = e.needReadable;
  p("need readable", i);
  if (e.length === 0 || e.length - t < e.highWaterMark) {
    p("length less than watermark", i = true);
  }
  if (e.ended || e.reading) {
    p("reading or ended", i = false);
  } else if (i) {
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
  if ((r = t > 0 ? j(t, e) : null) === null) {
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
w.prototype._read = function (t) {
  this.emit("error", new Error("_read() is not implemented"));
};
w.prototype.pipe = function (t, e) {
  var n = this;
  var o = this._readableState;
  switch (o.pipesCount) {
    case 0:
      o.pipes = t;
      break;
    case 1:
      o.pipes = [o.pipes, t];
      break;
    default:
      o.pipes.push(t);
  }
  o.pipesCount += 1;
  p("pipe count=%d opts=%j", o.pipesCount, e);
  var c = (!e || e.end !== false) && t !== r.stdout && t !== r.stderr ? l : w;
  function u(e, r) {
    p("onunpipe");
    if (e === n && r && r.hasUnpiped === false) {
      r.hasUnpiped = true;
      p("cleanup");
      t.removeListener("close", y);
      t.removeListener("finish", b);
      t.removeListener("drain", f);
      t.removeListener("error", g);
      t.removeListener("unpipe", u);
      n.removeListener("end", l);
      n.removeListener("end", w);
      n.removeListener("data", m);
      h = true;
      if (!!o.awaitDrain && (!t._writableState || !!t._writableState.needDrain)) {
        f();
      }
    }
  }
  function l() {
    p("onend");
    t.end();
  }
  if (o.endEmitted) {
    i.nextTick(c);
  } else {
    n.once("end", c);
  }
  t.on("unpipe", u);
  var f = function (t) {
    return function () {
      var e = t._readableState;
      p("pipeOnDrain", e.awaitDrain);
      if (e.awaitDrain) {
        e.awaitDrain--;
      }
      if (e.awaitDrain === 0 && s(t, "data")) {
        e.flowing = true;
        N(t);
      }
    };
  }(n);
  t.on("drain", f);
  var h = false;
  var d = false;
  function m(e) {
    p("ondata");
    d = false;
    if (t.write(e) === false && !d) {
      if ((o.pipesCount === 1 && o.pipes === t || o.pipesCount > 1 && k(o.pipes, t) !== -1) && !h) {
        p("false write response, pause", n._readableState.awaitDrain);
        n._readableState.awaitDrain++;
        d = true;
      }
      n.pause();
    }
  }
  function g(e) {
    p("onerror", e);
    w();
    t.removeListener("error", g);
    if (s(t, "error") === 0) {
      t.emit("error", e);
    }
  }
  function y() {
    t.removeListener("finish", b);
    w();
  }
  function b() {
    p("onfinish");
    t.removeListener("close", y);
    w();
  }
  function w() {
    p("unpipe");
    n.unpipe(t);
  }
  n.on("data", m);
  (function (t, e, n) {
    if (typeof t.prependListener == "function") {
      return t.prependListener(e, n);
    }
    if (t._events && t._events[e]) {
      if (a(t._events[e])) {
        t._events[e].unshift(n);
      } else {
        t._events[e] = [n, t._events[e]];
      }
    } else {
      t.on(e, n);
    }
  })(t, "error", g);
  t.once("close", y);
  t.once("finish", b);
  t.emit("pipe", n);
  if (!o.flowing) {
    p("pipe resume");
    n.resume();
  }
  return t;
};
w.prototype.unpipe = function (t) {
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
    var i = e.pipesCount;
    e.pipes = null;
    e.pipesCount = 0;
    e.flowing = false;
    for (var o = 0; o < i; o++) {
      r[o].emit("unpipe", this, n);
    }
    return this;
  }
  var a = k(e.pipes, t);
  if (a !== -1) {
    e.pipes.splice(a, 1);
    e.pipesCount -= 1;
    if (e.pipesCount === 1) {
      e.pipes = e.pipes[0];
    }
    t.emit("unpipe", this, n);
  }
  return this;
};
w.prototype.on = function (t, e) {
  var n = c.prototype.on.call(this, t, e);
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
          x(this);
        }
      } else {
        i.nextTick(S, this);
      }
    }
  }
  return n;
};
w.prototype.addListener = w.prototype.on;
w.prototype.resume = function () {
  var t = this._readableState;
  if (!t.flowing) {
    p("resume");
    t.flowing = true;
    (function (t, e) {
      if (!e.resumeScheduled) {
        e.resumeScheduled = true;
        i.nextTick(A, t, e);
      }
    })(this, t);
  }
  return this;
};
w.prototype.pause = function () {
  p("call pause flowing=%j", this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    p("pause");
    this._readableState.flowing = false;
    this.emit("pause");
  }
  return this;
};
w.prototype.wrap = function (t) {
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
  t.on("data", function (i) {
    if (!(p("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && i == null)) {
      if (n.objectMode || i && i.length) {
        if (!e.push(i)) {
          r = true;
          t.pause();
        }
      }
    }
  });
  for (var i in t) {
    if (this[i] === undefined && typeof t[i] == "function") {
      this[i] = function (e) {
        return function () {
          return t[e].apply(t, arguments);
        };
      }(i);
    }
  }
  for (var o = 0; o < y.length; o++) {
    t.on(y[o], this.emit.bind(this, y[o]));
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
Object.defineProperty(w.prototype, "readableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});
w._fromList = j;