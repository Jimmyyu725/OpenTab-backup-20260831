var t = require("./408.js")(module);
var r = require("./312.js");
var i = exports && !exports.nodeType && exports;
var o = i && typeof t == "object" && t && !t.nodeType && t;
var s = o && o.exports === i && r.process;
var a = function () {
  try {
    var t = o && o.require && o.require("util").types;
    return t || s && s.binding && s.binding("util");
  } catch (t) {}
}();
t.exports = a;