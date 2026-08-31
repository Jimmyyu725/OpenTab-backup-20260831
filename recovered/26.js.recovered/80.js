var r = require("./157.js");
var o = Object.keys || function (t) {
  var e = [];
  for (var n in t) {
    e.push(n);
  }
  return e;
};
module.exports = h;
var i = Object.create(require("./108.js"));
i.inherits = require("./91.js");
var s = require("./241.js");
var a = require("./185.js");
i.inherits(h, s);
for (var c = o(a.prototype), u = 0; u < c.length; u++) {
  var l = c[u];
  h.prototype[l] ||= a.prototype[l];
}
function h(t) {
  if (!(this instanceof h)) {
    return new h(t);
  }
  s.call(this, t);
  a.call(this, t);
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
  this.once("end", p);
}
function p() {
  if (!this.allowHalfOpen && !this._writableState.ended) {
    r.nextTick(f, this);
  }
}
function f(t) {
  t.end();
}
Object.defineProperty(h.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(h.prototype, "destroyed", {
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
h.prototype._destroy = function (t, e) {
  this.push(null);
  this.end();
  r.nextTick(e, t);
};