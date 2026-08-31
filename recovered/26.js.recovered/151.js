var r = require("./312.js");
var o = typeof self == "object" && self && self.Object === Object && self;
var i = r || o || Function("return this")();
module.exports = i;