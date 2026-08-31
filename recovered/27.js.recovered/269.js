var e = {}.propertyIsEnumerable;
var o = Object.getOwnPropertyDescriptor;
var i = o && !e.call({
  1: 2
}, 1);
exports.f = i ? function (t) {
  var n = o(this, t);
  return !!n && n.enumerable;
} : e;