var r = require("./407.js");
var o = require("./75.js");
var i = require("./143.js");
module.exports = function () {
  this.size = 0;
  this.__data__ = {
    hash: new r(),
    map: new (i || o)(),
    string: new r()
  };
};