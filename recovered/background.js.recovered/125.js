var r = require("./8.js");
var o = require("./70.js");
var i = r("iterator");
var s = Array.prototype;
module.exports = function (t) {
  return t !== undefined && (o.Array === t || s[i] === t);
};