var r = require("./31.js");
var o = Object.create;
var i = function () {
  function t() {}
  return function (e) {
    if (!r(e)) {
      return {};
    }
    if (o) {
      return o(e);
    }
    t.prototype = e;
    var n = new t();
    t.prototype = undefined;
    return n;
  };
}();
module.exports = i;