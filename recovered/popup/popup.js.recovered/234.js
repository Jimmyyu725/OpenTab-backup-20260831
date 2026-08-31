(function () {
  module.exports = function () {
    function t() {}
    t.prototype.hasFeature = function (t, e) {
      return true;
    };
    t.prototype.createDocumentType = function (t, e, n) {
      throw new Error("This DOM method is not implemented.");
    };
    t.prototype.createDocument = function (t, e, n) {
      throw new Error("This DOM method is not implemented.");
    };
    t.prototype.createHTMLDocument = function (t) {
      throw new Error("This DOM method is not implemented.");
    };
    t.prototype.getFeature = function (t, e) {
      throw new Error("This DOM method is not implemented.");
    };
    return t;
  }();
}).call(this);