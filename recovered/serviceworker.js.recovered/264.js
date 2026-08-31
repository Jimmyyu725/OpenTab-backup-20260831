var r = require("./164.js");
var o = require("./162.js");
var i = require("./11.js")("iterator");
module.exports = function (t) {
  if (t != null) {
    return t[i] || t["@@iterator"] || o[r(t)];
  }
};