(function () {
  var e;
  var r = {}.hasOwnProperty;
  e = require("./35.js");
  module.exports = function (t) {
    function e(t) {
      e.__super__.constructor.call(this, t);
      this.value = "";
    }
    (function (t, e) {
      for (var n in e) {
        if (r.call(e, n)) {
          t[n] = e[n];
        }
      }
      function o() {
        this.constructor = t;
      }
      o.prototype = e.prototype;
      t.prototype = new o();
      t.__super__ = e.prototype;
    })(e, t);
    Object.defineProperty(e.prototype, "data", {
      get: function () {
        return this.value;
      },
      set: function (t) {
        return this.value = t || "";
      }
    });
    Object.defineProperty(e.prototype, "length", {
      get: function () {
        return this.value.length;
      }
    });
    Object.defineProperty(e.prototype, "textContent", {
      get: function () {
        return this.value;
      },
      set: function (t) {
        return this.value = t || "";
      }
    });
    e.prototype.clone = function () {
      return Object.create(this);
    };
    e.prototype.substringData = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    e.prototype.appendData = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    e.prototype.insertData = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    e.prototype.deleteData = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    e.prototype.replaceData = function (t, e, n) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    e.prototype.isEqualNode = function (t) {
      return !!e.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.data === this.data;
    };
    return e;
  }(e);
}).call(this);