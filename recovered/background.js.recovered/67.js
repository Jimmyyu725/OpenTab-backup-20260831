var r = require("./12.js");
module.exports = function (t, e) {
  if (!r(t)) {
    return t;
  }
  var n;
  var o;
  if (e && typeof (n = t.toString) == "function" && !r(o = n.call(t))) {
    return o;
  }
  if (typeof (n = t.valueOf) == "function" && !r(o = n.call(t))) {
    return o;
  }
  if (!e && typeof (n = t.toString) == "function" && !r(o = n.call(t))) {
    return o;
  }
  throw TypeError("Can't convert object to primitive value");
};