const n = function () {
  this.__data__ = [];
  this.size = 0;
};
var o = require("./7422.js");
const a = function (e, t) {
  for (var r = e.length; r--;) {
    if ((0, o.Z)(e[r][0], t)) {
      return r;
    }
  }
  return -1;
};
var i = Array.prototype.splice;
const c = function (e) {
  var t = this.__data__;
  var r = a(t, e);
  return !(r < 0) && (r == t.length - 1 ? t.pop() : i.call(t, r, 1), --this.size, true);
};
const s = function (e) {
  var t = this.__data__;
  var r = a(t, e);
  if (r < 0) {
    return undefined;
  } else {
    return t[r][1];
  }
};
const l = function (e) {
  return a(this.__data__, e) > -1;
};
const u = function (e, t) {
  var r = this.__data__;
  var n = a(r, e);
  if (n < 0) {
    ++this.size;
    r.push([e, t]);
  } else {
    r[n][1] = t;
  }
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
f.prototype.clear = n;
f.prototype.delete = c;
f.prototype.get = s;
f.prototype.has = l;
f.prototype.set = u;
export const Z = f;