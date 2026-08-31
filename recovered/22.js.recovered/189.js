var r = require("./45.js");
module.exports = function (t, e) {
  if (!r(t)) {
    return t;
  }
  var n;
  var i;
  if (e && typeof (n = t.toString) == "function" && !r(i = n.call(t))) {
    return i;
  }
  if (typeof (n = t.valueOf) == "function" && !r(i = n.call(t))) {
    return i;
  }
  if (!e && typeof (n = t.toString) == "function" && !r(i = n.call(t))) {
    return i;
  }
  throw TypeError("Can't convert object to primitive value");
};