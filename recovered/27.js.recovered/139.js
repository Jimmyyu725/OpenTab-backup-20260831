var e = require("./52.js");
module.exports = function (t, n, r) {
  e(t);
  if (n === undefined) {
    return t;
  }
  switch (r) {
    case 0:
      return function () {
        return t.call(n);
      };
    case 1:
      return function (r) {
        return t.call(n, r);
      };
    case 2:
      return function (r, e) {
        return t.call(n, r, e);
      };
    case 3:
      return function (r, e, o) {
        return t.call(n, r, e, o);
      };
  }
  return function () {
    return t.apply(n, arguments);
  };
};