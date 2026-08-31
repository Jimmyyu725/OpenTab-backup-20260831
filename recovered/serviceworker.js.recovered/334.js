var r = require("./9.js");
var o = require("./45.js");
var i = r("iterator");
var s = Array.prototype;
module.exports = function (t) {
  return t !== undefined && (o.Array === t || s[i] === t);
};