if (typeof Object.create == "function") {
  module.exports = function (t, e) {
    if (e) {
      t.super_ = e;
      t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  module.exports = function (t, e) {
    if (e) {
      t.super_ = e;
      function n() {}
      n.prototype = e.prototype;
      t.prototype = new n();
      t.prototype.constructor = t;
    }
  };
}