var n = require(/*webcrack:missing*/"./6247.js");
const o = function () {
  return false;
};
var a = typeof exports == "object" && exports && !exports.nodeType && exports;
var i = a && typeof module == "object" && module && !module.nodeType && module;
var c = i && i.exports === a ? n.Z.Buffer : undefined;
export const Z = (c ? c.isBuffer : undefined) || o;