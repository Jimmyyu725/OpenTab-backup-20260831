var n = require("./2150.js");
const o = function () {
  this.__data__ = new n.Z();
  this.size = 0;
};
const a = function (e) {
  var t = this.__data__;
  var r = t.delete(e);
  this.size = t.size;
  return r;
};
const i = function (e) {
  return this.__data__.get(e);
};
const c = function (e) {
  return this.__data__.has(e);
};
var s = require("./2512.js");
var l = require("./7132.js");
const u = function (e, t) {
  var r = this.__data__;
  if (r instanceof n.Z) {
    var o = r.__data__;
    if (!s.Z || o.length < 199) {
      o.push([e, t]);
      this.size = ++r.size;
      return this;
    }
    r = this.__data__ = new l.Z(o);
  }
  r.set(e, t);
  this.size = r.size;
  return this;
};
function f(e) {
  var t = this.__data__ = new n.Z(e);
  this.size = t.size;
}
f.prototype.clear = o;
f.prototype.delete = a;
f.prototype.get = i;
f.prototype.has = c;
f.prototype.set = u;
export const Z = f;