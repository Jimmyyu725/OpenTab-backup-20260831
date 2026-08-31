var r = require("./5.js");
var o = require("./94.js");
var i = r.WeakMap;
module.exports = typeof i == "function" && /native code/.test(o(i));