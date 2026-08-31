var r = {}.propertyIsEnumerable;
var o = Object.getOwnPropertyDescriptor;
var i = o && !r.call({
  1: 2
}, 1);
exports.f = i ? function (t) {
  var e = o(this, t);
  return !!e && e.enumerable;
} : r;