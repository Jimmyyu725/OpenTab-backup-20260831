var i = require("./6604.js");
var s = Object.prototype;
var r = s.hasOwnProperty;
var a = s.toString;
var o = i.Z ? i.Z.toStringTag : undefined;
const u = function (e) {
  var t = r.call(e, o);
  var n = e[o];
  try {
    e[o] = undefined;
    var i = true;
  } catch (e) {}
  var s = a.call(e);
  if (i) {
    if (t) {
      e[o] = n;
    } else {
      delete e[o];
    }
  }
  return s;
};
var g = Object.prototype.toString;
const h = function (e) {
  return g.call(e);
};
var c = i.Z ? i.Z.toStringTag : undefined;
export const Z = function (e) {
  if (e == null) {
    if (e === undefined) {
      return "[object Undefined]";
    } else {
      return "[object Null]";
    }
  } else if (c && c in Object(e)) {
    return u(e);
  } else {
    return h(e);
  }
};