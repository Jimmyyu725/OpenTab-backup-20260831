var t = require("./146.js")(module);
var r = require("./210.js");
var o = exports && !exports.nodeType && exports;
var i = o && typeof t == "object" && t && !t.nodeType && t;
var s = i && i.exports === o && r.process;
var a = function () {
  try {
    var t = i && i.require && i.require("util").types;
    return t || s && s.binding && s.binding("util");
  } catch (t) {}
}();
t.exports = a;