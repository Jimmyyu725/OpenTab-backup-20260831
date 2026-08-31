var r = require("./312.js");
var i = typeof self == "object" && self && self.Object === Object && self;
var o = r || i || Function("return this")();
module.exports = o;