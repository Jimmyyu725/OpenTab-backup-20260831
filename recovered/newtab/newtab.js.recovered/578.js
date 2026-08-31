function r(t) {
  var e = this;
  if (!(e instanceof r)) {
    e = new r();
  }
  e.tail = null;
  e.head = null;
  e.length = 0;
  if (t && typeof t.forEach == "function") {
    t.forEach(function (t) {
      e.push(t);
    });
  } else if (arguments.length > 0) {
    for (var n = 0, i = arguments.length; n < i; n++) {
      e.push(arguments[n]);
    }
  }
  return e;
}
function i(t, e, n) {
  var r = e === t.head ? new s(n, null, e, t) : new s(n, e, e.next, t);
  if (r.next === null) {
    t.tail = r;
  }
  if (r.prev === null) {
    t.head = r;
  }
  t.length++;
  return r;
}
function o(t, e) {
  t.tail = new s(e, t.tail, null, t);
  t.head ||= t.tail;
  t.length++;
}
function a(t, e) {
  t.head = new s(e, null, t.head, t);
  t.tail ||= t.head;
  t.length++;
}
function s(t, e, n, r) {
  if (!(this instanceof s)) {
    return new s(t, e, n, r);
  }
  this.list = r;
  this.value = t;
  if (e) {
    e.next = this;
    this.prev = e;
  } else {
    this.prev = null;
  }
  if (n) {
    n.prev = this;
    this.next = n;
  } else {
    this.next = null;
  }
}
module.exports = r;
r.Node = s;
r.create = r;
r.prototype.removeNode = function (t) {
  if (t.list !== this) {
    throw new Error("removing node which does not belong to this list");
  }
  var e = t.next;
  var n = t.prev;
  if (e) {
    e.prev = n;
  }
  if (n) {
    n.next = e;
  }
  if (t === this.head) {
    this.head = e;
  }
  if (t === this.tail) {
    this.tail = n;
  }
  t.list.length--;
  t.next = null;
  t.prev = null;
  t.list = null;
  return e;
};
r.prototype.unshiftNode = function (t) {
  if (t !== this.head) {
    if (t.list) {
      t.list.removeNode(t);
    }
    var e = this.head;
    t.list = this;
    t.next = e;
    if (e) {
      e.prev = t;
    }
    this.head = t;
    this.tail ||= t;
    this.length++;
  }
};
r.prototype.pushNode = function (t) {
  if (t !== this.tail) {
    if (t.list) {
      t.list.removeNode(t);
    }
    var e = this.tail;
    t.list = this;
    t.prev = e;
    if (e) {
      e.next = t;
    }
    this.tail = t;
    this.head ||= t;
    this.length++;
  }
};
r.prototype.push = function () {
  for (var t = 0, e = arguments.length; t < e; t++) {
    o(this, arguments[t]);
  }
  return this.length;
};
r.prototype.unshift = function () {
  for (var t = 0, e = arguments.length; t < e; t++) {
    a(this, arguments[t]);
  }
  return this.length;
};
r.prototype.pop = function () {
  if (this.tail) {
    var t = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.length--;
    return t;
  }
};
r.prototype.shift = function () {
  if (this.head) {
    var t = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.length--;
    return t;
  }
};
r.prototype.forEach = function (t, e) {
  e = e || this;
  for (var n = this.head, r = 0; n !== null; r++) {
    t.call(e, n.value, r, this);
    n = n.next;
  }
};
r.prototype.forEachReverse = function (t, e) {
  e = e || this;
  for (var n = this.tail, r = this.length - 1; n !== null; r--) {
    t.call(e, n.value, r, this);
    n = n.prev;
  }
};
r.prototype.get = function (t) {
  for (var e = 0, n = this.head; n !== null && e < t; e++) {
    n = n.next;
  }
  if (e === t && n !== null) {
    return n.value;
  }
};
r.prototype.getReverse = function (t) {
  for (var e = 0, n = this.tail; n !== null && e < t; e++) {
    n = n.prev;
  }
  if (e === t && n !== null) {
    return n.value;
  }
};
r.prototype.map = function (t, e) {
  e = e || this;
  var n = new r();
  for (var i = this.head; i !== null;) {
    n.push(t.call(e, i.value, this));
    i = i.next;
  }
  return n;
};
r.prototype.mapReverse = function (t, e) {
  e = e || this;
  var n = new r();
  for (var i = this.tail; i !== null;) {
    n.push(t.call(e, i.value, this));
    i = i.prev;
  }
  return n;
};
r.prototype.reduce = function (t, e) {
  var n;
  var r = this.head;
  if (arguments.length > 1) {
    n = e;
  } else {
    if (!this.head) {
      throw new TypeError("Reduce of empty list with no initial value");
    }
    r = this.head.next;
    n = this.head.value;
  }
  for (var i = 0; r !== null; i++) {
    n = t(n, r.value, i);
    r = r.next;
  }
  return n;
};
r.prototype.reduceReverse = function (t, e) {
  var n;
  var r = this.tail;
  if (arguments.length > 1) {
    n = e;
  } else {
    if (!this.tail) {
      throw new TypeError("Reduce of empty list with no initial value");
    }
    r = this.tail.prev;
    n = this.tail.value;
  }
  for (var i = this.length - 1; r !== null; i--) {
    n = t(n, r.value, i);
    r = r.prev;
  }
  return n;
};
r.prototype.toArray = function () {
  var t = new Array(this.length);
  for (var e = 0, n = this.head; n !== null; e++) {
    t[e] = n.value;
    n = n.next;
  }
  return t;
};
r.prototype.toArrayReverse = function () {
  var t = new Array(this.length);
  for (var e = 0, n = this.tail; n !== null; e++) {
    t[e] = n.value;
    n = n.prev;
  }
  return t;
};
r.prototype.slice = function (t, e) {
  if ((e = e || this.length) < 0) {
    e += this.length;
  }
  if ((t = t || 0) < 0) {
    t += this.length;
  }
  var n = new r();
  if (e < t || e < 0) {
    return n;
  }
  if (t < 0) {
    t = 0;
  }
  if (e > this.length) {
    e = this.length;
  }
  for (var i = 0, o = this.head; o !== null && i < t; i++) {
    o = o.next;
  }
  for (; o !== null && i < e; i++, o = o.next) {
    n.push(o.value);
  }
  return n;
};
r.prototype.sliceReverse = function (t, e) {
  if ((e = e || this.length) < 0) {
    e += this.length;
  }
  if ((t = t || 0) < 0) {
    t += this.length;
  }
  var n = new r();
  if (e < t || e < 0) {
    return n;
  }
  if (t < 0) {
    t = 0;
  }
  if (e > this.length) {
    e = this.length;
  }
  for (var i = this.length, o = this.tail; o !== null && i > e; i--) {
    o = o.prev;
  }
  for (; o !== null && i > t; i--, o = o.prev) {
    n.push(o.value);
  }
  return n;
};
r.prototype.splice = function (t, e, ...n) {
  if (t > this.length) {
    t = this.length - 1;
  }
  if (t < 0) {
    t = this.length + t;
  }
  for (var r = 0, o = this.head; o !== null && r < t; r++) {
    o = o.next;
  }
  var a = [];
  for (r = 0; o && r < e; r++) {
    a.push(o.value);
    o = this.removeNode(o);
  }
  if (o === null) {
    o = this.tail;
  }
  if (o !== this.head && o !== this.tail) {
    o = o.prev;
  }
  for (r = 0; r < n.length; r++) {
    o = i(this, o, n[r]);
  }
  return a;
};
r.prototype.reverse = function () {
  var t = this.head;
  var e = this.tail;
  for (var n = t; n !== null; n = n.prev) {
    var r = n.prev;
    n.prev = n.next;
    n.next = r;
  }
  this.head = e;
  this.tail = t;
  return this;
};
try {
  require("./579.js")(r);
} catch (t) {}