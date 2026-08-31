var i = require("./2334.js");
var s = require("./1010.js");
var r = require("./4351.js");
var a = require("./8064.js");
var o = i.TypeError;
module.exports = function (e, t) {
  var n;
  var i;
  if (t === "string" && r(n = e.toString) && !a(i = s(n, e))) {
    return i;
  }
  if (r(n = e.valueOf) && !a(i = s(n, e))) {
    return i;
  }
  if (t !== "string" && r(n = e.toString) && !a(i = s(n, e))) {
    return i;
  }
  throw o("Can't convert object to primitive value");
};