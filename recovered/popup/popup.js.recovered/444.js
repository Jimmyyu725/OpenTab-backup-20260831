var t = require("./408.js")(module);
var r = require("./151.js");
var i = require("./520.js");
var o = exports && !exports.nodeType && exports;
var s = o && typeof t == "object" && t && !t.nodeType && t;
var a = s && s.exports === o ? r.Buffer : undefined;
var c = (a ? a.isBuffer : undefined) || i;
t.exports = c;