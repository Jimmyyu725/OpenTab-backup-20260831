var r = require("./503.js");
var i = require("./385.js");
var o = require("./405.js");
module.exports = function () {
  this.size = 0;
  this.__data__ = {
    hash: new r(),
    map: new (o || i)(),
    string: new r()
  };
};