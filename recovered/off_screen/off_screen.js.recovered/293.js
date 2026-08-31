var r = require("./14.js");
var o = require("./201.js");
var i = r.WeakMap;
module.exports = typeof i == "function" && /native code/.test(o(i));