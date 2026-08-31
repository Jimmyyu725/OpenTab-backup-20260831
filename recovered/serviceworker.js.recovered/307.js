(function () {
  var e;
  var r;
  e = require("./308.js");
  r = require("./309.js");
  module.exports = function () {
    function t() {
      this.defaultParams = {
        "canonical-form": false,
        "cdata-sections": false,
        comments: false,
        "datatype-normalization": false,
        "element-content-whitespace": true,
        entities: true,
        "error-handler": new e(),
        infoset: true,
        "validate-if-schema": false,
        namespaces: true,
        "namespace-declarations": true,
        "normalize-characters": false,
        "schema-location": "",
        "schema-type": "",
        "split-cdata-sections": true,
        validate: false,
        "well-formed": true
      };
      this.params = Object.create(this.defaultParams);
    }
    Object.defineProperty(t.prototype, "parameterNames", {
      get: function () {
        return new r(Object.keys(this.defaultParams));
      }
    });
    t.prototype.getParameter = function (t) {
      if (this.params.hasOwnProperty(t)) {
        return this.params[t];
      } else {
        return null;
      }
    };
    t.prototype.canSetParameter = function (t, e) {
      return true;
    };
    t.prototype.setParameter = function (t, e) {
      if (e != null) {
        return this.params[t] = e;
      } else {
        return delete this.params[t];
      }
    };
    return t;
  }();
}).call(this);