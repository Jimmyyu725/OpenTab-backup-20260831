var r = require("./27.js");
module.exports = function (t, n, e) {
  r(t);
  if (n === undefined) {
    return t;
  }
  switch (e) {
    case 0:
      return function () {
        return t.call(n);
      };
    case 1:
      return function (e) {
        return t.call(n, e);
      };
    case 2:
      return function (e, r) {
        return t.call(n, e, r);
      };
    case 3:
      return function (e, r, o) {
        return t.call(n, e, r, o);
      };
  }
  return function () {
    return t.apply(n, arguments);
  };
};