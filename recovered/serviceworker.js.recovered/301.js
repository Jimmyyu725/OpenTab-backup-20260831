var r = require("./7.js");
var o = require("./187.js");
var i = r.WeakMap;
module.exports = typeof i == "function" && /native code/.test(o(i));