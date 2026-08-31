(function () {
  var e;
  var r;
  var i = {}.hasOwnProperty;
  e = require("./15.js");
  r = require("./154.js");
  module.exports = function (t) {
    function n(t, r, i) {
      n.__super__.constructor.call(this, t);
      if (r == null) {
        throw new Error("Missing instruction target. " + this.debugInfo());
      }
      this.type = e.ProcessingInstruction;
      this.target = this.stringify.insTarget(r);
      this.name = this.target;
      if (i) {
        this.value = this.stringify.insValue(i);
      }
    }
    (function (t, e) {
      for (var n in e) {
        if (i.call(e, n)) {
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
    n.prototype.clone = function () {
      return Object.create(this);
    };
    n.prototype.toString = function (t) {
      return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(t));
    };
    n.prototype.isEqualNode = function (t) {
      return !!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.target === this.target;
    };
    return n;
  }(r);
}).call(this);