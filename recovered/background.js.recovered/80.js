var r = require("./157.js");
var o = Object.keys || function (t) {
  var e = [];
  for (var n in t) {
    e.push(n);
  }
  return e;
};
module.exports = l;
var i = Object.create(require("./108.js"));
i.inherits = require("./91.js");
var s = require("./241.js");
var a = require("./185.js");
i.inherits(l, s);
for (var u = o(a.prototype), c = 0; c < u.length; c++) {
  var f = u[c];
  l.prototype[f] ||= a.prototype[f];
}
function l(t) {
  if (!(this instanceof l)) {
    return new l(t);
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
Object.defineProperty(l.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(l.prototype, "destroyed", {
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
l.prototype._destroy = function (t, e) {
  this.push(null);
  this.end();
  r.nextTick(e, t);
};