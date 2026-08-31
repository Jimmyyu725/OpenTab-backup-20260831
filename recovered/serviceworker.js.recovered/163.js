var r = require("./49.js");
module.exports = function (t, e, n) {
  r(t);
  if (e === undefined) {
    return t;
  }
  switch (n) {
    case 0:
      return function () {
        return t.call(e);
      };
    case 1:
      return function (n) {
        return t.call(e, n);
      };
    case 2:
      return function (n, r) {
        return t.call(e, n, r);
      };
    case 3:
      return function (n, r, o) {
        return t.call(e, n, r, o);
      };
  }
  return function () {
    return t.apply(e, arguments);
  };
};