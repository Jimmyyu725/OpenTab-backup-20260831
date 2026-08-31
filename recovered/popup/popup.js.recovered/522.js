var r = require("./523.js");
var i = require("./409.js");
var o = require("./410.js");
var s = o && o.isTypedArray;
var a = s ? i(s) : r;
module.exports = a;