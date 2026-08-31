var t = require("./408.js")(module);
var n = require(/*webcrack:missing*/"./312.js");
var o = exports && !exports.nodeType && exports;
var c = o && typeof t == "object" && t && !t.nodeType && t;
var i = c && c.exports === o && n.process;
var a = function () {
  try {
    var t = c && c.require && c.require("util").types;
    return t || i && i.binding && i.binding("util");
  } catch (t) {}
}();
t.exports = a;