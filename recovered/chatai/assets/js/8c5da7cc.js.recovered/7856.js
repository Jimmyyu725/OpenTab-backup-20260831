export function tI(e) {
  return !!e && typeof e.then == "function";
}
Promise.resolve(false);
export var Ob = Promise.resolve(true);
export var hU = Promise.resolve();
export function _v(e, t) {
  e ||= 0;
  return new Promise(function (r) {
    return setTimeout(function () {
      return r(t);
    }, e);
  });
}
export function Iy(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
export function JQ() {
  return Math.random().toString(36).substring(2);
}
var l = 0;
var u = 0;
export function Xu() {
  var e = new Date().getTime();
  if (e === l) {
    return e * 1000 + ++u;
  } else {
    l = e;
    u = 0;
    return e * 1000;
  }
}
export var UG = Object.prototype.toString.call(typeof process != "undefined" ? process : 0) === "[object process]";