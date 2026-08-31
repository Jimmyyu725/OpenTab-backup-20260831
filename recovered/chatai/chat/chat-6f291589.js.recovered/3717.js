var i = require("./2334.js");
var s = require("./8064.js");
var r = i.String;
var a = i.TypeError;
module.exports = function (e) {
  if (s(e)) {
    return e;
  }
  throw a(r(e) + " is not an object");
};