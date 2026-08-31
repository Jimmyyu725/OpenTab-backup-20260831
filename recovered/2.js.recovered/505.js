module.exports = function (t) {
  var e = this.has(t) && delete this.__data__[t];
  this.size -= e ? 1 : 0;
  return e;
};