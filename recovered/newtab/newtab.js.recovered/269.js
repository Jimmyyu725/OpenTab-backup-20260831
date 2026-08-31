var r = {}.propertyIsEnumerable;
var i = Object.getOwnPropertyDescriptor;
var o = i && !r.call({
  1: 2
}, 1);
exports.f = o ? function (t) {
  var e = i(this, t);
  return !!e && e.enumerable;
} : r;