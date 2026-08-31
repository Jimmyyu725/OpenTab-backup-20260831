(function () {
  var e;
  var r;
  var o = {}.hasOwnProperty;
  e = require("./15.js");
  r = require("./154.js");
  module.exports = function (t) {
    function n(t, r) {
      n.__super__.constructor.call(this, t);
      if (r == null) {
        throw new Error("Missing element text. " + this.debugInfo());
      }
      this.name = "#text";
      this.type = e.Text;
      this.value = this.stringify.text(r);
    }
    (function (t, e) {
      for (var n in e) {
        if (o.call(e, n)) {
          t[n] = e[n];
        }
      }
      function r() {
        this.constructor = t;
      }
      r.prototype = e.prototype;
      t.prototype = new r();
      t.__super__ = e.prototype;
    })(n, t);
    Object.defineProperty(n.prototype, "isElementContentWhitespace", {
      get: function () {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    Object.defineProperty(n.prototype, "wholeText", {
      get: function () {
        var t;
        var e;
        var n;
        n = "";
        e = this.previousSibling;
        while (e) {
          n = e.data + n;
          e = e.previousSibling;
        }
        n += this.data;
        t = this.nextSibling;
        while (t) {
          n += t.data;
          t = t.nextSibling;
        }
        return n;
      }
    });
    n.prototype.clone = function () {
      return Object.create(this);
    };
    n.prototype.toString = function (t) {
      return this.options.writer.text(this, this.options.writer.filterOptions(t));
    };
    n.prototype.splitText = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.replaceWholeText = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    return n;
  }(r);
}).call(this);