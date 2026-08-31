(function () {
  module.exports = function () {
    function t() {}
    t.prototype.handleError = function (t) {
      throw new Error(t);
    };
    return t;
  }();
}).call(this);