export function d(e) {
  var t = e(function (e) {
    Error.call(e);
    e.stack = new Error().stack;
  });
  t.prototype = Object.create(Error.prototype);
  t.prototype.constructor = t;
  return t;
}