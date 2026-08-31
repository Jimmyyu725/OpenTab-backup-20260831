var r = require("./157.js");
var i = Object.keys || function (t) {
  var e = [];
  for (var n in t) {
    e.push(n);
  }
  return e;
};
module.exports = f;
var o = Object.create(require("./108.js"));
o.inherits = require("./91.js");
var a = require("./241.js");
var s = require("./185.js");
o.inherits(f, a);
for (var c = i(s.prototype), u = 0; u < c.length; u++) {
  var l = c[u];
  f.prototype[l] ||= s.prototype[l];
}
function f(t) {
  if (!(this instanceof f)) {
    return new f(t);
  }
  a.call(this, t);
  s.call(this, t);
  if (t && t.readable === false) {
    this.readable = false;
  }
  if (t && t.writable === false) {
    this.writable = false;
  }
  this.allowHalfOpen = true;
  if (t && t.allowHalfOpen === false) {
    this.allowHalfOpen = false;
  }
  this.once("end", h);
}
function h() {
  if (!this.allowHalfOpen && !this._writableState.ended) {
    r.nextTick(p, this);
  }
}
function p(t) {
  t.end();
}
Object.defineProperty(f.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(f.prototype, "destroyed", {
  get: function () {
    return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (t) {
    if (this._readableState !== undefined && this._writableState !== undefined) {
      this._readableState.destroyed = t;
      this._writableState.destroyed = t;
    }
  }
});
f.prototype._destroy = function (t, e) {
  this.push(null);
  this.end();
  r.nextTick(e, t);
};