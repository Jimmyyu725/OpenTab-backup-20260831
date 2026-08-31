var r = require("./4.js");
var o = require("./41.js");
var i = r.WeakMap;
module.exports = typeof i == "function" && /native code/.test(o(i));