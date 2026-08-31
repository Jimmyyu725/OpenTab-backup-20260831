var r = require("./8.js");
var o = require("./70.js");
var i = r("iterator");
var c = Array.prototype;
module.exports = function (t) {
  return t !== undefined && (o.Array === t || c[i] === t);
};