var n = require(/*webcrack:missing*/"./4319.js");
var o = typeof exports == "object" && exports && !exports.nodeType && exports;
var a = o && typeof module == "object" && module && !module.nodeType && module;
var i = a && a.exports === o && n.Z.process;
export const Z = function () {
  try {
    var e = a && a.require && a.require("util").types;
    return e || i && i.binding && i.binding("util");
  } catch (e) {}
}();