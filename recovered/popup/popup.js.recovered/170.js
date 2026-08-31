(function () {
  module.exports = function () {
    function t(t) {
      this.nodes = t;
    }
    Object.defineProperty(t.prototype, "length", {
      get: function () {
        return Object.keys(this.nodes).length || 0;
      }
    });
    t.prototype.clone = function () {
      return this.nodes = null;
    };
    t.prototype.getNamedItem = function (t) {
      return this.nodes[t];
    };
    t.prototype.setNamedItem = function (t) {
      var e;
      e = this.nodes[t.nodeName];
      this.nodes[t.nodeName] = t;
      return e || null;
    };
    t.prototype.removeNamedItem = function (t) {
      var e;
      e = this.nodes[t];
      delete this.nodes[t];
      return e || null;
    };
    t.prototype.item = function (t) {
      return this.nodes[Object.keys(this.nodes)[t]] || null;
    };
    t.prototype.getNamedItemNS = function (t, e) {
      throw new Error("This DOM method is not implemented.");
    };
    t.prototype.setNamedItemNS = function (t) {
      throw new Error("This DOM method is not implemented.");
    };
    t.prototype.removeNamedItemNS = function (t, e) {
      throw new Error("This DOM method is not implemented.");
    };
    return t;
  }();
}).call(this);