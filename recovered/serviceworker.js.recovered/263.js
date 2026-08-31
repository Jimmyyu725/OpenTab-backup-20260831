var r = require("./11.js");
var o = require("./162.js");
var i = r("iterator");
var s = Array.prototype;
module.exports = function (t) {
  return t !== undefined && (o.Array === t || s[i] === t);
};