var r = require("./8.js");
var i = require("./70.js");
var o = r("iterator");
var s = Array.prototype;
module.exports = function (t) {
  return t !== undefined && (i.Array === t || s[o] === t);
};