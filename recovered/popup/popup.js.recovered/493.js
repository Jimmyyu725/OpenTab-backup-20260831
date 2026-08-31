module.exports = function (t) {
  var e = this.__data__;
  var n = e.delete(t);
  this.size = e.size;
  return n;
};