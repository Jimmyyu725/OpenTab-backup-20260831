var n = require(/*webcrack:missing*/"./209.js");
var o = Object.create;
var c = function () {
  function t() {}
  return function (e) {
    if (!n(e)) {
      return {};
    }
    if (o) {
      return o(e);
    }
    t.prototype = e;
    var r = new t();
    t.prototype = undefined;
    return r;
  };
}();
module.exports = c;