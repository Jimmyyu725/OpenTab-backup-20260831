var n = require("./1584.js");
var o = Array.prototype.concat;
var a = Array.prototype.slice;
var i = module.exports = function (e) {
  var t = [];
  for (var r = 0, i = e.length; r < i; r++) {
    var c = e[r];
    if (n(c)) {
      t = o.call(t, a.call(c));
    } else {
      t.push(c);
    }
  }
  return t;
};
i.wrap = function (e) {
  return function () {
    return e(i(arguments));
  };
};