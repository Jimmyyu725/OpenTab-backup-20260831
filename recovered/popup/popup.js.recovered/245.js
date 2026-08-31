module.exports = s;
var r = require("./80.js");
var i = Object.create(require("./108.js"));
function o(t, e) {
  var n = this._transformState;
  n.transforming = false;
  var r = n.writecb;
  if (!r) {
    return this.emit("error", new Error("write callback called multiple times"));
  }
  n.writechunk = null;
  n.writecb = null;
  if (e != null) {
    this.push(e);
  }
  r(t);
  var i = this._readableState;
  i.reading = false;
  if (i.needReadable || i.length < i.highWaterMark) {
    this._read(i.highWaterMark);
  }
}
function s(t) {
  if (!(this instanceof s)) {
    return new s(t);
  }
  r.call(this, t);
  this._transformState = {
    afterTransform: o.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (t) {
    if (typeof t.transform == "function") {
      this._transform = t.transform;
    }
    if (typeof t.flush == "function") {
      this._flush = t.flush;
    }
  }
  this.on("prefinish", a);
}
function a() {
  var t = this;
  if (typeof this._flush == "function") {
    this._flush(function (e, n) {
      c(t, e, n);
    });
  } else {
    c(this, null, null);
  }
}
function c(t, e, n) {
  if (e) {
    return t.emit("error", e);
  }
  if (n != null) {
    t.push(n);
  }
  if (t._writableState.length) {
    throw new Error("Calling transform done when ws.length != 0");
  }
  if (t._transformState.transforming) {
    throw new Error("Calling transform done when still transforming");
  }
  return t.push(null);
}
i.inherits = require("./91.js");
i.inherits(s, r);
s.prototype.push = function (t, e) {
  this._transformState.needTransform = false;
  return r.prototype.push.call(this, t, e);
};
s.prototype._transform = function (t, e, n) {
  throw new Error("_transform() is not implemented");
};
s.prototype._write = function (t, e, n) {
  var r = this._transformState;
  r.writecb = n;
  r.writechunk = t;
  r.writeencoding = e;
  if (!r.transforming) {
    var i = this._readableState;
    if (r.needTransform || i.needReadable || i.length < i.highWaterMark) {
      this._read(i.highWaterMark);
    }
  }
};
s.prototype._read = function (t) {
  var e = this._transformState;
  if (e.writechunk !== null && e.writecb && !e.transforming) {
    e.transforming = true;
    this._transform(e.writechunk, e.writeencoding, e.afterTransform);
  } else {
    e.needTransform = true;
  }
};
s.prototype._destroy = function (t, e) {
  var n = this;
  r.prototype._destroy.call(this, t, function (t) {
    e(t);
    n.emit("close");
  });
};