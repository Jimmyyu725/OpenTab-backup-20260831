var r = require("./45.js");
module.exports = function (t, n) {
  if (!r(t)) {
    return t;
  }
  var e;
  var o;
  if (n && typeof (e = t.toString) == "function" && !r(o = e.call(t))) {
    return o;
  }
  if (typeof (e = t.valueOf) == "function" && !r(o = e.call(t))) {
    return o;
  }
  if (!n && typeof (e = t.toString) == "function" && !r(o = e.call(t))) {
    return o;
  }
  throw TypeError("Can't convert object to primitive value");
};