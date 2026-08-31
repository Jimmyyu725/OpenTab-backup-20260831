var r = require("./184.js").Buffer;
var o = require("./351.js");
module.exports = function () {
  function t() {
    (function (t, e) {
      if (!(t instanceof e)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, t);
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  t.prototype.push = function (t) {
    var e = {
      data: t,
      next: null
    };
    if (this.length > 0) {
      this.tail.next = e;
    } else {
      this.head = e;
    }
    this.tail = e;
    ++this.length;
  };
  t.prototype.unshift = function (t) {
    var e = {
      data: t,
      next: this.head
    };
    if (this.length === 0) {
      this.tail = e;
    }
    this.head = e;
    ++this.length;
  };
  t.prototype.shift = function () {
    if (this.length !== 0) {
      var t = this.head.data;
      if (this.length === 1) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
      }
      --this.length;
      return t;
    }
  };
  t.prototype.clear = function () {
    this.head = this.tail = null;
    this.length = 0;
  };
  t.prototype.join = function (t) {
    if (this.length === 0) {
      return "";
    }
    for (var e = this.head, n = "" + e.data; e = e.next;) {
      n += t + e.data;
    }
    return n;
  };
  t.prototype.concat = function (t) {
    if (this.length === 0) {
      return r.alloc(0);
    }
    if (this.length === 1) {
      return this.head.data;
    }
    var e;
    var n;
    var o;
    var i = r.allocUnsafe(t >>> 0);
    for (var s = this.head, a = 0; s;) {
      e = s.data;
      n = i;
      o = a;
      e.copy(n, o);
      a += s.data.length;
      s = s.next;
    }
    return i;
  };
  return t;
}();
if (o && o.inspect && o.inspect.custom) {
  module.exports.prototype[o.inspect.custom] = function () {
    var t = o.inspect({
      length: this.length
    });
    return this.constructor.name + " " + t;
  };
}