var n = require("./6559.js");
export function e(e) {
  return function (t) {
    if (function (e) {
      return (0, n.m)(e == null ? undefined : e.lift);
    }(t)) {
      return t.lift(function (t) {
        try {
          return e(t, this);
        } catch (e) {
          this.error(e);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}