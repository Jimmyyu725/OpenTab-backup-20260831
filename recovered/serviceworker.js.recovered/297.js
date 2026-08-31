var r = require("./118.js");
var o = require("./119.js");
module.exports = r ? {}.toString : function () {
  return "[object " + o(this) + "]";
};