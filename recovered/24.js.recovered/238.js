(function () {
  function e(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var n = {}.hasOwnProperty;
  module.exports = function () {
    function t(t) {
      var r;
      var o;
      var i;
      this.assertLegalName = e(this.assertLegalName, this);
      this.assertLegalChar = e(this.assertLegalChar, this);
      t ||= {};
      this.options = t;
      this.options.version ||= "1.0";
      for (r in o = t.stringify || {}) {
        if (n.call(o, r)) {
          i = o[r];
          this[r] = i;
        }
      }
    }
    t.prototype.name = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalName("" + t || "");
      }
    };
    t.prototype.text = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalChar(this.textEscape("" + t || ""));
      }
    };
    t.prototype.cdata = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        t = (t = "" + t || "").replace("]]>", "]]]]><![CDATA[>");
        return this.assertLegalChar(t);
      }
    };
    t.prototype.comment = function (t) {
      if (this.options.noValidation) {
        return t;
      }
      if ((t = "" + t || "").match(/--/)) {
        throw new Error("Comment text cannot contain double-hypen: " + t);
      }
      return this.assertLegalChar(t);
    };
    t.prototype.raw = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return "" + t || "";
      }
    };
    t.prototype.attValue = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalChar(this.attEscape(t = "" + t || ""));
      }
    };
    t.prototype.insTarget = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalChar("" + t || "");
      }
    };
    t.prototype.insValue = function (t) {
      if (this.options.noValidation) {
        return t;
      }
      if ((t = "" + t || "").match(/\?>/)) {
        throw new Error("Invalid processing instruction value: " + t);
      }
      return this.assertLegalChar(t);
    };
    t.prototype.xmlVersion = function (t) {
      if (this.options.noValidation) {
        return t;
      }
      if (!(t = "" + t || "").match(/1\.[0-9]+/)) {
        throw new Error("Invalid version number: " + t);
      }
      return t;
    };
    t.prototype.xmlEncoding = function (t) {
      if (this.options.noValidation) {
        return t;
      }
      if (!(t = "" + t || "").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
        throw new Error("Invalid encoding: " + t);
      }
      return this.assertLegalChar(t);
    };
    t.prototype.xmlStandalone = function (t) {
      if (this.options.noValidation) {
        return t;
      } else if (t) {
        return "yes";
      } else {
        return "no";
      }
    };
    t.prototype.dtdPubID = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalChar("" + t || "");
      }
    };
    t.prototype.dtdSysID = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalChar("" + t || "");
      }
    };
    t.prototype.dtdElementValue = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalChar("" + t || "");
      }
    };
    t.prototype.dtdAttType = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalChar("" + t || "");
      }
    };
    t.prototype.dtdAttDefault = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalChar("" + t || "");
      }
    };
    t.prototype.dtdEntityValue = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalChar("" + t || "");
      }
    };
    t.prototype.dtdNData = function (t) {
      if (this.options.noValidation) {
        return t;
      } else {
        return this.assertLegalChar("" + t || "");
      }
    };
    t.prototype.convertAttKey = "@";
    t.prototype.convertPIKey = "?";
    t.prototype.convertTextKey = "#text";
    t.prototype.convertCDataKey = "#cdata";
    t.prototype.convertCommentKey = "#comment";
    t.prototype.convertRawKey = "#raw";
    t.prototype.assertLegalChar = function (t) {
      var e;
      var n;
      if (this.options.noValidation) {
        return t;
      }
      e = "";
      if (this.options.version === "1.0") {
        e = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
        if (n = t.match(e)) {
          throw new Error("Invalid character in string: " + t + " at index " + n.index);
        }
      } else if (this.options.version === "1.1" && (e = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, n = t.match(e))) {
        throw new Error("Invalid character in string: " + t + " at index " + n.index);
      }
      return t;
    };
    t.prototype.assertLegalName = function (t) {
      var e;
      if (this.options.noValidation) {
        return t;
      }
      this.assertLegalChar(t);
      e = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
      if (!t.match(e)) {
        throw new Error("Invalid character in name");
      }
      return t;
    };
    t.prototype.textEscape = function (t) {
      var e;
      if (this.options.noValidation) {
        return t;
      } else {
        e = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return t.replace(e, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
      }
    };
    t.prototype.attEscape = function (t) {
      var e;
      if (this.options.noValidation) {
        return t;
      } else {
        e = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return t.replace(e, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
      }
    };
    return t;
  }();
}).call(this);