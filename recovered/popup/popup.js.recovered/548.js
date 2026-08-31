var r = require("./209.js");
var i = Object.create;
var o = function () {
  function t() {}
  return function (e) {
    if (!r(e)) {
      return {};
    }
    if (i) {
      return i(e);
    }
    t.prototype = e;
    var n = new t();
    t.prototype = undefined;
    return n;
  };
}();
module.exports = o;