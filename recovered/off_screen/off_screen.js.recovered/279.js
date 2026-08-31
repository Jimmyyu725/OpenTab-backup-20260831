var r = require("./17.js");
var o = require("./63.js");
var i = r("iterator");
var c = Array.prototype;
module.exports = function (t) {
  return t !== undefined && (o.Array === t || c[i] === t);
};