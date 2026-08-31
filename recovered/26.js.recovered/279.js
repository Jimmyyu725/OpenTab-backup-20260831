var r = require("./17.js");
var o = require("./63.js");
var i = r("iterator");
var s = Array.prototype;
module.exports = function (t) {
  return t !== undefined && (o.Array === t || s[i] === t);
};