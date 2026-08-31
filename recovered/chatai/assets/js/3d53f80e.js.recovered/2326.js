module.exports = function () {
  "use strict";

  return function (e, t, n) {
    t.prototype.isToday = function () {
      var e = "YYYY-MM-DD";
      var t = n();
      return this.format(e) === t.format(e);
    };
  };
}();