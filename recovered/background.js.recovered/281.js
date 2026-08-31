var r = require("./147.js");
var o = require("./63.js");
var i = require("./17.js")("iterator");
module.exports = function (t) {
  if (t != null) {
    return t[i] || t["@@iterator"] || o[r(t)];
  }
};