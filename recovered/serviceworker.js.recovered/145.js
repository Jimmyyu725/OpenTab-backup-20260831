var t = require("./146.js")(module);
var r = require("./17.js");
var o = require("./424.js");
var i = exports && !exports.nodeType && exports;
var s = i && typeof t == "object" && t && !t.nodeType && t;
var a = s && s.exports === i ? r.Buffer : undefined;
var c = (a ? a.isBuffer : undefined) || o;
t.exports = c;