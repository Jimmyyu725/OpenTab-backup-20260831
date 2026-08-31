var r = require("./147.js");
var i = require("./63.js");
var o = require("./17.js")("iterator");
module.exports = function (t) {
  if (t != null) {
    return t[o] || t["@@iterator"] || i[r(t)];
  }
};