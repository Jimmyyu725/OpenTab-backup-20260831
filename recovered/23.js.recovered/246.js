(function () {
  "use strict";

  var t;
  t = new RegExp(/(?!xmlns)^.*:/);
  exports.normalize = function (t) {
    return t.toLowerCase();
  };
  exports.firstCharLowerCase = function (t) {
    return t.charAt(0).toLowerCase() + t.slice(1);
  };
  exports.stripPrefix = function (e) {
    return e.replace(t, "");
  };
  exports.parseNumbers = function (t) {
    if (!isNaN(t)) {
      t = t % 1 == 0 ? parseInt(t, 10) : parseFloat(t);
    }
    return t;
  };
  exports.parseBooleans = function (t) {
    if (/^(?:true|false)$/i.test(t)) {
      t = t.toLowerCase() === "true";
    }
    return t;
  };
}).call(this);