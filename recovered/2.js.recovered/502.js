var n = require("./503.js");
var o = require("./385.js");
var c = require("./405.js");
module.exports = function () {
  this.size = 0;
  this.__data__ = {
    hash: new n(),
    map: new (c || o)(),
    string: new n()
  };
};