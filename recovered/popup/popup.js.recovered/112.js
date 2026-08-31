var r = require("./4.js");
var i = require("./41.js");
var o = r.WeakMap;
module.exports = typeof o == "function" && /native code/.test(i(o));