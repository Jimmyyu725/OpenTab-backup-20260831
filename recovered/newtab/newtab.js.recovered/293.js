var r = require("./14.js");
var i = require("./201.js");
var o = r.WeakMap;
module.exports = typeof o == "function" && /native code/.test(i(o));