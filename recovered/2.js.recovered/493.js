module.exports = function (t) {
  var e = this.__data__;
  var r = e.delete(t);
  this.size = e.size;
  return r;
};