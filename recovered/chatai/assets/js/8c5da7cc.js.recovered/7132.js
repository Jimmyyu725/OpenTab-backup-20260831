const n = (0, require("./5822.js").Z)(Object, "create");
const o = function () {
  this.__data__ = n ? n(null) : {};
  this.size = 0;
};
const a = function (e) {
  var t = this.has(e) && delete this.__data__[e];
  this.size -= t ? 1 : 0;
  return t;
};
var i = Object.prototype.hasOwnProperty;
const c = function (e) {
  var t = this.__data__;
  if (n) {
    var r = t[e];
    if (r === "__lodash_hash_undefined__") {
      return undefined;
    } else {
      return r;
    }
  }
  if (i.call(t, e)) {
    return t[e];
  } else {
    return undefined;
  }
};
var s = Object.prototype.hasOwnProperty;
const l = function (e) {
  var t = this.__data__;
  if (n) {
    return t[e] !== undefined;
  } else {
    return s.call(t, e);
  }
};
const u = function (e, t) {
  var r = this.__data__;
  this.size += this.has(e) ? 0 : 1;
  r[e] = n && t === undefined ? "__lodash_hash_undefined__" : t;
  return this;
};
function f(e) {
  var t = -1;
  var r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
f.prototype.clear = o;
f.prototype.delete = a;
f.prototype.get = c;
f.prototype.has = l;
f.prototype.set = u;
const d = f;
var h = require("./2150.js");
var p = require("./2512.js");
const g = function () {
  this.size = 0;
  this.__data__ = {
    hash: new d(),
    map: new (p.Z || h.Z)(),
    string: new d()
  };
};
const y = function (e) {
  var t = typeof e;
  if (t == "string" || t == "number" || t == "symbol" || t == "boolean") {
    return e !== "__proto__";
  } else {
    return e === null;
  }
};
const v = function (e, t) {
  var r = e.__data__;
  if (y(t)) {
    return r[typeof t == "string" ? "string" : "hash"];
  } else {
    return r.map;
  }
};
const b = function (e) {
  var t = v(this, e).delete(e);
  this.size -= t ? 1 : 0;
  return t;
};
const m = function (e) {
  return v(this, e).get(e);
};
const w = function (e) {
  return v(this, e).has(e);
};
const _ = function (e, t) {
  var r = v(this, e);
  var n = r.size;
  r.set(e, t);
  this.size += r.size == n ? 0 : 1;
  return this;
};
function k(e) {
  var t = -1;
  var r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
k.prototype.clear = g;
k.prototype.delete = b;
k.prototype.get = m;
k.prototype.has = w;
k.prototype.set = _;
export const Z = k;